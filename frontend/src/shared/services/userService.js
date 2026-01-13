import api from './api'
import { API_ENDPOINTS } from '../constants'

export const userService = {
  getAll: async (params = {}) => {
    const response = await api.get(API_ENDPOINTS.USERS.LIST, { params })
    return response.data
  },

  getById: async (id) => {
    const response = await api.get(API_ENDPOINTS.USERS.DETAIL(id))
    return response.data
  },

  create: async (userData) => {
    const response = await api.post(API_ENDPOINTS.USERS.CREATE, userData)
    return response.data
  },

  update: async (id, userData) => {
    const response = await api.put(API_ENDPOINTS.USERS.UPDATE(id), userData)
    return response.data
  },

  delete: async (id) => {
    const response = await api.delete(API_ENDPOINTS.USERS.DELETE(id))
    return response.data
  },
}

