import React, { useState } from 'react'
import ProductCard from '@/shared/components/common/ProductCard'
import EmptyState from '@/shared/components/common/EmptyState'
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon, FunnelIcon, XMarkIcon, StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import PageTransition from '@/shared/components/common/PageTransition'

const MarketplacePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả sản phẩm')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default') // default, price-asc, price-desc, rating-desc, name-asc
  const [minRating, setMinRating] = useState(0)
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 2000000])

  // Danh sách sản phẩm cực kỳ phong phú
  const allProducts = [
    // VẬT TƯ NÔNG NGHIỆP
    { id: 1, name: 'Phân bón NPK Đầu Trâu 13-13-13', price: 150000, category: 'Vật tư nông nghiệp', image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=500', rating: 4.8 },
    { id: 2, name: 'Thuốc Trừ Sâu Sinh Học Bio-Green', price: 85000, category: 'Vật tư nông nghiệp', image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=500', rating: 4.9 },
    { id: 3, name: 'Phân hữu cơ vi sinh Đầu Trâu', price: 120000, category: 'Vật tư nông nghiệp', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=500', rating: 4.7 },
    { id: 4, name: 'Thuốc trừ cỏ chọn lọc Glyphosate', price: 95000, category: 'Vật tư nông nghiệp', image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=500', rating: 4.6 },
    { id: 5, name: 'Phân bón lá cao cấp Đầu Trâu 501', price: 180000, category: 'Vật tư nông nghiệp', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=500', rating: 4.8 },
    { id: 6, name: 'Thuốc bảo vệ thực vật Combo', price: 200000, category: 'Vật tư nông nghiệp', image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&q=80&w=500', rating: 4.5 },

    // HẠT GIỐNG F1
    { id: 7, name: 'Hạt giống lúa ST25 F1 - 1kg', price: 350000, category: 'Hạt giống F1', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=500', rating: 5.0 },
    { id: 8, name: 'Hạt giống cà chua F1 - Gói 20g', price: 45000, category: 'Hạt giống F1', image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=500', rating: 4.9 },
    { id: 9, name: 'Hạt giống dưa hấu F1 - Gói 10g', price: 38000, category: 'Hạt giống F1', image: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8b7?auto=format&fit=crop&q=80&w=500', rating: 4.8 },
    { id: 10, name: 'Hạt giống bắp ngô F1 - Gói 500g', price: 125000, category: 'Hạt giống F1', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=500', rating: 4.7 },
    { id: 11, name: 'Hạt giống ớt cay F1 - Gói 5g', price: 28000, category: 'Hạt giống F1', image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&q=80&w=500', rating: 4.9 },
    { id: 12, name: 'Hạt giống đậu xanh F1 - Gói 100g', price: 55000, category: 'Hạt giống F1', image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=500', rating: 4.8 },

    // NÔNG SẢN VIETGAP
    { id: 13, name: 'Gạo ST25 Đặc Sản Sóc Trăng - Túi 5kg', price: 175000, category: 'Nông sản VietGAP', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=500', rating: 5.0 },
    { id: 14, name: 'Xoài Cát Hòa Lộc Loại 1 - Thùng 10kg', price: 600000, category: 'Nông sản VietGAP', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=500', rating: 4.9 },
    { id: 15, name: 'Chuối già Nam Mỹ - Nải 10 trái', price: 45000, category: 'Nông sản VietGAP', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=500', rating: 4.8 },
    { id: 16, name: 'Cà chua bi sạch VietGAP - Hộp 500g', price: 35000, category: 'Nông sản VietGAP', image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=500', rating: 4.9 },
    { id: 17, name: 'Dưa hấu không hạt - Quả 3-5kg', price: 55000, category: 'Nông sản VietGAP', image: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8b7?auto=format&fit=crop&q=80&w=500', rating: 4.7 },
    { id: 18, name: 'Cam sành Hà Giang - Thùng 10kg', price: 320000, category: 'Nông sản VietGAP', image: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?auto=format&fit=crop&q=80&w=500', rating: 4.8 },
    { id: 19, name: 'Bưởi da xanh Bến Tre - Thùng 4 quả', price: 280000, category: 'Nông sản VietGAP', image: 'https://images.unsplash.com/photo-1582095133173-bf8078c6f5a3?auto=format&fit=crop&q=80&w=500', rating: 4.9 },
    { id: 20, name: 'Rau xà lách sạch - Bó 500g', price: 25000, category: 'Nông sản VietGAP', image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&q=80&w=500', rating: 4.8 },
    { id: 21, name: 'Ớt sừng vàng - Túi 500g', price: 45000, category: 'Nông sản VietGAP', image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&q=80&w=500', rating: 4.7 },
    { id: 22, name: 'Khoai lang tím Nhật - Túi 2kg', price: 85000, category: 'Nông sản VietGAP', image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=500', rating: 4.9 },

    // DỤNG CỤ THÔNG MINH
    { id: 23, name: 'Cảm biến độ ẩm đất thông minh', price: 450000, category: 'Dụng cụ thông minh', image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80&w=500', rating: 4.8 },
    { id: 24, name: 'Hệ thống tưới nhỏ giọt tự động', price: 1200000, category: 'Dụng cụ thông minh', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=500', rating: 4.9 },
    { id: 25, name: 'Máy đo pH đất cầm tay', price: 380000, category: 'Dụng cụ thông minh', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500', rating: 4.7 },
    { id: 26, name: 'Camera giám sát vườn WiFi', price: 850000, category: 'Dụng cụ thông minh', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=500', rating: 4.6 },
    { id: 27, name: 'Bộ điều khiển tưới tiêu IoT', price: 650000, category: 'Dụng cụ thông minh', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=500', rating: 4.8 },
    { id: 28, name: 'Cảm biến nhiệt độ và ánh sáng', price: 520000, category: 'Dụng cụ thông minh', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=500', rating: 4.9 },
  ]

  const categories = [
    'Tất cả sản phẩm',
    'Vật tư nông nghiệp',
    'Hạt giống F1',
    'Nông sản VietGAP',
    'Dụng cụ thông minh'
  ]

  // Filter sản phẩm theo category, search, price range, và rating
  const filteredProducts = allProducts.filter(product => {
    const matchCategory = selectedCategory === 'Tất cả sản phẩm' || product.category === selectedCategory
    const matchSearch = searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchRating = product.rating >= minRating
    return matchCategory && matchSearch && matchPrice && matchRating
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price
    if (sortBy === 'price-desc') return b.price - a.price
    if (sortBy === 'rating-desc') return (b.rating || 0) - (a.rating || 0)
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name, 'vi')
    return 0 // default order
  })

  // Calculate price range from products
  const maxPrice = Math.max(...allProducts.map(p => p.price), 2000000)

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar - Apple Style */}
        <div className="relative mb-8 max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-16 pr-6 py-4 bg-white border-none rounded-3xl shadow-lg shadow-gray-200/50 focus:ring-2 focus:ring-emerald-500 transition-all duration-200 text-base font-medium outline-none"
            placeholder="Tìm kiếm vật tư hoặc nông sản..."
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4 flex items-center gap-2">
                  <FunnelIcon className="w-4 h-4" /> Khám phá danh mục
                </h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                        selectedCategory === cat
                          ? 'bg-emerald-50 text-emerald-600 shadow-sm'
                          : 'text-gray-500 hover:bg-emerald-50 hover:text-emerald-600'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="bg-gray-50 rounded-2xl p-4 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600">Khoảng giá</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="flex-1 px-3 py-2 text-sm font-bold bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                      placeholder="Từ"
                    />
                    <span className="text-gray-400">-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || maxPrice])}
                      className="flex-1 px-3 py-2 text-sm font-bold bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                      placeholder="Đến"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-gray-500">{priceRange[0].toLocaleString('vi-VN')}đ</span>
                    <span className="flex-1 h-1 bg-emerald-200 rounded-full"></span>
                    <span className="text-gray-500">{priceRange[1].toLocaleString('vi-VN')}đ</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="bg-gray-50 rounded-2xl p-4 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600">Đánh giá</h4>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map(rating => (
                    <button
                      key={rating}
                      onClick={() => setMinRating(minRating === rating ? 0 : rating)}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold transition-all ${
                        minRating === rating
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                      }`}
                    >
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map(star => (
                          star <= rating ? (
                            <StarIconSolid key={star} className="w-4 h-4 text-yellow-400" />
                          ) : (
                            <StarIcon key={star} className="w-4 h-4 text-gray-300" />
                          )
                        ))}
                      </div>
                      <span className="ml-auto text-xs">Trở lên</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(priceRange[0] > 0 || priceRange[1] < maxPrice || minRating > 0) && (
                <button
                  onClick={() => {
                    setPriceRange([0, maxPrice])
                    setMinRating(0)
                  }}
                  className="w-full px-4 py-2 bg-white border-2 border-gray-200 text-gray-600 rounded-xl text-sm font-bold hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-200"
                >
                  Xóa bộ lọc
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="animate-fade-in-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                  {selectedCategory === 'Tất cả sản phẩm' ? 'Tất cả sản phẩm' : selectedCategory}
                </h2>
                <p className="text-sm text-gray-400 font-medium mt-1.5">
                  Tìm thấy <span className="font-bold text-emerald-600">{sortedProducts.length}</span> sản phẩm
                </p>
              </div>
              <div className="relative">
                <div className="flex items-center gap-2">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:border-emerald-300 focus:ring-2 focus:ring-emerald-500 transition-all duration-200 outline-none cursor-pointer"
                  >
                    <option value="default">Mặc định</option>
                    <option value="price-asc">Giá tăng dần</option>
                    <option value="price-desc">Giá giảm dần</option>
                    <option value="rating-desc">Đánh giá cao nhất</option>
                    <option value="name-asc">Tên A-Z</option>
                  </select>
                  <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className={`p-2 rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 ${
                      showFilters || priceRange[0] > 0 || priceRange[1] < maxPrice || minRating > 0
                        ? 'bg-emerald-100 text-emerald-600'
                        : 'bg-gray-50 text-gray-500 hover:bg-emerald-50 hover:text-emerald-600'
                    }`}
                  >
                    <AdjustmentsHorizontalIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <EmptyState
                icon="🔍"
                title="Không tìm thấy sản phẩm"
                description={`Không có sản phẩm nào phù hợp với "${searchQuery || selectedCategory}". Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.`}
                actionLabel="Xem tất cả sản phẩm"
                actionOnClick={() => {
                  setSelectedCategory('Tất cả sản phẩm')
                  setSearchQuery('')
                }}
              />
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default MarketplacePage
