import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HABUILD Case Study: From Google Sheets to 10x Growth | Vacademy",
  description: "Discover how HABUILD, a leading fitness and yoga platform, achieved 10x member growth and 70% cost reduction by automating payment processing and member management with Vacademy&apos;s enterprise solutions.",
  keywords: [
    "HABUILD case study",
    "fitness business automation",
    "yoga studio management",
    "gym management software",
    "fitness member management",
    "yoga class booking system",
    "fitness payment automation",
    "gym member retention",
    "yoga business growth",
    "fitness studio software",
    "wellness business automation",
    "health club management",
    "fitness instructor tools",
    "yoga teacher platform",
    "gym operations automation",
    "fitness business scaling",
    "yoga studio operations",
    "member management system",
    "fitness CRM",
    "yoga CRM",
    "fitness WhatsApp automation",
    "gym attendance tracking",
    "yoga class management",
    "fitness business transformation",
    "Google Sheets alternative",
    "fitness business growth",
    "yoga business software",
    "gym business automation",
    "fitness technology",
    "yoga technology platform",
    "wellness business software",
    "health and fitness automation",
    "fitness business optimization",
    "yoga studio automation"
  ],
  authors: [{ name: "Vacademy Team" }],
  creator: "Vacademy",
  publisher: "Vacademy by Vidyayatan Infotech",
  category: "Fitness Business Automation",
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
    url: "https://lms.vacademy.io/blog/10x_growth",
    siteName: "Vacademy",
    title: "HABUILD Case Study: From Google Sheets to 10x Growth",
    description: "How HABUILD transformed their fitness platform achieving 10x member growth and 70% cost reduction with automated payment processing and member management.",
    images: [
      {
        url: "/assets/blog/habuild-10x-growth-case-study.png",
        width: 1200,
        height: 630,
        alt: "HABUILD 10x Growth Case Study - Fitness Business Automation Success",
      },
    ],
    publishedTime: new Date().toISOString(),
    tags: [
      "Fitness Business", 
      "Yoga Studio Management", 
      "Gym Automation", 
      "HABUILD", 
      "Business Growth", 
      "Member Management",
      "Payment Automation",
      "Fitness Technology",
      "Yoga Business",
      "Wellness Automation"
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HABUILD Case Study: From Google Sheets to 10x Growth",
    description: "How HABUILD achieved 10x fitness business growth with automated member management and payment processing.",
    images: ["/assets/blog/habuild-10x-growth-case-study.png"],
    creator: "@VacademyLMS",
  },
  metadataBase: new URL("https://lms.vacademy.io"),
  alternates: {
    canonical: "https://lms.vacademy.io/blog/10x_growth",
  },
};

// Structured Data for Fitness/Yoga Business Article
const fitnessArticleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "From Google Sheets to Growth Machine: How HABUILD Automated Fitness Business Operations for 10x Growth",
  "description": "Comprehensive case study showing how HABUILD, a fitness and yoga platform, transformed operations and achieved 10x member growth using Vacademy&apos;s automation solutions.",
  "image": "https://lms.vacademy.io/assets/blog/habuild-10x-growth-case-study.png",
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
    "@id": "https://lms.vacademy.io/blog/10x_growth"
  },
  "articleSection": "Fitness Business Automation",
  "keywords": "HABUILD, fitness business automation, yoga studio management, gym management software, member management, payment automation, fitness technology",
  "about": [
    {
      "@type": "Thing",
      "name": "Fitness Business Automation"
    },
    {
      "@type": "Thing", 
      "name": "Yoga Studio Management"
    },
    {
      "@type": "Thing",
      "name": "Gym Management Software"
    },
    {
      "@type": "Thing",
      "name": "Member Management System"
    },
    {
      "@type": "Organization",
      "name": "HABUILD",
      "description": "A leading fitness and wellness technology platform"
    }
  ],
  "mentions": [
    {
      "@type": "SoftwareApplication",
      "name": "Vacademy",
      "applicationCategory": "Business Automation Software",
      "description": "Enterprise automation solutions for fitness and learning businesses"
    },
    {
      "@type": "Organization", 
      "name": "HABUILD",
      "description": "Fitness and wellness platform with 2+ Lakh users across 36 nations"
    }
  ]
};

export default function HabuildGrowthBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fitnessArticleStructuredData),
        }}
      />
      {children}
    </>
  );
} 