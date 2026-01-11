import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  ShieldCheckIcon, 
  QrCodeIcon, 
  TruckIcon, 
  ArrowPathIcon,
  StarIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/solid'
import PageTransition from '../../../components/common/PageTransition'
import Badge from '../../../components/common/Badge'

const ProductDetailPage = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('traceability')

  const steps = [
    { date: '15/12/2025', action: 'Thu hoạch', detail: 'Thu hoạch tại Tiền Giang. Độ ẩm đạt chuẩn.', icon: '🌾' },
    { date: '20/11/2025', action: 'Bón phân', detail: 'Sử dụng phân bón NPK Đầu Trâu đợt 3.', icon: '🧪' },
    { date: '01/09/2025', action: 'Gieo mạ', detail: 'Hạt giống ST25 thuần chủng.', icon: '🌱' },
  ]

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Product Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-6 bg-gray-50 flex items-center justify-center">
            <div className="relative group overflow-hidden rounded-3xl shadow-xl bg-white aspect-square w-full max-w-md">
              <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gạo ST25" />
              <div className="absolute top-6 left-6">
                <Badge color="success">VietGAP Standard</Badge>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-center space-y-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 font-black text-xs uppercase tracking-[0.2em] mb-4">
                <ShieldCheckIcon className="w-5 h-5" /> Sản phẩm đã được bảo chứng
              </div>
              <h1 className="text-5xl font-[900] text-gray-900 leading-none tracking-tighter">Gạo ST25 Đặc Sản</h1>
              <div className="flex items-center gap-4 mt-6">
                <span className="text-4xl font-black text-emerald-600">175.000đ</span>
                <span className="text-gray-400 line-through text-xl font-bold">210.000đ</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-5 bg-emerald-600 text-white font-black rounded-2xl shadow-2xl shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-95 flex items-center justify-center gap-3 text-lg">
                <ShoppingCartIcon className="w-6 h-6" /> MUA NGAY
              </button>
              <button className="px-8 py-5 bg-emerald-50 text-emerald-600 font-black rounded-2xl hover:bg-emerald-100 transition-all text-lg">
                + GIỎ
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl">🚛</div>
                <div><p className="text-[10px] font-black text-gray-400 uppercase">Giao hàng</p><p className="text-sm font-bold text-gray-900">Nhanh 2h</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-2xl">🔄</div>
                <div><p className="text-[10px] font-black text-gray-400 uppercase">Đổi trả</p><p className="text-sm font-bold text-gray-900">7 Ngày</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* Traceability Section */}
        <div className="bg-white rounded-[45px] shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex bg-gray-50 border-b border-gray-100 px-8">
            {['traceability', 'details'].map(t => (
              <button key={t} onClick={() => setActiveTab(t)} className={`py-6 px-10 text-xs font-black uppercase tracking-[0.2em] relative transition-all ${activeTab === t ? 'text-emerald-600' : 'text-gray-400'}`}>
                {t === 'traceability' ? '🔍 Truy xuất nguồn gốc' : 'Chi tiết sản phẩm'}
                {activeTab === t && <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-emerald-600 rounded-t-full"></div>}
              </button>
            ))}
          </div>

          <div className="p-12">
            {activeTab === 'traceability' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 relative border-l-4 border-emerald-50 ml-6 space-y-16">
                  {steps.map((s, i) => (
                    <div key={i} className="relative pl-12">
                      <div className="absolute left-[-26px] top-0 w-12 h-12 bg-white rounded-3xl border-4 border-emerald-500 flex items-center justify-center text-2xl shadow-xl">{s.icon}</div>
                      <div className="bg-gray-50 p-8 rounded-[35px] border border-transparent hover:border-emerald-200 transition-all shadow-inner">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-black text-emerald-600 uppercase tracking-widest">{s.action}</span>
                          <span className="text-xs font-bold text-gray-400 tracking-tighter">/ {s.date}</span>
                        </div>
                        <p className="text-gray-600 font-medium leading-relaxed">{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-8 text-center">
                  <div className="bg-emerald-900 p-10 rounded-[50px] text-white shadow-3xl group">
                    <QrCodeIcon className="w-40 h-40 mx-auto mb-8 text-emerald-400 group-hover:scale-110 transition-transform duration-500" />
                    <h4 className="text-xl font-black mb-4 tracking-tighter">Xác thực nguồn gốc</h4>
                    <p className="text-xs text-emerald-300 font-bold opacity-80 mb-8 leading-relaxed tracking-wider uppercase">Mã ID: #AGRI-ST25-9921</p>
                    <button className="w-full py-4 bg-emerald-500 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:bg-emerald-400">Tải chứng chỉ số</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default ProductDetailPage

