/**
 * JSON-LD Structured Data Generators
 * These functions generate valid Schema.org markup for SEO
 */

export interface SchemaOrg {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

const siteConfig = {
  name: 'OlhaIP',
  url: 'https://olhaip.com',
  description: 'See what the internet sees. Check your public IP address and understand your connection.',
  logo: 'https://olhaip.com/logo-mare26-camel.png',
};

export function generateWebSiteSchema(): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function generateOrganizationSchema(): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: siteConfig.logo,
  };
}

export function generateWebApplicationSchema(
  name: string,
  description: string,
  url: string
): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function generateWebPageSchema(
  title: string,
  description: string,
  url: string
): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  content?: string
): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    ...(content ? { articleBody: content } : {}),
    mainEntityOfPage: url,
    image: siteConfig.logo,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.logo,
      },
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
