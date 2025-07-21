import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
      // Special rules for search engines to prioritize fitness/yoga content
      {
        userAgent: 'Googlebot',
        allow: [
          '/blog/',
          '/blog/10x_growth',
          '/blog/referral_system',
          '/blog/live_sessions',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      }
    ],
    sitemap: [
      'https://ai.vidyayatan.com/sitemap.xml',
      'https://lms.vacademy.io/sitemap.xml',
    ],
    host: process.env.NODE_ENV === 'production' 
      ? (process.env.VERCEL_URL?.includes('vacademy') 
          ? 'https://lms.vacademy.io' 
          : 'https://ai.vidyayatan.com')
      : 'http://localhost:3000',
  };
} 