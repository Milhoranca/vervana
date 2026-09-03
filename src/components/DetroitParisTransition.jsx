import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../context/I18nContext';

const SLIDES = [
  {
    id: 1,
    title: 'THE MONOLITH',
    subtitle: 'Precision Engineering Base',
    image: '/brand/vervana_mountain_monolith.jpg',
    tag: 'LATAM // 01'
  },
  {
    id: 2,
    title: 'SYNTHESIS',
    subtitle: 'High-Growth Startup Hub',
    image: '/brand/vervana_3d_monolith.jpg',
    tag: 'SAN FRANCISCO // 02'
  },
  {
    id: 3,
    title: 'LUMINESCENCE',
    subtitle: 'Direct Technical Evaluation',
    image: '/brand/vervana_dark_bloom_logo.jpg',
    tag: 'TALENT ENGINE // 03'
  },
  {
    id: 4,
    title: 'OPERATIONAL CRAFT',
    subtitle: 'Executive Hiring Workstation',
    image: '/brand/founder_interface_banner.jpg',
    tag: 'WORKSPACE // 04'
  },
  {
    id: 5,
    title: 'CONVERGENCE',
    subtitle: 'Top 1% Engineering Vectors',
    image: '/brand/vervana_3d_logo.jpg',
    tag: 'ARCHITECTURE // 05'
  }
];

