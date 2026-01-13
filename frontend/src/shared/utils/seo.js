/**
 * SEO utility functions for dynamic meta tags
 */

export const updateMetaTag = (name, content, isProperty = false) => {
  const attribute = isProperty ? 'property' : 'name'
  let element = document.querySelector(`meta[${attribute}="${name}"]`)
  
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  
  element.setAttribute('content', content)
}

export const updateTitle = (title) => {
  document.title = title
  updateMetaTag('og:title', title, true)
  updateMetaTag('twitter:title', title, true)
}

export const updateDescription = (description) => {
  updateMetaTag('description', description)
  updateMetaTag('og:description', description, true)
  updateMetaTag('twitter:description', description, true)
}

export const updateImage = (imageUrl) => {
  updateMetaTag('og:image', imageUrl, true)
  updateMetaTag('twitter:image', imageUrl, true)
}

export const updateURL = (url) => {
  updateMetaTag('og:url', url, true)
  updateMetaTag('twitter:url', url, true)
}

export const setPageSEO = ({ title, description, image, url, keywords }) => {
  if (title) {
    updateTitle(title)
  }
  
  if (description) {
    updateDescription(description)
  }
  
  if (image) {
    updateImage(image)
  }
  
  if (url) {
    updateURL(url)
  }
  
  if (keywords) {
    updateMetaTag('keywords', keywords)
  }
}

/**
 * Generate structured data (JSON-LD) for SEO
 */
export const generateStructuredData = (type, data) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }
  
  return baseSchema
}

export const addStructuredData = (structuredData) => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(structuredData)
  document.head.appendChild(script)
  
  return script
}

// Predefined schemas for common pages
export const schemas = {
  organization: (data) => generateStructuredData('Organization', {
    name: data.name || 'AgriSmart',
    url: data.url || 'https://agrismart.vn',
    logo: data.logo || 'https://agrismart.vn/logo.png',
    description: data.description || 'Hệ sinh thái số cho Nông nghiệp Việt Nam',
    ...data,
  }),
  
  website: (data) => generateStructuredData('WebSite', {
    name: 'AgriSmart',
    url: 'https://agrismart.vn',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://agrismart.vn/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    ...data,
  }),
  
  product: (data) => generateStructuredData('Product', {
    name: data.name,
    description: data.description,
    image: data.image,
    offers: {
      '@type': 'Offer',
      price: data.price,
      priceCurrency: 'VND',
      availability: data.availability || 'https://schema.org/InStock',
    },
    ...data,
  }),
  
  article: (data) => generateStructuredData('Article', {
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      '@type': 'Person',
      name: data.authorName || 'AgriSmart',
    },
    ...data,
  }),
}

