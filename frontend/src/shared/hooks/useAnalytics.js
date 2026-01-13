/**
 * Analytics hook for tracking user interactions
 * Supports Google Analytics, custom events, and page views
 */

// Initialize analytics (can be extended for Google Analytics, etc.)
let analyticsInitialized = false

export const initAnalytics = () => {
  if (analyticsInitialized || import.meta.env.DEV) {
    return
  }
  
  // TODO: Initialize Google Analytics or other analytics service
  // Example:
  // if (window.gtag) {
  //   window.gtag('config', 'GA_MEASUREMENT_ID')
  // }
  
  analyticsInitialized = true
}

/**
 * Track page view
 */
export const trackPageView = (path, title) => {
  if (import.meta.env.DEV) {
    console.log('[Analytics] Page View:', { path, title })
    return
  }
  
  // TODO: Send to analytics service
  // Example:
  // if (window.gtag) {
  //   window.gtag('config', 'GA_MEASUREMENT_ID', {
  //     page_path: path,
  //     page_title: title,
  //   })
  // }
}

/**
 * Track custom event
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (import.meta.env.DEV) {
    console.log('[Analytics] Event:', eventName, eventParams)
    return
  }
  
  // TODO: Send to analytics service
  // Example:
  // if (window.gtag) {
  //   window.gtag('event', eventName, eventParams)
  // }
}

/**
 * Hook to track page views automatically
 */
export const useAnalytics = () => {
  const trackPage = (path, title) => {
    trackPageView(path, title)
  }
  
  const track = (eventName, params) => {
    trackEvent(eventName, params)
  }
  
  return { trackPage, track }
}

// Common event names
export const events = {
  // User actions
  USER_LOGIN: 'user_login',
  USER_REGISTER: 'user_register',
  USER_LOGOUT: 'user_logout',
  
  // Marketplace
  PRODUCT_VIEW: 'product_view',
  PRODUCT_SEARCH: 'product_search',
  ADD_TO_CART: 'add_to_cart',
  REMOVE_FROM_CART: 'remove_from_cart',
  CHECKOUT_START: 'checkout_start',
  PURCHASE_COMPLETE: 'purchase_complete',
  
  // Community
  POST_CREATE: 'post_create',
  POST_LIKE: 'post_like',
  POST_COMMENT: 'post_comment',
  POST_SHARE: 'post_share',
  
  // AI Service
  AI_CHAT_START: 'ai_chat_start',
  AI_CHAT_MESSAGE: 'ai_chat_message',
  AI_ANALYSIS_UPLOAD: 'ai_analysis_upload',
  
  // Farming Log
  LOG_ENTRY_CREATE: 'log_entry_create',
  LOG_EXPORT: 'log_export',
  
  // Navigation
  NAVIGATION_CLICK: 'navigation_click',
  SEARCH_PERFORMED: 'search_performed',
}

