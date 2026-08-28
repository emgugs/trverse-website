import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageH1 from "@/components/seo/PageH1";
import JsonLd from "@/components/seo/JsonLd";
import InsightsGrid from "@/components/insights/InsightsGrid";
import { blogPosts } from "@/data/insights";
import { breadcrumbJsonLd } from "@/lib/seo-jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "TRVERSE Blog",
  description:
    "TRVERSE perspectives on artificial intelligence, open-loop fare collection, and the future of connected public transit.",
  path: "/blog",
  image: blogPosts[0]?.image,
});

export default function BlogPage() {
  return (
    <main>
      <PageH1>TRVERSE Blog</PageH1>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <Nav />
      <InsightsHero
        badge="TRVERSE Blog"
        titleAs="p"
        title="Ideas shaping the future of transit"
        description="Practical perspectives on the technology, payments, and intelligence helping cities run better-connected transit networks."
        backgroundImageSrc="/insights/from-reactive-to-predictive-ai-transit.webp"
        backgroundImageAlt="City bus moving through a modern transit network at night"
        primaryCta={{ label: "Read the latest", href: "#all-blog-posts" }}
        secondaryCta={{ label: "Explore insights", href: "/insights" }}
      />

      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <section id="all-blog-posts" style={{ background: "#fff", padding: "110px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
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
              Latest from TRVERSE
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 3.2vw, 44px)",
                fontWeight: 600,
                color: "#0a1e3d",
                margin: "0 0 18px",
              }}
            >
              Transit, technology, and what comes next
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "#5a6a7e",
                maxWidth: 720,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Read TRVERSE perspectives on the systems and ideas transforming public transport.
            </p>
          </div>

          <InsightsGrid items={blogPosts} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
