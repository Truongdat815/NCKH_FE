// Marketplace Utilities

/**
 * Format price to Vietnamese currency
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price)
}

/**
 * Format price without currency symbol
 */
export const formatPriceNumber = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price)
}

/**
 * Calculate discount percentage
 */
export const calculateDiscount = (originalPrice, salePrice) => {
  if (!originalPrice || !salePrice) return 0
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100)
}

/**
 * Filter products by category
 */
export const filterByCategory = (products, category) => {
  if (category === 'Tất cả sản phẩm') return products
  return products.filter(p => p.category === category)
}

/**
 * Filter products by search query
 */
export const filterBySearch = (products, query) => {
  if (!query) return products
  const lowerQuery = query.toLowerCase()
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    (p.description && p.description.toLowerCase().includes(lowerQuery))
  )
}

/**
 * Filter products by price range
 */
export const filterByPriceRange = (products, [min, max]) => {
  return products.filter(p => p.price >= min && p.price <= max)
}

/**
 * Filter products by rating
 */
export const filterByRating = (products, minRating) => {
  if (minRating === 0) return products
  return products.filter(p => (p.rating || 0) >= minRating)
}

/**
 * Sort products
 */
export const sortProducts = (products, sortBy) => {
  const sorted = [...products]
  
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price)
    case 'rating-desc':
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name, 'vi'))
    default:
      return sorted
  }
}

