import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, TruckIcon, HomeIcon } from '@heroicons/react/24/solid'
import PageTransition from '../../../components/common/PageTransition'

const CheckoutSuccessPage = () => {
  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 sm:p-12 text-center space-y-6 animate-scale-in-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto animate-bounce-in">
            <CheckCircleIcon className="w-16 h-16 text-emerald-600" />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Đặt hàng thành công!
            </h1>
            <p className="text-gray-500 font-medium">
              Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ xử lý đơn hàng của bạn ngay.
            </p>
          </div>

          {/* Order Info */}
          <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-500">Mã đơn hàng:</span>
              <span className="text-lg font-bold text-gray-900">#ORD-2026-001</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-500">Tổng tiền:</span>
              <span className="text-xl font-bold text-emerald-600">320.000₫</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-500">Dự kiến giao hàng:</span>
              <span className="text-base font-bold text-gray-700">2-3 ngày làm việc</span>
            </div>
          </div>

          {/* Tracking Info */}
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
            <div className="flex items-center justify-center gap-3 mb-3">
              <TruckIcon className="w-6 h-6 text-emerald-600" />
              <h3 className="font-bold text-gray-900">Theo dõi đơn hàng</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Bạn sẽ nhận được email xác nhận và thông tin theo dõi đơn hàng trong vài phút tới.
            </p>
            <Link
              to="/orders"
              className="inline-block px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Xem đơn hàng của tôi
            </Link>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <Link
              to="/marketplace"
              className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all duration-200 text-center flex items-center justify-center gap-2"
            >
              Tiếp tục mua sắm
            </Link>
            <Link
              to="/"
              className="flex-1 px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all duration-200 text-center shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <HomeIcon className="w-5 h-5" />
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default CheckoutSuccessPage

