import React, { useState } from 'react'
import { CloudArrowUpIcon } from '@heroicons/react/24/solid'
import { SparklesIcon } from '@heroicons/react/24/outline'
import PageTransition from '@/shared/components/common/PageTransition'
import LoadingSpinner from '@/shared/components/common/LoadingSpinner'

const AIAnalysisPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(URL.createObjectURL(file))
      setIsAnalyzing(true)
      // Simulate analysis
      setTimeout(() => setIsAnalyzing(false), 3000)
    }
  }

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight uppercase">Bác sỹ cây trồng AI</h1>
          <p className="text-gray-500 font-medium max-w-xl mx-auto italic text-sm sm:text-base">Chụp ảnh lá cây bệnh, nhận phác đồ điều trị ngay tức thì.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-emerald-100 flex flex-col items-center justify-center text-center space-y-5 hover:border-emerald-300 transition-all duration-300 cursor-pointer group shadow-sm relative overflow-hidden animate-scale-in">
            {selectedImage ? (
              <div className="w-full h-full space-y-4">
                <img src={selectedImage} alt="Uploaded" className="w-full h-64 object-cover rounded-2xl" />
                <button 
                  onClick={() => {
                    setSelectedImage(null)
                    setIsAnalyzing(false)
                  }}
                  className="text-sm font-bold text-red-600 hover:text-red-700 transition-colors duration-200"
                >
                  Xóa ảnh
                </button>
              </div>
            ) : (
              <>
                <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300 animate-float">
                  <CloudArrowUpIcon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 uppercase">Tải ảnh lá bệnh</h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-2">JPG, PNG lên đến 10MB</p>
                </div>
                <label className="px-6 py-2.5 bg-gray-900 text-white font-bold rounded-2xl text-xs uppercase tracking-wider hover:bg-emerald-600 transition-all duration-200 active:scale-[0.98] cursor-pointer">
                  Chọn tệp từ máy
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              </>
            )}
          </div>

          <div className="bg-gradient-to-br from-emerald-900 to-green-800 p-8 rounded-3xl text-white shadow-xl space-y-6 flex flex-col justify-center relative overflow-hidden animate-slide-in-right">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full"></div>
            {isAnalyzing ? (
              <div className="relative z-10 text-center space-y-6">
                <LoadingSpinner size="lg" className="mx-auto" />
                <div className="space-y-3">
                  <div className="h-3 bg-white/20 rounded-full w-3/4 mx-auto animate-pulse"></div>
                  <div className="h-3 bg-white/20 rounded-full w-1/2 mx-auto animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-3 bg-white/20 rounded-full w-2/3 mx-auto animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <p className="text-sm font-bold text-emerald-300 uppercase tracking-wider">Đang phân tích hình ảnh...</p>
              </div>
            ) : selectedImage ? (
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                    <SparklesIcon className="w-6 h-6 text-emerald-300" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight uppercase">Kết quả phân tích</h3>
                </div>
                <div className="space-y-4 bg-white/10 rounded-2xl p-6">
                  <div>
                    <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">Bệnh phát hiện:</p>
                    <p className="text-lg font-bold">Đạo ôn lá (Rice Blast)</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">Mức độ:</p>
                    <p className="text-base font-bold">Trung bình (40-60% diện tích lá)</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">Khuyến nghị:</p>
                    <p className="text-sm leading-relaxed">Phun thuốc Tricyclazole 75WP với liều lượng 0.3-0.5kg/ha. Phun vào sáng sớm hoặc chiều mát.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative z-10 text-center space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                    <SparklesIcon className="w-6 h-6 text-emerald-300" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight uppercase">Kết quả phân tích</h3>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Đang chờ dữ liệu đầu vào...</p>
                  <p className="text-sm text-emerald-300/80">Vui lòng tải ảnh lá cây bệnh để bắt đầu phân tích</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default AIAnalysisPage
