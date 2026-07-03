"use client";

import React from 'react';

const HERO_VIDEO_SRC =
  "https://res.cloudinary.com/dl3ulxgq4/video/upload/f_auto,q_auto/v1781267116/trverse-web-banner_latest_version_avtmpu.mp4";

const Hero = () => {
  const [loaded, setLoaded] = React.useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = React.useState(false);

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => setLoaded(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const enableVideo = () => setShouldLoadVideo(true);
    let timeoutId: number | undefined;
    let idleId: number | undefined;

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(enableVideo, { timeout: 2000 });
    } else {
      timeoutId = window.setTimeout(enableVideo, 1500);
    }

    return () => {
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  const reveal = (delay: string) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(24px)',
    transition: `all 0.7s ease ${delay}`,
  });

  return (
    <section className="home-hero-section">
      <style dangerouslySetInnerHTML={{ __html: `
        .home-hero-section {
          position: relative;
          z-index: 2;
          min-height: 88vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #040e1f;
          border-bottom-left-radius: 48px;
          border-bottom-right-radius: 48px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.05);
        }
        .home-hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100vw;
          height: 56.25vw;
          min-height: 100%;
          min-width: 177.77vh;
          transform: translate(-50%, -50%);
          pointer-events: none;
          border: none;
          object-fit: cover;
        }
        .home-hero-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
          width: 100%;
        }
        .home-hero-copy {
          max-width: 760px;
        }
        .home-hero-badge {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 20px;
          background: rgba(255,130,93,0.12);
          border: 1px solid rgba(255,130,93,0.25);
          margin-bottom: 28px;
        }
        .home-hero-badge span {
          color: var(--accent);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          font-family: var(--font-body);
          text-transform: uppercase;
        }
        .home-hero-title {
          font-family: var(--font-display);
          font-size: clamp(40px, 5vw, 68px);
          font-weight: 600;
          line-height: 1.08;
          color: #fff;
          margin: 0 0 24px;
        }
        .home-hero-title-accent {
          color: var(--accent);
        }
        .home-hero-desc {
          font-family: var(--font-body);
          font-size: 18px;
          line-height: 1.7;
          color: rgba(255,255,255,0.75);
          max-width: 640px;
          margin: 0 0 40px;
        }
        .home-hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .home-hero-decoration {
          position: absolute;
          z-index: 1;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .home-hero-section {
            min-height: auto;
            align-items: flex-start;
            padding: 132px 0 80px;
            border-bottom-left-radius: 32px;
            border-bottom-right-radius: 32px;
          }
          .home-hero-container {
            padding: 0 28px;
          }
          .home-hero-copy {
            max-width: 100%;
          }
          .home-hero-title {
            font-size: clamp(34px, 6.5vw, 52px);
            margin-bottom: 20px;
          }
          .home-hero-desc {
            font-size: 17px;
            max-width: 100%;
            margin-bottom: 32px;
          }
        }

        @media (max-width: 700px) {
          .home-hero-section {
            padding: 120px 0 64px;
            border-bottom-left-radius: 24px;
            border-bottom-right-radius: 24px;
          }
          .home-hero-container {
            padding: 0 20px;
          }
          .home-hero-badge {
            margin-bottom: 20px;
            padding: 5px 14px;
          }
          .home-hero-badge span {
            font-size: 11px;
            letter-spacing: 0.08em;
          }
          .home-hero-title {
            font-size: clamp(30px, 8.5vw, 40px);
            line-height: 1.12;
            margin-bottom: 16px;
          }
          .home-hero-desc {
            font-size: 15px;
            line-height: 1.65;
            margin-bottom: 28px;
          }
          .home-hero-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }
          .home-hero-actions .hero-btn-primary,
          .home-hero-actions .hero-btn-secondary {
            justify-content: center;
            width: 100%;
            box-sizing: border-box;
          }
          .home-hero-decoration {
            display: none;
          }
        }

        @media (max-width: 380px) {
          .home-hero-section {
            padding: 112px 0 56px;
          }
          .home-hero-title br {
            display: none;
          }
        }
      ` }} />

      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
        <video
          className="home-hero-video"
          autoPlay={shouldLoadVideo}
          muted
          loop
          playsInline
          preload="none"
          poster="/assets/about-hero-banner.webp"
          aria-hidden
        >
          {shouldLoadVideo ? (
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          ) : null}
        </video>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(4, 14, 31, 0.65)',
        }} />
      </div>

      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04, zIndex: 1,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      <svg className="home-hero-decoration" style={{ top: '10%', right: '8%', opacity: 0.08, animation: 'float 8s ease-in-out infinite' }} width="200" height="200" viewBox="0 0 200 200" aria-hidden>
        <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="var(--accent)" strokeWidth="1"/>
      </svg>
      <svg className="home-hero-decoration" style={{ bottom: '15%', left: '5%', opacity: 0.06, animation: 'float 10s ease-in-out infinite reverse' }} width="120" height="120" viewBox="0 0 120 120" aria-hidden>
        <rect x="10" y="10" width="100" height="100" fill="none" stroke="var(--accent)" strokeWidth="1" transform="rotate(45 60 60)"/>
      </svg>

      <div className="home-hero-decoration" style={{
        right: 0, top: '20%', width: 300, height: 300, opacity: 0.06,
        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }} aria-hidden />

      <div className="home-hero-container">
        <div className="home-hero-copy">
          <div className="home-hero-badge" style={reveal('0.2s')}>
            <span>Smart Mobility Platform</span>
          </div>

          <h1 className="home-hero-title" style={reveal('0.4s')}>
            One Platform <br />
            <span className="home-hero-title-accent">from fare to fleet.</span>
          </h1>

          <p className="home-hero-desc" style={reveal('0.6s')}>
            TRVERSE connects automated fare collection, intelligent transport systems, fleet management, and AI analytics into one award-winning platform, built for the operational demands of modern mass transit.
          </p>

          <div className="home-hero-actions" style={reveal('0.8s')}>
            <a href="/solutions" className="hero-btn-primary">Explore solutions</a>
            <a href="/get-a-demo" className="hero-btn-secondary">Get a demo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
