import React, { useEffect, useRef, useState } from 'react';
import { useI18n } from '../context/I18nContext';

export const VervanaPerpetualSlider = () => {
  const { locale } = useI18n();
  const sliderRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const config = {
      totalSlides: 10,
      lerp: 0.075,
      scrollSpeed: 3.5,
      minSize: 0.1,
      growth: 0.25,
      aspect: 1 / 1.25,
      baseline: 0.0,
    };

    const slider = sliderRef.current;
    if (!slider) return;

    const growthRatio = Math.exp(config.growth);
    const slideCount = Math.ceil(Math.log(1 + (growthRatio - 1) / config.minSize) / config.growth) + 4;

    const edgeX = (position, width) =>
      (width * config.minSize * (Math.pow(growthRatio, position) - 1)) / (growthRatio - 1);

    const wrap = (value, max) => ((value % max) + max) % max;

    const slides = [];
    const slideStreamIndex = [];

    // Create slide elements dynamically
    for (let i = 0; i < slideCount; i++) {
      const slide = document.createElement("div");
      slide.className = "detroit-perpetual-slide";
      const img = document.createElement("img");
      slide.appendChild(img);
      slider.appendChild(slide);

      slides.push(slide);
      slideStreamIndex.push(i);
    }

    function setSlideImage(slide, imageNumber) {
      if (slide.dataset.image === String(imageNumber)) return;
      slide.dataset.image = imageNumber;
      slide.querySelector("img").src = `/slides/slide-img-${imageNumber}.jpg`;
    }

    let scroll = 0;
    let scrollTarget = 0;

    // Continuous auto-drift
    let isInteracting = false;

    const onWheel = (e) => {
      scrollTarget += (e.deltaY + e.deltaX) * config.scrollSpeed * 0.0014;
    };

    let lastTouchX = null;
    const onTouchStart = (e) => {
      isInteracting = true;
      lastTouchX = e.touches[0].clientX;
    };

    const onTouchMove = (e) => {
      if (lastTouchX === null) return;
      const x = e.touches[0].clientX;
      scrollTarget += (lastTouchX - x) * config.scrollSpeed * 0.004;
      lastTouchX = x;
    };

    const onTouchEnd = () => {
      isInteracting = false;
      lastTouchX = null;
    };

    let lastPointerX = null;
    const onPointerDown = (e) => {
      isInteracting = true;
      lastPointerX = e.clientX;
      slider.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (lastPointerX === null) return;
      scrollTarget += (lastPointerX - e.clientX) * config.scrollSpeed * -0.005;
      lastPointerX = e.clientX;
    };

    const onPointerUp = () => {
      isInteracting = false;
      lastPointerX = null;
    };

    slider.addEventListener("wheel", onWheel, { passive: true });
    slider.addEventListener("touchstart", onTouchStart, { passive: true });
    slider.addEventListener("touchmove", onTouchMove, { passive: true });
    slider.addEventListener("touchend", onTouchEnd);
    slider.addEventListener("pointerdown", onPointerDown);
    slider.addEventListener("pointermove", onPointerMove);
    slider.addEventListener("pointerup", onPointerUp);
    slider.addEventListener("pointercancel", onPointerUp);

    // Progress increment timer
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 3;
        return next > 100 ? 100 : next;
      });
    }, 45);

    function render() {
      // Gentle auto motion when idle
      if (!isInteracting) {
        scrollTarget += 0.012;
      }

      scroll += (scrollTarget - scroll) * config.lerp;

      const sliderWidth = slider.clientWidth;
      const sliderHeight = slider.clientHeight;
      const baselineOffset = sliderHeight * config.baseline;

      for (let i = 0; i < slideCount; i++) {
        const slide = slides[i];
        let streamIndex = slideStreamIndex[i];

        while (edgeX(streamIndex + scroll, sliderWidth) > sliderWidth)
          streamIndex -= slideCount;
        while (edgeX(streamIndex + scroll + 1, sliderWidth) < 0)
          streamIndex += slideCount;
        slideStreamIndex[i] = streamIndex;

        const left = Math.round(edgeX(streamIndex + scroll, sliderWidth));
        const right = Math.round(edgeX(streamIndex + scroll + 1, sliderWidth));
        const width = right - left;
        const height = width / config.aspect;

        setSlideImage(slide, wrap(streamIndex, config.totalSlides) + 1);

        slide.style.width = `${width}px`;
        slide.style.height = `${height}px`;
        slide.style.zIndex = Math.round(right);
        slide.style.transform = `translate(${left}px, ${-baselineOffset}px)`;
      }

      animationFrameRef.current = requestAnimationFrame(render);
    }

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      clearInterval(progressTimer);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      slider.removeEventListener("wheel", onWheel);
      slider.removeEventListener("touchstart", onTouchStart);
      slider.removeEventListener("touchmove", onTouchMove);
      slider.removeEventListener("touchend", onTouchEnd);
      slider.removeEventListener("pointerdown", onPointerDown);
      slider.removeEventListener("pointermove", onPointerMove);
      slider.removeEventListener("pointerup", onPointerUp);
      slider.removeEventListener("pointercancel", onPointerUp);
      slides.forEach((s) => s.remove());
    };
  }, []);

  const handleEnterSite = () => {
    setIsDone(true);
    setTimeout(() => {
      setIsRemoved(true);
    }, 950);
  };

  if (isRemoved) return null;

  return (
    <div 
      className={`detroit-perpetual-container ${isDone ? 'detroit-slide-exit' : ''}`}
      aria-hidden="true"
    >
      <section className="detroit-perpetual-slider" ref={sliderRef}>
        {/* Top Header / Brand Stamp */}
        <div className="detroit-perpetual-header">
          <div className="detroit-header-tagline">
            <span className="detroit-status-dot" />
            <span className="detroit-mono-text">VERVANA™ / SYSTEM 2026</span>
          </div>
          
          <h1 className="detroit-main-headline">
            {locale === 'pt' ? 'Movimento Perpétuo' : 'Perpetual Motion'}
          </h1>

          <div className="detroit-progress-wrap">
            <span className="detroit-progress-counter">{progress}%</span>
          </div>
        </div>

        {/* Floating Action Trigger Button */}
        <div className="detroit-action-anchor">
          <button 
            type="button" 
            className="detroit-enter-action-btn"
            onClick={handleEnterSite}
          >
            <span>{locale === 'pt' ? 'ENTRAR NO SITE' : 'ENTER VERVANA'}</span>
            <span className="detroit-arrow-symbol">➔</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default VervanaPerpetualSlider;
