export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type InsightItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  datePublishedIso: string;
  excerpt: string;
  image: string;
  heroImage?: string;
  showContentImage?: boolean;
  imageObjectFit?: "cover" | "contain";
  sourceUrl: string;
  intro: string;
  sections: InsightSection[];
};

export const insights: InsightItem[] = [
  {
    slug: "why-tap-your-bank-card-open-loop-fare",
    title: 'Why "Tap Your Bank Card" Is the Biggest Shift in Transit Fare Payment',
    category: "Blog",
    date: "June 2026",
    datePublishedIso: "2026-06-30",
    excerpt:
      "Open-loop fare collection lets riders pay with the bank cards and mobile wallets they already carry, removing transit's quiet friction and becoming the standard networks are moving toward worldwide.",
    image: "/insights/why-tap-your-bank-card-open-loop-fare-june-2026.webp",
    sourceUrl: "/get-a-demo",
    intro:
      "For decades, riding a bus or train meant buying something first: a token, a paper ticket, or a dedicated transit card loaded with credit before you could even reach the platform. That extra step, the queue at a vending machine, the top-up before travel, the card you have to remember to carry, has always been one of the quiet frictions of public transit. Open-loop fare collection removes it entirely, and it's becoming the standard that transit authorities are moving toward worldwide.",
    sections: [
      {
        heading: 'What "open-loop" actually means',
        paragraphs: [
          "A closed-loop fare system only accepts its own proprietary card or token: the kind issued and topped up specifically for that transit network. An open-loop system flips that: it accepts the contactless bank cards, mobile wallets, and payment methods riders already carry in their pockets every day.",
          "TRVERSE's automated fare collection is built around this principle. The platform accepts EMV cards, contactless payments, and mobile wallet transactions without hardware lock-in, meaning transit authorities aren't tied to a single vendor's proprietary card ecosystem just to collect fares. Passengers tap a bank card, a phone, or a smartwatch at a validator or fare gate, and the system handles authorization, fare calculation, and settlement in real time: the same way a contactless payment works at a retail checkout, adapted for the speed and volume of a transit gateline.",
          "The result touches fare collection at every layer: fare validators and handheld validators for on-board collection, point-of-sale terminals for staffed counters, fare gates for controlled station access, and ticket vending machines for riders who still prefer to buy a physical ticket. All of it feeds into a central system that lets an operator apply and adjust tariff policy in real time, rather than reprogramming hardware at each device individually.",
        ],
      },
      {
        heading: "Why this matters more than it sounds",
        paragraphs: [
          "The case for open-loop payment isn't just convenience; it changes the economics and security of running a fare system.",
        ],
        bullets: [
          "Reduced fraud and theft losses. When cash and physical tokens move through a network of vending machines, farebox operators, and human handlers, there are multiple points where revenue can leak: through fraud, theft, or simple human error. Digital, card-based payment narrows that surface considerably, since the transaction is authorized and recorded electronically rather than handled as physical currency.",
          "Controlled flow of funds. Real-time transaction data means operators can see revenue as it's collected, rather than reconciling it after the fact, which is a meaningful shift for authorities used to end-of-month or end-of-quarter reporting cycles.",
          "Improved passenger service quality. Riders don't need to learn a new payment system, carry a separate card, or worry about a balance running out mid-journey; they use money they already have, in a wallet they're already carrying.",
          "Contactless payment, at scale, without new hardware for every payment network. Because the fare system is built to work with multiple payment modes, mobile, card, and cash, authorities aren't locked into supporting only one issuer or one card scheme.",
        ],
      },
      {
        heading: "Proof at BRT scale",
        paragraphs: [
          "This isn't a theoretical benefit; it's already running on live networks. On Pakistan's Islamabad-Rawalpindi MetroBus, the flagship 22.5 km intercity BRT corridor connecting the two cities across 24 stations, TRVERSE delivered the automated fare collection system, along with the payment application development and the Mastercard and Visa certifications required to accept those cards for cashless journeys at scale. Certification isn't a formality; it means the fare system meets the security and interoperability standards that global card networks require before a transit operator can accept their cards directly at the gate.",
          "The same open-payment approach underpins the partnership between LMKR, Mastercard, and the Bank of Khyber under the Mastercard Transit Partner Program Agreement, aimed at advancing Pakistan's transit landscape and extending open-loop payment capability to more networks.",
          "And the operational upside compounds with ridership. On the Peshawar BRT network, which carries over 220,000 passengers daily, moving to automated, real-time fare collection was central to reducing fare evasion from over 22% to under 4%: a result that would be far harder to achieve, let alone sustain, with cash- and token-based collection at that volume.",
        ],
      },
      {
        heading: "The direction transit fare payment is heading",
        paragraphs: [
          "Open-loop, contactless fare collection is no longer an emerging idea in mass transit; it's the direction the industry has already committed to, from major global metros to fast-growing BRT networks across South Asia and the Middle East. For transport authorities weighing how to modernize fare collection, the more immediate question isn't whether to move to open-loop payment, but how to do it as part of a connected system: one where fare data feeds directly into fleet management, scheduling, and network-wide analytics, instead of sitting in a payment silo of its own.",
          "Talk to TRVERSE about bringing open-loop, EMV-certified fare collection to your network.",
        ],
      },
    ],
  },
  {
    slug: "from-reactive-to-predictive-ai-transit",
    title: "From Reactive to Predictive: How AI Is Changing the Way Cities Run Transit",
    category: "Blog",
    date: "May 2026",
    datePublishedIso: "2026-05-31",
    excerpt:
      "Modern transit networks are shifting from reactive operations to predictive monitoring, using fare, fleet, and ITS data together to catch problems while they are still small.",
    image: "/insights/from-reactive-to-predictive-ai-transit.webp",
    sourceUrl: "/get-a-demo",
    intro:
      "For most of its history, mass transit has been run reactively. A bus breaks down, and maintenance finds out when the driver calls it in. Fare evasion is caught in a monthly audit, months after the revenue is already gone. A route starts underperforming, and nobody notices until ridership numbers come in at quarter's end. By the time the problem is visible, it has already cost money, service reliability, or passenger trust. The shift happening across modern transit networks is a move from this reactive model to a predictive one, using the data a network already generates to catch problems while they're still small.",
    sections: [
      {
        heading: "Every transit network is already talking to itself",
        paragraphs: [
          "A city bus network generates a constant stream of data: every tap of a card at a validator, every GPS ping from a vehicle, every gateline transaction, every dispatch event. Individually, these are just operational logs. Together, they're a live picture of how the network is actually behaving versus how it's supposed to behave.",
          "The problem most transit authorities face isn't a lack of data; it's that the data lives in disconnected systems. Fare collection sits in one platform, fleet tracking in another, scheduling in a third. By the time someone manually cross-references them, the moment to act has passed.",
          "This is the gap TRVERSE is built to close. As part of a single platform connecting automated fare collection, intelligent transport systems, fleet management, and AI monitoring, TRVERSE analyses fare, fleet, passenger, and system data together, not in silos, to surface anomalies, predict failures, and recommend interventions before problems escalate into service disruptions or revenue loss.",
        ],
      },
      {
        heading: "What predictive monitoring actually looks like in practice",
        paragraphs: [
          "A few capabilities illustrate the shift from dashboards that report the past to systems that flag what's about to go wrong:",
        ],
        bullets: [
          "Real-time network health scoring gives operators a single composite KPI across fare, fleet, and ITS components, instead of forcing a control room to piece together status from five different screens.",
          "Anomaly detection works by learning what \"normal\" looks like for a given corridor, vehicle, or fare gate, then flagging statistical deviations, such as a validator with an unusual failure rate or a route drifting off its typical dwell times, before they compound into bigger issues.",
          "Revenue leakage detection applies pattern recognition across transaction and gateline data to catch fare evasion trends that would otherwise only surface in a manual audit.",
          "Predictive maintenance alerts use vehicle and infrastructure telemetry to flag likely faults before a vehicle actually fails on route, which is the difference between a scheduled repair and a stranded bus during peak hours.",
          "A natural language query interface lets operations staff ask questions of their data directly, rather than waiting on a report to be built.",
        ],
      },
      {
        heading: "Why this matters most at scale",
        paragraphs: [
          "None of this is hypothetical. It's the same category of problem transit authorities deal with every day: fare evasion, breakdowns, delayed reporting, and disconnected fleet data that make it harder to improve reliability and respond to passengers in real time.",
          "The value of predictive monitoring compounds as a network grows. A single-route operator can often manage with manual oversight. A network carrying hundreds of thousands of passengers a day across dozens of stations cannot.",
          "That's the environment TRVERSE was built for. The Peshawar BRT network, delivered with TransPeshawar, now carries over 220,000 passengers daily. On that network, real-time operational intelligence combined with automated fare collection helped bring fare evasion down from over 22% to under 4%, a result that would be extremely difficult to sustain through manual auditing alone at that ridership level. It's also the kind of result that has drawn international recognition, including Best Smart Ticketing Programme honors at Transport Ticketing Global and finalist status at the Decarbonising Transport Awards for public engagement.",
          "The same connected approach underpins the Islamabad-Rawalpindi MetroBus, Pakistan's flagship intercity BRT corridor spanning 22.5 km and 24 stations, and the newer Masar Electric BRT in Makkah, Saudi Arabia, the first electric BRT network at the Masar Destination, aligned with Saudi Arabia's sustainability goals.",
        ],
      },
      {
        heading: "The bigger shift: fare, fleet, and AI as one system",
        paragraphs: [
          "The reason predictive monitoring works well on these networks isn't the AI layer in isolation; it's that the AI layer sits on top of fare collection, ITS, scheduling, and fleet data that are already unified. An anomaly detection engine is only as good as the data feeding it, and data that's fragmented across systems produces predictions with blind spots.",
          "This is the core argument for treating fare collection, intelligent transport systems, fleet management, and AI monitoring as one connected platform rather than separate procurements stitched together after the fact. When a fare anomaly, a vehicle fault, and a scheduling gap can all be seen against the same operational timeline, an operator isn't just reacting faster; they're seeing the actual relationships between problems that used to look unrelated.",
          "For transport authorities, city governments, and private operators managing network-scale systems, that's the practical promise of predictive, AI-driven transit: fewer surprises, faster response, and a system that gets better at flagging its own problems the longer it runs.",
          "Talk to TRVERSE about how a connected fare, fleet, and AI platform could work for your network.",
        ],
      },
    ],
  },
  {
    slug: "trverse-gitex-africa-2026-real-time-transit",
    title: "TRVERSE at GITEX Africa 2026: Transit systems are being judged by how well they respond in real time",
    category: "TRVERSE",
    date: "April 2026",
    datePublishedIso: "2026-04-09",
    excerpt:
      "At GITEX Africa 2026 in Marrakech, TRVERSE highlighted how real-time visibility, coordination, and faster decision-making are becoming baseline expectations for modern public transport.",
    image: "/solutions/gitex-africa.png",
    sourceUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7448196754816090112/",
    intro:
      "TRVERSE participated in GITEX Africa 2026, held from 7 to 9 April in Marrakech, Morocco, where governments, transport authorities, technology providers, and startups explored the future of digital infrastructure and urban mobility.",
    sections: [
      {
        heading: "A New Benchmark for Transit Performance",
        paragraphs: [
          "One clear takeaway from the event was that transit systems are increasingly evaluated by their ability to respond in real time.",
          "Across network operations and passenger experience, visibility, coordination, and faster decision-making were presented as baseline expectations rather than long-term goals.",
        ],
      },
      {
        heading: "Conversations with City and Mobility Leaders",
        paragraphs: [
          "TRVERSE engaged with city leaders and mobility professionals throughout the event, reinforcing the case for integrated, data-driven transport systems.",
          "The focus remained on connecting every operational layer so operators can sustain a consistently responsive service.",
        ],
      },
      {
        heading: "How This Aligns with TRVERSE Solutions",
        paragraphs: [
          "This direction closely aligns with TRVERSE's smart mobility approach, centered on real-time operational control and reliable, seamless passenger journeys.",
          "The discussions at GITEX Africa reflected how quickly this standard is becoming universal across emerging and mature mobility ecosystems.",
        ],
      },
    ],
  },
  {
    slug: "trverse-transit-ticketing-fare-collection-mena-2025",
    title: "TRVERSE at Transit Ticketing and Fare Collection MENA 2025",
    category: "TRVERSE",
    date: "September 2025",
    datePublishedIso: "2025-09-17",
    excerpt:
      "At Transit Ticketing and Fare Collection MENA 2025 in Dubai, TRVERSE showcased smart mobility solutions and reinforced the value of integrated, interoperable fare systems for a cashless connected ecosystem.",
    image: "/solutions/fare-collection-mena.jpg",
    sourceUrl:
      "https://www.linkedin.com/posts/trverse-official_trverse-smartmobility-transit-activity-7374037843888881664-fX76?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAArVS_YBUaEW9wnrgbDlUAN4ID2jmywxGt0",
    intro:
      "TRVERSE showcased its smart mobility solutions at Transit Ticketing and Fare Collection MENA 2025 in Dubai and also served as coffee sponsor for the conference's fifth edition, held on 16 and 17 September at the Anantara Downtown Dubai Hotel.",
    sections: [
      {
        heading: "Regional Forum for Future Fare Infrastructure",
        paragraphs: [
          "The event brought together public transport authorities, operators, and technology leaders from across MENA to shape the future of mobility.",
          "Discussions covered open-loop payments, EV charging integration, AI-driven ticketing, and nationwide fare systems, signaling rapid movement toward a fully cashless and connected ecosystem.",
        ],
      },
      {
        heading: "Why the Conference Matters",
        paragraphs: [
          "Transit Ticketing and Fare Collection MENA is a key platform for advancing automated fare collection across the region.",
          "It convenes the public and private sector stakeholders responsible for designing and deploying next-generation payment infrastructure.",
        ],
      },
      {
        heading: "TRVERSE Perspective",
        paragraphs: [
          "For TRVERSE, the focus on integrated and interoperable fare systems reflects core work across smart mobility programs.",
          "The event enabled valuable engagement with partners, city leaders, and innovators, and further validated the need to keep building accessible and future-ready mobility solutions for MENA and beyond.",
        ],
      },
    ],
  },
  {
    slug: "trverse-peshawar-brt-finalist-2026",
    title: "TransPeshawar Named Finalists at Decarbonising Transport Awards 2026",
    category: "TRVERSE",
    date: "March 31, 2026",
    datePublishedIso: "2026-03-31",
    excerpt:
      "TransPeshawar was named finalists for Best Behaviour Change & Public Engagement, recognizing BRT Peshawar's contribution to sustainable urban mobility.",
    image: "/insights/trverse-peshawar-brt-finalist-2026.webp",
    heroImage: "/insights/trverse-peshawar-brt-finalist-2026-hero.webp",
    showContentImage: false,
    imageObjectFit: "contain",
    sourceUrl: "https://lmkr.com/insights/trverse-peshawar-brt-finalist-2026",
    intro:
      "TRVERSE, in collaboration with TransPeshawar, has been named a finalist at the Decarbonising Transport Awards 2026 in the category of Best Behaviour Change & Public Engagement.",
    sections: [
      {
        heading: "Recognition for Sustainable Mobility",
        paragraphs: [
          "The recognition highlights the role of BRT Peshawar in encouraging a shift toward more sustainable urban mobility.",
          "By improving accessibility, reliability, and user experience, the system has helped drive increased adoption of public transport across the city.",
        ],
      },
      {
        heading: "TRVERSE Contribution",
        paragraphs: [
          "TRVERSE supported the initiative through the delivery of intelligent transport systems and automated fare collection, enabling efficient operations and a seamless commuter experience.",
          "The project reflects a broader effort to reduce emissions and promote cleaner, more efficient transport networks in Pakistan.",
        ],
      },
      {
        heading: "Global Context",
        paragraphs: [
          "Being named a finalist places BRT Peshawar among leading global initiatives working to reduce the environmental impact of urban transportation.",
        ],
      },
    ],
  },
  {
    slug: "lmkr-delivers-electric-brt-network-masar-makkah",
    title: "TRVERSE Delivers Electric BRT Network at Masar Destination, Makkah",
    category: "TRVERSE",
    date: "March 31, 2026",
    datePublishedIso: "2026-03-31",
    excerpt:
      "TRVERSE delivered the first electric BRT network at Masar Destination in Makkah, enabling cleaner and more efficient mobility at scale.",
    image: "/insights/lmkr-delivers-electric-brt-network-masar-makkah.webp",
    sourceUrl: "https://lmkr.com/insights/lmkr-delivers-electric-brt-network-masar-makkah",
    intro:
      "TRVERSE has successfully delivered the first electric Bus Rapid Transit network at Masar Destination in Makkah, Saudi Arabia.",
    sections: [
      {
        heading: "Vision 2030-Aligned Infrastructure",
        paragraphs: [
          "Developed in partnership with Electromin and aligned with Saudi Arabia's Vision 2030, the project marks a major step toward cleaner and more efficient urban transport in the region.",
          "The system is designed to support high passenger volumes while reducing emissions and improving operational efficiency.",
        ],
      },
      {
        heading: "Delivered Solution Stack",
        paragraphs: [
          "TRVERSE implemented key components including automated fare collection, intelligent transport systems, fleet monitoring, and real-time passenger information.",
          "These systems provide operators with better visibility and control while improving the overall passenger experience.",
        ],
      },
      {
        heading: "Regional Benchmark",
        paragraphs: [
          "The Makkah BRT network is expected to serve millions of travelers annually, setting a new benchmark for sustainable, high-capacity public transport infrastructure in the Middle East.",
        ],
      },
    ],
  },
  {
    slug: "trverse-wins-big-at-pasha-ict-awards",
    title: "Trverse Wins Big at P@SHA ICT Awards",
    category: "TRVERSE",
    date: "2022",
    datePublishedIso: "2022-01-01",
    excerpt:
      "Trverse continued its winning streak at the 18th P@SHA ICT Awards, with TRVERSE recognized across consumer, industrial, and public-sector categories.",
    image: "/insights/trverse-wins-big-at-pasha-ict-awards.webp",
    sourceUrl: "https://lmkr.com/insights/trverse-wins-big-at-pasha-ict-awards",
    intro:
      "Trverse stood out at the 18th P@SHA ICT Awards as TRVERSE secured wins in three categories, reinforcing the impact of its urban mobility solutions across Pakistan.",
    sections: [
      {
        heading: "Award Highlights",
        paragraphs: [
          "P@SHA ICT Awards recognize leaders and unsung contributors shaping Pakistan's IT industry, economy, and global technology footprint.",
          "TRVERSE's latest win continues a strong history of recognition, including multiple awards in previous years and a 2021 award for Zu App.",
        ],
      },
      {
        heading: "Recognized Solutions",
        paragraphs: [
          "This year, TRVERSE was recognized for some of its most established mobility solutions.",
          "AFC had also been recognized previously at Transport Ticketing Global in London.",
        ],
        bullets: [
          "Open Marketplace - Marketplaces, Consumer",
          "IITS - Transport, Industrial",
          "AFC - Government & Citizen Service, Public Sector",
        ],
      },
      {
        heading: "Leadership Perspective",
        paragraphs: [
          "Vice President Technology Business & Alliances, TRVERSE, Nasir Tanveer, shared that recognition from Pakistan's own technology fraternity is especially meaningful.",
          "He emphasized that while Trverse has already transformed the urban mobility landscape, the team's roadmap is only beginning.",
        ],
      },
    ],
  },
  {
    slug: "zu-peshawar-best-smart-ticketing-programme",
    title: "Zu Peshawar Gets Global Recognition for the Best Smart Ticketing Programme",
    category: "TRVERSE",
    date: "June 28, 2022",
    datePublishedIso: "2022-06-28",
    excerpt:
      "TransPeshawar and TRVERSE received the Best Smart Ticketing Programme (200K+ journeys) award at Transport Ticketing Global 2022 in London.",
    image: "/insights/zu-peshawar-best-smart-ticketing-programme.webp",
    heroImage: "/insights/zu-peshawar-best-smart-ticketing-programme-hero.webp",
    imageObjectFit: "contain",
    sourceUrl: "https://lmkr.com/insights/zu-peshawar-best-smart-ticketing-programme",
    intro:
      "TransPeshawar and TRVERSE received international recognition as Peshawar BRT won Best Smart Ticketing Programme (200K+ journeys) at Transport Ticketing Global 2022.",
    sections: [
      {
        heading: "Award Context",
        paragraphs: [
          "Transport Ticketing Global recognized TransPeshawar for improving daily mobility through innovative smart ticketing services, with TRVERSE as the technology partner.",
          "The award ceremony took place during the 10th annual Transport Ticketing Awards in London.",
        ],
      },
      {
        heading: "Why the Programme Stood Out",
        paragraphs: [
          "The category evaluates public transport authorities and technology partners that launch successful smart ticketing programs serving 200,000+ daily journeys.",
          "Judging factors include adoption, implementation duration, sustainability, and overall impact.",
        ],
      },
      {
        heading: "Global Competition and Industry Relevance",
        paragraphs: [
          "TransPeshawar won among international finalists from Indonesia, Brazil, Australia, the United States, New South Wales, and Kazakhstan.",
          "Transport Ticketing Global brings together smart ticketing and mobility experts from over 70 countries and highlights innovation that keeps passengers safe and moving.",
        ],
      },
    ],
  },
  {
    slug: "lmkr-mastercard-bok-peshawar-transit-partnership",
    title: "LMKR, Mastercard and BOK Revolutionize Transit Solutions in Peshawar with Innovative Partnership",
    category: "TRVERSE",
    date: "August 29, 2023",
    datePublishedIso: "2023-08-29",
    excerpt:
      "LMK Resources Pakistan (Private) Limited, Mastercard, and Bank of Khyber partnered to introduce open-loop EMV transit payments, improving commuter convenience and financial inclusion.",
    image: "/solutions/master-card.jpg",
    sourceUrl: "https://lmkr.com/insights/lmkr-mastercard-bok-peshawar-transit-partnership",
    intro:
      "LMK Resources Pakistan (Private) Limited, Mastercard, and Bank of Khyber partnered under the Mastercard Transit Partner Program Agreement to advance Pakistan's transit landscape.",
    sections: [
      {
        heading: "Partnership Scope",
        paragraphs: [
          "The collaboration enables the development and deployment of EMV transit solutions designed to modernize commuter payments in Peshawar.",
          "Open-loop payments remove reliance on conventional paper tickets and allow commuters to use debit and credit cards directly for fares.",
        ],
      },
      {
        heading: "Enterprise and Public Value",
        paragraphs: [
          "The partnership combines global transit payment expertise with local implementation capability to deliver secure, scalable, and cost-effective travel payments.",
          "Aligned with Pakistan's digital transformation ambitions, this initiative sets a higher standard for accessibility, convenience, and financial inclusion.",
        ],
      },
    ],
  },
];

export const blogPosts = insights.filter((item) => item.category === "Blog");
export const insightPosts = insights.filter((item) => item.category !== "Blog");
