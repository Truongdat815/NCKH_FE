import React from 'react'
import { Link } from 'react-router-dom'
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import PageTransition from '../../../components/common/PageTransition'

const CartPage = () => {
  return (
    <PageTransition>
      <div className="py-8 space-y-10">
        <h1 className="text-4xl font-[900] text-gray-900 tracking-tighter uppercase">Giỏ hàng của bạn</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-6 rounded-[35px] border border-gray-100 flex items-center gap-6 shadow-sm">
                <img src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=200" className="w-24 h-24 rounded-2xl object-cover" alt="product" />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">Phân bón NPK Đầu Trâu {i}</h3>
                  <p className="text-sm text-emerald-600 font-bold">150.000₫</p>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-xl">
                  <button className="p-1 hover:bg-white rounded-lg transition-all text-gray-500"><MinusIcon className="w-4 h-4" /></button>
                  <span className="font-bold w-4 text-center">1</span>
                  <button className="p-1 hover:bg-white rounded-lg transition-all text-gray-500"><PlusIcon className="w-4 h-4" /></button>
                </div>
                <button className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all"><TrashIcon className="w-6 h-6" /></button>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-xl h-fit space-y-6">
            <h3 className="text-xl font-black border-b pb-4">Tổng thanh toán</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-500 font-medium"><span>Tạm tính:</span><span>300.000₫</span></div>
              <div className="flex justify-between text-gray-500 font-medium"><span>Phí vận chuyển:</span><span>20.000₫</span></div>
              <div className="flex justify-between text-xl font-black text-emerald-600 pt-4 border-t"><span>Tổng cộng:</span><span>320.000₫</span></div>
            </div>
            <Link to="/checkout" className="block w-full py-4 bg-emerald-600 text-white text-center font-black rounded-2xl shadow-lg hover:bg-emerald-700 transition-all uppercase tracking-widest text-sm">
              Tiến hành thanh toán
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default CartPage
