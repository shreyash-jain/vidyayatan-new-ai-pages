import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HABUILD Live Session Automation: Scaling to 10,000+ Users | Vacademy",
  description: "Discover how HABUILD eliminated manual Zoom link creation and attendance tracking, scaling live sessions to 20 Lakh users with automated session management and unique link generation.",
  keywords: [
    "HABUILD live sessions",
    "fitness live session automation",
    "yoga live class management",
    "gym virtual sessions",
    "fitness session scheduling",
    "live class automation",
    "Zoom link automation",
    "Google Meet automation",
    "YouTube live sessions",
    "fitness attendance tracking",
    "virtual fitness classes",
    "online yoga sessions",
    "live session management",
    "fitness video streaming",
    "gym live classes",
    "wellness session automation",
    "fitness instructor tools",
    "virtual training sessions",
    "online fitness platform",
    "live workout streaming",
    "fitness class scheduling",
    "automated attendance marking",
    "unique session links",
    "fitness session analytics",
    "virtual yoga classes",
    "gym session tracking",
    "fitness live streaming",
    "online class management",
    "virtual fitness automation",
    "live session scaling",
    "fitness platform automation",
    "yoga session management",
    "gym virtual training"
  ],
  authors: [{ name: "Vacademy Team" }],
  creator: "Vacademy",
  publisher: "Vacademy by Vidyayatan Infotech",
  category: "Live Session Management",
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
    url: "https://lms.vacademy.io/blog/live_sessions",
    siteName: "Vacademy",
    title: "HABUILD Live Session Automation: Scaling to 10,000+ Users",
    description: "How HABUILD eliminated manual session management and scaled live classes to 20 Lakh users with automated attendance tracking and unique link generation.",
    images: [
      {
        url: "/assets/blog/habuild-live-session-automation.png",
        width: 1200,
        height: 630,
        alt: "HABUILD Live Session Automation - Fitness Virtual Class Management",
      },
    ],
    publishedTime: "2024-01-25T00:00:00.000Z",
    tags: [
      "Live Session Management", 
      "Fitness Technology", 
      "Virtual Classes", 
      "HABUILD", 
      "Session Automation", 
      "Attendance Tracking",
      "Video Streaming",
      "Fitness Platform",
      "Yoga Technology",
      "Gym Automation"
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HABUILD Live Session Automation: Scaling to 10,000+ Users",
    description: "How HABUILD automated live session management to scale virtual fitness classes to 20 Lakh users with zero manual work.",
    images: ["/assets/blog/habuild-live-session-automation.png"],
    creator: "@VacademyLMS",
  },
  metadataBase: new URL("https://lms.vacademy.io"),
  alternates: {
    canonical: "https://lms.vacademy.io/blog/live_sessions",
  },
};

// Structured Data for Live Session Article
const liveSessionArticleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Never Send a Manual Zoom Link Again: Scaling Live Sessions for 10,000+ Users",
  "description": "Comprehensive case study showing how HABUILD automated live session management, eliminated manual link creation, and scaled virtual fitness classes to 20 Lakh users with advanced session automation technology.",
  "image": "https://lms.vacademy.io/assets/blog/habuild-live-session-automation.png",
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
  "datePublished": "2024-01-25T00:00:00.000Z",
  "dateModified": "2024-01-25T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://lms.vacademy.io/blog/live_sessions"
  },
  "articleSection": "Live Session Management",
  "keywords": "HABUILD, live session automation, fitness virtual classes, Zoom automation, attendance tracking, session management, fitness technology",
  "about": [
    {
      "@type": "Thing",
      "name": "Live Session Management"
    },
    {
      "@type": "Thing", 
      "name": "Virtual Fitness Classes"
    },
    {
      "@type": "Thing",
      "name": "Session Automation Technology"
    },
    {
      "@type": "Thing",
      "name": "Attendance Tracking Systems"
    },
    {
      "@type": "Organization",
      "name": "HABUILD",
      "description": "A leading fitness platform with advanced live session automation systems"
    }
  ],
  "mentions": [
    {
      "@type": "SoftwareApplication",
      "name": "Vacademy",
      "applicationCategory": "Live Session Management Software",
      "description": "Enterprise live session automation for fitness and learning businesses"
    },
    {
      "@type": "Organization", 
      "name": "HABUILD",
      "description": "Fitness platform that scaled live sessions to 20 Lakh users with automation"
    },
    {
      "@type": "SoftwareApplication",
      "name": "Zoom",
      "description": "Video conferencing platform integrated with automated session management"
    },
    {
      "@type": "SoftwareApplication",
      "name": "YouTube",
      "description": "Video streaming platform used for automated live fitness sessions"
    }
  ]
};

export default function LiveSessionsBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(liveSessionArticleStructuredData),
        }}
      />
      {children}
    </>
  );
} 