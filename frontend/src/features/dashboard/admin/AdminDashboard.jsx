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

const AdminDashboard = () => {
  const cards = [
    { name: 'Tổng Doanh Thu', value: '2.4B ₫', icon: CurrencyDollarIcon, color: 'bg-emerald-500', trend: '+15.2%' },
    { name: 'Người Dùng', value: '12,840', icon: UsersIcon, color: 'bg-blue-500', trend: '+8.4%' },
    { name: 'Giao Dịch', value: '3,120', icon: ShoppingBagIcon, color: 'bg-orange-500', trend: '+22.1%' },
    { name: 'Cảnh Báo AI', value: '08 Ca', icon: ExclamationCircleIcon, color: 'bg-red-500', trend: 'Mức thấp' },
  ]

  return (
    <PageTransition>
      <div className="py-8 space-y-10">
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-5xl font-[900] text-gray-900 tracking-tighter">Hệ Thống Quản Trị</h1>
            <p className="text-gray-400 font-black uppercase tracking-[0.2em] text-[10px] mt-2">Dữ liệu thời gian thực AgriSmart 4.0</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-white border border-gray-200 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-sm hover:bg-gray-50 transition-all">Xuất báo cáo</button>
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-emerald-100 hover:scale-105 transition-all">Cấu hình</button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(c => (
            <div key={c.name} className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
              <div className={`w-14 h-14 ${c.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-inherit/30 group-hover:rotate-6 transition-transform`}>
                <c.icon className="w-7 h-7" />
              </div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{c.name}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-black text-gray-900 tracking-tighter">{c.value}</h3>
                <span className="text-[10px] font-black text-emerald-600">{c.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Disease Map & Market Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white p-10 rounded-[50px] border border-gray-100 shadow-sm space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-[900] text-gray-900 flex items-center gap-3">
                <MapIcon className="w-6 h-6 text-emerald-600" /> Bản đồ Dịch tễ (AI Satellite)
              </h3>
              <Badge color="danger">Cảnh báo: Đạo ôn</Badge>
            </div>
            <div className="aspect-video bg-gray-900 rounded-[40px] relative overflow-hidden shadow-2xl">
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

          <div className="bg-emerald-900 p-10 rounded-[50px] text-white shadow-3xl space-y-10">
            <h3 className="text-xl font-[900] flex items-center gap-3 border-b border-white/10 pb-6">
              <ArrowTrendingUpIcon className="w-6 h-6 text-emerald-400" /> Xu hướng giá
            </h3>
            <div className="space-y-8">
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

