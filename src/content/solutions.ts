import { media } from "@/content/media";
import type { Solution } from "@/types/content";

export const solutionsIntro = {
  eyebrow: "NEXACT GLOBAL / SOLUTIONS",
  title: "Solutions",
  statement: "Move from a business challenge to a clearer way forward.",
  description: "From AI-powered platforms to operational systems, NexAct Global designs software that helps businesses work smarter, improve visibility, increase efficiency, and create new paths for profitable growth.",
  featuredLabel: "FEATURED SOLUTION",
  challengeLabel: "The business problem",
  approachLabel: "The NexAct approach",
  outcomesLabel: "Intended outcomes",
};

export interface SolutionEntry extends Solution {
  enabled: boolean;
  order: number;
  featured?: boolean;
}

// Add, remove, enable or reorder solutions here. Images and videos stay in content/media.ts.
export const solutions: SolutionEntry[] = [
  {
    id: "connected-customer-experience",
    enabled: true,
    order: 1,
    featured: true,
    label: "software presentation ",
    title: "NEXACT SOFTWARE SHOWCASE",
    description: "A connected experience can help people move from discovery to action with less friction.",
    challenge: "Customers encounter fragmented information, disconnected journeys or unclear next steps across digital channels.",
    approach: "Map the journey, define the most useful interactions and bring the right digital touchpoints into one coherent system.",
    outcomes: ["A clearer customer journey", "More consistent digital interactions", "A foundation that can evolve"],
    media: media.solutions.connectedExperience,
    cta: { label: "Discuss this challenge", href: "/book-meeting" },
  },
  {
    id: "clearer-operations",
    enabled: true,
    order: 2,
    label: "SOFTWARE & AI SOLUTIONS",
    title: "When better systems create better business performance.",
    description: "From finance and business operations to healthcare and clinical workflows, NexAct Global builds software that brings clarity, efficiency, and scalable growth to the work that matters most.",
    challenge: "Important tasks move between scattered tools, repeated handoffs and information that is hard to find.",
    approach: "Study the workflow, identify where effort is lost and design a connected system around the people who use it.",
    outcomes: ["Fewer avoidable handoffs", "Better access to useful information", "A more understandable workflow"],
    media: media.solutions.clearerOperations,
    cta: { label: "Talk about your operations", href: "/book-meeting" },
  },
  {
    id: "practical-intelligence",
    enabled: true,
    order: 3,
    label: "AI OPPORTUNITIES",
    title: "When the opportunity is clear, but the next step is not.",
    description: "Turn interest in AI into practical business systems — from sales and support to lead handling, calling workflows, marketing execution, and other intelligent agents designed to improve efficiency, response speed, and growth.",
    challenge: "A business sees potential for AI but needs to understand where it is useful, feasible and appropriate.",
    approach: "Start with the business process, assess the opportunity and design a focused path with human oversight.",
    outcomes: ["A prioritized opportunity", "A considered implementation path", "Clearer roles for people and systems"],
    media: media.solutions.practicalIntelligence,
    cta: { label: "Explore an AI opportunity", href: "/book-meeting" },
  },
];

export function getVisibleSolutions() {
  return solutions.filter((solution) => solution.enabled).toSorted((a, b) => a.order - b.order);
}
