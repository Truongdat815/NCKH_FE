import React from 'react'
import { Link } from 'react-router-dom'
import { 
  BeakerIcon, 
  CloudIcon, 
  BugAntIcon, 
  BoltIcon,
  PlusCircleIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  CalendarIcon
} from '@heroicons/react/24/solid'
import { BookOpenIcon, QrCodeIcon } from '@heroicons/react/24/outline'
import PageTransition from '../../../components/common/PageTransition'

const FarmerDashboard = () => {
  // Hardcode data cho dashboard
  const stats = [
    { label: 'Vụ mùa hiện tại', value: 'Lúa ST25 Đông Xuân', icon: '🌾', color: 'bg-emerald-50 text-emerald-600', link: '/farming-log' },
    { label: 'Sản phẩm đã bán', value: '2,450 kg', icon: '📦', color: 'bg-blue-50 text-blue-600', trend: '+15%' },
    { label: 'Doanh thu tháng', value: '12.500.000₫', icon: '💰', color: 'bg-orange-50 text-orange-600', trend: '+8%' },
    { label: 'Đơn hàng chờ', value: '8 đơn', icon: '📋', color: 'bg-purple-50 text-purple-600', trend: 'Mới' },
  ]

  const farmingLogs = [
    { 
      id: 1, 
      date: '11/01/2026', 
      activity: 'Bón phân thúc đợt 2', 
      type: 'Bón phân', 
      icon: BeakerIcon, 
      color: 'bg-blue-500',
      details: 'Sử dụng NPK 16-16-8, liều lượng 20kg/sào',
      status: 'Hoàn thành'
    },
    { 
      id: 2, 
      date: '08/01/2026', 
      activity: 'Phát hiện sâu cuốn lá', 
      type: 'Cảnh báo', 
      icon: BugAntIcon, 
      color: 'bg-red-500',
      details: 'Xuất hiện ở 3 khu vực, đã phun thuốc trừ sâu',
      status: 'Đã xử lý'
    },
    { 
      id: 3, 
      date: '05/01/2026', 
      activity: 'Kiểm tra độ ẩm đất', 
      type: 'Giám sát', 
      icon: CloudIcon, 
      color: 'bg-green-500',
      details: 'Độ ẩm đạt 65%, phù hợp cho giai đoạn đẻ nhánh',
      status: 'Bình thường'
    },
    { 
      id: 4, 
      date: '01/01/2026', 
      activity: 'Gieo mạ vụ mùa mới', 
      type: 'Khởi tạo', 
      icon: BoltIcon, 
      color: 'bg-yellow-500',
      details: 'Hạt giống ST25 F1, mật độ 150kg/ha',
      status: 'Hoàn thành'
    },
  ]

  const recentOrders = [
    { id: '#ORD-001', product: 'Gạo ST25 - 100kg', buyer: 'Công ty ABC', amount: '8.500.000₫', status: 'Đã giao', date: '10/01/2026' },
    { id: '#ORD-002', product: 'Lúa tươi - 500kg', buyer: 'Siêu thị XYZ', amount: '3.200.000₫', status: 'Đang vận chuyển', date: '11/01/2026' },
    { id: '#ORD-003', product: 'Gạo ST25 - 200kg', buyer: 'Nhà hàng DEF', amount: '17.000.000₫', status: 'Chờ xác nhận', date: '11/01/2026' },
    { id: '#ORD-004', product: 'Lúa tươi - 300kg', buyer: 'Cửa hàng GHI', amount: '1.920.000₫', status: 'Hoàn thành', date: '09/01/2026' },
  ]

  const products = [
    { id: 1, name: 'Gạo ST25', quantity: 2500, price: '85.000₫/kg', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300' },
    { id: 2, name: 'Lúa tươi', quantity: 1200, price: '6.400₫/kg', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=300' },
  ]

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-[900] text-gray-900 tracking-tight">Dashboard Nông Dân</h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider text-xs mt-2">Quản lý vụ mùa & Bán hàng</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/farming-log" className="px-6 py-3 bg-white border border-gray-200 rounded-2xl font-black text-xs uppercase tracking-widest shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2">
              <BookOpenIcon className="w-5 h-5" /> Nhật Ký
            </Link>
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-emerald-100 hover:scale-105 transition-all flex items-center gap-2">
              <PlusCircleIcon className="w-5 h-5" /> Tạo Nhật Ký
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <Link 
              key={idx} 
              to={stat.link || '#'}
              className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer"
            >
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-[900] text-gray-900 tracking-tighter">{stat.value}</h3>
                {stat.trend && (
                  <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">{stat.trend}</span>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Farming Log Timeline */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h3 className="text-xl font-[900] text-gray-900">Nhật Ký Canh Tác</h3>
              <Link to="/farming-log" className="text-sm font-bold text-emerald-600 hover:underline self-start sm:self-auto">Xem tất cả →</Link>
            </div>
            <div className="space-y-6">
              {farmingLogs.map((log, idx) => (
                <div key={log.id} className="relative flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 ${log.color} rounded-2xl flex items-center justify-center text-white shadow-lg z-10`}>
                      <log.icon className="w-6 h-6" />
                    </div>
                    {idx !== farmingLogs.length - 1 && (
                      <div className="w-1 h-24 bg-gray-50 absolute top-12"></div>
                    )}
                  </div>
                  <div className="flex-1 bg-gray-50/50 p-6 rounded-3xl border border-transparent hover:border-emerald-200 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">{log.type}</span>
                        <span className="text-xs font-bold text-gray-400">{log.date}</span>
                      </div>
                      <span className={`text-xs font-black px-2 py-1 rounded-lg ${
                        log.status === 'Hoàn thành' ? 'bg-emerald-100 text-emerald-700' :
                        log.status === 'Đã xử lý' ? 'bg-blue-100 text-blue-700' :
                        log.status === 'Bình thường' ? 'bg-gray-100 text-gray-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {log.status}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{log.activity}</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{log.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions & QR Code */}
          <div className="space-y-4">
            {/* QR Code for Product */}
            <div className="bg-gradient-to-br from-emerald-900 to-green-800 p-6 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
                  <QrCodeIcon className="w-16 h-16 text-emerald-200" />
                </div>
                <h4 className="text-lg font-black mb-2 text-center">QR Code Sản Phẩm</h4>
                <p className="text-xs text-emerald-200 font-bold text-center mb-6">Quét để xem nguồn gốc</p>
                <button className="w-full py-3 bg-white text-emerald-900 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg hover:bg-emerald-50 transition-all">
                  Tạo QR Code
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="text-base font-[900] mb-4">Thống Kê Nhanh</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tổng diện tích</p>
                    <p className="text-xl font-black text-gray-900">2.5 ha</p>
                  </div>
                  <div className="text-3xl">🌾</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Năng suất ước tính</p>
                    <p className="text-xl font-black text-gray-900">8.5 tấn/ha</p>
                  </div>
                  <div className="text-3xl">📊</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h3 className="text-xl font-[900] text-gray-900">Đơn Hàng Gần Đây</h3>
            <Link to="/marketplace" className="text-sm font-bold text-emerald-600 hover:underline self-start sm:self-auto">Xem tất cả →</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100">
              <thead className="bg-gray-50">
                <tr>
                  {['Mã đơn', 'Sản phẩm', 'Người mua', 'Giá trị', 'Trạng thái', 'Ngày'].map(h => (
                    <th key={h} className="px-6 py-4 text-left text-xs font-black text-gray-500 uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-black text-gray-900">{order.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-gray-900">{order.product}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-600">{order.buyer}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-black text-emerald-600">{order.amount}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                        order.status === 'Hoàn thành' || order.status === 'Đã giao' ? 'bg-emerald-100 text-emerald-800' :
                        order.status === 'Đang vận chuyển' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                      {order.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* My Products */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h3 className="text-xl font-[900] text-gray-900">Sản Phẩm Của Tôi</h3>
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-emerald-100 hover:scale-105 transition-all flex items-center gap-2">
              <PlusCircleIcon className="w-5 h-5" /> Thêm Sản Phẩm
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-gray-50 rounded-[35px] p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="flex gap-6">
                  <img src={product.image} alt={product.name} className="w-24 h-24 rounded-2xl object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform" />
                  <div className="flex-1">
                    <h4 className="text-lg font-black text-gray-900 mb-2">{product.name}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Số lượng</span>
                        <span className="text-sm font-black text-gray-900">{product.quantity.toLocaleString('vi-VN')} kg</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Giá bán</span>
                        <span className="text-sm font-black text-emerald-600">{product.price}</span>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-xl font-bold text-xs hover:bg-emerald-700 transition-all">
                          Sửa
                        </button>
                        <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-xl font-bold text-xs hover:bg-gray-300 transition-all">
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
      </div>
    </PageTransition>
  )
}

export default FarmerDashboard

