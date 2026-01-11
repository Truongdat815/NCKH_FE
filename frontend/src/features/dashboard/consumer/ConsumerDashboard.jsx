import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ShoppingBagIcon,
  HeartIcon,
  ClockIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  TruckIcon
} from '@heroicons/react/24/solid'
import PageTransition from '../../../components/common/PageTransition'

const ConsumerDashboard = () => {
  const stats = [
    { label: 'Đơn hàng đã đặt', value: '24', icon: ShoppingBagIcon, color: 'bg-blue-500', link: '/orders' },
    { label: 'Sản phẩm yêu thích', value: '12', icon: HeartIcon, color: 'bg-red-500', link: '/favorites' },
    { label: 'Đơn hàng đang chờ', value: '3', icon: ClockIcon, color: 'bg-orange-500', link: '/orders' },
    { label: 'Tổng đã chi', value: '8.450.000₫', icon: CurrencyDollarIcon, color: 'bg-emerald-500', trend: 'Tất cả thời gian' },
  ]

  const recentOrders = [
    {
      id: '#ORD-1234',
      products: ['Gạo ST25 - 5kg', 'Xoài Cát Hòa Lộc - 2kg'],
      total: '450.000₫',
      status: 'Đang giao',
      date: '10/01/2026',
      tracking: 'VD123456789',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: '#ORD-1233',
      products: ['Phân bón NPK - 10kg'],
      total: '280.000₫',
      status: 'Đã giao',
      date: '08/01/2026',
      tracking: 'VD123456788',
      image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: '#ORD-1232',
      products: ['Cam sành - 5kg', 'Bưởi da xanh - 3kg'],
      total: '320.000₫',
      status: 'Hoàn thành',
      date: '05/01/2026',
      tracking: 'VD123456787',
      image: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?auto=format&fit=crop&q=80&w=300'
    },
  ]

  const favoriteProducts = [
    { id: 1, name: 'Gạo ST25 Đặc Sản', price: '175.000₫', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300', rating: 5.0 },
    { id: 2, name: 'Xoài Cát Hòa Lộc', price: '60.000₫/kg', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=300', rating: 4.9 },
    { id: 3, name: 'Cam sành Hà Giang', price: '32.000₫/kg', image: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?auto=format&fit=crop&q=80&w=300', rating: 4.8 },
  ]

  const recommendations = [
    { title: 'Sản phẩm mới', count: 15, link: '/marketplace?new=true' },
    { title: 'Đang giảm giá', count: 8, link: '/marketplace?sale=true' },
    { title: 'Sản phẩm bán chạy', count: 20, link: '/marketplace?popular=true' },
  ]

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">Dashboard Người Tiêu Dùng</h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider text-xs mt-2">Mua sắm & Quản lý Đơn hàng</p>
          </div>
          <Link to="/marketplace" className="px-6 py-3 bg-emerald-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-emerald-100 hover:scale-105 transition-all flex items-center gap-2">
            <ShoppingBagIcon className="w-5 h-5" /> Mua sắm ngay
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <Link 
              key={idx} 
              to={stat.link || '#'}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{stat.value}</h3>
                {stat.trend && (
                  <span className="text-xs font-bold text-gray-400">{stat.trend}</span>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h3 className="text-xl font-bold text-gray-900">Đơn Hàng Gần Đây</h3>
              <Link to="/orders" className="text-sm font-bold text-emerald-600 hover:underline self-start sm:self-auto">Xem tất cả →</Link>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="bg-gray-50/50 p-6 rounded-3xl border border-transparent hover:border-emerald-200 transition-all group">
                  <div className="flex gap-6">
                    <img src={order.image} alt="order" className="w-24 h-24 rounded-2xl object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{order.id}</h4>
                          <p className="text-xs text-gray-400 font-bold">{order.date}</p>
                        </div>
                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                          order.status === 'Hoàn thành' || order.status === 'Đã giao' ? 'bg-emerald-100 text-emerald-700' :
                          order.status === 'Đang giao' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="space-y-2 mb-4">
                        {order.products.map((product, idx) => (
                          <p key={idx} className="text-sm font-medium text-gray-700">• {product}</p>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tổng tiền</p>
                          <p className="text-lg font-bold text-emerald-600">{order.total}</p>
                        </div>
                        <div className="flex gap-2">
                          {order.status === 'Đang giao' && (
                            <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl font-bold text-xs hover:bg-emerald-700 transition-all flex items-center gap-2">
                              <TruckIcon className="w-4 h-4" /> Theo dõi
                            </button>
                          )}
                          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl font-bold text-xs hover:bg-gray-300 transition-all">
                            Chi tiết
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Quick Recommendations */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="text-base font-bold mb-4">Gợi Ý Cho Bạn</h4>
              <div className="space-y-3">
                {recommendations.map((rec, idx) => (
                  <Link 
                    key={idx}
                    to={rec.link}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-all group cursor-pointer"
                  >
                    <div>
                      <p className="text-sm font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{rec.title}</p>
                      <p className="text-xs text-gray-400 font-medium">{rec.count} sản phẩm</p>
                    </div>
                    <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Favorite Products */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-base font-bold">Sản Phẩm Yêu Thích</h4>
                <Link to="/favorites" className="text-xs font-bold text-emerald-600 hover:underline">Xem tất cả</Link>
              </div>
              <div className="space-y-4">
                {favoriteProducts.map((product) => (
                  <Link 
                    key={product.id}
                    to={`/marketplace/${product.id}`}
                    className="flex gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-all group"
                  >
                    <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover border-2 border-white shadow-sm group-hover:scale-105 transition-transform" />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-1">{product.name}</p>
                      <p className="text-xs font-bold text-emerald-600 mt-1">{product.price}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-xs font-bold text-gray-500">{product.rating}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default ConsumerDashboard

