// Application Constants

export const ROUTES = {
  HOME: '/',
  MARKETPLACE: '/marketplace',
  COMMUNITY: '/community',
  FARMING_LOG: '/farming-log',
  AI_CHAT: '/ai-chat',
  AI_DIAGNOSIS: '/ai-diagnosis',
  PROFILE: '/profile',
  ABOUT: '/about',
  CART: '/cart',
  CHECKOUT: '/checkout',
  ORDERS: '/orders',
  LOGIN: '/login',
  REGISTER: '/register',
  // Dashboard routes
  DASHBOARD: '/dashboard',
  DASHBOARD_USERS: '/dashboard/users',
  DASHBOARD_PRODUCTS: '/dashboard/products',
  DASHBOARD_POSTS: '/dashboard/posts',
  DASHBOARD_ORDERS: '/dashboard/orders',
  DASHBOARD_CATEGORIES: '/dashboard/categories',
  DASHBOARD_REPORTS: '/dashboard/reports',
  DASHBOARD_REVIEWS: '/dashboard/reviews',
  DASHBOARD_NOTIFICATIONS: '/dashboard/notifications',
  DASHBOARD_SETTINGS: '/dashboard/settings',
  DASHBOARD_ENTERPRISE: '/dashboard/enterprise',
  DASHBOARD_FARMER: '/dashboard/farmer',
  DASHBOARD_ENGINEER: '/dashboard/engineer',
  DASHBOARD_CONSUMER: '/dashboard/consumer',
}

export const USER_ROLES = {
  ADMIN: 'admin',
  FARMER: 'farmer',
  ENTERPRISE: 'enterprise',
  ENGINEER: 'engineer',
  CONSUMER: 'consumer',
}

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
    PROFILE: '/api/auth/profile',
  },
  USERS: {
    LIST: '/api/users',
    DETAIL: (id) => `/api/users/${id}`,
    CREATE: '/api/users',
    UPDATE: (id) => `/api/users/${id}`,
    DELETE: (id) => `/api/users/${id}`,
  },
  PRODUCTS: {
    LIST: '/api/products',
    DETAIL: (id) => `/api/products/${id}`,
    CREATE: '/api/products',
    UPDATE: (id) => `/api/products/${id}`,
    DELETE: (id) => `/api/products/${id}`,
  },
  ORDERS: {
    LIST: '/api/orders',
    DETAIL: (id) => `/api/orders/${id}`,
    CREATE: '/api/orders',
    UPDATE: (id) => `/api/orders/${id}`,
    DELETE: (id) => `/api/orders/${id}`,
  },
  POSTS: {
    LIST: '/api/posts',
    DETAIL: (id) => `/api/posts/${id}`,
    CREATE: '/api/posts',
    UPDATE: (id) => `/api/posts/${id}`,
    DELETE: (id) => `/api/posts/${id}`,
  },
}

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100],
}

export const DATE_FORMATS = {
  DISPLAY: 'DD/MM/YYYY',
  DISPLAY_WITH_TIME: 'DD/MM/YYYY HH:mm',
  API: 'YYYY-MM-DD',
  API_WITH_TIME: 'YYYY-MM-DDTHH:mm:ss',
}

export const NOTIFICATION_TYPES = {
  WARNING: 'warning',
  PROMOTION: 'promotion',
  SYSTEM: 'system',
  ORDER: 'order',
  POLICY: 'policy',
}

export const REVIEW_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
}

export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
}

