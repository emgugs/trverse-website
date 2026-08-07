"use client";

import React from "react";

const SolutionsHero = () => {
  return (
    <section
      style={{
        position: "relative",
        background: "#0a1e3d",
        padding: "180px 48px 120px",
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        overflow: "hidden",
        borderBottomLeftRadius: 48,
        borderBottomRightRadius: 48,
        boxShadow: "0 12px 40px rgba(0,0,0,0.05)",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes heroPulse {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50% { opacity: 0.22; transform: scale(1.08); }
        }
        .sol-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(255,130,93,0.12);
          border: 1px solid rgba(255,130,93,0.25);
          border-radius: 100px;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }
      `}} />

      {/* Background video */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Background video"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw', /* 16:9 aspect ratio */
            minHeight: '100%',
            minWidth: '177.77vh', /* 100vh * 16/9 */
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            border: 'none',
            objectFit: 'cover',
          }}
        >
          <source
            src="/video/trverse-solution-page-web-banner.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay to ensure text readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(4, 14, 31, 0.75)' /* Semi-transparent dark overlay */
        }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
        zIndex: 1,
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2, width: '100%' }}>
        <div style={{ maxWidth: 780 }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.08,
              margin: "0 0 28px",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#fff" }}>Technology that powers transport better</span>
          </p>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 18,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.75,
            margin: "0 0 60px",
            maxWidth: 640,
          }}>
            Connected systems for fare collection, fleet operations, and passenger information.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/solutions#afc" className="hero-btn-primary">
              Explore solutions
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/get-a-demo" className="hero-btn-secondary">Get a demo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
