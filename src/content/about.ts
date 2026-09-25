import { media } from "@/content/media";
import type { Action, ImpactPost, MediaAsset, TeamMember, TimelineEntry } from "@/types/content";

export interface AboutContent {
  hero: { label: string; title: string; description: string; scrollLabel: string; media: MediaAsset };
  whoWeAre: { label: string; title: string; body: string; media: MediaAsset };
  purpose: { label: string; title: string; body: string; media: MediaAsset };
  vision: { label: string; title: string; body: string };
  mission: { label: string; title: string; body: string };
  journey: { label: string; title: string; description: string; emptyTitle: string; emptyBody: string; entries: TimelineEntry[]; media: MediaAsset };
  team: { label: string; title: string; description: string; emptyTitle: string; emptyBody: string; members: TeamMember[] };
  culture: { label: string; title: string; description: string; captions: string[]; media: MediaAsset[] };
  globalReach: { label: string; title: string; description: string; emptyNote: string; regions: string[]; media: MediaAsset };
  achievements: { label: string; title: string; description: string; emptyValue: string; categories: string[]; metrics: { label: string; value: string | number; suffix?: string; source?: string }[] };
  impact: { label: string; title: string; description: string; emptyNote: string; items: ImpactPost[]; media: MediaAsset };
  finalCta: { label: string; title: string; description: string; primary: Action; secondary: Action };
}

export const about: AboutContent = {
  hero: {
    label: "ABOUT NEXACT GLOBAL",
    title: "Intelligence That Moves Business Forward.",
    description: "A global technology company building intelligent products, digital systems, and business solutions for ambitious companies.",
    scrollLabel: "Discover our story",
    media: media.about.hero,
  },
  whoWeAre: {
    label: "01 /  WE ARE",
    title: "A company built around what comes next.",
    body: "NexAct Global builds intelligent products, digital systems, and business solutions for ambitious companies.",
    media: media.about.whoWeAre,
  },
  purpose: {
    label: "02 / OUR PURPOSE",
    title: "Purpose, defined with intention.",
    body: "NexAct's approved purpose statement will be added here before publication.",
    media: media.about.purpose,
  },
  vision: {
    label: "03 / VISION",
    title: "Looking ahead.",
    body: "We envision a future where technology makes businesses smarter, work more meaningful, and growth more sustainable. We’re building toward a world where people and technology work better together—creating lasting value for businesses, their teams, and the communities they serve.",
  },
  mission: {
    label: "04 / MISSION",
    title: "what Nexact does every day to get there.",
    body: "We turn ambitious ideas into practical technology that helps businesses work smarter, grow stronger, and create lasting value. We combine AI, software, and human expertise to solve real problems—not simply build technology for technology’s sake.",
  },
  journey: {
    label: "05 / OUR JOURNEY",
    title: "A story told through real milestones.",
    description: "Every milestone has shaped who we are today—from our first ideas and solutions to the technology we’re building for the future. The journey is still being written",
    emptyTitle: "The timeline begins with history.",
    emptyBody: "Founding dates, milestones, and the people behind them are awaiting approved source material.",
    entries: [],
    media: media.about.journey,
  },
  team: {
    label: "06 / TEAM",
    title: "Meet the people behind NexAct.",
    description: "Team profiles will be added when names, roles, and portraits are approved.",
    emptyTitle: "People first. Profiles when ready.",
    emptyBody: "The team roster is intentionally empty until verified member details are supplied.",
    members: [],
  },
  culture: {
    label: "06 / COMPANY CULTURE",
    title: "A closer look inside NexAct.",
    description: " workplace, team, and event",
    captions: ["Team photography to be supplied", "Workplace photography to be supplied", "Company moment to be supplied"],
    media: media.about.culture,
  },
  globalReach: {
    label: "07 / GLOBAL REACH",
    title: "Connected by the work we do.",
    description: "NexAct Global works with businesses across different markets, industries, and stages of growth — bringing technology, AI, software, and strategic execution together wherever our clients operate.",
    emptyNote: "Global by mindset. Connected by execution.",
    regions: [],
    media: media.about.globalReach,
  },
  achievements: {
    label: "08 / ACHIEVEMENTS",
    title: "Built through work. Proven over time.",
    description: "NexAct Global has grown through hands-on execution across technology, AI, software, digital experiences, branding, and business transformation — building long-term value for clients across different stages of growth.",
    emptyValue: "—",
    categories: ["Capabilities",
    "Industries",
    "Solutions",
    "Global Reach"],
    metrics: [
    {
      value: "AI",
      label: "AI & Automation",
    },
    {
      value: "5+",
      label: "Core Capabilities",
    },
    {
      value: "Global",
      label: "Market Focus",
    },
    {
      value: "24/7",
      label: "Technology ",
    },],
  },
  impact: {
    label: "09 / BEYOND BUSINESS",
    title: "Impact deserves a real .",
    description: "This space is reserved for approved initiatives and documented outcomes beyond client work.",
    emptyNote: "",
    items: [],
    media: media.about.impact,
  },
  finalCta: {
    label: "START A CONVERSATION",
    title: "What comes next starts with a conversation.",
    description: "Tell us what you are building, solving, or imagining next.",
    primary: { label: "Book a Meeting", href: "/book-meeting" },
    secondary: { label: "Contact Us", href: "/contact" },
  },
};
