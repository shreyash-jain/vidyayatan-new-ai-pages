import { Metadata } from 'next';

export const siteConfig = {
  name: 'Vidyayatan AI',
  title: 'Vidyayatan AI - Intelligent AI Solutions for Modern Business',
  description: 'Accelerate software development and scale your business with AI-driven automation. Meet your AI employees - specialized agents for development, design, product management, and more.',
  url: 'https://ai.vidyayatan.com',
  ogImage: 'https://ai.vidyayatan.com/assets/illustrations/hero-ai.png',
  creator: '@VidyayatanAI',
  keywords: [
    'AI automation',
    'software development acceleration', 
    'AI employees',
    'business automation',
    'AI agents',
    'artificial intelligence solutions',
    'LLM integration',
    'AI-powered business tools',
    'intelligent automation',
    'AI consulting',
    'machine learning solutions',
    'AI for business growth'
  ],
  authors: [
    {
      name: 'Vidyayatan AI Team',
      url: 'https://ai.vidyayatan.com',
    }
  ],
};

export function generateSEO({
  title,
  description,
  image,
  path = '',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const finalTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const finalDescription = description || siteConfig.description;
  const finalImage = image || siteConfig.ogImage;
  const url = `${siteConfig.url}${path}`;

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: siteConfig.name,
      title: finalTitle,
      description: finalDescription,
      images: [
        {
          url: finalImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [finalImage],
      creator: siteConfig.creator,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
  };
}

// Structured data schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/assets/logos/vid new logo 1 2.svg`,
  description: siteConfig.description,
  sameAs: [
    'https://linkedin.com/company/vidyayatan-ai',
    'https://twitter.com/VidyayatanAI'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: siteConfig.url
  },
  offers: {
    '@type': 'Service',
    name: 'AI Automation Solutions',
    description: 'AI-powered business automation, software development acceleration, and intelligent agents for various business functions'
  },
  potentialAction: {
    '@type': 'Action',
    name: 'Book Demo',
    target: siteConfig.url
  }
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}; 