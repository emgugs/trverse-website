"use client";

import React from 'react';
import { officeFooterLabels } from '@/data/offices';
import { homeAwards } from '@/data/homeAwards';
import { accreditations } from '@/data/accreditations';

const footerSocialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/trverse-official" },
  { label: "Facebook", href: "https://www.facebook.com/TrverseOfficial" },
  { label: "Instagram", href: "https://www.instagram.com/TrverseOfficial/" },
];

const Footer = () => (
  <footer className="home-footer" style={{ background: '#040e1f', padding: '64px 48px 40px' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      @media (max-width: 1024px) {
        .home-footer {
          padding: 56px 28px 32px !important;
        }
        .home-footer-grid {
          grid-template-columns: 1fr 1fr !important;
          gap: 28px !important;
        }
        .home-footer-brand-logos {
          gap: 16px 20px !important;
        }
      }
      @media (max-width: 700px) {
        .home-footer {
          padding: 48px 20px 28px !important;
        }
        .home-footer-grid {
          grid-template-columns: 1fr !important;
          gap: 20px !important;
        }
        .home-footer-bottom {
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 12px !important;
        }
        .home-footer-logos {
          gap: 20px 24px !important;
        }
      }
      .home-footer-brand-recognition {
        margin-top: 32px;
      }
      .home-footer-brand-recognition + .home-footer-brand-recognition {
        margin-top: 28px;
      }
      .home-footer-social-links {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 24px;
      }
      .home-footer-social-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 14px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.12);
        font-family: var(--font-body);
        font-size: 13px;
        font-weight: 600;
        color: rgba(255,255,255,0.72);
        text-decoration: none;
        transition: color 0.2s, border-color 0.2s, background 0.2s;
      }
      .home-footer-social-link:hover {
        color: #fff;
        border-color: rgba(255,130,93,0.45);
        background: rgba(255,130,93,0.12);
      }
      .home-footer-recognition-title {
        font-family: var(--font-body);
        font-size: 13px;
        font-weight: 600;
        color: rgba(255,255,255,0.5);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin: 0 0 20px;
      }
      .home-footer-logos {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 24px 32px;
      }
      .home-footer-brand-logos {
        gap: 20px 24px;
        max-width: 300px;
        align-items: flex-start;
      }
      .home-footer-logo-item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 44px;
      }
      .home-footer-logo-item img {
        max-height: 44px;
        max-width: 130px;
        width: auto;
        height: auto;
        object-fit: contain;
        filter: brightness(0) invert(1);
        opacity: 0.85;
      }
      .home-footer-logo-item--large img {
        max-height: 52px;
        max-width: 150px;
      }
      .home-footer-logo-item--accreditation {
        width: 100%;
        max-width: 300px;
        height: 40px;
        overflow: hidden;
      }
      .home-footer-logo-item--accreditation img {
        max-height: 40px;
        max-width: none;
        width: auto;
        height: 40px;
        object-fit: cover;
        object-position: left center;
        margin-left: -28px;
      }
    ` }} />
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div className="home-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1.25fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
        <div className="home-footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.svg" alt="TRVERSE" style={{ height: 28, marginBottom: 16 }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 280 }}>
            Connecting transit systems for better city mobility.
          </p>
          <div className="home-footer-social-links" aria-label="TRVERSE social links">
            {footerSocialLinks.map((link) => (
              <a
                key={link.label}
                className="home-footer-social-link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="home-footer-brand-recognition">
            <h4 className="home-footer-recognition-title">Awards &amp; Recognition</h4>
            <div className="home-footer-logos home-footer-brand-logos" role="list" aria-label="Award logos">
              {homeAwards.map((award) => (
                <div
                  key={award.title}
                  className={`home-footer-logo-item${award.logoSize === "large" ? " home-footer-logo-item--large" : ""}`}
                  role="listitem"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={award.logo} alt={award.logoAlt} loading="lazy" title={award.title} />
                </div>
              ))}
            </div>
          </div>

          <div className="home-footer-brand-recognition">
            <h4 className="home-footer-recognition-title">Accreditations</h4>
            <div className="home-footer-logos home-footer-brand-logos" role="list" aria-label="Accreditation logos">
              {accreditations.map((item) => (
                <div key={item.name} className="home-footer-logo-item home-footer-logo-item--accreditation" role="listitem">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.logo} alt={item.name} loading="lazy" title={item.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {[
          {
            title: 'Solutions',
            links: [
              { label: 'Automated Fare Collection', href: '/solutions/Automated-fare-collection' },
              { label: 'Intelligent Transport Systems', href: '/solutions/Intelligent-transport-systems' },
              { label: 'Advanced Scheduling System', href: '/solutions/advanced-scheduling-system' },
              { label: 'Fleet Management', href: '/solutions/fleet-management' },
              { label: 'Micro-Mobility Integration', href: '/solutions/Micro-mobility-integration' },
              { label: 'AI Monitoring and Control', href: '/solutions/ai-monitoring-and-control' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '/about' },
              { label: 'Partners', href: '/partners' },
              { label: 'Insights', href: '/insights' },
              { label: 'Get a demo', href: '/get-a-demo' },
            ],
          },
          {
            title: 'Contact',
            links: officeFooterLabels,
          },
        ].map((col, i) => (
          <div key={i}>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>{col.title}</h4>
            {col.links.map((l) => (
              <a key={l.label} href={l.href} style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', marginBottom: 12, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >{l.label}</a>
            ))}
          </div>
        ))}
      </div>

      <div className="home-footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2026 LMKR. ALL RIGHTS RESERVED.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
