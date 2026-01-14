import api from '@/shared/services/api'

/**
 * Auth Service - API calls for authentication
 */

export const authService = {
  /**
   * Login
   */
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials)
    return response.data
  },

  /**
   * Register
   */
  register: async (userData) => {
    const response = await api.post('/auth/register', userData)
    return response.data
  },

  /**
   * Logout
   */
  logout: async () => {
    const response = await api.post('/auth/logout')
    return response.data
  },

  /**
   * Get current user
   */
  getCurrentUser: async () => {
    const response = await api.get('/auth/me')
    return response.data
  },

  /**
   * Refresh token
   */
  refreshToken: async () => {
    const response = await api.post('/auth/refresh')
    return response.data
  },

  /**
   * Forgot password
   */
  forgotPassword: async (email) => {
    const response = await api.post('/auth/forgot-password', { email })
    return response.data
  },

  /**
   * Reset password
   */
  resetPassword: async (token, password) => {
    const response = await api.post('/auth/reset-password', { token, password })
    return response.data
  },
}

export default authService

