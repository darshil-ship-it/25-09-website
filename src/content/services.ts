import type { Service } from "@/types/content";
import { media } from "@/content/media";

export const servicesIntro = {
  eyebrow: "NEXACT GLOBAL / CAPABILITIES",
  title: "Services",
  description: "Thoughtful technology and digital work, shaped around the needs of each business.",
  note: "Service profiles below are draft content for review. Scope and examples can be refined with NexAct before launch.",
};

export interface ServiceEntry extends Service {
  enabled: boolean;
  order: number;
}

// Edit this list to add or remove a service. Change order to rearrange the page.
export const services: ServiceEntry[] = [
  {
    id: "digital-experiences",
    enabled: true,
    order: 1,
    label: "/ INTELLIGENT BUSINESS AGENTS",
    title: "AI agents built for the work that drives growth.",
    context: "Make execution faster, smarter, and more scalable across the teams that matter most.",
    description: "NexAct Global designs practical AI agent systems for businesses that want to improve how work gets done — from sales follow-up and marketing execution to manufacturing coordination and operational workflows.",
    points: ["•	Sales agent systems", "•	Marketing agent workflows", "•	Manufacturing process support agent", "•	Scalable business automation"],
    media: media.services.digitalExperiences,
    cta: { label: "Discuss a digital experience", href: "/book-meeting" },
  },
  {
    id: "product-engineering",
    enabled: true,
    order: 2,
    label: "/ INDUSTRY SOFTWARE SOLUTIONS",
    title: "Software built for the industries moving next.",
    context: "From a focused idea to a dependable digital product.",
    description: "helping organizations modernize workflows, improve visibility, and scale with greater confidence.",
    points: ["•	Insurance software systems", "•	Medical and healthcare platforms", "•	Hotel and hospitality dashboards", "•	E-commerce business software"],
    media: media.services.productEngineering,
    cta: { label: "Discuss a product", href: "/book-meeting" },
  },
  {
    id: "ai-automation",
    enabled: true,
    order: 3,
    label: "/ DEPARTMENT AUTOMATION ",
    title: "Automation built for the channels teams use every day. ",
    context: "Find the opportunities where better workflows matter.",
    description: "from email and WhatsApp to LinkedIn and Google Business Profile — making everyday communication faster, more consistent, and easier to manage at scale. ",
    points: ["Opportunity assessment", "Workflow design", "Automation concepts", "Human oversight"],
    media: media.services.aiAutomation,
    cta: { label: "Explore an AI opportunity", href: "/book-meeting" },
  },
  {
    id: "business-systems",
    enabled: true,
    order: 4,
    label: "04 / BUSINESS SYSTEMS · DRAFT",
    title: "Systems that make progress easier.",
    context: "Connect information, teams, and operations with intention.",
    description: "NexAct Global designs practical AI agent systems for businesses that want to improve how work gets done.",
    points: ["Process mapping", "System architecture", "Useful integrations", "Operational visibility"],
    media: media.services.businessSystems,
    cta: { label: "Discuss your systems", href: "/book-meeting" },
  },
];

export function getVisibleServices() {
  return services.filter((service) => service.enabled).toSorted((a, b) => a.order - b.order);
}
