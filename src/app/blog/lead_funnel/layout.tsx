import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HABUILD Lead Funnel: How 50% of Trial Users Became Paying Members | Vacademy",
  description: "Discover HABUILD's lead conversion strategy that transformed scattered leads into a 50% conversion machine. Learn the automated funnel system that captured every lead and nurtured them into paying fitness members.",
  keywords: [
    "HABUILD lead funnel",
    "fitness lead conversion",
    "yoga lead management",
    "gym lead generation",
    "fitness trial conversion",
    "lead funnel automation",
    "fitness business leads",
    "gym member conversion",
    "yoga trial users",
    "fitness lead nurturing",
    "automated lead capture",
    "fitness sales funnel",
    "gym marketing automation",
    "yoga business conversion",
    "fitness CRM system",
    "lead management software",
    "fitness demo programs",
    "gym trial programs",
    "yoga lead tracking",
    "fitness prospect nurturing",
    "automated follow-up system",
    "fitness sales automation",
    "gym lead scoring",
    "yoga conversion optimization",
    "fitness marketing funnel",
    "lead qualification system",
    "fitness customer acquisition",
    "gym sales process",
    "yoga membership conversion",
    "fitness business automation",
    "lead conversion strategies",
    "fitness prospect management",
    "gym growth automation"
  ],
  authors: [{ name: "Vacademy Team" }],
  creator: "Vacademy",
  publisher: "Vacademy by Vidyayatan Infotech",
  category: "Lead Conversion",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://lms.vacademy.io/blog/lead_funnel",
    siteName: "Vacademy",
    title: "Stop Losing Leads: The Funnel That Converted 50% of HABUILD's Trial Users",
    description: "How HABUILD built an automated lead conversion machine that transformed trial users into paying members with 50% conversion rate through systematic nurturing and engagement.",
    images: [
      {
        url: "/assets/blog/habuild-lead-funnel-conversion.png",
        width: 1200,
        height: 630,
        alt: "HABUILD Lead Funnel Case Study - 50% Trial User Conversion",
      },
    ],
    publishedTime: "2024-01-30T00:00:00.000Z",
    tags: [
      "Lead Conversion", 
      "Sales Funnel", 
      "Fitness Marketing", 
      "HABUILD", 
      "Business Automation", 
      "Customer Acquisition",
      "Trial Conversion",
      "Lead Management",
      "Fitness Technology",
      "Marketing Automation"
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Losing Leads: The Funnel That Converted 50% of HABUILD's Trial Users",
    description: "How HABUILD transformed their lead management into a conversion machine that turns 50% of trial users into paying fitness members.",
    images: ["/assets/blog/habuild-lead-funnel-conversion.png"],
    creator: "@VacademyLMS",
  },
  metadataBase: new URL("https://lms.vacademy.io"),
  alternates: {
    canonical: "https://lms.vacademy.io/blog/lead_funnel",
  },
};

// Structured Data for Lead Funnel Article
const leadFunnelArticleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Stop Losing Leads: The Funnel That Converted 50% of HABUILD's Trial Users",
  "description": "Comprehensive guide showing how HABUILD built an automated lead conversion system that transformed scattered prospects into a 50% trial-to-paid conversion rate through systematic nurturing and engagement automation.",
  "image": "https://lms.vacademy.io/assets/blog/habuild-lead-funnel-conversion.png",
  "author": {
    "@type": "Organization",
    "name": "Vacademy",
    "url": "https://lms.vacademy.io"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Vacademy by Vidyayatan Infotech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://lms.vacademy.io/assets/vacademy/vacademy_logo.png"
    }
  },
  "datePublished": "2024-01-30T00:00:00.000Z",
  "dateModified": "2024-01-30T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://lms.vacademy.io/blog/lead_funnel"
  },
  "articleSection": "Lead Conversion",
  "keywords": "HABUILD, lead funnel, fitness lead conversion, trial user conversion, lead management, sales automation, fitness marketing",
  "about": [
    {
      "@type": "Thing",
      "name": "Lead Conversion Optimization"
    },
    {
      "@type": "Thing", 
      "name": "Sales Funnel Automation"
    },
    {
      "@type": "Thing",
      "name": "Fitness Lead Management"
    },
    {
      "@type": "Thing",
      "name": "Trial User Conversion"
    },
    {
      "@type": "Organization",
      "name": "HABUILD",
      "description": "A leading fitness platform with advanced lead conversion systems achieving 50% trial-to-paid conversion"
    }
  ],
  "mentions": [
    {
      "@type": "SoftwareApplication",
      "name": "Vacademy",
      "applicationCategory": "Lead Management Software",
      "description": "Enterprise lead conversion and sales funnel automation for fitness and learning businesses"
    },
    {
      "@type": "Organization", 
      "name": "HABUILD",
      "description": "Fitness platform that achieved 50% trial user conversion with automated lead management"
    },
    {
      "@type": "Thing",
      "name": "WhatsApp Business API",
      "description": "Automated messaging platform used for lead nurturing"
    },
    {
      "@type": "Thing",
      "name": "Facebook Ads",
      "description": "Lead generation platform integrated with automated conversion system"
    }
  ]
};

export default function LeadFunnelBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(leadFunnelArticleStructuredData),
        }}
      />
      {children}
    </>
  );
} 