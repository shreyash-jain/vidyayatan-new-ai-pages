import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HABUILD Referral System: Turning Members into Sales Force | Vacademy",
  description: "Discover how HABUILD&apos;s referral program transformed member advocacy into a powerful sales force, contributing to 50% lead conversion increase and 40% retention boost with Vacademy&apos;s referral automation.",
  keywords: [
    "HABUILD referral system",
    "fitness referral program",
    "yoga studio referrals",
    "gym member referrals",
    "fitness business referrals",
    "member advocacy program",
    "fitness word of mouth marketing",
    "gym referral rewards",
    "yoga referral tracking",
    "fitness member engagement",
    "referral program automation",
    "fitness business growth",
    "member retention strategies",
    "fitness community building",
    "gym loyalty programs",
    "yoga business marketing",
    "fitness customer acquisition",
    "member referral tracking",
    "fitness gamification",
    "gym leaderboards",
    "fitness rewards system",
    "member sales force",
    "fitness advocacy program",
    "yoga member rewards",
    "gym growth strategies",
    "fitness marketing automation",
    "member engagement platform",
    "referral conversion tracking",
    "fitness business automation",
    "yoga studio growth",
    "gym membership growth",
    "fitness referral analytics",
    "member recommendation system"
  ],
  authors: [{ name: "Vacademy Team" }],
  creator: "Vacademy",
  publisher: "Vacademy by Vidyayatan Infotech",
  category: "Referral Marketing",
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
    url: "https://lms.vacademy.io/blog/referral_system",
    siteName: "Vacademy",
    title: "HABUILD Referral System: Turning Members into Sales Force",
    description: "How HABUILD&apos;s referral program transformed member advocacy into measurable growth with 50% lead conversion increase through automated referral tracking and rewards.",
    images: [
      {
        url: "/assets/blog/habuild-referral-system-case-study.png",
        width: 1200,
        height: 630,
        alt: "HABUILD Referral System Case Study - Fitness Member Advocacy Program",
      },
    ],
    publishedTime: new Date().toISOString(),
    tags: [
      "Referral Marketing", 
      "Fitness Business", 
      "Member Engagement", 
      "HABUILD", 
      "Growth Strategy", 
      "Customer Advocacy",
      "Business Automation",
      "Fitness Technology",
      "Yoga Business",
      "Gym Management"
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HABUILD Referral System: Turning Members into Sales Force",
    description: "How HABUILD transformed member advocacy into measurable growth with automated referral tracking and rewards system.",
    images: ["/assets/blog/habuild-referral-system-case-study.png"],
    creator: "@VacademyLMS",
  },
  metadataBase: new URL("https://lms.vacademy.io"),
  alternates: {
    canonical: "https://lms.vacademy.io/blog/referral_system",
  },
};

// Structured Data for Referral System Article
const referralArticleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Referral System That Turned HABUILD&apos;s Members into a Sales Force",
  "description": "Comprehensive case study showing how HABUILD implemented a robust referral program that transformed member advocacy into measurable growth and contributed to significant business expansion.",
  "image": "https://lms.vacademy.io/assets/blog/habuild-referral-system-case-study.png",
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
  "datePublished": new Date().toISOString(),
  "dateModified": new Date().toISOString(),
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://lms.vacademy.io/blog/referral_system"
  },
  "articleSection": "Referral Marketing",
  "keywords": "HABUILD, referral program, fitness business, member advocacy, referral tracking, fitness marketing, gym referrals, yoga referrals",
  "about": [
    {
      "@type": "Thing",
      "name": "Referral Marketing"
    },
    {
      "@type": "Thing", 
      "name": "Fitness Business Growth"
    },
    {
      "@type": "Thing",
      "name": "Member Engagement"
    },
    {
      "@type": "Thing",
      "name": "Customer Advocacy Program"
    },
    {
      "@type": "Organization",
      "name": "HABUILD",
      "description": "A leading fitness and wellness technology platform with advanced referral systems"
    }
  ],
  "mentions": [
    {
      "@type": "SoftwareApplication",
      "name": "Vacademy",
      "applicationCategory": "Referral Management Software",
      "description": "Enterprise referral program automation for fitness and learning businesses"
    },
    {
      "@type": "Organization", 
      "name": "HABUILD",
      "description": "Fitness platform that transformed member advocacy into measurable growth"
    }
  ]
};

export default function ReferralSystemBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(referralArticleStructuredData),
        }}
      />
      {children}
    </>
  );
} 