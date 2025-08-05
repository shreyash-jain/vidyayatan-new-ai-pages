import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoga & Fitness Online Academy Platform | Vacademy - Automate & Scale Your Online Classes",
  description: "Transform your online yoga & fitness business with Vacademy. Automate payments, manage members, deliver seamless live sessions, and grow your digital community. Proven to scale businesses from 300 to 2 Lakh+ members.",
  keywords: [
    "online yoga platform",
    "fitness instructor software", 
    "virtual yoga classes",
    "online fitness academy",
    "yoga teacher management system",
    "fitness class automation",
    "online wellness platform",
    "yoga business software",
    "fitness trainer tools",
    "virtual fitness platform",
    "online yoga business",
    "digital fitness coaching",
    "distance learning yoga",
    "remote fitness training",
    "online instructor tools",
    "yoga studio management",
    "fitness CRM software",
    "wellness business automation",
    "online fitness community",
    "yoga membership platform"
  ],
  openGraph: {
    title: "Empower Your Online Yoga & Fitness Business with Vacademy",
    description: "Automate, grow, and thrive with our all-in-one platform for online yoga and fitness instructors. Join 2 Lakh+ successful members.",
    images: [
      {
        url: "/assets/yoga/hero-image-1.jpg",
        width: 1200,
        height: 630,
        alt: "Vacademy Yoga Platform - Transform Your Online Fitness Business"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: "Vacademy by Vidyayatan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empower Your Online Yoga & Fitness Business with Vacademy",
    description: "Automate, grow, and thrive with our all-in-one platform for online yoga and fitness instructors.",
    images: ["/assets/yoga/hero-image-1.jpg"],
    creator: "@VidyayatanAI",
  },
  alternates: {
    canonical: "/yoga",
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

// Structured Data for Yoga Platform
const yogaStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Vacademy Yoga & Fitness Platform",
  "description": "All-in-one platform for yoga and fitness instructors to automate their online business, manage members, deliver live sessions, and scale their wellness community.",
  "url": "https://ai.vidyayatan.com/yoga",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser, iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "30000",
    "priceCurrency": "INR",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "30000",
      "priceCurrency": "INR",
      "unitText": "MONTH"
    },
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "provider": {
    "@type": "Organization",
    "name": "Vidyayatan Infotech",
    "url": "https://vidyayatan.com",
    "logo": "https://ai.vidyayatan.com/assets/logos/vid_new_logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+91-9479742410",
      "email": "hello@vidyayatan.com"
    }
  },
  "featureList": [
    "Live Session Management",
    "Member Management",
    "Payment Processing",
    "Video Library",
    "Progress Tracking",
    "Automated Reminders",
    "Branded Mobile App",
    "Analytics Dashboard"
  ],
  "screenshot": [
    {
      "@type": "ImageObject",
      "url": "https://ai.vidyayatan.com/assets/yoga/yoga-app.jpg",
      "caption": "Vacademy Platform Dashboard"
    }
  ],
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "The video quality and branding options on Vacademy are incredible. My students feel like they're getting a premium experience."
    }
  ]
};

// Local Business Structured Data
const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Vidyayatan Infotech",
  "description": "AI-powered business automation and wellness platform solutions",
  "url": "https://vidyayatan.com",
  "telephone": "+91-9479742410",
  "email": "hello@vidyayatan.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "Maharashtra",
    "addressLocality": "Mumbai"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.0760",
    "longitude": "72.8777"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://linkedin.com/company/vidyayatan-ai",
    "https://twitter.com/VidyayatanAI"
  ]
};

// FAQ Structured Data
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does Vacademy cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vacademy starts at ₹30,000/month for the complete yoga platform with 200 students included. Additional users cost ₹200/user/year beyond the base limit."
      }
    },
    {
      "@type": "Question",
      "name": "What features are included in Vacademy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vacademy includes live session management, member management, payment processing, video library, progress tracking, automated reminders, branded mobile app, and analytics dashboard."
      }
    },
    {
      "@type": "Question",
      "name": "Is Vacademy suitable for yoga instructors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Vacademy is specifically designed for yoga instructors, fitness trainers, and wellness professionals. It includes features like class scheduling, client progress tracking, and automated session reminders."
      }
    },
    {
      "@type": "Question",
      "name": "Can I customize the platform with my branding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Vacademy offers white-label solutions where you can customize the platform with your own branding, logo, and colors to create a seamless experience for your students."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer support and training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide 24/7 customer support and comprehensive training to help you get started with Vacademy. Our team will guide you through the setup process and answer any questions."
      }
    }
  ]
};

// Breadcrumb Structured Data
const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://ai.vidyayatan.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Yoga Platform",
      "item": "https://ai.vidyayatan.com/yoga"
    }
  ]
};

export default function YogaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(yogaStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      {children}
    </>
  );
} 