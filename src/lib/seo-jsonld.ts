import {
  ORGANIZATION_EMAIL,
  ORGANIZATION_LEGAL_NAME,
  ORGANIZATION_LOGO_HEIGHT,
  ORGANIZATION_LOGO_PATH,
  ORGANIZATION_LOGO_WIDTH,
  ORGANIZATION_NAME,
  ORGANIZATION_PHONE,
  ORGANIZATION_SLOGAN,
  ORGANIZATION_SOCIAL_PROFILES,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import { DEFAULT_DESCRIPTION, absoluteUrl } from "@/lib/seo";
import { offices } from "@/data/offices";
import {
  HOME_SOLUTION_LANDING_ORDER,
  solutionLandingsBySlug,
} from "@/data/solutionLandings";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const SOFTWARE_PRODUCTS = [
  {
    name: "TRVERSE Pay",
    description:
      "Manages payments across stations, vehicles, and digital channels with support for multiple fare models.",
  },
  {
    name: "TRVERSE Fleet",
    description:
      "Tracks vehicle movement, performance, and operational status across the network.",
  },
  {
    name: "TRVERSE Plan",
    description:
      "Optimizes routes, schedules, and fleet allocation using real-time and historical data.",
  },
  {
    name: "TRVERSE Control",
    description:
      "Brings monitoring, communication, and system coordination into one environment.",
  },
  {
    name: "TRVERSE Info",
    description:
      "Delivers service updates and travel information across stations and vehicles.",
  },
  {
    name: "TRVERSE Metrics",
    description:
      "Provides reporting, analytics, and performance visibility across the network.",
  },
  {
    name: "TRVERSE Count",
    description: "Captures ridership patterns and passenger movement across the network.",
  },
  {
    name: "TRVERSE Core",
    description:
      "Manages operational infrastructure, asset inventory, and administrative workflows.",
  },
] as const;

function organizationLogoJsonLd() {
  const logoUrl = absoluteUrl(ORGANIZATION_LOGO_PATH);
  return {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: logoUrl,
    contentUrl: logoUrl,
    width: ORGANIZATION_LOGO_WIDTH,
    height: ORGANIZATION_LOGO_HEIGHT,
    caption: ORGANIZATION_NAME,
  };
}

function postalAddressFromOffice(office: (typeof offices)[number]) {
  const countryByRegion: Record<string, string> = {
    "United States": "US",
    Canada: "CA",
    "United Arab Emirates": "AE",
    Pakistan: "PK",
  };

  return {
    "@type": "PostalAddress",
    streetAddress: office.address.join(" "),
    addressLocality: office.city,
    addressCountry: countryByRegion[office.region] ?? office.region,
    ...(office.postalCode ? { postalCode: office.postalCode } : {}),
  };
}

function contactPointsJsonLd() {
  return offices.map((office) => ({
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: office.phone,
    email: office.email ?? ORGANIZATION_EMAIL,
    areaServed: office.region,
    availableLanguage: ["English"],
  }));
}

function locationsJsonLd() {
  return offices.map((office) => ({
    "@type": "Place",
    name: `TRVERSE — ${office.city}`,
    address: postalAddressFromOffice(office),
    telephone: office.phone,
    ...(office.mapUrl ? { hasMap: office.mapUrl } : {}),
  }));
}

function solutionOffersJsonLd() {
  return HOME_SOLUTION_LANDING_ORDER.map((slug) => {
    const solution = solutionLandingsBySlug[slug];
    return {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: solution.eyebrowCategory,
        description: solution.metaDescription,
        url: `${SITE_URL}/solutions/${solution.slug}`,
        provider: { "@id": ORGANIZATION_ID },
        serviceType: solution.eyebrowCategory,
        areaServed: "Worldwide",
      },
    };
  });
}

function softwareProductOffersJsonLd() {
  return SOFTWARE_PRODUCTS.map((product) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "SoftwareApplication",
      name: product.name,
      description: product.description,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: `${SITE_URL}/products`,
      provider: { "@id": ORGANIZATION_ID },
    },
  }));
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: ORGANIZATION_NAME,
    legalName: ORGANIZATION_LEGAL_NAME,
    alternateName: ["Trverse", "TRVERSE Smart Mobility"],
    url: SITE_URL,
    logo: organizationLogoJsonLd(),
    image: absoluteUrl(ORGANIZATION_LOGO_PATH),
    description: DEFAULT_DESCRIPTION,
    slogan: ORGANIZATION_SLOGAN,
    email: ORGANIZATION_EMAIL,
    telephone: ORGANIZATION_PHONE,
    sameAs: [...ORGANIZATION_SOCIAL_PROFILES],
    contactPoint: contactPointsJsonLd(),
    address: postalAddressFromOffice(offices[0]),
    location: locationsJsonLd(),
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    knowsAbout: [
      "Automated Fare Collection",
      "Intelligent Transport Systems",
      "Fleet Management",
      "AI Monitoring and Control",
      "Advanced Scheduling",
      "Micro-Mobility Integration",
      "Mass Transit Technology",
      "Smart Mobility",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "LMKR",
      url: "https://lmkr.com",
    },
    brand: {
      "@type": "Brand",
      name: ORGANIZATION_NAME,
      slogan: ORGANIZATION_SLOGAN,
      logo: absoluteUrl(ORGANIZATION_LOGO_PATH),
      sameAs: [...ORGANIZATION_SOCIAL_PROFILES],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "TRVERSE Smart Mobility Platform",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Transit Solutions",
          itemListElement: solutionOffersJsonLd(),
        },
        {
          "@type": "OfferCatalog",
          name: "Software Products",
          itemListElement: softwareProductOffersJsonLd(),
        },
      ],
    },
    makesOffer: [...solutionOffersJsonLd(), ...softwareProductOffersJsonLd()],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en",
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    about: {
      "@id": ORGANIZATION_ID,
    },
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Request a demo",
      target: `${SITE_URL}/get-a-demo`,
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: `${SITE_URL}${item.path}` } : {}),
    })),
  };
}

export function localBusinessJsonLd() {
  const islamabad = offices.find((o) => o.city === "Islamabad")!;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",
    "@id": `${SITE_URL}/#local-business`,
    name: ORGANIZATION_NAME,
    legalName: ORGANIZATION_LEGAL_NAME,
    url: SITE_URL,
    logo: absoluteUrl(ORGANIZATION_LOGO_PATH),
    image: absoluteUrl(ORGANIZATION_LOGO_PATH),
    description: DEFAULT_DESCRIPTION,
    telephone: islamabad.phone,
    email: islamabad.email ?? ORGANIZATION_EMAIL,
    address: postalAddressFromOffice(islamabad),
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.7104,
      longitude: 73.0582,
    },
    hasMap: islamabad.mapUrl,
    sameAs: [...ORGANIZATION_SOCIAL_PROFILES],
    parentOrganization: {
      "@type": "Organization",
      name: "LMKR",
      url: "https://lmkr.com",
    },
    priceRange: "$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  image,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@id": ORGANIZATION_ID,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
  };
}
