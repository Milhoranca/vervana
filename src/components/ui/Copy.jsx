import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Copy = ({ children, animateOnScroll = true, delay = 0, className = '', align = 'center' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    
    if (animateOnScroll) {
      const anim = gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true
          }
        }
      );
      return () => {
        if (anim.scrollTrigger) anim.scrollTrigger.kill();
        anim.kill();
      };
    } else {
      const anim = gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay: delay,
          ease: 'power3.out'
        }
      );
      return () => anim.kill();
    }
  }, [animateOnScroll, delay]);

  return (
    <div
      ref={containerRef}
      className={`copy-text-wrapper ${align === 'left' ? 'align-left' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Copy;
