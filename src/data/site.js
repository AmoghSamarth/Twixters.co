import { assetUrl } from "../utils/asset";

export const site = {
  name: "Twixters.Co",
  title: "Twixters.Co — Branding & Creative Agency in India",
  description: "Twixters.Co builds brand identities, design systems and advertising campaigns that actually work. Led by Raj Shegaonkar, 10+ years of branding experience.",
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
    { label: "Contact", href: "#contact" }
  ]
};
export const hero = {
  /** Two lines, each with one inline image chip between the words. */
  lineOneBefore: "We Build",
  lineOneAfter: "Design",
  lineTwoBefore: "that",
  lineTwoAfter: "Actually Works",
  chipA: {
    src: assetUrl("/assets/chip-collage.jpg"),
    alt: "Branding collateral moodboard by Twixters.Co",
    width: 640,
    height: 640
  },
  chipB: {
    src: assetUrl("/assets/chip-mark.jpg"),
    alt: "Twixters.Co monogram mark",
    width: 640,
    height: 640
  },
  watermark: "Twixters",
  sub: "We help start-ups and brands create beautiful, functional products, strategic and hassle-free.",
  cta: { label: "Choose your plan", href: "#pricing" },
  trustLabel: "Trusted by Leaders",
  /** Only real faces present in the current implementation — none invented. */
  avatars: [
    { src: assetUrl("/assets/rishi.jpg"), alt: "Rishi, Product Lead" },
    { src: assetUrl("/assets/ujwal.jpg"), alt: "Ujwal, Business Owner" },
    { src: assetUrl("/assets/raj.jpg"), alt: "Raj Shegaonkar, Founder" }
  ],
  availability: "Booking Open — 2 Spots Left"
};
export const collage = [
  { area: "a", src: assetUrl("/assets/work-1.jpg"), alt: "The Saath brand identity collateral" },
  { area: "b", src: assetUrl("/assets/work-2.jpg"), alt: "Gamla organic brand design system" },
  { area: "c", src: assetUrl("/assets/work-3.jpg"), alt: "Cognito Bite protein bar visual identity" },
  { area: "d", src: assetUrl("/assets/work-5.jpg"), alt: "Twixters.Co packaging and print collateral" },
  { area: "e", src: assetUrl("/assets/work-4.jpg"), alt: "The Biryani Story logo and packaging" },
  { area: "f", src: assetUrl("/assets/work-6.jpg"), alt: "Twixters.Co campaign and social creative" }
];
export const collageCta = { label: "See Recent Work", href: "#work" };
export const services = {
  eyebrow: "Hello!",
  statementLines: [
    ["We", "help", "startups", "and", "enterprise", "to"],
    ["establish", "an", "emotional", "connection"],
    ["between", "their", "products", "and", "happy"],
    ["engaged", "customers"]
  ],
  statementTop1: "We help startups and enterprise to",
  statementTop2: "establish an emotional connection",
  statementBottom1: "between their products and happy",
  statementBottom2: "engaged customers",
  statement: "We help startups and enterprise to establish an emotional connection between their products and happy engaged customers",
  leftChips: [
    { label: "Design systems", color: "#f95738", icon: "grid", rotate: 7, offsetX: 0, floatDir: "tl" },
    { label: "Advertising", color: "#22252a", icon: "ad", rotate: -1, offsetX: 14, floatDir: "l" },
    { label: "Research", color: "#2f80ed", icon: "search", rotate: -8, offsetX: 0, floatDir: "bl" }
  ],
  rightChips: [
    { label: "Branding", color: "#22c55e", icon: "curve", rotate: -8, offsetX: 0, floatDir: "tr" },
    { label: "Ads Planning", color: "#e91e63", icon: "planning", rotate: 1.5, offsetX: -14, floatDir: "r" },
    { label: "Strategy", color: "#f59e0b", icon: "strategy", rotate: 8.5, offsetX: 0, floatDir: "br" }
  ],
  chips: [
    { label: "Design systems", dot: "#f95738", color: "#f95738", icon: "grid", rotate: 7 },
    { label: "Advertising", dot: "#22252a", color: "#22252a", icon: "ad", rotate: -1 },
    { label: "Research", dot: "#2f80ed", color: "#2f80ed", icon: "search", rotate: -8 },
    { label: "Branding", dot: "#22c55e", color: "#22c55e", icon: "curve", rotate: -8 },
    { label: "Ads Planning", dot: "#e91e63", color: "#e91e63", icon: "planning", rotate: 1.5 },
    { label: "Strategy", dot: "#f59e0b", color: "#f59e0b", icon: "strategy", rotate: 8.5 }
  ]
};
export const processSteps = [
  {
    n: "1",
    title: "Brief Us",
    body: "Tell us about your business, goals, and what you need.",
    rotate: -5.0,
    offsetY: 24
  },
  {
    n: "2",
    title: "We Create",
    body: "Our team gets to work on your design or campaign strategy.",
    rotate: 9.0,
    offsetY: -24
  },
  {
    n: "3",
    title: "Launch & Grow",
    body: "You get polished deliverables ready to use and results that follow.",
    rotate: -3.0,
    offsetY: 24
  }
];
export const testimonials = [
  {
    quote: "Twixters transformed our brand into something clear, consistent, and impactful. We've seen better engagement and stronger recall since the rebrand.",
    name: "Rishi",
    role: "Product Lead",
    avatar: assetUrl("/assets/rishi.jpg"),
    /** Diagonally opposed placement, per the reference. */
    align: "left"
  },
  {
    quote: "Raj delivers more than design he builds systems that work. Professional, detail-focused, and easy to collaborate with.",
    name: "Ujwal",
    role: "Business Owner",
    avatar: assetUrl("/assets/ujwal.jpg"),
    align: "right"
  }
];
const BEHANCE = "https://www.behance.net/gallery/248456131/The-Saathh-Brand-Identity";
export const caseStudies = [
  {
    title: "The Saath",
    tags: ["Branding", "Brew Bar"],
    src: assetUrl("/assets/work-1.jpg"),
    alt: "The Saath — Branding",
    href: BEHANCE
  },
  {
    title: "Gamla",
    tags: ["Design System", "Organic Brand"],
    src: assetUrl("/assets/work-2.jpg"),
    alt: "Gamla — Design System",
    href: BEHANCE
  },
  {
    title: "Cognito Bite",
    tags: ["Visual Identity", "Protein Bar"],
    src: assetUrl("/assets/work-3.jpg"),
    alt: "Cognito Bite — Visual Identity",
    href: BEHANCE
  },
  {
    title: "The Biryani Story",
    tags: ["Logo Design", "Food"],
    src: assetUrl("/assets/work-4.jpg"),
    alt: "The Biryani Story — Logo Design",
    href: BEHANCE
  }
];
export const founder = {
  eyebrow: "Our Studio",
  heading: { plain: "Pushing boundaries ", muted: "since 2021" },
  portrait: {
    src: assetUrl("/assets/raj.jpg"),
    alt: "Raj Shegaonkar, founder of Twixters.Co",
    width: 900,
    height: 1e3
  },
  name: "Raj Shegaonkar",
  role: "Twixters.Co, Founder",
  bio: "Founded in 2021 by Raj Shegaonkar, Twixters blends creative design with sharp marketing strategy. With 10+ years of experience, we've helped local businesses and growing brands build identities that make people stop, notice, and remember.",
  timeline: [
    {
      role: "Internship",
      org: "Samsung, Panasonic, Asian Paints & Ultratech",
      period: "Feb 2017 → Jan 2019"
    },
    { role: "Graphic Designer", org: "Dreams Experential", period: "Mar 2019 → Feb 2020" },
    { role: "Senior Designer", org: "Center Point Hotel", period: "Jun 2022 → Nov 2023" },
    { role: "Founder / CEO", org: "Twixters.Co", period: "Nov 2023 → Till Now" }
  ]
};
export const pricing = {
  eyebrow: "Pricing",
  heading: "Pick a Plan. Start Growing.",
  planLabel: "One Time",
  planNote: "Custom scope",
  price: "₹5,000",
  priceSuffix: "/ per project",
  availability: "Booking Open — only 2 Spots Left",
  cta: { label: "Book Free Discovery Call", href: site.bookingUrl, external: true },
  includedTitle: "What's included",
  included: [
    "Creative design requests",
    "Fast turnaround",
    "Fixed monthly rate",
    "Async communication",
    "Flexible scope",
    "Pause anytime"
  ],
  bio: {
    text: "I'm Raj Shegaonkar, a graphic and brand designer specializing in creating distinctive brand identities. I focus on delivering high-quality, impactful designs with a strong eye for detail and a practical, results-driven approach.",
    name: "Raj Shegaonkar",
    role: "Creative Director at Twixters.Co",
    avatar: assetUrl("/assets/raj.jpg")
  }
};
export const capabilities = [
  "Senior-level quality",
  "Systems thinking",
  "Developer-friendly",
  "Clear process",
  "On-brand, every time",
  "Reliable partner",
  "Fast execution",
  "Thoughtful feedback",
  "Smooth handoff"
];
export const faqs = [
  {
    q: "What's the difference between a subscription and a custom project?",
    a: "The subscription is ongoing and flexible — ideal for continuous design needs. Custom projects are one-time, fixed-scope engagements for larger goals like a rebrand or product launch."
  },
  {
    q: "How fast is the turnaround?",
    a: "Most requests are delivered within 1–2 business days. Larger tasks may take longer, but you'll always be kept in the loop."
  },
  {
    q: "How many requests can I make?",
    a: "As many as you like — with a subscription, you can queue unlimited requests, and they'll be handled one at a time in priority order."
  },
  {
    q: "What types of design do you handle?",
    a: "Branding, packaging, campaigns, product UI, landing pages, decks and social media visuals — anything that needs to look and feel sharp."
  },
  {
    q: "What tools do you use?",
    a: "Figma for design, Notion for task management, and WhatsApp or email for async communication."
  },
  {
    q: "Can I pause the subscription?",
    a: "Yes — you can pause anytime and resume when you're ready. Unused days roll over."
  },
  {
    q: "Do you offer development too?",
    a: "Raj focuses on design only, but all deliverables are dev-ready. He can also recommend trusted no-code or Webflow/Framer developers if needed."
  }
];
export const faqContact = {
  image: { src: assetUrl("/assets/desk.jpg"), alt: "Twixters.Co design studio desk" },
  heading: "Have more questions?",
  sub: "Book a free discovery call",
  cta: { label: "Book a Discovery Call", href: site.bookingUrl, external: true },
  emailPrefix: "Or, email me at"
};
export const finalCta = {
  mark: "Twixters",
  heading: "Let's Connect",
  body: "Ready to build a brand that actually works? Let's build something remarkable together \u2014 available for new projects or just for a chat.",
  cta: { label: "Book a free intro call", href: site.bookingUrl, external: true }
};
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
          "Social Media Brand Kit"
        ]
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
          "POSM & Marketing Collaterals"
        ]
      }
    ]
  },
  industries: [
    "Jewellery",
    "Hospitality",
    "Restaurants & Caf\xE9s",
    "Education",
    "Government",
    "Defence",
    "Technology",
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Startups",
    "Corporate"
  ],
  whyTwixters: [
    "Strategic Thinking",
    "Complete Brand Systems",
    "Cross-Platform Consistency",
    "Business-Focused Design",
    "Long-Term Partnership"
  ],
  processStrip: ["Discovery", "Strategy", "Design", "System", "Execution", "Growth"]
};
