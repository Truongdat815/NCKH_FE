import api from '@/shared/services/api'

/**
 * Product Service - API calls for products
 */

export const productService = {
  /**
   * Get all products
   */
  getAll: async (params = {}) => {
    const response = await api.get('/products', { params })
    return response.data
  },

  /**
   * Get product by ID
   */
  getById: async (id) => {
    const response = await api.get(`/products/${id}`)
    return response.data
  },

  /**
   * Search products
   */
  search: async (query, params = {}) => {
    const response = await api.get('/products/search', {
      params: { q: query, ...params }
    })
    return response.data
  },

  /**
   * Get products by category
   */
  getByCategory: async (category, params = {}) => {
    const response = await api.get(`/products/category/${category}`, { params })
    return response.data
  },

  /**
   * Get featured products
   */
  getFeatured: async () => {
    const response = await api.get('/products/featured')
    return response.data
  },

  /**
   * Get related products
   */
  getRelated: async (productId, limit = 4) => {
    const response = await api.get(`/products/${productId}/related`, {
      params: { limit }
    })
    return response.data
  },
}

export default productService

