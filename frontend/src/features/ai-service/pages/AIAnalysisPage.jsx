import React from 'react'
import { CloudArrowUpIcon } from '@heroicons/react/24/solid'
import PageTransition from '../../../components/common/PageTransition'

const AIAnalysisPage = () => {
  return (
    <PageTransition>
      <div className="py-8 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-[900] text-gray-900 tracking-tighter uppercase">Bác sỹ cây trồng AI</h1>
          <p className="text-gray-500 font-medium max-w-xl mx-auto italic">Chụp ảnh lá cây bệnh, nhận phác đồ điều trị ngay tức thì.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-[50px] border-4 border-dashed border-emerald-100 flex flex-col items-center justify-center text-center space-y-6 hover:border-emerald-300 transition-all cursor-pointer group shadow-sm">
            <div className="w-24 h-24 bg-emerald-50 rounded-[35px] flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
              <CloudArrowUpIcon className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-black text-gray-900 uppercase">Tải ảnh lá bệnh</h3>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">JPG, PNG lên đến 10MB</p>
            </div>
            <button className="px-8 py-3 bg-gray-900 text-white font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all">Chọn tệp từ máy</button>
          </div>

          <div className="bg-[#064e3b] p-10 rounded-[50px] text-white shadow-2xl space-y-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-2xl">🧠</div>
              <h3 className="text-2xl font-black tracking-tighter uppercase">Kết quả phân tích</h3>
            </div>
            <div className="space-y-6 opacity-30 relative z-10">
              <div className="h-4 bg-white rounded-full w-3/4"></div>
              <div className="h-4 bg-white rounded-full w-1/2"></div>
              <div className="h-4 bg-white rounded-full w-2/3"></div>
            </div>
            <div className="pt-6 border-t border-white/10 relative z-10">
              <p className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em] mb-2 animate-pulse">Đang chờ dữ liệu đầu vào...</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default AIAnalysisPage
