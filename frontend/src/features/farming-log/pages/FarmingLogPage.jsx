import React from 'react'
import { BeakerIcon, CloudIcon, BugAntIcon, BoltIcon, CalendarIcon, MapPinIcon, Square3Stack3DIcon } from '@heroicons/react/24/solid'
import PageTransition from '../../../components/common/PageTransition'

const FarmingLogPage = () => {
  const stats = [
    { label: 'Độ ẩm đất', value: '65%', icon: '💧', color: 'bg-blue-50 text-blue-600' },
    { label: 'Nhiệt độ', value: '28°C', icon: '☀️', color: 'bg-orange-50 text-orange-600' },
    { label: 'Dịch bệnh', value: 'Thấp', icon: '🦠', color: 'bg-emerald-50 text-emerald-600' },
  ]

  const currentSeason = {
    id: 'S001',
    name: 'Vụ Lúa ST25 - Đông Xuân 2026',
    crop: 'Lúa ST25',
    startDate: '01/12/2025',
    location: 'Tiền Giang',
    area: '2.5 Hecta',
    status: 'Đang làm đòng',
  }

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-2">
            <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-50 px-3 py-1.5 rounded-full">Digital Farming 4.0</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-gray-900 tracking-tight leading-tight">{currentSeason.name}</h1>
          </div>
          <button className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-200/50 hover:bg-emerald-700 hover:shadow-2xl transition-all duration-200 active:scale-[0.98] uppercase tracking-wider text-sm self-start sm:self-auto">
            + Tạo Nhật Ký Mới
          </button>
        </div>

        {/* Overview Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-10 rounded-[50px] border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <Square3Stack3DIcon className="w-4 h-4 text-emerald-500" /> Chi tiết vụ mùa
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center"><CalendarIcon className="w-5 h-5 text-gray-400" /></div>
                <div><p className="text-[10px] font-black text-gray-400 uppercase">Ngày bắt đầu</p><p className="font-bold text-gray-900">{currentSeason.startDate}</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center"><MapPinIcon className="w-5 h-5 text-gray-400" /></div>
                <div><p className="text-[10px] font-black text-gray-400 uppercase">Vị trí</p><p className="font-bold text-gray-900">{currentSeason.location}</p></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map(s => (
              <div key={s.label} className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm flex flex-col justify-center items-center text-center space-y-4 hover:shadow-xl transition-all group">
                <div className={`w-20 h-20 rounded-[28px] ${s.color} flex items-center justify-center text-4xl shadow-inner group-hover:rotate-6 transition-transform`}>
                  {s.icon}
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{s.label}</div>
                  <div className="text-3xl font-black text-gray-900 font-lexend">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Timeline */}
        <div className="bg-white rounded-[60px] p-12 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/50 rounded-bl-[200px] -mr-32 -mt-32 pointer-events-none"></div>
          
          <h3 className="text-2xl font-[900] text-gray-900 mb-12 flex items-center gap-4 font-lexend uppercase tracking-tighter">
            Dòng thời gian canh tác <span className="h-px bg-gray-100 flex-1"></span>
          </h3>
          
          <div className="space-y-16 relative">
            <div className="absolute left-[23px] top-4 bottom-4 w-1 bg-gradient-to-b from-emerald-500 via-emerald-200 to-gray-50 rounded-full"></div>
            
            {[
              { date: 'Hôm nay', title: 'Bón phân thúc đợt 2 bằng NPK Đầu Trâu', type: 'Bón phân', icon: BeakerIcon, color: 'bg-emerald-500' },
              { date: '05/01/2026', title: 'Phun ngừa đạo ôn lá theo tư vấn kỹ sư', type: 'Cảnh báo', icon: BugAntIcon, color: 'bg-red-500' },
              { date: '01/01/2026', title: 'Khởi tạo dữ liệu vụ mùa AgriSmart', type: 'Hệ thống', icon: BoltIcon, color: 'bg-blue-500' },
            ].map((item, idx) => (
              <div key={idx} className="relative flex gap-12 items-start group">
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-2xl z-10 group-hover:scale-110 transition-transform shadow-inherit/20`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 bg-gray-50/50 p-8 rounded-[40px] border border-transparent hover:border-emerald-200 hover:bg-white transition-all cursor-pointer shadow-sm hover:shadow-xl">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">{item.type}</span>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed italic opacity-80">Ghi nhận bởi hệ thống cảm biến & nông dân.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default FarmingLogPage