export const DetroitParisTransition = () => {
  const { locale } = useI18n();
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const animationFrameRef = useRef(null);

  // State for continuous momentum slider
  const stateRef = useRef({
    currentX: 0,
    targetX: 0,
    isDragging: false,
    startX: 0,
    dragStartTarget: 0,
    autoSpeed: 1.2
  });

  // Progress counter simulation on initial load
  useEffect(() => {
    let curr = 0;
    const interval = setInterval(() => {
      curr += Math.floor(Math.random() * 8) + 4;
      if (curr >= 100) {
        curr = 100;
        setProgress(100);
        clearInterval(interval);
      } else {
        setProgress(curr);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Infinite momentum animation loop (Detroit Paris signature physics)
  useEffect(() => {
    const handleWheel = (e) => {
      stateRef.current.targetX -= e.deltaY * 0.85 + e.deltaX * 0.85;
    };

    const handleMouseDown = (e) => {
      stateRef.current.isDragging = true;
      stateRef.current.startX = e.clientX;
      stateRef.current.dragStartTarget = stateRef.current.targetX;
    };

    const handleMouseMove = (e) => {
      if (!stateRef.current.isDragging) return;
      const dx = e.clientX - stateRef.current.startX;
      stateRef.current.targetX = stateRef.current.dragStartTarget + dx * 1.6;
    };

    const handleMouseUp = () => {
      stateRef.current.isDragging = false;
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 0) return;
      stateRef.current.isDragging = true;
      stateRef.current.startX = e.touches[0].clientX;
      stateRef.current.dragStartTarget = stateRef.current.targetX;
    };

    const handleTouchMove = (e) => {
      if (!stateRef.current.isDragging || e.touches.length === 0) return;
      const dx = e.touches[0].clientX - stateRef.current.startX;
      stateRef.current.targetX = stateRef.current.dragStartTarget + dx * 1.6;
    };

    const handleTouchEnd = () => {
      stateRef.current.isDragging = false;
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('wheel', handleWheel, { passive: true });
      el.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      el.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleTouchEnd);
    }

    // Animation Loop
    const loop = () => {
      const state = stateRef.current;
      
      // Ambient continuous drift when not dragging
      if (!state.isDragging) {
        state.targetX -= state.autoSpeed;
      }

      // Smooth interpolation (lerp)
      state.currentX += (state.targetX - state.currentX) * 0.085;

      const track = trackRef.current;
      if (track) {
        const cards = track.children;
        const totalCards = cards.length;
        const cardWidth = 320; // base card width + gap
        const totalWidth = totalCards * cardWidth;

        // Wrap around for infinite loop
        if (state.currentX < -totalWidth / 2) {
          state.currentX += totalWidth / 2;
          state.targetX += totalWidth / 2;
        } else if (state.currentX > 0) {
          state.currentX -= totalWidth / 2;
          state.targetX -= totalWidth / 2;
        }

        track.style.transform = `translate3d(${state.currentX}px, 0, 0)`;

        // Calculate magnetic center growth for each slide (Detroit Paris effect)
        const viewportCenter = window.innerWidth / 2;
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const distFromCenter = Math.abs(viewportCenter - cardCenter);
          const maxDist = window.innerWidth * 0.6;
          
          // Normalized scale: 1.25 at center, 0.85 at edges
          const factor = Math.max(0, 1 - distFromCenter / maxDist);
          const scale = 0.88 + factor * 0.28;
          const imgScale = 1.35 - factor * 0.2;
          const opacity = 0.45 + factor * 0.55;

          card.style.transform = `scale(${scale})`;
          card.style.opacity = opacity;

          const img = card.querySelector('.detroit-slide-img');
          if (img) {
            img.style.transform = `scale(${imgScale})`;
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (el) {
        el.removeEventListener('wheel', handleWheel);
        el.removeEventListener('mousedown', handleMouseDown);
        el.removeEventListener('touchstart', handleTouchStart);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const handleEnter = () => {
    setIsDone(true);
    setTimeout(() => {
      setIsRemoved(true);
    }, 950);
  };

  if (isRemoved) return null;

  // Duplicate slides array to ensure seamless infinite looping
  const infiniteSlides = [...SLIDES, ...SLIDES, ...SLIDES];

  return (
    <div 
      className={`detroit-preloader-root ${isDone ? 'detroit-exit' : ''}`}
      ref={containerRef}
      aria-hidden="true"
    >
      {/* Top Editorial Header */}
      <div className="detroit-header-bar">
        <div className="detroit-header-left">
          <span className="detroit-live-dot" />
          <span className="detroit-mono-title">VERVANA™ / LATAM TO US</span>
        </div>
        
        <div className="detroit-header-center">
          <span className="detroit-hint-tag">
            {locale === 'pt' ? 'ARRASTE OU ROLE PARA NAVEGAR' : 'DRAG OR SCROLL TO EXPLORE'}
          </span>
        </div>

        <div className="detroit-header-right">
          <span className="detroit-mono-progress">
            {progress < 100 ? `SYSTEM LOADING ${progress}%` : 'SYSTEM 100% READY'}
          </span>
        </div>
      </div>

      {/* Center Dynamic Growth Slider Track (Detroit Paris) */}
      <div className="detroit-slider-stage">
        <div className="detroit-slider-track" ref={trackRef}>
          {infiniteSlides.map((slide, idx) => (
            <div 
              key={`${slide.id}-${idx}`} 
              className="detroit-slide-card"
              onClick={handleEnter}
            >
              <div className="detroit-slide-media">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="detroit-slide-img" 
                />
                <div className="detroit-slide-overlay" />
              </div>
              
              <div className="detroit-slide-caption">
                <span className="detroit-slide-tag">{slide.tag}</span>
                <h3 className="detroit-slide-title">{slide.title}</h3>
                <p className="detroit-slide-desc">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Editorial Footer & Enter Trigger */}
      <div className="detroit-footer-bar">
        <div className="detroit-footer-left">
          <span className="detroit-mono-sub">
            {locale === 'pt' ? 'Curadoria de Engenheiros de Elite' : 'Curated Top 1% Engineering'}
          </span>
        </div>

        <div className="detroit-footer-center">
          <button 
            type="button" 
            className="detroit-enter-btn"
            onClick={handleEnter}
          >
            <span>{locale === 'pt' ? 'ENTRAR NO SITE' : 'ENTER VERVANA'}</span>
            <span className="detroit-enter-arrow">➔</span>
          </button>
        </div>

        <div className="detroit-footer-right">
          <span className="detroit-mono-edition">EDITION 2026</span>
        </div>
      </div>
    </div>
  );
};

export default DetroitParisTransition;
