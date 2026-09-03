import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import { I18nProvider } from './context/I18nContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustAwards } from './components/TrustAwards';
import { StackedCardsSection } from './components/StackedCardsSection';
import { MethodologySection } from './components/MethodologySection';
import { DecisionWorkspaceSection } from './components/DecisionWorkspaceSection';
import { FounderSection } from './components/FounderSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { VervanaLogo3D } from './components/VervanaLogo3D';
import { VervanaPerpetualSlider } from './components/VervanaPerpetualSlider';

export default function App() {
  useEffect(() => {
    let lenis = null;
    let rfId = null;

    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      function raf(time) {
        if (lenis) lenis.raf(time);
        rfId = requestAnimationFrame(raf);
      }
      rfId = requestAnimationFrame(raf);
    } catch (e) {
      console.warn("Lenis init failed:", e);
    }

    return () => {
      if (rfId) cancelAnimationFrame(rfId);
      if (lenis) {
        try {
          lenis.destroy();
        } catch (e) {}
      }
    };
  }, []);

  return (
    <ThemeProvider>
      <I18nProvider>
        <VervanaPerpetualSlider />
        <div className="app">
          <Header />

          {/* Logo 3D em Camada Fixa com Scroll Responsivo */}
          <div className="hero-3d-glass-wrapper" aria-hidden="true">
            <VervanaLogo3D />
          </div>

          <main id="main">
            <Hero />
            <TrustAwards />
            <StackedCardsSection />
            <MethodologySection />
            <DecisionWorkspaceSection />
            <FounderSection />
            <CaseStudiesSection />
            <FinalCTASection />
          </main>

          {/* Rodapé Simples e Elegante */}
          <Footer />
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}
