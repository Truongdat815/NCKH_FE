// Type definitions and PropTypes for the application
// Note: If using TypeScript, these would be .ts files with proper types

/**
 * User type definition
 */
export const UserShape = {
  id: 'string',
  email: 'string',
  name: 'string',
  role: 'string',
  avatar: 'string',
  createdAt: 'string',
  updatedAt: 'string',
}

/**
 * Product type definition
 */
export const ProductShape = {
  id: 'string',
  name: 'string',
  description: 'string',
  price: 'number',
  image: 'string',
  category: 'string',
  stock: 'number',
  rating: 'number',
  reviews: 'number',
}

/**
 * Order type definition
 */
export const OrderShape = {
  id: 'string',
  userId: 'string',
  items: 'array',
  total: 'number',
  status: 'string',
  createdAt: 'string',
  updatedAt: 'string',
}

/**
 * Post type definition
 */
export const PostShape = {
  id: 'string',
  title: 'string',
  content: 'string',
  author: 'string',
  category: 'string',
  views: 'number',
  likes: 'number',
  createdAt: 'string',
}

