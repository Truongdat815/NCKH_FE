import React from 'react'
import ProductCard from '../../../components/common/ProductCard'
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon, FunnelIcon } from '@heroicons/react/24/outline'
import PageTransition from '../../../components/common/PageTransition'

const MarketplacePage = () => {
  const products = [
    { id: 1, name: 'Phân bón NPK Đầu Trâu Cao Cấp', price: 150000, category: 'Vật Tư', image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=500' },
    { id: 2, name: 'Thuốc Trừ Sâu Sinh Học Bio-Green', price: 85000, category: 'Vật Tư', image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=500' },
    { id: 3, name: 'Gạo ST25 Đặc Sản Sóc Trăng', price: 35000, category: 'Nông Sản', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=500' },
    { id: 4, name: 'Xoài Cát Hòa Lộc Loại 1', price: 60000, category: 'Nông Sản', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=500' },
  ]

  return (
    <PageTransition>
      <div className="py-12 space-y-12">
        {/* Search Bar - Apple Style */}
        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-16 pr-6 py-5 bg-white border-none rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] focus:ring-2 focus:ring-emerald-500 transition-all text-lg font-medium outline-none"
            placeholder="Tìm kiếm vật tư hoặc nông sản..."
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-10">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-8 flex items-center gap-2">
                <FunnelIcon className="w-4 h-4" /> Khám phá danh mục
              </h3>
              <div className="space-y-2">
                {['Tất cả sản phẩm', 'Vật tư nông nghiệp', 'Hạt giống F1', 'Nông sản VietGAP', 'Dụng cụ thông minh'].map(cat => (
                  <button key={cat} className="block w-full text-left px-6 py-3 rounded-2xl text-sm font-bold text-gray-500 hover:bg-emerald-50 hover:text-emerald-600 transition-all">
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-[900] text-gray-900 tracking-tighter font-lexend uppercase">Sản phẩm nổi bật</h2>
                <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">Được đề xuất bởi chuyên gia</p>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] cursor-pointer hover:text-emerald-600 transition-colors bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                <AdjustmentsHorizontalIcon className="w-4 h-4" /> Sắp xếp theo
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default MarketplacePage
