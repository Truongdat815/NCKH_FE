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
import { useToast } from '../../../hooks/useToast'

const ProductDetailPage = () => {
  const { id } = useParams()
  const { showSuccess } = useToast()
  const [activeTab, setActiveTab] = useState('traceability')
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    showSuccess(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`)
  }

  const handleBuyNow = () => {
    showSuccess('Đang chuyển đến trang thanh toán...')
    setTimeout(() => {
      window.location.href = '/checkout'
    }, 1000)
  }

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
              <img 
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" 
                alt="Gạo ST25" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-6 left-6 animate-bounce-in">
                <Badge color="success">VietGAP Standard</Badge>
              </div>
              {/* Image Gallery Thumbnails */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-lg border-2 border-white overflow-hidden cursor-pointer hover:scale-110 transition-transform duration-200">
                    <img 
                      src={`https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=100&sig=${i}`}
                      alt={`Thumbnail ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-center space-y-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider mb-4 px-3 py-1.5 bg-emerald-50 rounded-full w-fit">
                <ShieldCheckIcon className="w-4 h-4" /> Sản phẩm đã được bảo chứng
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">Gạo ST25 Đặc Sản</h1>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <span className="text-3xl sm:text-4xl font-bold text-emerald-600">175.000đ</span>
                <span className="text-gray-400 line-through text-lg font-bold">210.000đ</span>
                <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold">-17%</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleBuyNow}
                className="flex-1 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-200/50 hover:bg-emerald-700 hover:shadow-2xl transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 text-base group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ShoppingCartIcon className="w-5 h-5" /> MUA NGAY
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={handleAddToCart}
                className="px-6 py-4 bg-emerald-50 text-emerald-600 font-bold rounded-2xl hover:bg-emerald-100 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 text-base border-2 border-emerald-200 hover:border-emerald-300 hover:scale-105"
              >
                <span className="text-lg">🛒</span> GIỎ
              </button>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-sm font-bold text-gray-600">Số lượng:</span>
              <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-colors duration-200 text-gray-600 hover:text-emerald-600"
                >
                  −
                </button>
                <span className="w-12 text-center font-bold text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-colors duration-200 text-gray-600 hover:text-emerald-600"
                >
                  +
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🚛</div>
                <div><p className="text-xs font-bold text-gray-400 uppercase">Giao hàng</p><p className="text-sm font-bold text-gray-900">Nhanh 2h</p></div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🔄</div>
                <div><p className="text-xs font-bold text-gray-400 uppercase">Đổi trả</p><p className="text-sm font-bold text-gray-900">7 Ngày</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* Traceability Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex bg-gray-50 border-b border-gray-100 px-4 sm:px-6 overflow-x-auto">
            {['traceability', 'details'].map(t => (
              <button key={t} onClick={() => setActiveTab(t)} className={`py-4 px-6 text-xs font-bold uppercase tracking-wider relative transition-all duration-200 whitespace-nowrap ${activeTab === t ? 'text-emerald-600' : 'text-gray-400 hover:text-gray-600'}`}>
                {t === 'traceability' ? '🔍 Truy xuất nguồn gốc' : 'Chi tiết sản phẩm'}
                {activeTab === t && <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-600 rounded-t-full"></div>}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'traceability' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 relative border-l-4 border-emerald-100 ml-4 sm:ml-6 space-y-6">
                  {steps.map((s, i) => (
                    <div key={i} className="relative pl-10 sm:pl-12 animate-slide-in" style={{ animationDelay: `${i * 0.1}s` }}>
                      <div className="absolute left-[-22px] sm:left-[-26px] top-0 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-2xl border-4 border-emerald-500 flex items-center justify-center text-xl sm:text-2xl shadow-lg z-10 hover:scale-110 transition-transform duration-200">{s.icon}</div>
                      <div className="bg-gray-50 p-6 rounded-3xl border border-transparent hover:border-emerald-200 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md group cursor-pointer">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                          <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider group-hover:text-emerald-700 transition-colors">{s.action}</span>
                          <span className="text-xs font-bold text-gray-400">/ {s.date}</span>
                        </div>
                        <p className="text-gray-600 font-medium leading-relaxed text-sm sm:text-base">{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-6 text-center">
                  <div className="bg-emerald-900 p-6 sm:p-8 rounded-3xl text-white shadow-xl group">
                    <QrCodeIcon className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-lg font-bold mb-3 tracking-tight">Xác thực nguồn gốc</h4>
                    <p className="text-xs text-emerald-300 font-bold opacity-80 mb-6 leading-relaxed tracking-wider uppercase">Mã ID: #AGRI-ST25-9921</p>
                    <button className="w-full py-3 bg-emerald-500 rounded-2xl font-bold text-sm uppercase tracking-wider shadow-lg hover:bg-emerald-400 transition-all duration-200 active:scale-[0.98]">Tải chứng chỉ số</button>
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

