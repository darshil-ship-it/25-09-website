export type LegalBlock =
  | { kind: "paragraph" | "subheading"; text: string }
  | { kind: "list"; items: string[] };

export type LegalDocument = {
  title: string;
  description: string;
  effectiveDate: string;
  lastUpdated: string;
  sections: { number: number; title: string; id: string; blocks: LegalBlock[] }[];
};

export const privacyPolicy: LegalDocument = {
  "title": "Privacy Policy",
  "description": "How NexAct Global may collect, use, store, disclose, and process personal information.",
  "effectiveDate": "25 September 2026",
  "lastUpdated": "25 September 2026",
  "sections": [
    {
      "number": 1,
      "title": "Introduction",
      "id": "section-1",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct Global (“NexAct”, “we”, “our”, or “us”) respects the privacy of individuals who visit our websites, communicate with us, use our digital products, interact with our AI-enabled systems, submit enquiries, or engage with our services."
        },
        {
          "kind": "paragraph",
          "text": "This Privacy Policy explains how NexAct Global may collect, use, store, disclose, and otherwise process personal information in connection with our websites, software, digital products, consulting services, AI solutions, automation systems, communications, and other services that reference this Privacy Policy."
        },
        {
          "kind": "paragraph",
          "text": "We process personal information only for legitimate and lawful purposes and aim to apply appropriate privacy and security practices to the information entrusted to us."
        }
      ]
    },
    {
      "number": 2,
      "title": "Scope of this Privacy Policy",
      "id": "section-2",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "This Privacy Policy may apply to:"
        },
        {
          "kind": "list",
          "items": [
            "NexAct Global websites",
            "contact and enquiry forms",
            "Book a Meeting submissions",
            "Get a Quote submissions",
            "newsletters and business communications",
            "client onboarding",
            "software products",
            "SaaS platforms",
            "AI agents and automation systems",
            "consulting engagements",
            "product demonstrations",
            "support interactions",
            "events and campaigns",
            "analytics and website technologies",
            "future NexAct products and services that reference this Privacy Policy"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Certain NexAct products may have their own additional privacy notice."
        },
        {
          "kind": "paragraph",
          "text": "Where a product-specific privacy notice conflicts with this Policy, the product-specific notice will apply to that product."
        }
      ]
    },
    {
      "number": 3,
      "title": "Information We May Collect",
      "id": "section-3",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Depending on how you interact with NexAct, we may collect the following categories of information."
        },
        {
          "kind": "subheading",
          "text": "Contact information"
        },
        {
          "kind": "paragraph",
          "text": "This may include:"
        },
        {
          "kind": "list",
          "items": [
            "name",
            "business email address",
            "personal email address when voluntarily provided",
            "phone number",
            "WhatsApp number",
            "company name",
            "job title",
            "country or region"
          ]
        },
        {
          "kind": "subheading",
          "text": "Business information"
        },
        {
          "kind": "paragraph",
          "text": "This may include:"
        },
        {
          "kind": "list",
          "items": [
            "company information",
            "industry",
            "project requirements",
            "business challenges",
            "budget range",
            "project timeline",
            "service interests",
            "meeting requirements",
            "proposal information",
            "communication preferences"
          ]
        },
        {
          "kind": "subheading",
          "text": "Website and technical information"
        },
        {
          "kind": "paragraph",
          "text": "Our systems may automatically receive information such as:"
        },
        {
          "kind": "list",
          "items": [
            "IP address",
            "browser type",
            "device type",
            "operating system",
            "referring website",
            "pages visited",
            "approximate region",
            "interaction data",
            "timestamps",
            "analytics identifiers",
            "cookie or similar technology information"
          ]
        },
        {
          "kind": "subheading",
          "text": "Communications"
        },
        {
          "kind": "paragraph",
          "text": "We may retain information you send through:"
        },
        {
          "kind": "list",
          "items": [
            "email",
            "contact forms",
            "meetings",
            "support requests",
            "social media",
            "WhatsApp or messaging services",
            "sales enquiries",
            "feedback"
          ]
        },
        {
          "kind": "subheading",
          "text": "Account and product information"
        },
        {
          "kind": "paragraph",
          "text": "If you use a NexAct software product, we may process:"
        },
        {
          "kind": "list",
          "items": [
            "account details",
            "login information",
            "usage activity",
            "application settings",
            "support information",
            "product interactions",
            "files or data submitted through the product"
          ]
        },
        {
          "kind": "paragraph",
          "text": "The exact information depends on the product being used."
        }
      ]
    },
    {
      "number": 4,
      "title": "How We Use Information",
      "id": "section-4",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "We may use information to:"
        },
        {
          "kind": "list",
          "items": [
            "respond to enquiries",
            "arrange meetings",
            "prepare proposals or quotations",
            "provide services",
            "operate software products",
            "manage client relationships",
            "provide customer support",
            "improve our products and services",
            "develop new products",
            "personalize business interactions",
            "understand website usage",
            "analyze product performance",
            "prevent abuse or security incidents",
            "maintain business records",
            "communicate relevant service updates",
            "comply with legal obligations",
            "enforce agreements",
            "protect NexAct, our clients, users, and systems"
          ]
        },
        {
          "kind": "paragraph",
          "text": "We aim to collect and process only information reasonably necessary for the relevant purpose. This reflects core privacy principles such as purpose limitation and data minimization."
        }
      ]
    },
    {
      "number": 5,
      "title": "AI and Automated Systems",
      "id": "section-5",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct may develop or operate AI-enabled products, AI agents, automation tools, machine-learning systems, and intelligent workflows."
        },
        {
          "kind": "paragraph",
          "text": "Depending on the service, such systems may process information to:"
        },
        {
          "kind": "list",
          "items": [
            "automate business workflows",
            "summarize communications",
            "assist customer support",
            "qualify leads",
            "assist sales teams",
            "analyze business information",
            "generate recommendations",
            "support marketing workflows",
            "assist operational decision-making",
            "improve user experiences"
          ]
        },
        {
          "kind": "paragraph",
          "text": "NexAct does not intend to use automated systems to make legally significant decisions about individuals without appropriate safeguards where applicable law requires them."
        },
        {
          "kind": "paragraph",
          "text": "Customers using NexAct AI solutions are responsible for ensuring that information they provide to those systems is collected and processed lawfully."
        }
      ]
    },
    {
      "number": 6,
      "title": "Customer Data and Our Role as a Service Provider",
      "id": "section-6",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "When NexAct processes personal information on behalf of a business customer through a software product or service, that customer may determine why and how the information is processed."
        },
        {
          "kind": "paragraph",
          "text": "In these circumstances, NexAct may act as a processor, service provider, or equivalent role, while the customer acts as the controller or business responsible for the information."
        },
        {
          "kind": "paragraph",
          "text": "The customer is responsible for:"
        },
        {
          "kind": "list",
          "items": [
            "providing required notices",
            "obtaining required permissions or consent",
            "having a lawful basis for processing",
            "determining what information is submitted",
            "responding to applicable individual rights requests"
          ]
        },
        {
          "kind": "paragraph",
          "text": "NexAct will process such information in accordance with applicable contractual obligations and the customer's documented instructions."
        },
        {
          "kind": "paragraph",
          "text": "This controller/processor distinction is also recognized under GDPR frameworks."
        }
      ]
    },
    {
      "number": 7,
      "title": "Healthcare and Sensitive Information",
      "id": "section-7",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Some future NexAct products may support healthcare businesses or medical professionals."
        },
        {
          "kind": "paragraph",
          "text": "Unless specifically requested through a product designed to handle such information, please do not submit medical records, diagnoses, government identifiers, financial account information, passwords, or other highly sensitive information through general website contact forms."
        },
        {
          "kind": "paragraph",
          "text": "Where NexAct provides software designed to process sensitive or healthcare-related data, additional agreements, security measures, product-specific privacy terms, or regulatory requirements may apply."
        }
      ]
    },
    {
      "number": 8,
      "title": "Cookies and Similar Technologies",
      "id": "section-8",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct websites may use cookies and similar technologies for purposes such as:"
        },
        {
          "kind": "list",
          "items": [
            "essential website functionality",
            "security",
            "analytics",
            "performance measurement",
            "remembering preferences",
            "understanding website traffic",
            "measuring campaigns"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Where legally required, we will request consent before using non-essential cookies."
        },
        {
          "kind": "paragraph",
          "text": "Users may also control cookies through their browser or available cookie settings."
        }
      ]
    },
    {
      "number": 9,
      "title": "Analytics",
      "id": "section-9",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "We may use analytics tools such as Google Analytics or similar services to better understand how visitors use our websites."
        },
        {
          "kind": "paragraph",
          "text": "These services may process information such as:"
        },
        {
          "kind": "list",
          "items": [
            "device type",
            "browser",
            "page visits",
            "session activity",
            "approximate geographic region",
            "referral source"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Analytics settings and providers may change as our technology stack evolves."
        }
      ]
    },
    {
      "number": 10,
      "title": "How We Share Information",
      "id": "section-10",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "We may disclose personal information to trusted third parties where reasonably necessary to operate our business."
        },
        {
          "kind": "paragraph",
          "text": "These may include:"
        },
        {
          "kind": "list",
          "items": [
            "cloud infrastructure providers",
            "hosting providers",
            "database providers",
            "email providers",
            "analytics services",
            "scheduling tools",
            "payment providers",
            "communications providers",
            "security providers",
            "professional advisers",
            "contractors",
            "software vendors",
            "business partners where required for a service"
          ]
        },
        {
          "kind": "paragraph",
          "text": "We expect service providers processing information on our behalf to protect the information appropriately and use it only for permitted purposes."
        }
      ]
    },
    {
      "number": 11,
      "title": "Sale of Personal Information",
      "id": "section-11",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct Global does not intend to sell personal information for monetary consideration as part of its ordinary business model."
        },
        {
          "kind": "paragraph",
          "text": "If our practices change or if applicable law treats certain advertising or data-sharing technologies as a “sale” or “sharing,” we will provide any notices and choices required by applicable law."
        },
        {
          "kind": "paragraph",
          "text": "California law, for example, provides eligible consumers with rights concerning sale or sharing of personal information."
        }
      ]
    },
    {
      "number": 12,
      "title": "International Data Transfers",
      "id": "section-12",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct may work with customers, service providers, technology infrastructure, and business partners located in different countries."
        },
        {
          "kind": "paragraph",
          "text": "As a result, personal information may be processed outside the country in which it was originally collected."
        },
        {
          "kind": "paragraph",
          "text": "Where required, NexAct will use appropriate contractual, organizational, or legal safeguards for international transfers."
        }
      ]
    },
    {
      "number": 13,
      "title": "Data Retention",
      "id": "section-13",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "We retain personal information only for as long as reasonably necessary for purposes such as:"
        },
        {
          "kind": "list",
          "items": [
            "providing services",
            "maintaining customer relationships",
            "fulfilling contractual obligations",
            "complying with legal requirements",
            "resolving disputes",
            "protecting systems",
            "maintaining legitimate business records"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Retention periods may vary depending on the type of information and service."
        },
        {
          "kind": "paragraph",
          "text": "Information may be retained longer where required or permitted by law."
        }
      ]
    },
    {
      "number": 14,
      "title": "Information Security",
      "id": "section-14",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct uses reasonable technical and organizational measures intended to protect information against:"
        },
        {
          "kind": "list",
          "items": [
            "unauthorized access",
            "accidental loss",
            "misuse",
            "alteration",
            "disclosure",
            "destruction"
          ]
        },
        {
          "kind": "paragraph",
          "text": "However, no internet transmission or electronic storage system can guarantee absolute security."
        },
        {
          "kind": "paragraph",
          "text": "Users are also responsible for protecting their passwords, devices, and account credentials."
        }
      ]
    },
    {
      "number": 15,
      "title": "Your Privacy Rights",
      "id": "section-15",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Depending on where you live and the laws applicable to your information, you may have rights such as:"
        },
        {
          "kind": "list",
          "items": [
            "accessing personal information",
            "correcting inaccurate information",
            "requesting deletion",
            "withdrawing consent",
            "objecting to certain processing",
            "requesting restriction of processing",
            "requesting data portability",
            "opting out of certain marketing",
            "requesting information about how data is used or shared",
            "lodging a complaint with an appropriate authority"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Not all rights apply in every jurisdiction or circumstance."
        },
        {
          "kind": "paragraph",
          "text": "We may need to verify your identity before fulfilling certain requests."
        },
        {
          "kind": "paragraph",
          "text": "The GDPR requires users to be informed about rights such as access and erasure, while California provides rights including know, delete, correct, opt out of sale/sharing, limit certain uses, and non-discrimination."
        }
      ]
    },
    {
      "number": 16,
      "title": "India Privacy Rights",
      "id": "section-16",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Where India's Digital Personal Data Protection Act, 2023 and Digital Personal Data Protection Rules, 2025 apply, NexAct will process digital personal data in accordance with applicable requirements."
        },
        {
          "kind": "paragraph",
          "text": "Eligible individuals may have rights concerning their personal data and may contact NexAct regarding privacy matters or grievances."
        },
        {
          "kind": "paragraph",
          "text": "India's DPDP Rules were notified on 14 November 2025."
        }
      ]
    },
    {
      "number": 17,
      "title": "European Economic Area and United Kingdom",
      "id": "section-17",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Where GDPR or UK GDPR applies, processing may rely on lawful bases such as:"
        },
        {
          "kind": "list",
          "items": [
            "consent",
            "performance of a contract",
            "compliance with legal obligations",
            "legitimate interests",
            "other lawful grounds permitted by applicable law"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Where we rely on legitimate interests, we consider the interests and rights of affected individuals."
        }
      ]
    },
    {
      "number": 18,
      "title": "California Privacy Rights",
      "id": "section-18",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Where California privacy law applies, eligible California residents may have rights including:"
        },
        {
          "kind": "list",
          "items": [
            "right to know",
            "right to access",
            "right to delete",
            "right to correct",
            "right to opt out of certain sale or sharing",
            "right to limit certain uses of sensitive information",
            "right to non-discrimination"
          ]
        },
        {
          "kind": "paragraph",
          "text": "We will provide any additional notices required where these obligations apply to NexAct."
        }
      ]
    },
    {
      "number": 19,
      "title": "Marketing Communications",
      "id": "section-19",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Where permitted, NexAct may send business communications regarding:"
        },
        {
          "kind": "list",
          "items": [
            "our services",
            "product updates",
            "company news",
            "relevant opportunities",
            "events",
            "insights"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Recipients may opt out of promotional communications using the unsubscribe method included in the communication or by contacting us."
        },
        {
          "kind": "paragraph",
          "text": "Administrative, transactional, or security messages may still be sent where necessary."
        }
      ]
    },
    {
      "number": 20,
      "title": "Third-Party Websites and Services",
      "id": "section-20",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Our websites may link to third-party services."
        },
        {
          "kind": "paragraph",
          "text": "NexAct is not responsible for the privacy practices, security, content, or policies of third-party websites or services."
        },
        {
          "kind": "paragraph",
          "text": "We encourage users to review the relevant third-party privacy policies."
        }
      ]
    },
    {
      "number": 21,
      "title": "Children",
      "id": "section-21",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct's corporate website and general business services are not intentionally directed toward children."
        },
        {
          "kind": "paragraph",
          "text": "We do not knowingly seek to collect personal information from children through our general corporate website except where a specific product lawfully supports such processing and appropriate protections are implemented."
        },
        {
          "kind": "paragraph",
          "text": "If you believe a child has provided information improperly, please contact us."
        }
      ]
    },
    {
      "number": 22,
      "title": "Business Transactions",
      "id": "section-22",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "If NexAct undergoes a:"
        },
        {
          "kind": "list",
          "items": [
            "merger",
            "acquisition",
            "restructuring",
            "financing",
            "sale of assets",
            "corporate reorganization"
          ]
        },
        {
          "kind": "paragraph",
          "text": "personal information may be transferred as part of that transaction where permitted by law."
        },
        {
          "kind": "paragraph",
          "text": "The receiving organization will remain subject to applicable privacy obligations."
        }
      ]
    },
    {
      "number": 23,
      "title": "Legal Requirements and Protection of Rights",
      "id": "section-23",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "We may preserve, use, or disclose information where reasonably necessary to:"
        },
        {
          "kind": "list",
          "items": [
            "comply with applicable law",
            "respond to lawful government requests",
            "comply with court orders",
            "enforce agreements",
            "investigate fraud or abuse",
            "protect security",
            "protect NexAct's legal rights",
            "protect users or third parties",
            "establish, exercise, or defend legal claims"
          ]
        }
      ]
    },
    {
      "number": 24,
      "title": "Future Products and Services",
      "id": "section-24",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct Global continues to develop new technology, software, AI systems, automation tools, and business solutions."
        },
        {
          "kind": "paragraph",
          "text": "This Privacy Policy is intended to apply to future NexAct services that reference it, unless a separate or supplemental privacy notice is provided."
        },
        {
          "kind": "paragraph",
          "text": "New services may involve different categories of information or processing activities."
        },
        {
          "kind": "paragraph",
          "text": "Where material changes occur, we will update the applicable privacy information accordingly."
        }
      ]
    },
    {
      "number": 25,
      "title": "Changes to This Privacy Policy",
      "id": "section-25",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "We may update this Privacy Policy from time to time to reflect:"
        },
        {
          "kind": "list",
          "items": [
            "new products",
            "business changes",
            "legal requirements",
            "technology changes",
            "operational changes",
            "privacy practices"
          ]
        },
        {
          "kind": "paragraph",
          "text": "The updated version will be posted on this page with a revised Last Updated date."
        },
        {
          "kind": "paragraph",
          "text": "Where required by applicable law, we may provide additional notice or request consent for material changes."
        }
      ]
    },
    {
      "number": 26,
      "title": "Contact NexAct Global",
      "id": "section-26",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "For privacy questions, requests, or concerns, contact:"
        },
        {
          "kind": "paragraph",
          "text": "NexAct Global"
        },
        {
          "kind": "paragraph",
          "text": "Privacy Email: [privacy@nexactglobal.com]"
        },
        {
          "kind": "paragraph",
          "text": "General Email: [hello@nexactglobal.com]"
        },
        {
          "kind": "paragraph",
          "text": "Website: [https://nexactglobal.com]"
        },
        {
          "kind": "paragraph",
          "text": "Registered Office / Business Address:"
        },
        {
          "kind": "paragraph",
          "text": "[ADD LEGAL BUSINESS ADDRESS]"
        },
        {
          "kind": "paragraph",
          "text": "Privacy / Grievance Contact:"
        },
        {
          "kind": "paragraph",
          "text": "[ADD NAME OR DESIGNATION IF REQUIRED]"
        }
      ]
    }
  ]
};

