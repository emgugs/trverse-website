import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { DeviceItemsCarousel } from "@/components/products/DeviceItemsCarousel";

const PLACEHOLDER = "/products/placeholder-product.svg";

const PRODUCT_MOCKUPS: Record<string, string> = {
  meridian: "/products/Meridian.webp",
  vector: "/products/vector.webp",
  orbit: "/products/orbit.webp",
  command: "/products/command.webp",
  signal: "/products/signal.webp",
  insight: "/products/insight.webp",
  flow: "/products/flow.webp",
  core: "/products/core.webp",
};

type IconId =
  | "card"
  | "coins"
  | "wallet"
  | "map"
  | "shield"
  | "gauge"
  | "calendar"
  | "route"
  | "fleet"
  | "dashboard"
  | "alert"
  | "radio"
  | "clock"
  | "users"
  | "screens"
  | "chart"
  | "layers"
  | "pie"
  | "activity"
  | "binary"
  | "package"
  | "tool"
  | "lock";

type SoftwareProduct = {
  slug: string;
  categoryHeading: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  listTitle: "Key capabilities" | "Includes";
  capabilities: { text: string; icon: IconId }[];
};

const softwareProducts: SoftwareProduct[] = [
  {
    slug: "meridian",
    categoryHeading: "Fare Collection & Revenue",
    name: "TRVERSE Pay",
    shortName: "Pay",
    tagline: "Payments that keep moving",
    description:
      "Manages payments across stations, vehicles, and digital channels with support for multiple fare models.",
    listTitle: "Key capabilities",
    capabilities: [
      { icon: "card", text: "Open-loop and closed-loop payments" },
      { icon: "coins", text: "Central clearing and revenue management" },
      { icon: "wallet", text: "Mobile ticketing and digital wallet support" },
    ],
  },
  {
    slug: "vector",
    categoryHeading: "Fleet Monitoring & Tracking",
    name: "TRVERSE Fleet",
    shortName: "Fleet",
    tagline: "See every movement. Stay ahead.",
    description:
      "Tracks vehicle movement, performance, and operational status across the network.",
    listTitle: "Key capabilities",
    capabilities: [
      { icon: "map", text: "GPS-based tracking and monitoring" },
      { icon: "shield", text: "Driver behavior and safety tracking" },
      { icon: "gauge", text: "Vehicle diagnostics and performance data" },
    ],
  },
  {
    slug: "orbit",
    categoryHeading: "Scheduling & Route Optimization",
    name: "TRVERSE Plan",
    shortName: "Plan",
    tagline: "Schedules that move with demand",
    description:
      "Optimizes routes, schedules, and fleet allocation using real-time and historical data.",
    listTitle: "Key capabilities",
    capabilities: [
      { icon: "calendar", text: "Dynamic scheduling updates" },
      { icon: "route", text: "Demand-based route planning" },
      { icon: "fleet", text: "Fleet utilization tracking" },
    ],
  },
  {
    slug: "command",
    categoryHeading: "Operations & Dispatch",
    name: "TRVERSE Control",
    shortName: "Control",
    tagline: "Unified control across your network",
    description:
      "Brings monitoring, communication, and system coordination into one environment.",
    listTitle: "Key capabilities",
    capabilities: [
      { icon: "dashboard", text: "Live dashboards and system monitoring" },
      { icon: "alert", text: "Incident and disruption management" },
      { icon: "radio", text: "Dispatch and coordination tools" },
    ],
  },
  {
    slug: "signal",
    categoryHeading: "Passenger Information Systems",
    name: "TRVERSE Info",
    shortName: "Info",
    tagline: "Clarity at every stop",
    description:
      "Delivers service updates and travel information across stations and vehicles.",
    listTitle: "Key capabilities",
    capabilities: [
      { icon: "clock", text: "Real-time arrival and service updates" },
      { icon: "users", text: "Passenger information systems" },
      { icon: "screens", text: "Onboard and station display integration" },
    ],
  },
  {
    slug: "insight",
    categoryHeading: "Reporting & Business Intelligence",
    name: "TRVERSE Metrics",
    shortName: "Metrics",
    tagline: "Know more. Decide faster",
    description:
      "Provides reporting, analytics, and performance visibility across the network.",
    listTitle: "Key capabilities",
    capabilities: [
      { icon: "chart", text: "Ridership and performance reporting" },
      { icon: "layers", text: "Operational analytics" },
      { icon: "pie", text: "System-wide dashboards" },
    ],
  },
  {
    slug: "flow",
    categoryHeading: "Ridership Analysis",
    name: "TRVERSE Count",
    shortName: "Count",
    tagline: "Understand how people move",
    description: "Captures ridership patterns and passenger movement across the network.",
    listTitle: "Key capabilities",
    capabilities: [
      { icon: "users", text: "Passenger counting and monitoring" },
      { icon: "activity", text: "Demand analysis" },
      { icon: "binary", text: "Usage trend tracking" },
    ],
  },
  {
    slug: "core",
    categoryHeading: "Operational Infrastructure",
    name: "TRVERSE Core",
    shortName: "Core",
    tagline: "The systems behind everything that works",
    description:
      "Manages operational infrastructure, asset inventory, and administrative workflows.",
    listTitle: "Key capabilities",
    capabilities: [
      { icon: "package", text: "Asset and inventory management" },
      { icon: "tool", text: "Fault and incident tracking" },
      { icon: "lock", text: "Access control and attendance systems" },
    ],
  },
];

