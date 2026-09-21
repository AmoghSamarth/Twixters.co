import { assetUrl } from "../utils/asset";

export const site = {
  name: "Twixters.Co",
  title: "Twixters.Co — Branding & Creative Agency in India",
  description: "Twixters.Co builds brand identities, design systems and advertising campaigns that actually work. Led by Raj Shegaonkar, 10+ years of branding experience.",
  email: "twixters.co@gmail.com",
  /** The only booking destination that exists in the current implementation. */
  bookingUrl: "https://wa.me/message/TIRNTDQIVJ2YF1",
  copyright: "© Twixters Studio, 2026",
  socials: {
    behance: "https://www.behance.net/rajshegaonkar",
    facebook: "https://www.facebook.com/profile.php?id=100006101853561",
    linkedin: "https://www.linkedin.com/in/raj-shegaonkar-875999164/",
    instagram: "https://www.instagram.com/raj_shegaonkar/"
  },
  nav: [
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
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
  { area: "a", src: assetUrl("/assets/work-1.jpg"), alt: "The Saath brand identity collateral", href: "https://www.behance.net/gallery/248456131/The-Saathh-Brand-Identity" },
  { area: "b", src: assetUrl("/assets/work-2.jpg"), alt: "Gamla organic brand design system", href: "https://www.behance.net/gallery/247494757/Gamla-Logo-Desing-Branding" },
  { area: "c", src: assetUrl("/assets/work-3.jpg"), alt: "Cognito Bite protein bar visual identity", href: "https://www.behance.net/gallery/248505845/Cognito-Bite-Modern-Chocolate-Brand" },
  { area: "d", src: assetUrl("/assets/work-5.jpg"), alt: "Twixters.Co packaging and print collateral" },
  { area: "e", src: assetUrl("/assets/work-4.jpg"), alt: "The Biryani Story logo and packaging", href: "https://www.behance.net/gallery/248506041/The-Biryani-Story-Modern-Food-Brand" },
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
    video: assetUrl("/assets/01 Brief Us.mov"),
    poster: assetUrl("/assets/brief-us-poster.webp"),
    rotate: -5.0,
    offsetY: 24
  },
  {
    n: "2",
    title: "We Create",
    body: "Our team gets to work on your design or campaign strategy.",
    video: assetUrl("/assets/we-create.mp4"),
    poster: assetUrl("/assets/we-create-poster.webp"),
    rotate: 9.0,
    offsetY: -24
  },
  {
    n: "3",
    title: "Launch & Grow",
    body: "You get polished deliverables ready to use and results that follow.",
    video: assetUrl("/assets/launch-grow.mp4"),
    poster: assetUrl("/assets/launch-grow-poster.webp"),
    rotate: -3.0,
    offsetY: 24
  }
];
export const testimonials = [
  {
    quote: "Twixters transformed our brand into something\nclear, consistent, and impactful. We’ve seen better\nengagement and stronger recall since the rebrand.",
    name: "Rishi",
    role: "Product Lead",
    avatar: assetUrl("/assets/rishi.jpg"),
    /** Diagonally opposed placement, per the reference. */
    align: "left"
  },
  {
    quote: "Raj delivers more than design he\nbuilds systems that work. Professional,\ndetail-focused, and easy to collaborate with.",
    name: "Ujwal",
    role: "Business Owner",
    avatar: assetUrl("/assets/ujwal.jpg"),
    align: "right"
  }
];
export const caseStudies = [
  {
    title: "The Saath",
    tags: ["Branding", "Brew Bar"],
    src: assetUrl("/assets/case-saathh.jpg"),
    expandSrc: assetUrl("/assets/Layer 1.png"),
    alt: "The Saath — Visual Identity & Systems",
    href: "https://www.behance.net/gallery/248456131/The-Saathh-Brand-Identity"
  },
  {
    title: "Gamla",
    tags: ["Design System", "Organic Brand"],
    src: assetUrl("/assets/case-gamla.png"),
    expandSrc: assetUrl("/assets/Layer 4.png"),
    alt: "Gamla — Design System",
    href: "https://www.behance.net/gallery/247494757/Gamla-Logo-Desing-Branding"
  },
  {
    title: "Cognito Bite",
    tags: ["Visual Identity", "Protein Bar"],
    src: assetUrl("/assets/case-cognito.jpg"),
    expandSrc: assetUrl("/assets/Layer 2.png"),
    alt: "Cognito Bite — Visual Identity & Systems",
    href: "https://www.behance.net/gallery/248505845/Cognito-Bite-Modern-Chocolate-Brand"
  },
  {
    title: "The Biryani Story",
    tags: ["Logo Design", "Food"],
    src: assetUrl("/assets/case-biryani.jpg"),
    expandSrc: assetUrl("/assets/Layer 3.png"),
    alt: "The Biryani Story — Visual Identity & Systems",
    href: "https://www.behance.net/gallery/248506041/The-Biryani-Story-Modern-Food-Brand"
  }
];
export const founder = {
  eyebrow: "Our Studio",
  heading: { plain: "Pushing boundaries ", muted: "since 2021" },
  portrait: {
    src: assetUrl("/assets/raj-presenting.jpg"),
    alt: "Raj Shegaonkar speaking at design presentation",
    width: 1400,
    height: 966
  },
  name: "Raj Shegaonkar",
  role: "Twixters.Co, Creative Director",
  socials: {
    instagram: "https://www.instagram.com/raj_shegaonkar/",
    linkedin: "https://www.linkedin.com/in/raj-shegaonkar-875999164/",
    facebook: "https://www.facebook.com/profile.php?id=100006101853561",
    behance: "https://www.behance.net/rajshegaonkar"
  },
  bio: "Founded in 2021 by Raj Shegaonkar, Twixters blends creative design with sharp marketing strategy. With 10+ years of experience, we've helped local businesses and growing brands build identities that make people stop, notice, and remember.",
  journeyTrack: "TWIXTERS.CO → CLIENT JOURNEY → PROFESSIONAL CAREER → INTERNSHIPS",
  journeyBadge: "10-Year Experience Journey",
  timeline: [
    {
      role: "01 — Twixters.Co",
      org: "Founder / Creative Director",
      period: "Nov 2021 — Present"
    },
    {
      role: "02 — Client Journey",
      org: "Defence Production, Batukbhai & VIPL",
      period: "2023 — 2026"
    },
    {
      role: "03 — Professional Career",
      org: "Centre Point, Friend's Events & Dreams",
      period: "2020 — 2023"
    },
    {
      role: "04 — Internships",
      org: "UltraTech, Asian Paints, Panasonic & Samsung",
      period: "2016 — 2019"
    }
  ],
  journey: {
    twixters: {
      number: "01",
      title: "TWIXTERS.CO",
      role: "Founder / Creative Director",
      period: "November 2021 — Present",
      description: "Building a creative studio focused on branding, visual communication, campaigns and design systems."
    },
    clientJourney: {
      number: "02",
      title: "CLIENT JOURNEY",
      items: [
        {
          name: "National Academy of Defence Production",
          period: "2025 — 2026"
        },
        {
          name: "Batukbhai Jewellers",
          period: "2024 — 2025"
        },
        {
          name: "Vidarbha Infotech Pvt. Ltd.",
          period: "2023 — 2024"
        }
      ]
    },
    professionalCareer: {
      number: "03",
      title: "PROFESSIONAL CAREER",
      items: [
        {
          role: "Senior Graphic Designer",
          org: "Centre Point Hotel",
          period: "2022 — 2023"
        },
        {
          role: "Graphic Designer",
          org: "Friend's Events",
          period: "2021 — 2022"
        },
        {
          role: "Graphic Designer",
          org: "Dreams Experiential Marketing",
          period: "2020"
        }
      ]
    },
    internships: {
      number: "04",
      title: "INTERNSHIPS",
      items: [
        {
          role: "Event & Graphic Design Intern",
          org: "UltraTech",
          period: "2019"
        },
        {
          role: "Event Design Intern",
          org: "Asian Paints",
          period: "2018"
        },
        {
          role: "Graphic Design Intern",
          org: "Panasonic",
          period: "2017"
        },
        {
          role: "Graphic Design Intern",
          org: "Samsung",
          period: "2016"
        }
      ]
    }
  },
  highlights: [
    {
      name: "India Today Group",
      logo: assetUrl("/assets/India Today Group.svg")
    },
    {
      name: "Xenicon Healthcare",
      logo: assetUrl("/assets/Xenicon Healthcare.svg")
    },
    {
      name: "Replay India",
      logo: assetUrl("/assets/Replay India.svg")
    },
    {
      name: "Parekh Brothers Jewellers",
      logo: assetUrl("/assets/PBJ.svg")
    }
  ],
  stats: "10 years in design · 4 internships · 6 professional roles"
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
  avatar: { src: assetUrl("/assets/raj-faq-avatar.jpg"), alt: "Raj Shegaonkar" },
  heading: "Have more questions?",
  sub: "Book a free discovery call",
  cta: { label: "Book a Discovery Call", href: site.bookingUrl, external: true },
  emailPrefix: "Or, email me at"
};
export const finalCta = {
  mark: "Twixters",
  heading: { plain: "Let's ", muted: "Connect" },
  body: "Feel free to contact me if having any questions.\nI'm available for new projects or just for chatting.",
  bodyLines: [
    "Feel free to contact me if having any questions.",
    "I'm available for new projects or just for chatting."
  ],
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
