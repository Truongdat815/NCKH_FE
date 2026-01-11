import React from 'react'
import { Link } from 'react-router-dom'
import { StarIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-[40px] border border-gray-100 p-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] mb-6">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-[900] text-emerald-700 uppercase tracking-widest shadow-xl">
          {product.category}
        </div>
        <button className="absolute bottom-4 right-4 w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 shadow-xl">
          <ShoppingBagIcon className="w-6 h-6" />
        </button>
      </div>
      
      <div className="px-4 pb-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
            <StarIcon className="w-3 h-3 text-yellow-500" />
            <span className="text-xs font-black text-yellow-700">4.9</span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">1.2k Đã bán</span>
        </div>
        
        <h3 className="text-lg font-black text-gray-900 mb-2 line-clamp-1 group-hover:text-emerald-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[10px] font-bold text-gray-400 line-through mb-1">250.000đ</div>
            <div className="text-2xl font-[900] text-emerald-600 leading-none">
              {new Intl.NumberFormat('vi-VN').format(product.price)}<span className="text-sm ml-0.5 underline">đ</span>
            </div>
          </div>
          <Link to={`/marketplace/${product.id}`} className="text-xs font-black text-gray-400 hover:text-emerald-500 uppercase tracking-widest transition-colors pb-1">
            Chi tiết →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
