"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import PartnerMarquee from './PartnerMarquee';
import { caseStudies } from "@/data/caseStudies";

const impactColors = ['#134f89', '#0a1e3d', '#1a5c9e'] as const;

const Impact = () => {
  const homePriorityOrder = [
    "masar-makkah-electric-brt",
    "peshawar-brt",
    "islamabad-rawalpindi-metrobus",
  ];

  const projects = homePriorityOrder
    .map((slug) => caseStudies.find((item) => item.slug === slug))
    .filter((item): item is (typeof caseStudies)[number] => Boolean(item))
    .map((item, idx) => {
    const topStat = item.stats?.[0];
    return {
      name: item.title,
      location: item.location,
      image: item.heroImage,
      detail: item.summary,
      result: topStat ? `${topStat.value} ${topStat.label}` : item.benefits?.[0]?.title ?? item.summary,
      color: impactColors[idx % impactColors.length],
      slug: item.slug,
    };
  });

  return (
    <section id="impact" className="home-impact-section" style={{ background: '#f7f9fc', padding: '120px 48px', position: 'relative', overflow: 'hidden', borderTopLeftRadius: 48, borderTopRightRadius: 48 }}>
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 1024px) {
          .home-impact-section {
            padding: 96px 28px !important;
          }
          .home-impact-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 700px) {
          .home-impact-section {
            padding: 84px 20px !important;
            border-top-left-radius: 28px !important;
            border-top-right-radius: 28px !important;
          }
          .home-impact-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
        .impact-card {
          background: #fff;
          border-radius: 20px;
          border: 1px solid rgba(10, 30, 61, 0.06);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          height: 100%;
        }
        .impact-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 130, 93, 0.3);
          box-shadow: 0 20px 40px rgba(10, 30, 61, 0.1);
        }
        .impact-image-container {
          height: 240px;
          position: relative;
          overflow: hidden;
        }
        .impact-image {
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .impact-card:hover .impact-image {
          transform: scale(1.1) blur(2px);
        }
        .impact-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(10, 30, 61, 0.2) 0%, rgba(10, 30, 61, 0.8) 100%);
          transition: all 0.4s ease;
        }
        .impact-card:hover .impact-overlay {
          background: rgba(10, 30, 61, 0.85);
          backdrop-filter: blur(4px);
        }
        .result-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 32px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          z-index: 5;
        }
        .impact-card:hover .result-overlay {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16, display: 'block' }}>Real Impact</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 600, color: '#0a1e3d', margin: '0 0 20px' }}>Real Systems</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#5a6a7e', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Success stories from around the world.
          </p>
        </div>

        <div className="home-impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {projects.map((p) => (
            <Link key={p.slug} href={`/case-studies/${p.slug}`} style={{ textDecoration: 'none' }}>
              <div className="impact-card">
              <div className="impact-image-container">
                <Image
                  src={p.image}
                  alt={p.name}
                  className="impact-image"
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="impact-overlay"></div>

                {/* Result Overlay on Image Area */}
                <div className="result-overlay">
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Outcome & Result</div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#fff', lineHeight: 1.6, fontWeight: 500, margin: 0 }}>{p.result}</p>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    padding: '4px 12px',
                    background: 'rgba(255,130,93,0.95)',
                    borderRadius: 100,
                    fontFamily: 'var(--font-body)',
                    fontSize: 11,
                    color: '#fff',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    zIndex: 10,
                  }}
                >
                  {p.location}
                </div>
              </div>

              <div style={{ padding: '28px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#0a1e3d', margin: '0 0 12px' }}>{p.name}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: '#5a6a7e', lineHeight: 1.6, margin: 0 }}>{p.detail}</p>
              </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <Link href="/insights#all-case-studies" style={{
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--accent)',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
            transition: 'gap 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.gap = '14px'}
            onMouseLeave={e => e.currentTarget.style.gap = '8px'}
          >
            View all client stories
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>

        <div id="partners" style={{ scrollMarginTop: '200px' }}>
          <PartnerMarquee />
        </div>

      </div>
    </section>
  );
};

export default Impact;
