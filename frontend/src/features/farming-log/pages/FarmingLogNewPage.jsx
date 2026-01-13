import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  CameraIcon,
  MapPinIcon,
  CalendarIcon,
  BeakerIcon,
  CloudIcon,
  BugAntIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import PageTransition from '@/shared/components/common/PageTransition'
import Badge from '@/shared/components/common/Badge'
import { useToast } from '@/shared/hooks/useToast'
import LoadingSpinner from '@/shared/components/common/LoadingSpinner'

const FarmingLogNewPage = () => {
  const navigate = useNavigate()
  const { showSuccess, showError } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    activity: '',
    type: 'fertilizer',
    date: new Date().toISOString().split('T')[0],
    location: '',
    details: '',
    images: [],
  })

  const activityTypes = [
    { value: 'fertilizer', label: 'Bón phân', icon: BeakerIcon, color: 'bg-blue-500' },
    { value: 'water', label: 'Tưới nước', icon: CloudIcon, color: 'bg-cyan-500' },
    { value: 'pest', label: 'Phòng trừ sâu bệnh', icon: BugAntIcon, color: 'bg-red-500' },
    { value: 'harvest', label: 'Thu hoạch', icon: '🌾', color: 'bg-yellow-500' },
    { value: 'other', label: 'Khác', icon: '📝', color: 'bg-gray-500' },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.activity.trim()) {
      showError('Vui lòng nhập tên hoạt động')
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      showSuccess('Tạo nhật ký thành công!')
      navigate('/farming-log')
    }, 1500)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        showError('Kích thước file không được vượt quá 10MB')
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({
          ...formData,
          images: [...formData.images, reader.result]
        })
        showSuccess('Tải ảnh thành công!')
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link 
            to="/farming-log"
            className="p-2 rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-sm border border-gray-100 hover:scale-110 active:scale-95"
          >
            <ArrowLeftIcon className="w-5 h-5 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Tạo Nhật Ký Mới</h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider text-xs mt-1">Ghi lại hoạt động canh tác</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Activity Type */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
              Loại hoạt động
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {activityTypes.map(type => {
                const Icon = typeof type.icon === 'string' ? null : type.icon
                return (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, type: type.value })}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                      formData.type === type.value
                        ? 'border-emerald-500 bg-emerald-50 scale-105'
                        : 'border-gray-200 bg-gray-50 hover:border-emerald-200 hover:bg-emerald-50/50'
                    }`}
                  >
                    {Icon ? (
                      <Icon className={`w-8 h-8 mx-auto mb-2 ${formData.type === type.value ? 'text-emerald-600' : 'text-gray-400'}`} />
                    ) : (
                      <span className="text-3xl block mb-2">{type.icon}</span>
                    )}
                    <p className={`text-xs font-bold ${formData.type === type.value ? 'text-emerald-700' : 'text-gray-600'}`}>
                      {type.label}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Activity Name */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
              Tên hoạt động
            </label>
            <input
              type="text"
              value={formData.activity}
              onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-200 text-base font-medium outline-none"
              placeholder="Ví dụ: Bón phân thúc đợt 2"
              required
            />
          </div>

          {/* Date & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                <CalendarIcon className="w-4 h-4 inline mr-2" />
                Ngày thực hiện
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-200 text-base font-medium outline-none"
                required
              />
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                <MapPinIcon className="w-4 h-4 inline mr-2" />
                Vị trí
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-200 text-base font-medium outline-none"
                placeholder="Ví dụ: Cánh đồng A, Khu vực 1"
              />
            </div>
          </div>

          {/* Details */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
              Chi tiết
            </label>
            <textarea
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-200 text-base font-medium outline-none resize-none h-32"
              placeholder="Mô tả chi tiết về hoạt động này..."
            />
          </div>

          {/* Image Upload */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
              <CameraIcon className="w-4 h-4 inline mr-2" />
              Hình ảnh (tùy chọn)
            </label>
            {formData.images.length > 0 ? (
              <div className="grid grid-cols-3 gap-3 mb-3">
                {formData.images.map((img, idx) => (
                  <div key={idx} className="relative group">
                    <img src={img} alt={`Upload ${idx + 1}`} className="w-full h-24 object-cover rounded-xl" />
                    <button
                      onClick={() => setFormData({ ...formData, images: formData.images.filter((_, i) => i !== idx) })}
                      className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            ) : null}
            <label className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-emerald-300 transition-colors duration-200 cursor-pointer group block">
              <CameraIcon className="w-12 h-12 mx-auto mb-3 text-gray-400 group-hover:text-emerald-500 transition-colors duration-200" />
              <p className="text-sm font-medium text-gray-600 mb-1">Nhấp để tải ảnh lên</p>
              <p className="text-xs text-gray-400">PNG, JPG lên đến 10MB</p>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" multiple />
            </label>
          </div>

          {/* AI Suggestion */}
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-3xl border border-emerald-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Gợi ý từ AI</h3>
                <p className="text-sm text-gray-600 mb-3">Dựa trên loại hoạt động bạn chọn, AI có thể đề xuất các thông tin phù hợp.</p>
                <button type="button" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors duration-200">
                  Xem gợi ý →
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/farming-log"
              className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-200 transition-all duration-200 text-center"
            >
              Hủy
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 group px-6 py-3 bg-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-200/50 hover:bg-emerald-700 hover:shadow-2xl transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <LoadingSpinner size="sm" />
                  <span className="relative z-10">Đang lưu...</span>
                </>
              ) : (
                <>
                  <span className="relative z-10">Lưu Nhật Ký</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </PageTransition>
  )
}

export default FarmingLogNewPage

