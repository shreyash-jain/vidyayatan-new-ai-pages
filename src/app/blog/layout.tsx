import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Fitness & Yoga Business Automation Insights | Vacademy",
  description: "Discover success stories, case studies, and insights on automating fitness businesses, yoga studios, and learning platforms. Learn how top businesses scale with Vacademy automation solutions.",
  keywords: [
    "fitness business blog",
    "yoga studio automation",
    "gym management insights",
    "fitness business automation",
    "yoga business growth",
    "fitness studio software",
    "gym automation stories",
    "wellness business automation",
    "health club management",
    "fitness instructor resources",
    "yoga teacher tools",
    "member management insights",
    "fitness CRM blog",
    "yoga CRM insights",
    "fitness technology trends",
    "gym operations blog",
    "fitness business scaling",
    "yoga studio operations",
    "wellness technology",
    "fitness automation case studies",
    "gym business transformation",
    "fitness industry insights",
    "yoga business software",
    "health and fitness automation",
    "fitness business optimization",
    "gym management blog"
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
    type: "website",
    locale: "en_US",
    url: "https://lms.vacademy.io/blog",
    siteName: "Vacademy",
    title: "Fitness & Yoga Business Automation Blog | Vacademy",
    description: "Success stories and insights on automating fitness businesses, yoga studios, and learning platforms with enterprise automation solutions.",
    images: [
      {
        url: "/assets/blog/vacademy-blog-og.png",
        width: 1200,
        height: 630,
        alt: "Vacademy Blog - Fitness & Yoga Business Automation Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitness & Yoga Business Automation Blog | Vacademy",
    description: "Success stories and insights on automating fitness businesses, yoga studios, and learning platforms.",
    images: ["/assets/blog/vacademy-blog-og.png"],
    creator: "@VacademyLMS",
  },
  metadataBase: new URL("https://lms.vacademy.io"),
  alternates: {
    canonical: "https://lms.vacademy.io/blog",
  },
};

// Structured Data for Blog
const blogStructuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Vacademy Blog",
  "description": "Insights, case studies, and success stories on fitness business automation, yoga studio management, and learning platform optimization.",
  "url": "https://lms.vacademy.io/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Vacademy by Vidyayatan Infotech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://lms.vacademy.io/assets/vacademy/vacademy_logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://lms.vacademy.io/blog"
  },
  "blogPost": [
    {
      "@type": "BlogPosting",
      "headline": "From Google Sheets to Growth Machine: How HABUILD Automated Fitness Business Operations for 10x Growth",
      "url": "https://lms.vacademy.io/blog/10x_growth",
      "datePublished": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Vacademy"
      },
      "description": "HABUILD case study showing 10x growth through fitness business automation"
    },
    {
      "@type": "BlogPosting",
      "headline": "The Referral System That Turned HABUILD&apos;s Members into a Sales Force",
      "url": "https://lms.vacademy.io/blog/referral_system",
      "datePublished": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Vacademy"
      },
      "description": "How HABUILD&apos;s referral program transformed member advocacy into measurable growth"
    },
    {
      "@type": "BlogPosting",
      "headline": "Never Send a Manual Zoom Link Again: Scaling Live Sessions for 10,000+ Users",
      "url": "https://lms.vacademy.io/blog/live_sessions",
      "datePublished": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Vacademy"
      },
      "description": "How HABUILD automated live session management to scale virtual classes to 20 Lakh users"
    }
  ],
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
    }
  ]
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogStructuredData),
        }}
      />
      {children}
    </>
  );
} 