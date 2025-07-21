export type DomainType = 'ai' | 'vacademy';

export function getDomainType(hostname?: string): DomainType {
  if (!hostname) {
    // Default to AI domain in development
    return 'ai';
  }
  
  if (hostname.includes('lms.vacademy.io') || hostname.includes('vacademy')) {
    return 'vacademy';
  }
  
  return 'ai';
}

export function isVacademyDomain(hostname?: string): boolean {
  return getDomainType(hostname) === 'vacademy';
}

export function isAIDomain(hostname?: string): boolean {
  return getDomainType(hostname) === 'ai';
}

export function getDomainConfig(domainType: DomainType) {
  switch (domainType) {
    case 'vacademy':
      return {
        name: 'Vacademy',
        title: 'Vacademy - Enterprise Automation for Fitness & Learning',
        description: 'Professional automation solutions for fitness and learning businesses. Scale operations efficiently with enterprise-grade technology.',
        url: 'https://lms.vacademy.io',
        primaryColor: '#ec7524', // Orange theme for Vacademy
        logo: '/assets/vacademy/vacademy_logo.png',
        theme: 'orange'
      };
    case 'ai':
    default:
      return {
        name: 'Vidyayatan AI',
        title: 'Vidyayatan AI - Intelligent AI Solutions for Modern Business',
        description: 'Accelerate software development and scale your business with AI-driven automation. Meet your AI employees - specialized agents for development, design, product management, and more.',
        url: 'https://ai.vidyayatan.com',
        primaryColor: '#888ae0', // Purple theme for AI
        logo: '/assets/logos/vid_new_logo.svg',
        theme: 'purple'
      };
  }
}

// Hook to get current domain configuration
export function useDomainConfig() {
  if (typeof window === 'undefined') {
    return getDomainConfig('ai'); // Default for SSR
  }
  
  const domainType = getDomainType(window.location.hostname);
  return getDomainConfig(domainType);
} 