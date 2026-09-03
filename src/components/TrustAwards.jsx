import React from 'react';
import { useI18n } from '../context/I18nContext';
import { Copy } from './ui/Copy';

export const TrustAwards = () => {
  const { t } = useI18n();

  // Set 1 de marcas usando os Arquivos Locais da pasta /public/logos/
  const row1Items = (
    <>
      <div className="brand-card" title="PlayStation">
        <img src="/logos/playstation.svg" alt="PlayStation" className="brand-logo-img" />
      </div>

      <div className="brand-card" title="Ubisoft">
        <img src="/logos/ubisoft.svg" alt="Ubisoft" className="brand-logo-img" />
      </div>

      <div className="brand-card" title="Nokia">
        <img src="/logos/nokia.svg" alt="Nokia" className="brand-logo-img" />
      </div>

      <div className="brand-card" title="Ryanair">
        <img src="/logos/ryanair.svg" alt="Ryanair" className="brand-logo-img" />
      </div>

      <div className="brand-card" title="SAP">
        <img src="/logos/sap.svg" alt="SAP" className="brand-logo-img" />
      </div>

      <div className="brand-card" title="Siemens">
        <img src="/logos/siemens.svg" alt="Siemens" className="brand-logo-img" />
      </div>

      <div className="brand-card" title="Mercedes-Benz">
        <img src="/logos/mercedes.svg" alt="Mercedes-Benz" className="brand-logo-img" />
      </div>

      <div className="brand-card" title="Spotify">
        <img src="/logos/spotify.svg" alt="Spotify" className="brand-logo-img" />
      </div>
    </>
  );

  // Set 2 de marcas usando os Arquivos Locais da pasta /public/logos/
  const row2Items = (
    <>
      <div className="brand-card" title="NVIDIA">
        <img src="/logos/nvidia.svg" alt="NVIDIA" className="brand-logo-img" />
      </div>

      <div className="brand-card" title="Amazon">
        <img src="/logos/amazon.svg" alt="Amazon" className="brand-logo-img" />
      </div>

      <div className="brand-card" title="Google">
        <img src="/logos/google.svg" alt="Google" className="brand-logo-img" />
      </div>

      <div className="brand-card" title="Apple">
        <img src="/logos/apple.svg" alt="Apple" className="brand-logo-img" />
      </div>

      <div className="brand-card" title="Meta">
        <img src="/logos/meta.svg" alt="Meta" className="brand-logo-img" />
      </div>

      <div className="brand-card" title="Tesla">
        <img src="/logos/tesla.svg" alt="Tesla" className="brand-logo-img" />
      </div>

      <div className="brand-card" title="Nike">
        <img src="/logos/nike.svg" alt="Nike" className="brand-logo-img" />
      </div>

      <div className="brand-card" title="Samsung">
        <img src="/logos/samsung.svg" alt="Samsung" className="brand-logo-img" />
      </div>
    </>
  );

  return (
    <section className="trust-section" id="proof">
      {/* Ticker / Marquee infinito de marcas */}
      <div className="trust-ticker-container">
        {/* Linha 1 (Marquee Infinito) */}
        <div className="ticker-track ticker-track-left">
          {row1Items}
          {row1Items}
          {row1Items}
          {row1Items}
        </div>

        {/* Linha 2 (Marquee Infinito) */}
        <div className="ticker-track ticker-track-right">
          {row2Items}
          {row2Items}
          {row2Items}
          {row2Items}
        </div>
      </div>

      {/* Grid de 2 Cards (Most of our growth... & 92% of our clients...) */}
      <div className="awards-grid">
        <div className="award-card">
          <Copy animateOnScroll={true}>
            <span className="award-label">
              <strong>Most of our growth</strong> has come through <strong>client referrals</strong>.
            </span>
          </Copy>
        </div>

        <div className="award-card">
          <Copy animateOnScroll={true}>
            <span className="award-label">
              <strong>92% of our clients</strong> come through <strong>referrals</strong>.
            </span>
          </Copy>
        </div>
      </div>

      {/* Texto "Trusted by ambitious technology teams" ABAIXO dos 2 Cards */}
      <Copy animateOnScroll={true}>
        <p className="trust-ticker-heading">Trusted by ambitious technology teams</p>
      </Copy>
    </section>
  );
};
