import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import JsonLd from "@/components/seo/JsonLd";
import { insights } from "@/data/insights";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo-jsonld";
import { buildPageMetadata, truncateMetaTitle } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

function renderBulletLead(text: string) {
  const leadMatch = text.match(/^(.+?\.\s+)([\s\S]+)$/);
  if (!leadMatch) return text;

  return (
    <>
      <strong style={{ color: "#0a1e3d", fontWeight: 650 }}>{leadMatch[1]}</strong>
      {leadMatch[2]}
    </>
  );
}

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = insights.find((x) => x.slug === slug);
  if (!item) return buildPageMetadata({ title: "Insight", path: "/insights" });

  return buildPageMetadata({
    title: truncateMetaTitle(item.title),
    description: item.excerpt,
    path: `/insights/${slug}`,
    image: item.heroImage ?? item.image,
    type: "article",
    publishedTime: item.datePublishedIso,
  });
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = insights.find((x) => x.slug === slug);
  if (!item) notFound();

  const path = `/insights/${slug}`;
  const image = item.heroImage ?? item.image;

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: item.title, path },
          ]),
          articleJsonLd({
            title: item.title,
            description: item.excerpt,
            path,
            image,
            datePublished: item.datePublishedIso,
          }),
        ]}
      />
      <Nav />
      <InsightsHero
        badge={`${item.category} • ${item.date}`}
        titleAs="p"
        title={
          <>
            {item.title.split(" ").slice(0, 7).join(" ")}
            <br />
            <span style={{ color: "var(--accent)" }}>{item.title.split(" ").slice(7).join(" ")}</span>
          </>
        }
        description={item.excerpt}
        backgroundImageSrc={image}
        backgroundImageAlt={item.title}
        primaryCta={{ label: "Read story", href: "#insight-content" }}
        secondaryCta={{ label: "All insights", href: "/insights" }}
      />

      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: item.title },
        ]}
      />

      <section id="insight-content" style={{ background: "#fff", padding: "110px 48px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                color: "#7a8797",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              {item.category} • {item.date}
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(34px, 3.6vw, 46px)",
                fontWeight: 700,
                color: "#0a1e3d",
                lineHeight: 1.18,
                margin: "0 0 16px",
                letterSpacing: "-0.01em",
              }}
            >
              {item.title}
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 18, color: "#5a6a7e", lineHeight: 1.8, margin: 0 }}>
              {item.intro}
            </p>
          </div>

          {item.showContentImage !== false ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: item.imageObjectFit === "contain" ? "auto" : 420,
                objectFit: item.imageObjectFit ?? "cover",
                borderRadius: 18,
                border: "1px solid rgba(19, 79, 137, 0.10)",
                boxShadow: "0 18px 60px rgba(10, 30, 61, 0.10)",
                marginBottom: 40,
                background: item.imageObjectFit === "contain" ? "#f7f9fc" : undefined,
              }}
            />
          ) : null}

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {item.sections.map((section, idx) => (
              <div key={`${item.slug}-${idx}`}>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    fontWeight: 650,
                    color: "#0a1e3d",
                    margin: "0 0 12px",
                  }}
                >
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => {
                  const isCta = p.startsWith("Talk to TRVERSE");
                  return (
                    <p
                      key={`${item.slug}-${idx}-${pIdx}`}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 16.5,
                        color: "#5a6a7e",
                        lineHeight: 1.85,
                        margin: "0 0 12px",
                        ...(isCta
                          ? {
                              fontWeight: 700,
                              color: "#0a1e3d",
                              marginTop: 8,
                            }
                          : null),
                      }}
                    >
                      {p}
                    </p>
                  );
                })}

                {section.bullets?.length ? (
                  <ul
                    style={{
                      margin: "16px 0 0",
                      paddingLeft: 28,
                      color: "#5a6a7e",
                      listStyleType: "disc",
                      listStylePosition: "outside",
                    }}
                  >
                    {section.bullets.map((b, bIdx) => (
                      <li
                        key={`${item.slug}-${idx}-b-${bIdx}`}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 16.5,
                          lineHeight: 1.85,
                          margin: "0 0 14px",
                          paddingLeft: 6,
                          display: "list-item",
                        }}
                      >
                        {renderBulletLead(b)}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 60, paddingTop: 28, borderTop: "1px solid rgba(10, 30, 61, 0.08)" }}>
            <a
              href={item.sourceUrl}
              target={item.sourceUrl.startsWith("http") ? "_blank" : undefined}
              rel={item.sourceUrl.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--accent)",
                textDecoration: "none",
              }}
            >
              {item.sourceUrl.includes("get-a-demo") ? "Talk to TRVERSE" : "Source article"}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
