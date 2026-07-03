import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HomeAwards from "@/components/HomeAwards";
import Transformation from "@/components/Transformation";
import Solutions from "@/components/Solutions";
import System from "@/components/System";
import Impact from "@/components/Impact";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/seo-jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "TRVERSE | Mass Transit AFC, ITS & AI Platform",
    description:
      "TRVERSE delivers end-to-end automated fare collection, intelligent transport systems, fleet management, and AI monitoring for mass transit networks worldwide. Backed by LMKR's 30-year enterprise legacy.",
    path: "/",
  }),
  title: {
    absolute: "TRVERSE | Mass Transit AFC, ITS & AI Platform",
  },
};

export default function Home() {
  return (
    <main>
      <JsonLd data={organizationJsonLd()} />
      <Nav />
      <Hero />
      <HomeAwards />
      <Transformation />
      <Solutions />
      <System />
      <Impact />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
}
