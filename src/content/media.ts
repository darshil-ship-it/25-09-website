import type { MediaAsset } from "@/types/content";

const storage = "https://hiesmrxpchwfrlqxlvie.supabase.co/storage/v1/object/public";
const imageUrl = (file: string) => `${storage}/image/${file}`;
const videoUrl = (file: string) => `${storage}/video/${file}`;
const fallbackImage = imageUrl("Beefit%20-%20Healthcare%20Dashboard%20Web%20Design!.jpg");

// Empty media slots show the supplied fallback image; pasted URLs remain usable.
const placeholder = (label: string, type: MediaAsset["type"] = "image"): MediaAsset => {
  const isUrl = /^https?:\/\//i.test(label);
  const isVideo = isUrl && /\.mp4(?:[?#]|$)/i.test(label);
  return {
    src: isUrl ? label : fallbackImage,
    alt: "",
    placeholder: isUrl ? "MEDIA_UNAVAILABLE" : label,
    type: isUrl ? (isVideo ? "video" : type) : "image",
    poster: isVideo ? fallbackImage : undefined,
  };
};
const image = (src: string, label: string): MediaAsset => ({
  src: src || fallbackImage, alt: "", placeholder: label, type: "image",
});
const video = (src: string, label: string): MediaAsset => src
  ? { src, alt: "", placeholder: label, type: "video", poster: fallbackImage }
  : image(fallbackImage, label);

// All page media lives here. Missing sources use the shared fallback image.
export const media = {
  home: {
    heroVideo: videoUrl("1.mp4"),
    heroPoster: fallbackImage,
    heroLabel: "YOUR_POSTER_URL",
    clientResults: [
      video(videoUrl("15.mp4"), "PROJECT_01_MEDIA_URL"),
      video(videoUrl("7.mp4"), "PROJECT_02_MEDIA_URL"),
      video(videoUrl("3.mp4"), "PROJECT_03_MEDIA_URL"),
    ],
    personalBranding: [
      image(imageUrl("Finance%20Bento%20Card%20UI%20Design.jpg"), "PERSONAL_BRANDING_01_BEFORE_URL"),
      image(imageUrl("High%20Conversion%20Landing%20Page%20Design%20Ideas.jpg"), "PERSONAL_BRANDING_01_AFTER_URL"),
    ],
    personalBrandingVideo: video(videoUrl("99.mp4"), "PERSONAL_BRANDING_VIDEO_URL"),
    lifeAtNexAct: [
      image(imageUrl("download%20(1).jpg"), "LIFE_AT_NEXACT_01_URL"),
      image(imageUrl("download%20(4).jpg"), "LIFE_AT_NEXACT_02_URL"),
      image(imageUrl("Instagram.jpg"), "LIFE_AT_NEXACT_03_URL"),
      image(imageUrl("Finance%20Dashboard.jpg"), "LIFE_AT_NEXACT_04_URL"),
    ],
    companyShowcase: [
      image(imageUrl("Accueil%20_%20X.jpg"), "COMPANY_SHOWCASE_01_URL"),
      image(imageUrl("211211.jpg"), "COMPANY_SHOWCASE_02_URL"),
      image(imageUrl("download%20(7).jpg"), "COMPANY_SHOWCASE_03_URL"),
    ],
    companyShowcaseVideo: placeholder("COMPANY_SHOWCASE_VIDEO_01_URL", "video"),
    journey: [placeholder("JOURNEY_01_MEDIA_URL"), placeholder("JOURNEY_02_MEDIA_URL")],
    showcase: [
      video(videoUrl("13.mp4"), "SOLUTION_01_MEDIA_URL"),
      video(videoUrl("18.mp4"), "PRODUCT_01_MEDIA_URL"),
      video(videoUrl("29.mp4"), "PROJECT_SHOWCASE_01_MEDIA_URL"),
    ],
    aiAgents: {
      calling: video(videoUrl("12.mp4"), "CALLING_AGENT_VIDEO_URL"),
      support: video(videoUrl("7.mp4"), "SUPPORT_AGENT_VIDEO_URL"),
      sales: placeholder("SALES_AGENT_VIDEO_URL", "video"),
      marketing: placeholder("MARKETING_AGENT_VIDEO_URL", "video"),
      lead: placeholder("LEAD_AGENT_VIDEO_URL", "video"),
    },
    businessAgents: {
      sales: placeholder("SALES_AGENT_VISUAL_URL"),
      marketing: placeholder("MARKETING_AGENT_VISUAL_URL"),
      manufacturing: placeholder("MANUFACTURING_AGENT_VISUAL_URL"),
    },
    industrySoftware: {
      insurance: placeholder("INSURANCE_SOFTWARE_MEDIA_URL"),
      medical: placeholder("MEDICAL_SOFTWARE_MEDIA_URL"),
      hotel: placeholder("HOTEL_SOFTWARE_MEDIA_URL"),
      ecommerce: video(videoUrl("27.mp4"), "ECOMMERCE_SOFTWARE_MEDIA_URL"),
    },
    departmentAutomation: {
      email: video(videoUrl("25.mp4"), "EMAIL_AUTOMATION_VIDEO_URL"),
      whatsapp: video(videoUrl("10.mp4"), "WHATSAPP_AUTOMATION_VIDEO_URL"),
      linkedin: video(videoUrl("16.mp4"), "LINKEDIN_AUTOMATION_VIDEO_URL"),
      googleBusinessProfile: video(videoUrl("11.mp4"), "GOOGLE_BUSINESS_PROFILE_AUTOMATION_VIDEO_URL"),
    },
    achievementsTrust: {
      background: image(imageUrl("Beefit%20-%20Healthcare%20Dashboard%20Web%20Design!.jpg"), "ACHIEVEMENTS_BACKGROUND_URL"),
      certificates: [
        image(imageUrl("Instagram.jpg"), "CERTIFICATE_01_URL"),
        image(imageUrl("High%20Conversion%20Landing%20Page%20Design%20Ideas.jpg"), "CERTIFICATE_02_URL"),
        image(imageUrl("Sebastiano%20Guerriero%20(@guerriero_se)%20on%20X.jpg"), "CERTIFICATE_03_URL"),
      ],
    },
    globalReach: video(videoUrl("19.mp4"), "GLOBAL_MAP_MEDIA_URL"),
    beyondBusiness: image(imageUrl("download%20(8).jpg"), "IMPACT_IMAGE_01_URL"),
    beyondBusinessExtras: {
      image02: image(imageUrl("download%20(9).jpg"), "IMPACT_IMAGE_02_URL"),
      video01: video(videoUrl("17.mp4"), "IMPACT_VIDEO_01_URL"),
    },
  },
  services: {
    digitalExperiences: image(imageUrl("Finance%20Dashboard.jpg"), "DIGITAL_EXPERIENCES_MEDIA_URL"),
    productEngineering: image(imageUrl("download%20(7).jpg"), "PRODUCT_ENGINEERING_MEDIA_URL"),
    aiAutomation: image(imageUrl("Instagram.jpg"), "AI_AUTOMATION_MEDIA_URL"),
    businessSystems: image(imageUrl("download%20(6).jpg"), "BUSINESS_SYSTEMS_MEDIA_URL"),
  },
  solutions: {
    hero: video(videoUrl("14.mp4"), "SOLUTIONS_HERO_VIDEO_URL"),
    connectedExperience: image(imageUrl("download.jpg"), "CONNECTED_EXPERIENCE_MEDIA_URL"),
    clearerOperations: image(imageUrl("Finance%20Bento%20Card%20UI%20Design.jpg"), "CLEARER_OPERATIONS_MEDIA_URL"),
    practicalIntelligence: video(videoUrl("14.mp4"), "PRACTICAL_INTELLIGENCE_MEDIA_URL"),
    solution04: video(videoUrl("11.mp4"), "SOLUTION_04_MEDIA_URL"),
  },
  comingSoon: {
    growthPartner: video(videoUrl("4.mp4"), "GROWTH_PARTNER_BACKGROUND_URL"),
    aiConsultancy: video(videoUrl("14.mp4"), "AI_CONSULTANCY_BACKGROUND_URL"),
  },
  about: {
    hero: video(videoUrl("5.mp4"), "ABOUT_HERO_VIDEO_URL"),
    whoWeAre: image(imageUrl("download%20(6).jpg"), "ABOUT_COMPANY_IMAGE_URL"),
    purpose: placeholder("ABOUT_PURPOSE_IMAGE_URL"),
    journey: image(imageUrl("Beefit%20-%20Healthcare%20Dashboard%20Web%20Design!.jpg"), "ABOUT_JOURNEY_IMAGE_URL"),
    team: [
      image(imageUrl("Turn%20Information%20Into%20Engaging%20Slides%20with%20Free%20Infographic%20Templates.jpg"), "TEAM_IMAGE_01_URL"),
      image(imageUrl("download%20(6).jpg"), "TEAM_IMAGE_02_URL"),
    ],
    culture: [
      image(imageUrl("Sebastiano%20Guerriero%20(@guerriero_se)%20on%20X.jpg"), "ABOUT_CULTURE_IMAGE_01_URL"),
      placeholder("ABOUT_CULTURE_IMAGE_02_URL"),
      placeholder("ABOUT_CULTURE_IMAGE_03_URL"),
    ],
    globalReach: placeholder("ABOUT_GLOBAL_MAP_IMAGE_URL"),
    impact: placeholder("ABOUT_IMPACT_IMAGE_URL"),
  },
  projects: { project01: video(videoUrl("15.mp4"), "PROJECT_01_MEDIA_URL") },
  branding: {
    before: image(imageUrl("Finance%20Bento%20Card%20UI%20Design.jpg"), "PERSONAL_BRANDING_01_BEFORE_URL"),
    after: image(imageUrl("High%20Conversion%20Landing%20Page%20Design%20Ideas.jpg"), "PERSONAL_BRANDING_01_AFTER_URL"),
  },
  company: {
    team01: image(imageUrl("Turn%20Information%20Into%20Engaging%20Slides%20with%20Free%20Infographic%20Templates.jpg"), "TEAM_IMAGE_01_URL"),
    life01: image(imageUrl("download%20(1).jpg"), "LIFE_AT_NEXACT_01_URL"),
  },
  global: video(videoUrl("19.mp4"), "GLOBAL_MAP_MEDIA_URL"),
  impact: image(imageUrl("download%20(8).jpg"), "IMPACT_IMAGE_01_URL"),
};
