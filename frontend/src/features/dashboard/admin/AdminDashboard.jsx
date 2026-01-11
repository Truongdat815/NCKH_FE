import React from 'react'
import { 
  CurrencyDollarIcon, 
  UsersIcon, 
  ShoppingBagIcon, 
  ExclamationCircleIcon,
  ArrowTrendingUpIcon,
  MapIcon
} from '@heroicons/react/24/solid'
import PageTransition from '../../../components/common/PageTransition'
import Badge from '../../../components/common/Badge'

const AdminDashboard = () => {
  const cards = [
    { name: 'Tổng Doanh Thu', value: '2.4B ₫', icon: CurrencyDollarIcon, color: 'bg-emerald-500', trend: '+15.2%' },
    { name: 'Người Dùng', value: '12,840', icon: UsersIcon, color: 'bg-blue-500', trend: '+8.4%' },
    { name: 'Giao Dịch', value: '3,120', icon: ShoppingBagIcon, color: 'bg-orange-500', trend: '+22.1%' },
    { name: 'Cảnh Báo AI', value: '08 Ca', icon: ExclamationCircleIcon, color: 'bg-red-500', trend: 'Mức thấp' },
  ]

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-[900] text-gray-900 tracking-tight">Hệ Thống Quản Trị</h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider text-xs mt-2">Dữ liệu thời gian thực AgriSmart 4.0</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-white border border-gray-200 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-sm hover:bg-gray-50 transition-all">Xuất báo cáo</button>
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-emerald-100 hover:scale-105 transition-all">Cấu hình</button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map(c => (
            <div key={c.name} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className={`w-12 h-12 ${c.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <c.icon className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{c.name}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-[900] text-gray-900 tracking-tight">{c.value}</h3>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">{c.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Disease Map & Market Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h3 className="text-lg font-[900] text-gray-900 flex items-center gap-3">
                <MapIcon className="w-5 h-5 text-emerald-600" /> Bản đồ Dịch tễ (AI Satellite)
              </h3>
              <Badge color="danger">Cảnh báo: Đạo ôn</Badge>
            </div>
            <div className="aspect-video bg-gray-900 rounded-3xl relative overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-40 grayscale" alt="Map" />
              <div className="absolute inset-0 flex items-center justify-center bg-emerald-900/20 backdrop-blur-[1px]">
                <div className="text-center space-y-4">
                  <div className="text-6xl animate-bounce">📍</div>
                  <p className="text-white font-black text-xs uppercase tracking-[0.3em]">Monitoring Tiền Giang Area...</p>
                </div>
              </div>
              <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-red-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>

          <div className="bg-emerald-900 p-6 rounded-3xl text-white shadow-xl space-y-6">
            <h3 className="text-lg font-[900] flex items-center gap-3 border-b border-white/10 pb-4">
              <ArrowTrendingUpIcon className="w-5 h-5 text-emerald-400" /> Xu hướng giá
            </h3>
            <div className="space-y-5">
              {[
                { n: 'Lúa ST25', v: '+350đ/kg', c: 'text-emerald-400' },
                { n: 'Phân NPK', v: '-1,200đ/kg', c: 'text-red-400' },
                { n: 'Xoài Cát', v: '+2,000đ/kg', c: 'text-emerald-400' },
              ].map(i => (
                <div key={i.n} className="flex justify-between items-center group cursor-pointer">
                  <div>
                    <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">Thị trường</p>
                    <h4 className="font-black text-lg group-hover:translate-x-2 transition-transform">{i.n}</h4>
                  </div>
                  <span className={`text-xl font-black ${i.c}`}>{i.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default AdminDashboard

