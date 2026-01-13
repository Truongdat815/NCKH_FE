import api from './api'
import { API_ENDPOINTS } from '../constants'

export const authService = {
  login: async (credentials) => {
    const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, credentials)
    return response.data
  },

  register: async (userData) => {
    const response = await api.post(API_ENDPOINTS.AUTH.REGISTER, userData)
    return response.data
  },

  logout: async () => {
    const response = await api.post(API_ENDPOINTS.AUTH.LOGOUT)
    return response.data
  },

  getProfile: async () => {
    const response = await api.get(API_ENDPOINTS.AUTH.PROFILE)
    return response.data
  },

  updateProfile: async (userData) => {
    const response = await api.put(API_ENDPOINTS.AUTH.PROFILE, userData)
    return response.data
  },
}

