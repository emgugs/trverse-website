"use client";

import React from "react";
import Link from "next/link";
import { insightPosts } from "@/data/insights";
import InsightCardThumbnail from "@/components/insights/InsightCardThumbnail";

const Insights = () => {
  const [visibleCount, setVisibleCount] = React.useState(3);
  const homeInsights = [...insightPosts]
    .sort((a, b) => new Date(b.datePublishedIso).getTime() - new Date(a.datePublishedIso).getTime())
    .slice(0, 8);
  React.useEffect(() => {
    const mobile = window.matchMedia("(max-width: 759px)");
    const tablet = window.matchMedia("(max-width: 1079px)");

    const update = () => {
      if (mobile.matches) setVisibleCount(1);
      else if (tablet.matches) setVisibleCount(2);
      else setVisibleCount(3);
    };

    update();
    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);
  const maxStartIndex = Math.max(0, homeInsights.length - visibleCount);
  const [startIndex, setStartIndex] = React.useState(0);

  const handlePrev = () => {
    setStartIndex((current) => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setStartIndex((current) => Math.min(maxStartIndex, current + 1));
  };

  return (
    <section id="insights" className="home-insights-section" style={{ background: "#fff", padding: "120px 48px" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .home-insights-section {
            padding: 96px 28px !important;
          }
          .home-insights-head {
            flex-direction: column !important;
            align-items: flex-start !important;
            margin-bottom: 36px !important;
          }
        }
        @media (max-width: 700px) {
          .home-insights-section {
            padding: 84px 20px !important;
          }
        }
      ` }} />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="home-insights-head"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: 56,
          }}
        >
          <div style={{ maxWidth: 680 }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
                display: "block",
              }}
            >
              Insights
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 600,
                color: "#0a1e3d",
                margin: "0 0 20px",
              }}
            >
              News & Case Studies
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "#5a6a7e",
                maxWidth: 640,
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              Latest TRVERSE updates, milestones, and transport success stories.
            </p>
          </div>

          {homeInsights.length > visibleCount ? (
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Show previous insights"
                disabled={startIndex === 0}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(19, 79, 137, 0.18)",
                  background: startIndex === 0 ? "#f3f6fa" : "#fff",
                  color: startIndex === 0 ? "#a0acb8" : "#0a1e3d",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: startIndex === 0 ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Show next insights"
                disabled={startIndex === maxStartIndex}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(19, 79, 137, 0.18)",
                  background: startIndex === maxStartIndex ? "#f3f6fa" : "#fff",
                  color: startIndex === maxStartIndex ? "#a0acb8" : "#0a1e3d",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: startIndex === maxStartIndex ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ) : null}
        </div>

        <div
          style={{
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 24,
              transform: `translateX(calc(-${startIndex} * ((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount} + 24px)))`,
              transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
              willChange: "transform",
            }}
          >
            {homeInsights.map((item) => (
              <article
                key={item.slug}
                style={{
                  background: "#f7f9fc",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid rgba(19, 79, 137, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  flex: `0 0 calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})`,
                }}
              >
                <InsightCardThumbnail src={item.heroImage ?? item.image} alt={item.title} height={200} />
                <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 11,
                        color: "var(--accent)",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.category}
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#7a8797" }}>
                      {item.date}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      fontWeight: 600,
                      color: "#0a1e3d",
                      margin: 0,
                      lineHeight: 1.35,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14.5,
                      color: "#5a6a7e",
                      lineHeight: 1.65,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {item.intro}
                  </p>
                  <Link
                    href={`/insights/${item.slug}`}
                  style={{
                      textDecoration: "none",
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--accent)",
                  }}
                >
                    Read article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
