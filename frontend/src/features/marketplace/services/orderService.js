import api from '@/shared/services/api'

/**
 * Order Service - API calls for orders
 */

export const orderService = {
  /**
   * Create new order
   */
  create: async (orderData) => {
    const response = await api.post('/orders', orderData)
    return response.data
  },

  /**
   * Get all orders
   */
  getAll: async (params = {}) => {
    const response = await api.get('/orders', { params })
    return response.data
  },

  /**
   * Get order by ID
   */
  getById: async (id) => {
    const response = await api.get(`/orders/${id}`)
    return response.data
  },

  /**
   * Update order status
   */
  updateStatus: async (id, status) => {
    const response = await api.patch(`/orders/${id}/status`, { status })
    return response.data
  },

  /**
   * Cancel order
   */
  cancel: async (id) => {
    const response = await api.post(`/orders/${id}/cancel`)
    return response.data
  },
}

export default orderService