export const termsOfUse: LegalDocument = {
  "title": "Terms of Use",
  "description": "Terms governing access to NexAct Global websites, products, software, AI systems, and services.",
  "effectiveDate": "25 September 2026",
  "lastUpdated": "25 September 2026",
  "sections": [
    {
      "number": 1,
      "title": "Acceptance of Terms",
      "id": "section-1",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "These Terms of Use (“Terms”) govern access to and use of the websites, software, digital products, AI-enabled systems, consulting services, automation services, and other offerings provided by NexAct Global (“NexAct”, “we”, “our”, or “us”)."
        },
        {
          "kind": "paragraph",
          "text": "By accessing or using any NexAct website, product, service, or platform that references these Terms, you agree to be bound by these Terms and any additional terms that apply to a specific service."
        },
        {
          "kind": "paragraph",
          "text": "If you do not agree, you should not use the applicable service."
        }
      ]
    },
    {
      "number": 2,
      "title": "Scope",
      "id": "section-2",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "These Terms may apply to:"
        },
        {
          "kind": "list",
          "items": [
            "NexAct Global websites",
            "software products",
            "SaaS platforms",
            "AI agents",
            "automation systems",
            "consulting engagements",
            "development services",
            "digital products",
            "growth and branding services",
            "project work",
            "demonstrations",
            "proposals",
            "business communications"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Specific projects, software products, or commercial engagements may also be governed by a separate proposal, statement of work, master services agreement, subscription agreement, order form, or product-specific terms."
        },
        {
          "kind": "paragraph",
          "text": "Where such an agreement conflicts with these Terms, the signed or specifically agreed commercial agreement will generally control for that engagement."
        }
      ]
    },
    {
      "number": 3,
      "title": "Eligibility and Authority",
      "id": "section-3",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "By entering into an agreement with NexAct on behalf of a company, you represent that:"
        },
        {
          "kind": "list",
          "items": [
            "you have authority to bind that company",
            "the information you provide is accurate",
            "your use of NexAct services is lawful",
            "you will comply with applicable laws and contractual obligations"
          ]
        }
      ]
    },
    {
      "number": 4,
      "title": "Services and Scope of Work",
      "id": "section-4",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "The exact scope of any paid engagement will be defined in the applicable:"
        },
        {
          "kind": "list",
          "items": [
            "proposal",
            "quotation",
            "statement of work",
            "subscription plan",
            "order form",
            "written confirmation"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Only items expressly included in the agreed scope are included in the engagement."
        },
        {
          "kind": "paragraph",
          "text": "Anything outside that scope may require:"
        },
        {
          "kind": "list",
          "items": [
            "additional fees",
            "additional time",
            "revised timelines",
            "a change request",
            "a new agreement"
          ]
        },
        {
          "kind": "paragraph",
          "text": "NexAct is not required to provide work outside the agreed scope without written approval."
        }
      ]
    },
    {
      "number": 5,
      "title": "Estimates and Timelines",
      "id": "section-5",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Any project estimate, target date, launch date, or delivery timeline is based on the information available at the time."
        },
        {
          "kind": "paragraph",
          "text": "Timelines may change where there are:"
        },
        {
          "kind": "list",
          "items": [
            "scope changes",
            "delayed client approvals",
            "missing content or access",
            "third-party dependencies",
            "technical constraints",
            "unexpected integration issues",
            "force majeure events",
            "changes requested by the client"
          ]
        },
        {
          "kind": "paragraph",
          "text": "NexAct will use reasonable efforts to communicate material changes."
        }
      ]
    },
    {
      "number": 6,
      "title": "Client Responsibilities",
      "id": "section-6",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Clients are responsible for providing, when required:"
        },
        {
          "kind": "list",
          "items": [
            "accurate requirements",
            "timely feedback",
            "approvals",
            "required account access",
            "API credentials",
            "content",
            "branding assets",
            "domain or hosting access",
            "legal approvals",
            "third-party permissions",
            "lawful datasets"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Delays caused by missing client information or approvals may affect deadlines and fees."
        },
        {
          "kind": "paragraph",
          "text": "NexAct is not responsible for errors arising from incorrect, incomplete, or outdated information supplied by the client."
        }
      ]
    },
    {
      "number": 7,
      "title": "Fees and Payment",
      "id": "section-7",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Fees will be specified in the applicable commercial agreement."
        },
        {
          "kind": "paragraph",
          "text": "Unless otherwise stated:"
        },
        {
          "kind": "list",
          "items": [
            "invoices are due by the stated due date",
            "deposits may be non-refundable once work has started",
            "milestone payments may be required",
            "late payment may result in suspension",
            "final deliverables may be withheld until outstanding amounts are paid"
          ]
        },
        {
          "kind": "paragraph",
          "text": "NexAct may charge additional fees for:"
        },
        {
          "kind": "list",
          "items": [
            "scope expansion",
            "urgent work",
            "extra revisions",
            "additional integrations",
            "client-caused delays",
            "work beyond the agreed engagement"
          ]
        }
      ]
    },
    {
      "number": 8,
      "title": "Taxes",
      "id": "section-8",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Fees are exclusive of applicable taxes unless expressly stated otherwise."
        },
        {
          "kind": "paragraph",
          "text": "The client is responsible for taxes, duties, levies, or similar charges imposed on the transaction, except taxes imposed directly on NexAct’s income."
        }
      ]
    },
    {
      "number": 9,
      "title": "Change Requests",
      "id": "section-9",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "A change request may be required where the client asks NexAct to:"
        },
        {
          "kind": "list",
          "items": [
            "alter approved requirements",
            "add new functionality",
            "change integrations",
            "redesign completed work",
            "increase project scope",
            "change technical architecture",
            "materially revise an approved deliverable"
          ]
        },
        {
          "kind": "paragraph",
          "text": "NexAct may provide revised pricing and timelines before proceeding."
        }
      ]
    },
    {
      "number": 10,
      "title": "Intellectual Property",
      "id": "section-10",
      "blocks": [
        {
          "kind": "subheading",
          "text": "NexAct Materials"
        },
        {
          "kind": "paragraph",
          "text": "NexAct retains ownership of:"
        },
        {
          "kind": "list",
          "items": [
            "pre-existing code",
            "internal tools",
            "reusable components",
            "frameworks",
            "libraries",
            "methodologies",
            "templates",
            "know-how",
            "proprietary processes",
            "internal AI workflows",
            "development utilities"
          ]
        },
        {
          "kind": "paragraph",
          "text": "unless expressly transferred in writing."
        },
        {
          "kind": "subheading",
          "text": "Client Deliverables"
        },
        {
          "kind": "paragraph",
          "text": "Ownership or licensing of final deliverables will be governed by the applicable project agreement."
        },
        {
          "kind": "paragraph",
          "text": "Where transfer of ownership is agreed, transfer may be conditional on full payment."
        },
        {
          "kind": "subheading",
          "text": "Portfolio Rights"
        },
        {
          "kind": "paragraph",
          "text": "Unless prohibited by a written confidentiality agreement, NexAct may reference completed work in:"
        },
        {
          "kind": "list",
          "items": [
            "portfolios",
            "proposals",
            "case studies",
            "presentations",
            "company showcases"
          ]
        },
        {
          "kind": "paragraph",
          "text": "without disclosing confidential information."
        },
        {
          "kind": "paragraph",
          "text": "Clients may request in writing that specific work remain private."
        }
      ]
    },
    {
      "number": 11,
      "title": "Client Materials",
      "id": "section-11",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "The client retains ownership of materials it provides to NexAct."
        },
        {
          "kind": "paragraph",
          "text": "By supplying materials, the client confirms that it has the right to use them and to authorize NexAct to use them for the agreed project."
        },
        {
          "kind": "paragraph",
          "text": "The client is responsible for claims arising from materials it supplied unlawfully."
        }
      ]
    },
    {
      "number": 12,
      "title": "Third-Party Services",
      "id": "section-12",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct projects may depend on third-party services such as:"
        },
        {
          "kind": "list",
          "items": [
            "hosting providers",
            "cloud platforms",
            "APIs",
            "payment gateways",
            "analytics tools",
            "social platforms",
            "AI providers",
            "email services",
            "CRM systems",
            "scheduling systems"
          ]
        },
        {
          "kind": "paragraph",
          "text": "NexAct does not control third-party availability, pricing, policies, platform changes, suspensions, or outages."
        },
        {
          "kind": "paragraph",
          "text": "NexAct is not responsible for losses caused solely by third-party failures outside our reasonable control."
        }
      ]
    },
    {
      "number": 13,
      "title": "AI and Automation Services",
      "id": "section-13",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "AI and automation systems may produce outputs that are:"
        },
        {
          "kind": "list",
          "items": [
            "probabilistic",
            "incomplete",
            "inaccurate",
            "outdated",
            "dependent on third-party models",
            "dependent on client-provided data"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Clients must use appropriate human review where decisions could materially affect people, finances, health, legal rights, safety, or regulated activities."
        },
        {
          "kind": "paragraph",
          "text": "NexAct does not guarantee that an AI system will always produce correct or error-free outputs."
        }
      ]
    },
    {
      "number": 14,
      "title": "Healthcare, Financial, and Other Regulated Uses",
      "id": "section-14",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Unless expressly agreed in writing, NexAct services do not constitute:"
        },
        {
          "kind": "list",
          "items": [
            "medical advice",
            "legal advice",
            "investment advice",
            "accounting advice",
            "insurance advice",
            "regulatory advice"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Clients operating in regulated industries are responsible for obtaining appropriate professional and regulatory guidance."
        }
      ]
    },
    {
      "number": 15,
      "title": "Acceptable Use",
      "id": "section-15",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Users must not use NexAct products or services to:"
        },
        {
          "kind": "list",
          "items": [
            "break applicable law",
            "violate intellectual-property rights",
            "introduce malware",
            "gain unauthorized access",
            "interfere with systems",
            "distribute unlawful content",
            "conduct abusive or fraudulent activity",
            "misuse personal or confidential information"
          ]
        },
        {
          "kind": "paragraph",
          "text": "NexAct may suspend or restrict access where misuse is reasonably suspected."
        }
      ]
    },
    {
      "number": 16,
      "title": "Confidentiality",
      "id": "section-16",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Where confidential information is exchanged, each party should take reasonable measures to protect it."
        },
        {
          "kind": "paragraph",
          "text": "Confidential information does not include information that:"
        },
        {
          "kind": "list",
          "items": [
            "is already public",
            "becomes public without breach",
            "was lawfully known before disclosure",
            "is independently developed",
            "must be disclosed by law"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Separate NDAs may apply where agreed."
        }
      ]
    },
    {
      "number": 17,
      "title": "Security",
      "id": "section-17",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct uses reasonable security practices appropriate to the relevant service."
        },
        {
          "kind": "paragraph",
          "text": "However, no software, internet service, or electronic system can be guaranteed to be completely secure or uninterrupted."
        },
        {
          "kind": "paragraph",
          "text": "Clients remain responsible for:"
        },
        {
          "kind": "list",
          "items": [
            "safeguarding credentials",
            "user permissions",
            "secure internal practices",
            "appropriate backups",
            "endpoint/device security"
          ]
        }
      ]
    },
    {
      "number": 18,
      "title": "Backups and Data",
      "id": "section-18",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Unless a specific backup commitment is included in the relevant service agreement, clients should maintain independent backups of important business data."
        },
        {
          "kind": "paragraph",
          "text": "NexAct is not responsible for loss of data where that loss results from:"
        },
        {
          "kind": "list",
          "items": [
            "client deletion",
            "compromised credentials",
            "third-party infrastructure failure",
            "unsupported integrations",
            "circumstances outside NexAct’s reasonable control"
          ]
        }
      ]
    },
    {
      "number": 19,
      "title": "Warranties",
      "id": "section-19",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct will perform professional services with reasonable care and skill."
        },
        {
          "kind": "paragraph",
          "text": "Except where expressly stated in writing or required by law, services are provided without additional warranties, including implied warranties of:"
        },
        {
          "kind": "list",
          "items": [
            "merchantability",
            "fitness for a particular purpose",
            "uninterrupted availability",
            "specific commercial results"
          ]
        },
        {
          "kind": "paragraph",
          "text": "We do not guarantee:"
        },
        {
          "kind": "list",
          "items": [
            "revenue increases",
            "sales numbers",
            "search rankings",
            "social growth",
            "lead volume",
            "conversion rates",
            "profitability"
          ]
        },
        {
          "kind": "paragraph",
          "text": "unless a specific guarantee is expressly included in a signed agreement."
        }
      ]
    },
    {
      "number": 20,
      "title": "Limitation of Liability",
      "id": "section-20",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "To the maximum extent permitted by applicable law, NexAct will not be liable for indirect, incidental, special, exemplary, punitive, or consequential losses, including loss of:"
        },
        {
          "kind": "list",
          "items": [
            "profits",
            "revenue",
            "business opportunity",
            "goodwill",
            "anticipated savings",
            "data"
          ]
        },
        {
          "kind": "paragraph",
          "text": "arising from use of or inability to use a NexAct service."
        },
        {
          "kind": "paragraph",
          "text": "Where liability cannot lawfully be excluded, NexAct’s aggregate liability relating to a specific paid engagement should be limited, to the extent permitted by law, to the fees actually paid to NexAct for that engagement during the relevant contractual period."
        },
        {
          "kind": "paragraph",
          "text": "This limitation does not exclude liability that cannot legally be limited or excluded."
        }
      ]
    },
    {
      "number": 21,
      "title": "Indemnification",
      "id": "section-21",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "To the extent permitted by law, a client agrees to indemnify NexAct against third-party claims arising from:"
        },
        {
          "kind": "list",
          "items": [
            "unlawful client-provided content",
            "infringement caused by client materials",
            "illegal use of NexAct services",
            "unauthorized use of data",
            "violation of applicable laws by the client",
            "breach of the client’s contractual responsibilities"
          ]
        },
        {
          "kind": "paragraph",
          "text": "NexAct will remain responsible for its own obligations under applicable law."
        }
      ]
    },
    {
      "number": 22,
      "title": "Suspension",
      "id": "section-22",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct may suspend access to a product or service where reasonably necessary due to:"
        },
        {
          "kind": "list",
          "items": [
            "non-payment",
            "security risks",
            "suspected fraud",
            "abusive use",
            "legal requirements",
            "material contract breach",
            "risks to infrastructure or other users"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Where practical, NexAct will provide reasonable notice."
        }
      ]
    },
    {
      "number": 23,
      "title": "Termination",
      "id": "section-23",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Either party may terminate an engagement according to the applicable agreement."
        },
        {
          "kind": "paragraph",
          "text": "On termination:"
        },
        {
          "kind": "list",
          "items": [
            "outstanding fees remain payable",
            "accrued obligations survive",
            "access may be disabled",
            "client data may be retained or deleted according to applicable agreements and law",
            "licenses may terminate where applicable"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Sections concerning intellectual property, confidentiality, payment, liability, indemnity, dispute resolution, and other provisions intended to survive will continue after termination."
        }
      ]
    },
    {
      "number": 24,
      "title": "Refunds",
      "id": "section-24",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Refund terms depend on the relevant service."
        },
        {
          "kind": "paragraph",
          "text": "Unless otherwise stated in writing:"
        },
        {
          "kind": "list",
          "items": [
            "completed work is non-refundable",
            "work already performed is billable",
            "third-party fees are generally non-refundable",
            "deposits may become non-refundable once resources are allocated or work begins"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Consumer rights that cannot legally be waived remain unaffected."
        }
      ]
    },
    {
      "number": 25,
      "title": "Beta and Experimental Services",
      "id": "section-25",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct may offer experimental, beta, preview, or early-access features."
        },
        {
          "kind": "paragraph",
          "text": "Such features may:"
        },
        {
          "kind": "list",
          "items": [
            "change",
            "contain errors",
            "be discontinued",
            "have limited support",
            "operate differently from production services"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Beta services should not be used for critical workloads unless expressly approved."
        }
      ]
    },
    {
      "number": 26,
      "title": "Availability and Maintenance",
      "id": "section-26",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct may modify, update, maintain, or temporarily suspend products when reasonably required."
        },
        {
          "kind": "paragraph",
          "text": "We do not guarantee continuous availability unless a separate service-level agreement expressly provides otherwise."
        }
      ]
    },
    {
      "number": 27,
      "title": "Modifications to Services",
      "id": "section-27",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct may improve or modify services over time."
        },
        {
          "kind": "paragraph",
          "text": "Material changes to paid contractual commitments will be handled according to the applicable agreement."
        }
      ]
    },
    {
      "number": 28,
      "title": "Changes to These Terms",
      "id": "section-28",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct may update these Terms to reflect:"
        },
        {
          "kind": "list",
          "items": [
            "legal changes",
            "product changes",
            "business changes",
            "security requirements",
            "operational developments"
          ]
        },
        {
          "kind": "paragraph",
          "text": "The current version will be posted on this page with an updated revision date."
        },
        {
          "kind": "paragraph",
          "text": "Where required by law, additional notice will be provided."
        }
      ]
    },
    {
      "number": 29,
      "title": "Electronic Agreements",
      "id": "section-29",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "You agree that contracts, approvals, notices, and acceptances may be completed electronically where legally permitted."
        },
        {
          "kind": "paragraph",
          "text": "Indian law recognizes contracts formed through electronic means and does not make them unenforceable solely because electronic records were used."
        }
      ]
    },
    {
      "number": 30,
      "title": "Governing Law",
      "id": "section-30",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "These Terms will be governed by the laws specified in the applicable commercial agreement."
        }
      ]
    },
    {
      "number": 31,
      "title": "Dispute Resolution",
      "id": "section-31",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Before starting formal proceedings, both parties should attempt in good faith to resolve disputes through written notice and reasonable commercial discussions."
        },
        {
          "kind": "paragraph",
          "text": "A separate client agreement may specify:"
        },
        {
          "kind": "list",
          "items": [
            "jurisdiction",
            "arbitration",
            "mediation",
            "venue",
            "procedural rules"
          ]
        },
        {
          "kind": "paragraph",
          "text": "No provision of these Terms is intended to prevent a party from exercising rights that cannot lawfully be waived."
        },
        {
          "kind": "paragraph",
          "text": "Under Indian contract law, agreements that unlawfully restrain legal proceedings can be void, which is why the dispute clause should not try to completely block access to lawful remedies."
        }
      ]
    },
    {
      "number": 32,
      "title": "Consumer Rights",
      "id": "section-32",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "If you are legally classified as a consumer, nothing in these Terms is intended to exclude rights that cannot legally be excluded."
        },
        {
          "kind": "paragraph",
          "text": "India’s Consumer Protection Act recognizes the concept of unfair contracts between service providers and consumers, so one-sided terms that impose unjustified obligations can create enforceability problems rather than protect the company."
        }
      ]
    },
    {
      "number": 33,
      "title": "Force Majeure",
      "id": "section-33",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct will not be responsible for delay or failure caused by events outside reasonable control, such as:"
        },
        {
          "kind": "list",
          "items": [
            "natural disasters",
            "widespread internet outages",
            "war",
            "civil unrest",
            "governmental actions",
            "major infrastructure failure",
            "third-party platform outages",
            "labor disruption",
            "emergencies"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Obligations will resume when reasonably possible."
        }
      ]
    },
    {
      "number": 34,
      "title": "Severability",
      "id": "section-34",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "If one part of these Terms is held invalid or unenforceable, the remaining provisions will continue to apply to the maximum extent permitted by law."
        }
      ]
    },
    {
      "number": 35,
      "title": "No Waiver",
      "id": "section-35",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Failure to enforce a provision once does not mean NexAct permanently waives the right to enforce that provision later."
        }
      ]
    },
    {
      "number": 36,
      "title": "Assignment",
      "id": "section-36",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Clients may not transfer their contractual rights or obligations without NexAct’s prior written consent where permitted by law."
        },
        {
          "kind": "paragraph",
          "text": "NexAct may transfer an agreement as part of:"
        },
        {
          "kind": "list",
          "items": [
            "corporate restructuring",
            "merger",
            "acquisition",
            "asset transfer",
            "group reorganization"
          ]
        },
        {
          "kind": "paragraph",
          "text": "subject to applicable law."
        }
      ]
    },
    {
      "number": 37,
      "title": "Entire Agreement",
      "id": "section-37",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "These Terms together with any applicable:"
        },
        {
          "kind": "list",
          "items": [
            "proposal",
            "order form",
            "statement of work",
            "subscription agreement",
            "NDA",
            "product terms"
          ]
        },
        {
          "kind": "paragraph",
          "text": "constitute the relevant agreement between the parties regarding the applicable services."
        }
      ]
    },
    {
      "number": 38,
      "title": "Contact",
      "id": "section-38",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "NexAct Global"
        },
        {
          "kind": "paragraph",
          "text": "General enquiries:"
        },
        {
          "kind": "paragraph",
          "text": "[team@nexact.in]"
        },
       
        
        
      ]
    }
  ]
};
