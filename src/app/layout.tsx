import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";
import { Montserrat_Alternates, Lato, Space_Grotesk } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat_Alternates({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vidyayatan AI - Intelligent AI Solutions for Modern Business",
    template: "%s | Vidyayatan AI"
  },
  description: "Accelerate software development and scale your business with AI-driven automation. Meet your AI employees - specialized agents for development, design, product management, and more.",
  keywords: [
    "AI automation",
    "software development acceleration", 
    "AI employees",
    "business automation",
    "AI agents",
    "artificial intelligence solutions",
    "LLM integration",
    "AI-powered business tools",
    "intelligent automation",
    "AI consulting",
    "machine learning solutions",
    "AI for business growth"
  ],
  authors: [{ name: "Vidyayatan AI Team" }],
  creator: "Vidyayatan AI",
  publisher: "Vidyayatan AI", 
  category: "Technology",
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
    url: "https://ai.vidyayatan.com",
    siteName: "Vidyayatan AI",
    title: "Vidyayatan AI - Intelligent AI Solutions for Modern Business",
    description: "Accelerate software development and scale your business with AI-driven automation. Meet your AI employees - specialized agents for development, design, product management, and more.",
    images: [
      {
        url: "/assets/illustrations/hero-ai.png",
        width: 1200,
        height: 630,
        alt: "Vidyayatan AI - Intelligent AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidyayatan AI - Intelligent AI Solutions for Modern Business",
    description: "Accelerate software development and scale your business with AI-driven automation. Meet your AI employees - specialized agents for development, design, product management, and more.",
    images: ["/assets/illustrations/hero-ai.png"],
    creator: "@VidyayatanAI",
  },
  metadataBase: new URL("https://ai.vidyayatan.com"),
  alternates: {
    canonical: "https://ai.vidyayatan.com",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vidyayatan AI",
  "url": "https://ai.vidyayatan.com",
  "logo": "https://ai.vidyayatan.com/assets/logos/vid new logo 1 2.svg",
  "description": "Intelligent AI solutions for modern business automation and software development acceleration",
  "sameAs": [
    "https://linkedin.com/company/vidyayatan-ai",
    "https://twitter.com/VidyayatanAI"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://ai.vidyayatan.com"
  },
  "offers": {
    "@type": "Service",
    "name": "AI Automation Solutions",
    "description": "AI-powered business automation, software development acceleration, and intelligent agents for various business functions"
  },
  "potentialAction": {
    "@type": "Action",
    "name": "Book Demo",
    "target": "https://ai.vidyayatan.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#888ae0" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon and app icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${montserrat.variable} ${lato.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
