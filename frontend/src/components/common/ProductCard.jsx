import React from 'react'
import { Link } from 'react-router-dom'
import { StarIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useToast } from '../../hooks/useToast'

const ProductCard = ({ product, index = 0 }) => {
  const { showSuccess } = useToast()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    showSuccess(`Đã thêm ${product.name} vào giỏ hàng!`)
  }
  return (
    <div 
      className="group relative bg-white rounded-3xl border border-gray-100 p-3 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-stagger-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold text-emerald-700 uppercase tracking-wider shadow-lg group-hover:scale-110 transition-transform duration-300">
          {product.category}
        </div>
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 w-11 h-11 bg-emerald-600 text-white rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 shadow-xl hover:bg-emerald-700 hover:scale-110 active:scale-95 animate-bounce-in"
        >
          <ShoppingBagIcon className="w-5 h-5" />
        </button>
      </div>
      
      <div className="px-3 pb-3">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
            <StarIcon className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-bold text-yellow-700">{product.rating || 4.9}</span>
          </div>
          <span className="text-[10px] font-medium text-gray-400 uppercase tracking-tight">{product.sold || '1.2k'} Đã bán</span>
        </div>
        
        <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-all duration-300 leading-snug group-hover:translate-x-1">
          {product.name}
        </h3>
        
        <div className="flex items-end justify-between">
          <div>
            {product.originalPrice && (
              <div className="text-[10px] font-medium text-gray-400 line-through mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {new Intl.NumberFormat('vi-VN').format(product.originalPrice)}đ
              </div>
            )}
            <div className="text-xl font-bold text-emerald-600 leading-none group-hover:scale-110 transition-transform duration-300 inline-block">
              {new Intl.NumberFormat('vi-VN').format(product.price)}<span className="text-xs ml-0.5">đ</span>
            </div>
          </div>
          <Link to={`/marketplace/${product.id}`} className="text-xs font-bold text-gray-400 hover:text-emerald-600 uppercase tracking-wider transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1">
            Chi tiết <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
