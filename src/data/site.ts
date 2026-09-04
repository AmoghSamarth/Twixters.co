/**
 * Twixters.Co content model.
 *
 * Source of truth for COPY, ASSETS and LINKS is the current live implementation
 * (twixters.lovable.app); source of truth for COMPOSITION is the approved PDF
 * reference. Nothing here is invented — every string, link and date comes from
 * one of those two sources.
 *
 * Scatter geometry (rotation / offsets) is deterministic data, never random.
 */

export type Cta = { label: string; href: string; external?: boolean };

export const site = {
  name: "Twixters.Co",
  title: "Twixters.Co — Branding & Creative Agency in India",
  description:
    "Twixters.Co builds brand identities, design systems and advertising campaigns that actually work. Led by Raj Shegaonkar, 10+ years of branding experience.",
  email: "twixters.co@gmail.com",
  /** The only booking destination that exists in the current implementation. */
  bookingUrl: "https://wa.me/message/TIRNTDQIVJ2YF1",
  copyright: "© Twixters Studio, 2026",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const hero = {
  /** Two lines, each with one inline image chip between the words. */
  lineOneBefore: "We Build",
  lineOneAfter: "Design",
  lineTwoBefore: "that",
  lineTwoAfter: "Actually Works",
  chipA: {
    src: "/assets/chip-collage.jpg",
    alt: "Branding collateral moodboard by Twixters.Co",
    width: 640,
    height: 640,
  },
  chipB: {
    src: "/assets/chip-mark.jpg",
    alt: "Twixters.Co monogram mark",
    width: 640,
    height: 640,
  },
  watermark: "Twixters",
  sub: "We help start-ups and brands create beautiful, functional products, strategic and hassle-free.",
  cta: { label: "Choose your plan", href: "#pricing" } satisfies Cta,
  trustLabel: "Trusted by Leaders",
  /** Only real faces present in the current implementation — none invented. */
  avatars: [
    { src: "/assets/rishi.jpg", alt: "Rishi, Product Lead" },
    { src: "/assets/ujwal.jpg", alt: "Ujwal, Business Owner" },
    { src: "/assets/raj.jpg", alt: "Raj Shegaonkar, Founder" },
  ],
  availability: "Booking Open — 2 Spots Left",
} as const;

/**
 * Portfolio collage. `area` maps to the explicit grid-template-areas below,
 * so proportions and cropping are art-directed, not a uniform CSS grid.
 */
export const collage = [
  { area: "a", src: "/assets/work-1.jpg", alt: "The Saath brand identity collateral" },
  { area: "b", src: "/assets/work-2.jpg", alt: "Gamla organic brand design system" },
  { area: "c", src: "/assets/work-3.jpg", alt: "Cognito Bite protein bar visual identity" },
  { area: "d", src: "/assets/work-5.jpg", alt: "Twixters.Co packaging and print collateral" },
  { area: "e", src: "/assets/work-4.jpg", alt: "The Biryani Story logo and packaging" },
  { area: "f", src: "/assets/work-6.jpg", alt: "Twixters.Co campaign and social creative" },
] as const;

export const collageCta = { label: "See Recent Work", href: "#work" } satisfies Cta;

export const services = {
  eyebrow: "Hello!",
  statement:
    "We help startups and enterprises establish an emotional connection between their products and happy, engaged customers.",
  /** Deterministic scatter: percentages of the section box + fixed rotation. */
  chips: [
    { label: "Design systems", dot: "#e5503a", x: 6, y: 8, rotate: -3 },
    { label: "Advertising", dot: "#333333", x: 2, y: 40, rotate: 2.5 },
    { label: "Research", dot: "#2f6bd8", x: 9, y: 72, rotate: -2 },
    { label: "Branding", dot: "#2f9e5f", x: 72, y: 6, rotate: 3 },
    { label: "Ads Planning", dot: "#d8579c", x: 79, y: 38, rotate: -2.5 },
    { label: "Strategy", dot: "#e0b02a", x: 74, y: 70, rotate: 2 },
  ],
} as const;

export const processSteps = [
  {
    n: "01",
    title: "Brief Us",
    body: "Tell us about your business, goals, and what you need.",
    rotate: -3.2,
    offsetY: 46,
  },
  {
    n: "02",
    title: "We Create",
    body: "Our team gets to work on your design or campaign strategy.",
    rotate: 2,
    offsetY: -14,
  },
  {
    n: "03",
    title: "Launch & Grow",
    body: "You get polished deliverables ready to use and results that follow.",
    rotate: 3.4,
    offsetY: 54,
  },
] as const;

export const testimonials = [
  {
    quote:
      "Twixters transformed our brand into something clear, consistent, and impactful. We've seen better engagement and stronger recall since the rebrand.",
    name: "Rishi",
    role: "Product Lead",
    avatar: "/assets/rishi.jpg",
    /** Diagonally opposed placement, per the reference. */
    align: "left",
  },
  {
    quote:
      "Raj delivers more than design — he builds systems that work. Professional, detail-focused, and easy to collaborate with.",
    name: "Ujwal",
    role: "Business Owner",
    avatar: "/assets/ujwal.jpg",
    align: "right",
  },
] as const;

/**
 * All four cards currently point at the SAME Behance gallery in the live
 * implementation. Preserved verbatim — no per-project links were invented.
 */
const BEHANCE = "https://www.behance.net/gallery/248456131/The-Saathh-Brand-Identity";

export const caseStudies = [
  {
    title: "The Saath",
    tags: ["Branding", "Brew Bar"],
    src: "/assets/work-1.jpg",
    alt: "The Saath — Branding",
    href: BEHANCE,
  },
  {
    title: "Gamla",
    tags: ["Design System", "Organic Brand"],
    src: "/assets/work-2.jpg",
    alt: "Gamla — Design System",
    href: BEHANCE,
  },
  {
    title: "Cognito Bite",
    tags: ["Visual Identity", "Protein Bar"],
    src: "/assets/work-3.jpg",
    alt: "Cognito Bite — Visual Identity",
    href: BEHANCE,
  },
  {
    title: "The Biryani Story",
    tags: ["Logo Design", "Food"],
    src: "/assets/work-4.jpg",
    alt: "The Biryani Story — Logo Design",
    href: BEHANCE,
  },
] as const;

export const founder = {
  eyebrow: "Our Studio",
  heading: { plain: "Pushing boundaries ", muted: "since 2021" },
  portrait: {
    src: "/assets/raj.jpg",
    alt: "Raj Shegaonkar, founder of Twixters.Co",
    width: 900,
    height: 1000,
  },
  name: "Raj Shegaonkar",
  role: "Twixters.Co, Founder",
  bio: "Founded in 2021 by Raj Shegaonkar, Twixters blends creative design with sharp marketing strategy. With 10+ years of experience, we've helped local businesses and growing brands build identities that make people stop, notice, and remember.",
  timeline: [
    {
      role: "Internship",
      org: "Samsung, Panasonic, Asian Paints & Ultratech",
      period: "Feb 2017 → Jan 2019",
    },
    { role: "Graphic Designer", org: "Dreams Experential", period: "Mar 2019 → Feb 2020" },
    { role: "Senior Designer", org: "Center Point Hotel", period: "Jun 2022 → Nov 2023" },
    { role: "Founder / CEO", org: "Twixters.Co", period: "Nov 2023 → Till Now" },
  ],
} as const;

export const pricing = {
  eyebrow: "Pricing",
  heading: "Pick a Plan. Start Growing.",
  planLabel: "One Time",
  planNote: "Custom scope",
  price: "₹5,000",
  priceSuffix: "/ per project",
  availability: "Booking Open — only 2 Spots Left",
  cta: { label: "Book Free Discovery Call", href: site.bookingUrl, external: true } satisfies Cta,
  includedTitle: "What's included",
  included: [
    "Creative design requests",
    "Fast turnaround",
    "Fixed monthly rate",
    "Async communication",
    "Flexible scope",
    "Pause anytime",
  ],
  bio: {
    text: "I'm Raj Shegaonkar, a graphic and brand designer specializing in creating distinctive brand identities. I focus on delivering high-quality, impactful designs with a strong eye for detail and a practical, results-driven approach.",
    name: "Raj Shegaonkar",
    role: "Creative Director at Twixters.Co",
    avatar: "/assets/raj.jpg",
  },
} as const;

export const capabilities = [
  "Senior-level quality",
  "Systems thinking",
  "Developer-friendly",
  "Clear process",
  "On-brand, every time",
  "Reliable partner",
  "Fast execution",
  "Thoughtful feedback",
  "Smooth handoff",
] as const;

export const faqs = [
  {
    q: "What's the difference between a subscription and a custom project?",
    a: "The subscription is ongoing and flexible — ideal for continuous design needs. Custom projects are one-time, fixed-scope engagements for larger goals like a rebrand or product launch.",
  },
  {
    q: "How fast is the turnaround?",
    a: "Most requests are delivered within 1–2 business days. Larger tasks may take longer, but you'll always be kept in the loop.",
  },
  {
    q: "How many requests can I make?",
    a: "As many as you like — with a subscription, you can queue unlimited requests, and they'll be handled one at a time in priority order.",
  },
  {
    q: "What types of design do you handle?",
    a: "Branding, packaging, campaigns, product UI, landing pages, decks and social media visuals — anything that needs to look and feel sharp.",
  },
  {
    q: "What tools do you use?",
    a: "Figma for design, Notion for task management, and WhatsApp or email for async communication.",
  },
  {
    q: "Can I pause the subscription?",
    a: "Yes — you can pause anytime and resume when you're ready. Unused days roll over.",
  },
  {
    q: "Do you offer development too?",
    a: "Raj focuses on design only, but all deliverables are dev-ready. He can also recommend trusted no-code or Webflow/Framer developers if needed.",
  },
] as const;

export const faqContact = {
  image: { src: "/assets/desk.jpg", alt: "Twixters.Co design studio desk" },
  heading: "Have more questions?",
  sub: "Book a free discovery call",
  cta: { label: "Book a Discovery Call", href: site.bookingUrl, external: true } satisfies Cta,
  emailPrefix: "Or, email me at",
} as const;

export const finalCta = {
  mark: "Twixters",
  heading: "Let's Connect",
  body: "Ready to build a brand that actually works? Let's build something remarkable together — available for new projects or just for a chat.",
  cta: { label: "Book a free intro call", href: site.bookingUrl, external: true } satisfies Cta,
} as const;

/**
 * Content that exists in the current live implementation but is NOT part of the
 * approved PDF composition. Kept structured and available, deliberately NOT
 * rendered on the page (per the client brief: do not turn the site into a long
 * generic agency site).
 */
export const offPageContent = {
  whatWeDo: {
    heading: "Complete brand systems",
    groups: [
      {
        title: "Branding Ecosystem",
        items: [
          "Brand Strategy",
          "Brand Positioning",
          "Logo Design",
          "Visual Identity",
          "Brand Guidelines",
          "Brand Toolkit",
          "Typography & Color Systems",
          "Stationery",
          "Packaging",
          "Merchandise",
          "Brand Assets",
          "Social Media Brand Kit",
        ],
      },
      {
        title: "Advertising Campaigns",
        items: [
          "Campaign Strategy",
          "Social Media Creatives",
          "Product Launch Campaigns",
          "Festival & Event Promotions",
          "Hoardings",
          "Newspaper & Magazine Ads",
          "Posters & Flyers",
          "Brochures",
          "Digital Display Ads",
          "POSM & Marketing Collaterals",
        ],
      },
    ],
  },
  industries: [
    "Jewellery",
    "Hospitality",
    "Restaurants & Cafés",
    "Education",
    "Government",
    "Defence",
    "Technology",
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Startups",
    "Corporate",
  ],
  whyTwixters: [
    "Strategic Thinking",
    "Complete Brand Systems",
    "Cross-Platform Consistency",
    "Business-Focused Design",
    "Long-Term Partnership",
  ],
  processStrip: ["Discovery", "Strategy", "Design", "System", "Execution", "Growth"],
} as const;