type HardwareDevice = {
  label: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

type HardwareCategory = {
  title: string;
  tagline: string;
  description: string;
  iconSrc: string;
  image: { src: string; alt: string };
  items: HardwareDevice[];
};

const hardwareCategories: HardwareCategory[] = [
  {
    title: "Automated Fare Collection (AFC)",
    tagline: "Powering seamless passenger journeys.",
    description:
      "Our AFC hardware suite simplifies ticketing, optimizes gate throughput, and ensures secure revenue collection across your entire network.",
    iconSrc: "/assets/fare-collection-icon.webp",
    image: {
      src: "/fare-collection-device.webp",
      alt: "Passenger tapping a card at a transit fare gate",
    },
    items: [
      {
        label: "Fare Validators",
        description:
          "High-speed contactless validation for both bus environments and station fare gates.",
        imageSrc: "/products/devices/fare-validator.jpg",
        imageAlt: "TRVERSE fare validator mounted on a transit bus",
      },
      {
        label: "Fare Gates",
        description:
          "Reliable, high-throughput flap gates designed for rapid passenger flow and secure access control.",
        imageSrc: "/products/devices/fare-gates.png",
        imageAlt: "Transit fare gates at a station entrance",
      },
      {
        label: "TVM (Ticket Vending Machine)",
        description:
          "Intuitive, 24/7 self-service kiosks for purchasing and recharging transit credentials.",
        imageSrc: "/products/devices/tvm.png",
        imageAlt: "Ticket vending machine at a station",
      },
      {
        label: "POS Terminals",
        description:
          "Desktop and handheld Point-of-Sale solutions for versatile on-site ticketing and top-ups.",
        imageSrc: "/products/devices/pos.webp",
        imageAlt: "Sunmi POS terminal for on-board and station transit ticketing",
      },
      {
        label: "Handheld Validators",
        description:
          "Portable validation tools for mobile ticket inspection and on-board checks.",
        imageSrc: "/products/devices/handheld-validators.png",
        imageAlt: "Handheld fare validation device",
      },
    ],
  },
  {
    title: "Intelligent Transport Systems (ITS)",
    tagline: "Visibility, safety, and control in every vehicle.",
    description:
      "Our ITS hardware provides operators with the critical data and surveillance needed to maintain fleet safety and operational excellence.",
    iconSrc: "/assets/onboarding-icon.webp",
    image: {
      src: "/onboarding-operation-device.webp",
      alt: "Driver interacting with an onboard console and fleet monitoring systems",
    },
    items: [
      {
        label: "Driver Console",
        description:
          "A centralized, ergonomic interface for real-time communication, navigation, and system monitoring.",
        imageSrc: "/products/devices/driver-console.webp",
        imageAlt: "Driver console with digital cluster, CCTV monitor, and route tablet",
      },
      {
        label: "AI Cameras",
        description:
          "Intelligent edge-processing cameras for passenger counting, safety monitoring, and proactive incident detection.",
        imageSrc: "/products/devices/ai-camera.webp",
        imageAlt: "Overhead AI camera mounted inside a transit bus for passenger counting and safety monitoring",
      },
      {
        label: "CCTV",
        description:
          "High-definition video surveillance systems providing full interior and exterior fleet coverage for enhanced security.",
        imageSrc: "/products/devices/bus-cctv.webp",
        imageAlt: "Dome CCTV camera mounted inside a transit bus",
      },
      {
        label: "RTPI (Real-Time Passenger Information)",
        description:
          "Dynamic display hardware for both stations and buses, providing travelers with live, accurate service updates.",
        imageSrc: "/products/devices/rtpi.webp",
        imageAlt: "In-vehicle RTPI screens showing next station and route map inside a transit bus",
      },
    ],
  },
];

function CapabilityGlyph({ id }: { id: IconId }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" as const, stroke: "currentColor", strokeWidth: 1.65, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (id) {
    case "card":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 10h18" />
        </svg>
      );
    case "coins":
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="6" />
          <circle cx="15" cy="15" r="6" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...common}>
          <path d="M20 12V8a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2v-6" />
          <circle cx="16" cy="14" r="1" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <polygon points="1 6 9 4 17 8 23 7 23 19 17 21 10 17 4 21 4 13 1 9 1 6" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 15v4M12 12l3-3" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );
    case "route":
      return (
        <svg {...common}>
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="7" r="2" />
          <path d="M10 17L15 11" />
        </svg>
      );
    case "fleet":
      return (
        <svg {...common}>
          <rect x="4" y="8" width="16" height="9" rx="2" />
          <path d="M7 21v-4M17 21v-4M6 17h12" />
        </svg>
      );
    case "dashboard":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="9" rx="1" />
          <rect x="14" y="3" width="7" height="5" rx="1" />
          <rect x="14" y="11" width="7" height="10" rx="1" />
          <rect x="3" y="15" width="7" height="6" rx="1" />
        </svg>
      );
    case "alert":
      return (
        <svg {...common}>
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          <path d="M12 9v4M12 17h.01" />
        </svg>
      );
    case "radio":
      return (
        <svg {...common}>
          <path d="M4.93 19.93A10 10 0 019 22M19.07 19.07A10 10 0 0115 22" />
          <circle cx="12" cy="12" r="3" />
          <path d="M17.93 17.93A10 10 0 019 2" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v6l4 2" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M4 21v-1a4 4 0 014-4h2M14 21v-1a5 5 0 015-5" />
        </svg>
      );
    case "screens":
      return (
        <svg {...common}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 20h18M5 17l4-8 5 10 6-17" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "pie":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" opacity="0.25" />
          <path d="M12 12V3a9 9 0 019 9z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "activity":
      return (
        <svg {...common}>
          <path d="M22 12h-4l-3 9L9 3l-3 12H2" />
        </svg>
      );
    case "binary":
      return (
        <svg {...common}>
          <path d="M11 13H9M13 17H9M9 17a3 3 0 013-3" />
          <path d="M15 13h2m0 8h4M17 17h6" />
          <circle cx="6" cy="7" r="2" />
        </svg>
      );
    case "package":
      return (
        <svg {...common}>
          <path d="M12 22V12M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <polyline points="3.29 7 12 12 20.71 7" />
        </svg>
      );
    case "tool":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4.2 4.2 0 013 7.6L8 21l-4-4 7.7-10.8a4.2 4.2 0 019-1z" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 018 0v3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

function ProductMockupFrame({ slug }: { slug: string; label?: string }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 22,
        padding: 4,
        background: "linear-gradient(145deg, rgba(10,30,61,0.06) 0%, rgba(19,79,137,0.08) 100%)",
        border: "1px solid rgba(19,79,137,0.12)",
      }}
    >
      <div
        style={{
          borderRadius: 18,
          overflow: "hidden",
          border: "1px solid rgba(10,30,61,0.08)",
          background: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 16px",
            background: "linear-gradient(180deg, #fafbfd 0%, #f4f7fb 100%)",
            borderBottom: "1px solid rgba(19,79,137,0.08)",
          }}
        >
          <span style={{ display: "flex", gap: 6 }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.92 }} />
            ))}
          </span>
          <div
            style={{
              flex: 1,
              marginLeft: 8,
              height: 28,
              borderRadius: 8,
              background: "rgba(10,30,61,0.04)",
              border: "1px solid rgba(10,30,61,0.06)",
              fontFamily: "var(--font-body)",
              fontSize: 11,
              color: "#7a8797",
              display: "flex",
              alignItems: "center",
              paddingLeft: 12,
            }}
          >
            trverse.io / {slug}
          </div>
        </div>
        <div style={{ position: "relative", aspectRatio: "16 / 10", background: "#f4f7fb" }}>
          <Image
            src={PRODUCT_MOCKUPS[slug] ?? PLACEHOLDER}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ProductsContent() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .products-section-inner { max-width: 1200px; margin: 0 auto; }
          .product-split {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: clamp(28px, 4vw, 56px);
            align-items: center;
          }
          .product-capabilities-card {
            padding: clamp(14px, 2vw, 18px) clamp(16px, 2.2vw, 20px);
            border-radius: 16px;
            background: linear-gradient(135deg, rgba(19,79,137,0.04) 0%, rgba(255,130,93,0.04) 100%);
            border: 1px solid rgba(19,79,137,0.08);
          }
          .product-capabilities-label {
            font-family: var(--font-body);
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #0a1e3d;
            margin: 0 0 12px;
            opacity: 0.85;
          }
          .product-capabilities-list {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .product-capability-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }
          .product-capability-icon {
            flex-shrink: 0;
            width: 22px;
            height: 22px;
            margin-top: 1px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #134f89;
          }
          .product-capability-text {
            font-family: var(--font-body);
            font-size: 14px;
            color: #3d4d62;
            line-height: 1.5;
            font-weight: 500;
          }
          .product-stack-card-inner {
            padding: clamp(24px, 4vw, 40px);
          }
          .devices-cols {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
            align-items: stretch;
          }
          .devices-col-reveal {
            display: flex;
            flex-direction: column;
            min-height: 100%;
            height: 100%;
            min-width: 0;
            max-width: 100%;
          }
          .devices-col-card {
            flex: 1;
            display: flex;
            flex-direction: column;
            min-height: 0;
            min-width: 0;
            width: 100%;
            max-width: 100%;
            overflow: hidden;
          }
          @media (max-width: 1024px) {
            .product-split {
              grid-template-columns: 1fr;
              gap: 40px;
            }
          }
          @media (max-width: 900px) {
            .devices-cols { grid-template-columns: 1fr; }
          }
          .device-category-image-wrap {
            border-radius: 18px;
            margin-bottom: 22px;
            border: 1px solid rgba(19,79,137,0.08);
            height: 220px;
            overflow: hidden;
            background: #e8eef5;
          }
          .device-category-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            display: block;
          }

          /* Sticky stacking cards — desktop only */
          .product-stack {
            display: flex;
            flex-direction: column;
            gap: 0;
          }
          @media (min-width: 1025px) {
            .product-sticky-slot {
              position: sticky;
              margin-bottom: clamp(24px, 5vh, 72px);
              /* Stagger so each card settles slightly lower than the prior (deck effect) */
              top: calc(72px + var(--stack) * clamp(8px, 1.2vw, 14px));
              z-index: calc(40 + var(--stack));
            }
            .product-stack > .product-sticky-slot:last-child {
              margin-bottom: clamp(40px, 8vh, 96px);
            }
          }
          @media (min-width: 1025px) and (max-height: 860px) {
            .product-sticky-slot {
              margin-bottom: clamp(16px, 3vh, 40px);
              top: calc(64px + var(--stack) * clamp(5px, 0.7vh, 9px));
            }
            .product-stack > .product-sticky-slot:last-child {
              margin-bottom: clamp(28px, 5vh, 56px);
            }
            .product-stack-card-inner {
              padding: clamp(20px, 3vw, 28px);
            }
            .product-split {
              gap: clamp(20px, 3vw, 36px);
            }
            .product-capabilities-list {
              gap: 8px;
            }
            .product-capability-text {
              font-size: 13.5px;
            }
            .product-capabilities-card {
              padding: 12px 14px;
            }
            .product-capabilities-label {
              margin-bottom: 10px;
            }
          }
          @media (max-width: 1024px) {
            .product-sticky-slot {
              position: relative !important;
              top: auto !important;
              z-index: auto !important;
              margin-bottom: 24px;
            }
            .product-sticky-slot:last-child {
              margin-bottom: 0;
            }
            .products-software-section {
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
            .product-stack-card-inner {
              padding: clamp(20px, 4.5vw, 28px);
            }
          }
          @media (max-width: 520px) {
            .products-software-section {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
            .product-stack-card-inner {
              padding: 18px 16px;
            }
          }
        `,
        }}
      />

      <section
        id="software-products"
        className="products-software-section"
        style={{
          background: "linear-gradient(180deg, #fafbfd 0%, #eef2f8 42%, #f7f9fc 100%)",
          padding: "clamp(72px, 12vw, 120px) 48px",
        }}
      >
        <div className="products-section-inner">
          <div style={{ textAlign: "center", marginBottom: 72, maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.6vw, 42px)",
                fontWeight: 700,
                color: "#0a1e3d",
                margin: "0 0 18px",
                letterSpacing: "-0.03em",
              }}
            >
              Our Products
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "#5f6e82",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
            TRVERSE delivers a full product catalog built for modern transit, software platforms, and field-ready hardware that work as one. From fare collection and fleet tracking to passenger information and operational control, our software covers every layer of transit operations. Our hardware is engineered for real-world transit environments, purpose-built for durability, ease of use, and seamless integration with the TRVERSE ecosystem.
            </p>
          </div>

          <div className="product-stack">
            {softwareProducts.map((p, idx) => (
              <div
                key={p.slug}
                className="product-sticky-slot"
                style={{ ["--stack" as string]: idx } as CSSProperties}
              >
                <article
                  className="product-stack-card-inner"
                  id={p.slug}
                  style={{
                    position: "relative",
                    borderRadius: 36,
                    background: idx % 2 === 0 ? "#ffffff" : "linear-gradient(155deg, #ffffff 0%, #fbfcfe 65%, #f6f9fd 100%)",
                    border: "1px solid rgba(19,79,137,0.09)",
                  }}
                >
                <div className="product-split">
                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 12,
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#134f89",
                        margin: "0 0 14px",
                        opacity: 0.75,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}. {p.categoryHeading}
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(30px, 3.6vw, 44px)",
                        fontWeight: 700,
                        color: "#0a1e3d",
                        margin: "0 0 10px",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.08,
                      }}
                    >
                      {p.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(13px, 1.2vw, 16px)",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                        margin: "0 0 18px",
                      }}
                    >
                      {p.tagline}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 16,
                        color: "#5f6e82",
                        lineHeight: 1.75,
                        margin: "0 0 20px",
                        maxWidth: 520,
                      }}
                    >
                      {p.description}
                    </p>

                    <div className="product-capabilities-card">
                      <p className="product-capabilities-label">{p.listTitle}</p>
                      <ul className="product-capabilities-list">
                        {p.capabilities.map((cap) => (
                          <li key={cap.text} className="product-capability-item">
                            <span className="product-capability-icon" aria-hidden>
                              <CapabilityGlyph id={cap.icon} />
                            </span>
                            <span className="product-capability-text">{cap.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="product-mockup-col" style={{ minWidth: 0 }}>
                    <ProductMockupFrame slug={p.slug} label={p.shortName} />
                  </div>
                </div>
              </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="devices" style={{ background: "#fff", padding: "clamp(72px, 11vw, 112px) 48px" }}>
        <div className="products-section-inner">
          <div style={{ textAlign: "center", marginBottom: 56, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 800,
                color: "var(--accent)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: 20,
                padding: "8px 16px",
                borderRadius: 999,
                background: "rgba(255,130,93,0.1)",
                border: "1px solid rgba(255,130,93,0.2)",
              }}
            >
              Devices
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.6vw, 42px)",
                fontWeight: 700,
                color: "#0a1e3d",
                margin: "0 0 18px",
                letterSpacing: "-0.03em",
              }}
            >
              Built for real-world transit environments
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "#5f6e82",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              TRVERSE hardware is engineered for the rigors of high-traffic transit operations. From seamless fare
              transactions to onboard intelligence, our devices are designed for durability, ease of use, and full
              integration with the TRVERSE software ecosystem.
            </p>
          </div>

          <div className="devices-cols">
            {hardwareCategories.map((col) => (
              <div key={col.title} className="devices-col-reveal">
              <div
                className="devices-col-card"
                style={{
                  borderRadius: 24,
                  padding: "28px 24px",
                  background: "linear-gradient(165deg, #fbfcfe 0%, #f2f6fb 100%)",
                  border: "1px solid rgba(19,79,137,0.1)",
                }}
              >
                <div className="device-category-image-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={col.image.src}
                    alt={col.image.alt}
                    className="device-category-image"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 14,
                    marginBottom: 16,
                  }}
                >
                  <div
                    aria-hidden
                    style={{
                      width: 52,
                      height: 52,
                      flexShrink: 0,
                      borderRadius: 14,
                      background: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(255,130,93,0.28)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={col.iconSrc}
                      alt=""
                      width={28}
                      height={28}
                      style={{
                        display: "block",
                        objectFit: "contain",
                        mixBlendMode: "screen",
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#0a1e3d",
                      margin: 0,
                      lineHeight: 1.25,
                    }}
                  >
                    {col.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      margin: "10px 0 0",
                      lineHeight: 1.4,
                    }}
                  >
                    {col.tagline}
                  </p>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14.5,
                    color: "#5f6e82",
                    lineHeight: 1.65,
                    margin: "0 0 20px",
                  }}
                >
                  {col.description}
                </p>
                <DeviceItemsCarousel items={col.items} categoryLabel={col.title} />
              </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "#5f6e82",
              lineHeight: 1.8,
              textAlign: "center",
              marginTop: 52,
              maxWidth: 900,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            All devices are integrated with TRVERSE software systems, ensuring consistent data flow across payments,
            operations, and passenger services.
          </p>
        </div>
      </section>

      <section id="cta" style={{ background: "linear-gradient(180deg, #f7f9fc 0%, #eef1f7 100%)", padding: "96px 48px 120px" }}>
        <div className="products-section-inner">
          <div
            style={{
              background: "linear-gradient(145deg, #071428 0%, #0a1e3d 40%, #134f89 100%)",
              borderRadius: 32,
              padding: "72px 48px",
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20%",
                right: "-10%",
                width: 420,
                height: 420,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,130,93,0.22) 0%, transparent 68%)",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url(/CTA-BG.webp)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                opacity: 0.2,
                mixBlendMode: "screen",
                filter: "contrast(1.05) saturate(0.95)",
                pointerEvents: "none",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
                opacity: 0.9,
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(26px, 3.2vw, 40px)",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 16px",
                  letterSpacing: "-0.025em",
                }}
              >
                Deploy the right products for your network
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 17,
                  color: "#fff",
                  lineHeight: 1.75,
                  maxWidth: 520,
                  margin: "0 auto 32px",
                }}
              >
                Talk to TRVERSE about building a connected transit system.
              </p>
              <Link
                href="/get-a-demo"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "16px 32px",
                  borderRadius: 12,
                  background: "var(--accent)",
                  color: "#fff",
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "background 0.2s ease, transform 0.2s ease",
                }}
              >
                Get a demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
