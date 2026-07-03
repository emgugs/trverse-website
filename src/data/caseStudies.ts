export type CaseStudy = {
  slug: string;
  title: string;
  location: string;
  summary: string;
  heroImage: string;
  /** Short factual lead-in shown above the headline (optional). */
  headline?: string;
  /** Emphasized subheading shown under the Challenge section title (optional). */
  challengeLead?: string;
  /** Key facts shown as a definition-style card near the top. */
  factSheet?: Array<{
    label: string;
    value: string;
  }>;
  overview: string;
  challenge: string[];
  solution: string[];
  solutionKeyComponents?: string[];
  networkMap?: {
    title: string;
    image?: string;
    caption?: string;
  };
  benefits: Array<{
    title: string;
    description: string;
  }>;
  /** Metric → result pairs rendered as an outcomes table (optional). */
  outcomes?: Array<{
    metric: string;
    result: string;
  }>;
  additionalNotes?: string[];
  stats: Array<{
    value: string;
    label: string;
  }>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "masar-makkah-electric-brt",
    title: "Masar Electric BRT, Makkah",
    location: "Makkah, Saudi Arabia",
    summary:
      "LMKR and TRVERSE delivered the first electric Bus Rapid Transit network at Masar Destination, a landmark mixed-use development in Makkah, providing clean, high-capacity mobility aligned with Saudi Arabia's sustainability commitments.",
    heroImage: "/assets/masar.webp",
    headline:
      "The first electric BRT network in Makkah, where mobility meets Vision 2030.",
    factSheet: [
      {
        label: "Client",
        value: "Masar Destination (LMKR / TRVERSE partnership)",
      },
      { label: "Location", value: "Makkah, Saudi Arabia" },
      { label: "Network type", value: "Electric BRT" },
      {
        label: "Alignment",
        value: "Saudi Vision 2030 mobility and sustainability agenda",
      },
      { label: "Solutions deployed", value: "AFC, Fleet Management, ITS" },
    ],
    overview: "",
    challenge: [
      "Masar Destination required a transit solution that could serve large visitor and resident populations reliably, while meeting the environmental and operational standards of a flagship Vision 2030 development.",
      "The solution needed to be zero-emission, capable of handling high-density peak flows, and integrated with the broader Masar mobility and hospitality ecosystem.",
    ],
    solution: [],
    solutionKeyComponents: [
      "Full electric BRT fleet with TRVERSE platform integration",
      "AFC supporting contactless and mobile payment for domestic and international visitors",
      "Fleet management with EV-specific charging status monitoring and route optimisation",
      "AI based analytics for driver assistance and behavior management",
      "ITS with real-time passenger information in Arabic and English",
      "Deployed in partnership with LMKR across the full Masar site infrastructure",
    ],
    outcomes: [
      {
        metric: "Emissions",
        result: "Zero direct emissions from BRT operations",
      },
      {
        metric: "Payment accessibility",
        result: "Multi-language, multi-currency contactless support",
      },
      {
        metric: "Fleet integration",
        result: "Full EV fleet monitoring and charging management",
      },
      {
        metric: "Strategic alignment",
        result: "Supports Saudi Vision 2030 sustainable mobility targets",
      },
    ],
    stats: [],
    benefits: [],
  },
  {
    slug: "peshawar-brt",
    title: "Peshawar BRT",
    location: "Peshawar, Pakistan",
    summary:
      "TransPeshawar and TRVERSE built a transit network that carries over 220,000 passengers daily, with fare evasion reduced from over 22% to under 4%, and real-time operational intelligence that has set a new standard for BRT in South Asia.",
    heroImage: "/assets/BRT-Peshawar-.webp",
    headline:
      "Transforming Pakistan's most ambitious BRT into a model for the region.",
    factSheet: [
      { label: "Client", value: "TransPeshawar" },
      { label: "Location", value: "Peshawar, Pakistan" },
      { label: "Network type", value: "Bus Rapid Transit" },
      { label: "Daily ridership", value: "300,000+" },
      {
        label: "Solutions deployed",
        value:
          "AFC, ITS, Fleet Management, Bi-Cycle Sharing System, Grievance Management, Control Room, Data Center",
      },
      {
        label: "Recognition",
        value:
          "Transport Ticketing Global 2022 — Best Smart Ticketing Programme",
      },
    ],
    overview: "",
    challenge: [
      "When TransPeshawar launched Peshawar BRT, the ambition was clear: a high-capacity, modern mass transit system that would transform mobility in one of Pakistan's largest cities.",
      "The operational reality was more complex. A growing network required fare systems that could handle high passenger volumes reliably, payment options accessible to all income groups, and real-time visibility across a fleet operating across the city.",
    ],
    solution: [],
    solutionKeyComponents: [
      "Contactless AFC deployed at all stations and on-board validators",
      "Real-time vehicle tracking and GTFS-RT feeds for passenger information",
      "Intelligent Transport System for fleet monitoring and management",
      "Bi-cycle sharing system integrated with the BRT network",
      "Partnership with local banks and financial wallets for local payment infrastructure",
    ],
    outcomes: [
      {
        metric: "Fare evasion rate",
        result: "Reduced from 22%+ to under 4% in year one",
      },
      {
        metric: "Daily ridership",
        result: "300,000+ validated journeys per day",
      },
      {
        metric: "Payment options",
        result: "Contactless, mobile, and transit card — all accepted",
      },
      {
        metric: "Industry recognition",
        result: "Transport Ticketing Global 2022, Best Smart Ticketing Programme",
      },
      {
        metric: "Operational reporting",
        result:
          "Real-time KPIs accessible to operations and government stakeholders",
      },
    ],
    stats: [],
    benefits: [],
  },
  {
    slug: "lahore-metro",
    title: "Lahore MetroBus",
    location: "Lahore, Pakistan",
    summary:
      "Punjab Mass Transit Authority partnered with LMKR and TRVERSE to deliver integrated security, surveillance, KPI monitoring, and helpdesk across Lahore MetroBus feeder operations, giving 180,000+ daily commuters a safer, better-managed journey.",
    heroImage: "/assets/lahore-metro.webp",
    headline:
      "Integrated security and operational monitoring for Pakistan's second city.",
    factSheet: [
      { label: "Client", value: "Punjab Mass Transit Authority" },
      { label: "Location", value: "Lahore, Pakistan" },
      { label: "Network type", value: "BRT feeder operations" },
      { label: "Daily ridership", value: "180,000+" },
      { label: "Fleet", value: "200 buses across 17 feeder routes" },
      {
        label: "Solutions deployed",
        value:
          "Integrated security, surveillance, KPI monitoring, communications, helpdesk",
      },
    ],
    overview:
      "Punjab Mass Transit Authority was tasked with creating and maintaining a safe, efficient, and comfortable urban transportation system for Pakistan's second-largest city. With a population exceeding 11 million (growing at 3.5% annually) Lahore's public transport infrastructure had long been unsafe, fragmented, and poorly managed. The Government of Punjab partnered with LMKR to ensure feeder routes of the metro bus project in Lahore operate at optimal performance levels. TRVERSE delivered an integrated security and monitoring solution aimed at giving commuters a secure, hassle-free journey.",
    challengeLead:
      "An unsafe, fragmented network in Pakistan's second-largest city.",
    challenge: [
      "Lahore's public transport network was unsafe, under-developed, fragmented, poorly managed, and highly inefficient. Residents preferred cars or motorcycles to buses, deepening congestion, harassment, accidents, and road crime. Vehicles such as wagons frequently operated without valid licences or authorised routes and were routinely overfilled, offering little safety or comfort. The city needed a modern mass transit system that would entice people to ride public transport rather than rely on private vehicles and required a real-time monitoring and security infrastructure to sustain that confidence at network scale.",
      "The feeder route network, spanning 200 buses across 17 routes and 28.5 km, required centralised visibility and coordinated incident management that the existing disjointed systems could not provide.",
    ],
    solution: [],
    solutionKeyComponents: [
      "Centrally controlled video surveillance and security operations across all feeder buses and corridor infrastructure",
      "Integrated communications and network monitoring connecting control staff, operators, and field teams",
      "KPI monitoring of bus operators and corridor performance, ensuring operators meet required service levels",
      "Helpdesk and incident coordination for disruptions and emergencies, enabling rapid service restoration",
    ],
    outcomes: [
      { metric: "Daily ridership", result: "180,000+ commuters served" },
      { metric: "Total fleet", result: "200 buses" },
      { metric: "Feeder routes", result: "17 routes across the network" },
      { metric: "Total route distance", result: "28.5 km" },
      {
        metric: "Commuter safety",
        result:
          "Integrated CCTV and security operations deployed across all feeder services",
      },
      {
        metric: "Incident response",
        result:
          "Centralized surveillance enables rapid traffic restoration after disruptions",
      },
    ],
    stats: [],
    benefits: [],
  },
  {
    slug: "lahore-orange-line",
    title: "Lahore Orange Line Metro Train",
    location: "Lahore, Pakistan",
    summary:
      "Pakistan's first urban mass rapid transit rail system: a 27 km electric line with 26 stations. TRVERSE delivered AFC, payment application development, and Mastercard and Visa certifications for cashless access at scale.",
    heroImage: "/assets/lahore-orange-line.jpg",
    headline:
      "Pakistan's first urban mass rapid transit rail system. AFC and card payments at scale.",
    factSheet: [
      { label: "Client", value: "Punjab Mass Transit Authority" },
      { label: "Location", value: "Lahore, Pakistan" },
      { label: "Network type", value: "Urban metro rail (elevated and underground)" },
      { label: "Corridor length", value: "27 km" },
      { label: "Stations", value: "26" },
      {
        label: "Solutions deployed",
        value:
          "AFC, Payment Application Development, Mastercard & Visa Certifications",
      },
      { label: "Year inaugurated", value: "October 2020" },
      { label: "Project context", value: "CPEC flagship infrastructure project" },
    ],
    overview:
      "The Lahore Orange Line Metro Train is Pakistan's first urban mass rapid transit rail system; a 27-kilometre elevated and underground electric line with 26 stations connecting Ali Town to Dera Gujran across Lahore. Inaugurated in October 2020 as a flagship CPEC infrastructure project, it gave the city a high-capacity, zero-emission alternative to road-based transport on one of its busiest corridors. TRVERSE delivered the digital payments layer for the network (automated fare collection, payment application development, and Mastercard and Visa payment certifications) supporting cashless, card-ready access across stations and gates.",
    challengeLead:
      "A city without rail, a population outgrowing the road network.",
    challenge: [
      "Lahore's population and vehicle growth placed severe pressure on road networks, with commuters facing long, unpredictable journeys through congested corridors and limited reliable public transport options. Informal and fragmented bus services could not absorb rising demand, pushing more residents toward private cars and motorcycles and deepening pollution and travel-time inequality across the city. Authorities needed Pakistan's first urban rail line to move high passenger volumes efficiently, while meeting modern standards for electronic fare collection and bank-card payments at station scale; requirements that demanded purpose-built AFC infrastructure and certified payment integrations.",
    ],
    solution: [],
    solutionKeyComponents: [
      "Automated fare collection deployed across all 26 stations including station gates, ticketing infrastructure, and smart validation aligned to heavy daily ridership",
      "Payment application development; purpose-built for the metro rail environment, supporting fare products, top-ups, and high-volume commuter transactions",
      "Mastercard and Visa payment certifications secured, enabling bank-card acceptance and extending trusted payment options to all Orange Line passengers",
    ],
    outcomes: [
      {
        metric: "Electric rail corridor",
        result: "27 km elevated and underground alignment",
      },
      { metric: "Stations", result: "26 stations — Ali Town to Dera Gujran" },
      { metric: "Year inaugurated", result: "October 2020" },
      {
        metric: "Emissions",
        result: "Zero direct emissions — fully electric rolling stock",
      },
      {
        metric: "Payment acceptance",
        result: "AFC, smart card, Mastercard and Visa contactless",
      },
      {
        metric: "Historic first",
        result:
          "Pakistan's first urban MRT — model for future rail deployments nationally",
      },
    ],
    stats: [],
    benefits: [],
  },
  {
    slug: "multan-metro",
    title: "Multan MetroBus",
    location: "Multan, Pakistan",
    summary:
      "TRVERSE delivered integrated security and monitoring for Metro Bus Multan, with 560 cameras, KPI tracking, and helpdesk coordination across 135 buses and 21 stations serving 100,000+ daily commuters in Southern Punjab.",
    heroImage: "/assets/multan-metro.jpg",
    headline:
      "Integrated security and monitoring for safe, reliable transit in Southern Punjab.",
    factSheet: [
      { label: "Client", value: "Punjab Mass Transit Authority" },
      { label: "Location", value: "Multan, Pakistan" },
      { label: "Network type", value: "Metro Bus with feeder routes" },
      { label: "Daily ridership", value: "100,000+" },
      { label: "Fleet", value: "135 buses" },
      { label: "Corridor length", value: "18.5 km" },
      { label: "Stations", value: "21" },
      { label: "Cameras deployed", value: "560" },
      {
        label: "Solutions deployed",
        value:
          "Integrated security, video surveillance, KPI monitoring, communications, helpdesk",
      },
    ],
    overview:
      "Multan is the major cultural and economic centre of Southern Punjab, attracting people from across the province for education, work, and commerce. Punjab Mass Transit Authority (PMA) was established by the Government of Pakistan for the planning, construction, operation, and maintenance of mass transit systems across Punjab's major cities. To provide Multan with a safe and reliable public transport system, the Government of Punjab partnered with LMKR to deliver an integrated security and monitoring solution for Metro Bus Multan, protecting passengers across a fleet of 135 buses and 21 stations.",
    challengeLead:
      "A fast-growing city with no organised public transit and rising road pressure.",
    challenge: [
      "Multan's population grew from 1.1 million in 1998 to over 2 million by 2021, with annual growth projected to reach 2.5% through the next decade. For the longest time, the city's only public transport options were Mazda vans, Toyota Hiace minibuses, Suzuki wagons, and rickshaws — no organised bus service, no consistent standards of safety or comfort. Reliance on private transport drove a significant increase in traffic congestion, road rage, and accidents, deteriorating Multan's road network and overall quality of life. The city required a reliable, safe, and affordable public transit system, and that system required real-time security and monitoring infrastructure to sustain passenger confidence from day one.",
    ],
    solution: [],
    solutionKeyComponents: [
      "Centrally controlled video surveillance with 560 cameras capturing every angle in and around buses and at stations, providing maximum visibility across the network",
      "Integrated communications and network monitoring connecting control staff, operators, and field teams in real time",
      "KPI monitoring of bus operators to ensure Metro Bus Multan meets the required performance levels of the mass transit system",
      "Helpdesk and incident coordination for disruptions and emergencies enabling rapid service restoration across 14 feeder routes",
    ],
    outcomes: [
      { metric: "Daily ridership", result: "100,000+ commuters served" },
      { metric: "Total fleet", result: "135 buses" },
      {
        metric: "Stations",
        result: "21 stations along the 18.5 km corridor",
      },
      {
        metric: "Cameras deployed",
        result: "560 — across buses, stations, and infrastructure",
      },
      { metric: "Feeder routes", result: "14 routes covered" },
      {
        metric: "Commuter safety",
        result:
          "Centralized CCTV and security operations deployed across the full network",
      },
    ],
    stats: [],
    benefits: [],
  },
  {
    slug: "islamabad-rawalpindi-metrobus",
    title: "Islamabad–Rawalpindi MetroBus",
    location: "Islamabad & Rawalpindi, Pakistan",
    summary:
      "Pakistan's flagship intercity BRT corridor, 22.5 km between Islamabad and Rawalpindi with 24 stations. TRVERSE delivered AFC, payment application development, and Mastercard and Visa certifications for cashless journeys at scale.",
    heroImage: "/assets/rwl-metrobus.jpg",
    headline:
      "Connecting Pakistan's twin cities. 22.5 km of precision transit infrastructure.",
    factSheet: [
      {
        label: "Client",
        value: "Punjab Mass Transit Authority / Capital Development Authority",
      },
      { label: "Location", value: "Islamabad & Rawalpindi, Pakistan" },
      { label: "Network type", value: "Dedicated BRT corridor" },
      { label: "Corridor length", value: "22.5 km" },
      {
        label: "Solutions deployed",
        value:
          "AFC, Payment Application Development, Mastercard & Visa Certifications",
      },
      { label: "Year inaugurated", value: "2015" },
    ],
    overview:
      "The Islamabad–Rawalpindi MetroBus Red Line is Pakistan's flagship intercity bus rapid transit corridor, running 22.5 kilometres between Pak Secretariat in Islamabad and Saddar in Rawalpindi along dedicated lanes with 24 high-capacity stations. Launched in 2015, it gave millions of commuters in the twin cities a faster, more predictable alternative to informal transport and private vehicles. TRVERSE delivered the digital payments foundation for the network (automated fare collection, payment application development, and Mastercard and Visa certifications) enabling cashless, card-ready journeys at scale.",
    challengeLead:
      "A national-capital corridor demanding integrated, modern fare infrastructure.",
    challenge: [
      "Rawalpindi and Islamabad form one of Pakistan's largest metropolitan areas, yet for years commuters moved between the twin cities through fragmented, informal transport with little reliability or fare transparency. Rising traffic congestion on the Murree Road and Islamabad Expressway corridors increased travel times and pushed more residents toward private vehicles, straining road capacity across the capital. Authorities needed a high-capacity metro bus link that could move large passenger volumes efficiently, while supporting modern electronic fare collection and bank-card payments at the scale of a national capital corridor.",
    ],
    solution: [],
    solutionKeyComponents: [
      "AFC deployed across all 24 stations with multi-payment support including smart-card validation aligned to high daily ridership",
      "Payment application development; a purpose-built payments layer supporting metro bus fare products, top-ups, and commuter transactions",
      "Mastercard and Visa payment certifications secured, enabling bank-card acceptance and giving commuters trusted payment options at every station",
      "Integrated operations dashboard for corridor-wide service management",
    ],
    outcomes: [
      {
        metric: "Corridor coverage",
        result: "22.5 km dedicated BRT corridor, end-to-end",
      },
      { metric: "Station count", result: "24 high-capacity stations" },
      { metric: "Fleet", result: "68 buses serving peak and off-peak services" },
      {
        metric: "Payment options",
        result: "AFC, smart card, Mastercard and Visa contactless accepted",
      },
      {
        metric: "Intercity connectivity",
        result:
          "Twin cities linked — Islamabad and Rawalpindi commuters served from a single corridor",
      },
      { metric: "Year inaugurated", result: "2015" },
    ],
    stats: [],
    benefits: [],
  },
  {
    slug: "islamabad-orange-line",
    title: "Islamabad Orange Line MetroBus",
    location: "Pakistan",
    summary:
      "A 25.6 km dedicated metro bus corridor linking central Islamabad to the international airport with integrated fare collection, scheduling, and passenger information.",
    heroImage: "/assets/isl-orangeline.jpg",
    overview:
      "The Islamabad Orange Line MetroBus extends the Rawalpindi–Islamabad metro bus network from Faiz Ahmed Faiz Station to New Islamabad International Airport along a dedicated 25.6 km corridor. Inaugurated in April 2022, the line gives residents and travelers a fast, affordable alternative to private vehicles on one of the capital's busiest movement corridors.\n\nTRVERSE delivered the operational technology stack for the corridor — automated fare collection, intelligent transport and scheduling, control room and data center management, and real-time passenger information — giving the Capital Development Authority a unified platform to run reliable airport-linked service.",
    challenge: [
      "Islamabad's rapid growth and the relocation of the international airport outside the city core created strong demand for dependable public transport between central sectors and the airport.",
      "Traffic on the Srinagar Highway corridor was increasingly congested, with commuters relying on private cars, ride-hailing, and informal transport that offered little predictability for airport-bound travel.",
      "Authorities needed a modern metro bus line that could integrate with the existing Red Line network, support high passenger throughput at stations, and operate with the same digital standards as Pakistan's leading BRT programs.",
    ],
    solution: [
      "The Capital Development Authority developed the Orange Line as a dedicated-lane metro bus service with seven stations from Faiz Ahmed Faiz interchange through NUST, Golra Morr, and onward to Islamabad International Airport.",
      "TRVERSE provided, integrated, and commissioned the corridor's core systems — aligning automated fare collection, fleet scheduling, control room operations, and passenger information within a single operational environment.",
      "The deployment connects airport-bound riders to the wider twin-cities metro bus network while giving control teams real-time visibility over vehicles, stations, and service performance across the corridor.",
    ],
    solutionKeyComponents: [
      "Automated fare collection",
      "Intelligent transportation and scheduling system",
      "Control room and data center management",
      "Real-time passenger information management system",
    ],
    stats: [
      { value: "25.6KM", label: "Dedicated corridor" },
      { value: "7", label: "Stations" },
      { value: "15", label: "Buses at launch" },
      { value: "2022", label: "Year inaugurated" },
      { value: "Airport", label: "End-to-end connectivity" },
    ],
    benefits: [
      {
        title: "Automated Fare Collection",
        description:
          "Electronic ticketing, turnstiles, and smart-card validation streamline boarding and reduce cash handling across stations on the corridor.",
      },
      {
        title: "Intelligent Scheduling",
        description:
          "ITS-backed dispatch and scheduling keep buses on headway targets and give operators the tools to coordinate service during peaks and disruptions.",
      },
      {
        title: "Centralized Control",
        description:
          "A dedicated control room and data center environment unifies monitoring of corridor operations, infrastructure, and incident response.",
      },
      {
        title: "Real-Time Passenger Information",
        description:
          "Live service updates and station-facing information help commuters plan airport and intercity journeys with greater confidence.",
      },
    ],
  },
];
