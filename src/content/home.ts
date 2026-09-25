import { media } from "@/content/media";

export const home = {
  hero: {
    label: "NEXACT GLOBAL",
    titleLines: ["Intelligence That Moves", "Business Forward."],
    description: "A global technology company building intelligent products, digital systems, and business solutions for ambitious companies.",
    primary: { label: "Book a Meeting", href: "/book-meeting" },
    secondary: { label: "Explore NexAct", href: "/about" },
  },
  weWorkWith: {
    eyebrow: "We work with",
    title: "Built for ambitious organizations at every stage of growth.",
    description: "From emerging businesses to established enterprises, NexAct Global partners with organizations that want to modernize, scale, strengthen their brand, and create new opportunities through technology, AI, and strategic execution.",
    categories: [
      { label: "Startups & Scale-Ups", description: "Fast-moving teams building, launching, and scaling new ideas." },
      { label: "Growing Businesses", description: "Companies ready to improve operations, strengthen digital presence, and accelerate growth." },
      { label: "Enterprises & Organizations", description: "Established organizations looking for transformation, efficiency, innovation, and long-term technology partnerships." },
      { label: "Founders & Personal Brands", description: "Entrepreneurs, executives, and creators building stronger visibility, positioning, and influence." },
    ],
  },
  whatWeDeliver: {
    eyebrow: "What we deliver",
    title: "Business outcomes, shaped through technology.",
    description: "A flexible set of capabilities designed around the result a business needs next.",
    outcomes: ["Business Growth", "Digital Presence", "Smarter Operations", "AI Efficiency", "Customer Experience", "Scalable Technology", "Brand Visibility"],
  },
  selectedResults: {
    eyebrow: "Selected client results",
    title: "Work presented with the space it deserves.",
    description: "Verified client names, project details and outcomes will be added when supplied.",
    items: [
      { id: "result-01", index: "01", title: "Commerce Built for Profitable Growth", client: "One connected system for products, orders, customers and performance.", category: "E-COMMERCE & DIGITAL COMMERCE", description: "A modern commerce platform designed to help growing brands manage the full sales journey with greater clarity — from product performance and customer activity to revenue, conversion and business growth.", media: media.home.clientResults[0], metrics: [] as string[] },
      { id: "result-02", index: "02", title: "BUSINESS OPERATIONS & FINANCE", client: "One System. Complete Business Visibility.", category: "Inventory, sales and financial performance connected in one place.", description: "An integrated business platform that brings stock, purchasing, invoicing, sales and financial insights together — helping teams reduce operational gaps, understand margins and make faster decisions", media: media.home.clientResults[1], metrics: [] as string[] },
      { id: "result-03", index: "03", title: "Smarter Practice. Stronger Performance.", client: "Technology that connects care delivery with better practice operations.", category: "HEALTHCARE TECHNOLOGY", description: "A modern healthcare platform designed to simplify daily workflows, improve practice visibility, reduce administrative friction and help healthcare teams operate more efficiently as they grow.", media: media.home.clientResults[2], metrics: [] as string[] },
    ],
  },
  personalBranding: {
    eyebrow: "Personal branding results",
    title: "A clearer presence, shown before and after.",
    description: "Strategic personal branding designed to sharpen positioning, elevate credibility, and create a more consistent digital presence across the platforms that matter.",
    items: [
      { id: "branding-01", title: "From scattered presence to a clear personal brand.", description: "We refine positioning, visual identity, messaging, content direction, and digital presentation to help founders and professionals show up with greater clarity, confidence, and consistency.", beforeLabel: "Before", afterLabel: "After", before: media.home.personalBranding[0], after: media.home.personalBranding[1], metrics: [] as string[] },
    ],
  },
  lifeAtNexAct: {
    eyebrow: "Life at NexAct",
    title: "The people and moments behind the work.",
    description: "create an environment where people can do their best work—and enjoy doing it.",
    items: media.home.lifeAtNexAct.map((asset, index) => ({ id: `life-${index + 1}`, label: index === 0 ? "NexAct office " : `Company memory ${String(index + 1).padStart(2, "0")}`, asset })),
  },
  companyShowcase: {
    eyebrow: "Inside NexAct",
    title: "How the company works, builds and grows.",
    items: [
      { id: "company-01", label: "", title: "Team and workplace story", description: "Verified copy for the team, office or working culture will be added here.", media: media.home.companyShowcase[0] },
      { id: "company-02", label: "", title: "Client and event story", description: "Verified copy for meetings, events or presentations will be added here.", media: media.home.companyShowcase[1] },
      { id: "company-03", label: "", title: "Building and delivery story", description: "Verified copy for product building or behind-the-scenes work will be added here.", media: media.home.companyShowcase[2] },
    ],
  },
  journey: {
    eyebrow: "Our journey",
    title: "A company story designed to grow over time.",
    description: "Dates and milestones remain deliberately unclaimed until NexAct supplies its verified history.",
    entries: [
      { id: "journey-01", date: "DATE TO BE SUPPLIED", title: "Company milestone", description: "Verified milestone details to be supplied.", media: media.home.journey[0] },
      { id: "journey-02", date: "DATE TO BE SUPPLIED", title: "Company milestone", description: "Verified milestone details to be supplied.", media: media.home.journey[1] },
    ],
  },
  showcase: {
    eyebrow: "Solutions, products and projects",
    title: "One focused story at a time.",
    description: "Feature profiles are ready for verified solutions, products and projects.",
    items: [
      { id: "showcase-01", category: "SOLUTION PROFILE", title: "Featured solution", description: "Verified solution copy and destination to be supplied.", href: "/solutions", cta: "Explore solutions", media: media.home.showcase[0] },
      { id: "showcase-02", category: "PRODUCT PROFILE", title: "Featured product", description: "Verified product copy and destination to be supplied.", href: "/solutions", cta: "Explore NexAct", media: media.home.showcase[1] },
      { id: "showcase-03", category: "PROJECT PROFILE", title: "Featured project", description: "Verified project copy and destination to be supplied.", href: "/services", cta: "Explore services", media: media.home.showcase[2] },
    ],
  },


  achievements: {
    eyebrow: "Achievements and trust",
    title: "Built on experience. Proven through execution.",
    description: "NexAct Global combines years of hands-on experience, long-term client relationships, and multidisciplinary execution across technology, AI, digital products, branding, and business growth.",
    slots: ["Clients served", "Years", "Projects", "Markets", "Certifications", "Partnerships"],
    metrics: [{ label: "Clients served", value: 135, suffix: "+", source: "Internal Data" }
      ,{ label: "Years", value: 4, suffix: "+", source: "Internal Data" }
      ,{ label: "Projects", value: 235, suffix: "+", source: "Internal Data" }
      // ,{ label: "Markets", value: 7, suffix: "+", source: "Internal Data" }
      // ,{ label: "Certifications", value: 22, suffix: "+", source: "Internal Data" }
      // ,{ label: "Partnerships", value: 12, suffix: "+", source: "Internal Data" }
    ] as { label: string; value: number; suffix?: string; source: string }[],
  },




  globalReach: {
    eyebrow: "Global reach",
    title: "Connected across the markets NexAct actually serves.",
    description: "Countries and regions will appear only when verified. No office locations are implied.",
    regions: [] as string[],
    media: media.home.globalReach,
  },
  beyondBusiness: {
    eyebrow: "Beyond business",
    title: "Growth should create impact beyond business.",
    description: "At NexAct Global, we believe progress should extend beyond products, technology, and revenue. We aim to support people, communities, and meaningful causes through responsible action and long-term contribution.",
    items: [] as { id: string; title: string; description: string }[],
    media: media.home.beyondBusiness,
  },
  finalCta: {
    eyebrow: "Start a conversation",
    title: "What should we build next?",
    description: "Bring us the opportunity, the challenge or the next ambitious idea.",
    primary: { label: "Book a Meeting", href: "/book-meeting" },
    secondary: { label: "Get a Quote", href: "/get-quote" },
    supporting: { label: "Contact Us", href: "/contact" },
  },
};

export const homeSectionIds = ["hero", "we-work-with", "what-we-deliver", "client-results", "personal-branding", "life-at-nexact", "company-showcase", "our-journey", "solutions-showcase", "achievements", "global-reach", "beyond-business", "final-cta"] as const;
export type HomeSectionId = typeof homeSectionIds[number];

export const homeSections: { id: HomeSectionId; enabled: boolean; order: number }[] = homeSectionIds.map((id, index) => ({ id, enabled: id !== "what-we-deliver", order: index + 1 }));

export function getHomeSections() {
  return homeSections.filter((section) => section.enabled).toSorted((a, b) => a.order - b.order);
}
