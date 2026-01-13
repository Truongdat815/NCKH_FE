import api from './api'
import { API_ENDPOINTS } from '../constants'

export const productService = {
  getAll: async (params = {}) => {
    const response = await api.get(API_ENDPOINTS.PRODUCTS.LIST, { params })
    return response.data
  },

  getById: async (id) => {
    const response = await api.get(API_ENDPOINTS.PRODUCTS.DETAIL(id))
    return response.data
  },

  create: async (productData) => {
    const response = await api.post(API_ENDPOINTS.PRODUCTS.CREATE, productData)
    return response.data
  },

  update: async (id, productData) => {
    const response = await api.put(API_ENDPOINTS.PRODUCTS.UPDATE(id), productData)
    return response.data
  },

  delete: async (id) => {
    const response = await api.delete(API_ENDPOINTS.PRODUCTS.DELETE(id))
    return response.data
  },
}

