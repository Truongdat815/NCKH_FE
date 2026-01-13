import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import PageTransition from '@/shared/components/common/PageTransition'
import EmptyState from '@/shared/components/common/EmptyState'
import { useToast } from '@/shared/hooks/useToast'

const CartPage = () => {
  const { showSuccess, showError } = useToast()
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Phân bón NPK Đầu Trâu', price: 150000, quantity: 1, image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=200' },
    { id: 2, name: 'Thuốc Trừ Sâu Sinh Học', price: 85000, quantity: 2, image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=200' },
  ])

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(id)
      return
    }
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
    showSuccess('Đã cập nhật số lượng')
  }

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
    showSuccess('Đã xóa sản phẩm khỏi giỏ hàng')
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shippingFee = 20000
  const total = subtotal + shippingFee

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Giỏ hàng của bạn</h1>
          {cartItems.length > 0 && (
            <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold">
              {cartItems.length} sản phẩm
            </span>
          )}
        </div>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, idx) => (
                <div 
                  key={item.id} 
                  className="bg-white p-5 rounded-3xl border border-gray-100 flex flex-col sm:flex-row items-center gap-4 shadow-sm hover:shadow-xl transition-all duration-300 hover-lift animate-stagger-1"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <img src={item.image} className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover flex-shrink-0 border-2 border-gray-100" alt={item.name} />
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm sm:text-base text-emerald-600 font-bold">{new Intl.NumberFormat('vi-VN').format(item.price)}₫</p>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-xl">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="p-1.5 hover:bg-white rounded-lg transition-all duration-200 text-gray-500 hover:text-emerald-600 active:scale-95"
                    >
                      <MinusIcon className="w-4 h-4" />
                    </button>
                    <span className="font-bold w-8 text-center text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="p-1.5 hover:bg-white rounded-lg transition-all duration-200 text-gray-500 hover:text-emerald-600 active:scale-95"
                    >
                      <PlusIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 active:scale-95 flex-shrink-0 hover:scale-110"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg h-fit space-y-5 sticky top-24">
              <h3 className="text-lg font-bold border-b border-gray-100 pb-4 text-gray-900">Tổng thanh toán</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600 font-medium text-sm">
                  <span>Tạm tính:</span>
                  <span className="font-bold">{new Intl.NumberFormat('vi-VN').format(subtotal)}₫</span>
                </div>
                <div className="flex justify-between text-gray-600 font-medium text-sm">
                  <span>Phí vận chuyển:</span>
                  <span className="font-bold">{new Intl.NumberFormat('vi-VN').format(shippingFee)}₫</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-emerald-600 pt-4 border-t border-gray-100">
                  <span>Tổng cộng:</span>
                  <span>{new Intl.NumberFormat('vi-VN').format(total)}₫</span>
                </div>
              </div>
              <Link to="/checkout" className="block w-full py-3.5 bg-emerald-600 text-white text-center font-bold rounded-2xl shadow-lg shadow-emerald-200/50 hover:bg-emerald-700 hover:shadow-xl transition-all duration-200 active:scale-[0.98] text-sm">
                Tiến hành thanh toán
              </Link>
            </div>
          </div>
        ) : (
          <EmptyState
            icon="🛒"
            title="Giỏ hàng trống"
            description="Bạn chưa có sản phẩm nào trong giỏ hàng. Hãy khám phá thị trường và thêm sản phẩm yêu thích vào giỏ hàng nhé!"
            actionLabel="Khám phá sản phẩm"
            actionLink="/marketplace"
          />
        )}
      </div>
    </PageTransition>
  )
}

export default CartPage
