import React from 'react'
import { 
  CurrencyDollarIcon, 
  UsersIcon, 
  ShoppingBagIcon, 
  ExclamationCircleIcon,
  ArrowTrendingUpIcon,
  MapIcon
} from '@heroicons/react/24/solid'
import PageTransition from '@/shared/components/common/PageTransition'
import Badge from '@/shared/components/common/Badge'
import { useToast } from '@/shared/hooks/useToast'
import EpidemicMap from '@/shared/components/ui/EpidemicMap'

const AdminDashboard = () => {
  const { showSuccess, showInfo } = useToast()
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
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">Hệ Thống Quản Trị</h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider text-xs mt-2">Dữ liệu thời gian thực AgriSmart 4.0</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => showInfo('Đang xuất báo cáo Excel...')}
              className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 active:scale-[0.98] hover:scale-105"
            >
              Xuất báo cáo
            </button>
            <button 
              onClick={() => showInfo('Trang cấu hình sẽ sớm có mặt!')}
              className="group px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-200/50 hover:bg-emerald-700 hover:shadow-xl transition-all duration-200 active:scale-[0.98] relative overflow-hidden hover:scale-105"
            >
              <span className="relative z-10">Cấu hình</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, idx) => (
            <div 
              key={c.name} 
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group hover-lift animate-stagger-1 cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${c.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 animate-float`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <c.icon className="w-6 h-6 group-hover:animate-pulse-slow" />
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{c.name}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{c.value}</h3>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">{c.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Disease Map & Market Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <MapIcon className="w-5 h-5 text-emerald-600" />
                </div>
                Bản đồ Dịch tễ (AI Satellite)
              </h3>
              <Badge color="danger" className="text-sm font-bold px-4 py-2">Cảnh báo: Đạo ôn</Badge>
            </div>
            <div className="aspect-video rounded-3xl relative overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-300 border-2 border-teal-700/50 bg-gray-100">
              {/* Real Map Component */}
              <EpidemicMap />
              
              {/* Monitoring Text Overlay */}
              <div className="absolute top-4 left-4 z-[1000] pointer-events-none">
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                  <p className="text-white font-bold text-xs uppercase tracking-[0.2em] drop-shadow-lg">
                    MONITORING TIỀN GIANG AREA...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900 p-6 rounded-3xl text-white shadow-xl space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-3 border-b border-white/10 pb-4">
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
                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1">Thị trường</p>
                    <h4 className="font-bold text-lg group-hover:translate-x-2 transition-transform">{i.n}</h4>
                  </div>
                  <span className={`text-xl font-bold ${i.c}`}>{i.v}</span>
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

