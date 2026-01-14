// Marketplace Types

export const PRODUCT_CATEGORIES = {
  ALL: 'Tất cả sản phẩm',
  MATERIALS: 'Vật tư nông nghiệp',
  SEEDS: 'Hạt giống F1',
  PRODUCE: 'Nông sản VietGAP',
  TOOLS: 'Dụng cụ thông minh',
}

export const SORT_OPTIONS = {
  DEFAULT: 'default',
  PRICE_ASC: 'price-asc',
  PRICE_DESC: 'price-desc',
  RATING_DESC: 'rating-desc',
  NAME_ASC: 'name-asc',
}

// Product type definition
export const ProductShape = {
  id: Number,
  name: String,
  price: Number,
  category: String,
  image: String,
  rating: Number,
  description: String,
  stock: Number,
  seller: String,
}

