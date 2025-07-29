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
    "online instructor tools"
  ],
  openGraph: {
    title: "Empower Your Online Yoga & Fitness Business with Vacademy",
    description: "Automate, grow, and thrive with our all-in-one platform for online yoga and fitness instructors. Join 2 Lakh+ successful members.",
    images: ["/assets/illustrations/hero-ai.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empower Your Online Yoga & Fitness Business with Vacademy",
    description: "Automate, grow, and thrive with our all-in-one platform for online yoga and fitness instructors.",
    images: ["/assets/illustrations/hero-ai.png"],
  },
  alternates: {
    canonical: "/yoga",
  },
};

export default function YogaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 