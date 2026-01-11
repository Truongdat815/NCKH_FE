import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CameraIcon,
  PencilIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import PageTransition from '../../../components/common/PageTransition'
import Badge from '../../../components/common/Badge'
import { useToast } from '../../../hooks/useToast'

const ProfilePage = () => {
  const { showSuccess, showError, showInfo } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0901234567',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    role: 'Nông dân',
    avatar: 'https://i.pravatar.cc/150?u=profile',
    joinDate: '15/03/2024',
    verified: true
  })

  const stats = [
    { label: 'Đơn hàng', value: '24', color: 'bg-blue-50 text-blue-600' },
    { label: 'Sản phẩm', value: '12', color: 'bg-emerald-50 text-emerald-600' },
    { label: 'Đánh giá', value: '4.8', color: 'bg-yellow-50 text-yellow-600' },
    { label: 'Tham gia', value: '2 năm', color: 'bg-purple-50 text-purple-600' },
  ]

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Hồ Sơ Cá Nhân</h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider text-xs mt-2">Quản lý thông tin tài khoản</p>
          </div>
          <button
            onClick={() => {
              if (isEditing) {
                showSuccess('Đã lưu thông tin thành công!')
              }
              setIsEditing(!isEditing)
            }}
            className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-200/50 hover:bg-emerald-700 hover:shadow-xl transition-all duration-200 active:scale-[0.98] flex items-center gap-2"
          >
            <PencilIcon className="w-4 h-4" />
            {isEditing ? 'Lưu thay đổi' : 'Chỉnh sửa'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 text-center space-y-6 animate-scale-in">
              <div className="relative inline-block">
                <img 
                  src={profile.avatar} 
                  alt={profile.name}
                  className="w-32 h-32 rounded-full border-4 border-emerald-100 mx-auto"
                />
                {isEditing && (
                  <label className="absolute bottom-0 right-0 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:scale-110 active:scale-95">
                    <CameraIcon className="w-5 h-5 text-white" />
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          const reader = new FileReader()
                          reader.onloadend = () => {
                            setProfile({ ...profile, avatar: reader.result })
                            showSuccess('Đã cập nhật ảnh đại diện!')
                          }
                          reader.readAsDataURL(file)
                        }
                      }}
                    />
                  </label>
                )}
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
                  {profile.verified && (
                    <ShieldCheckIcon className="w-5 h-5 text-emerald-600" />
                  )}
                </div>
                <Badge color="success" size="sm">{profile.role}</Badge>
                <p className="text-xs text-gray-400 mt-3">Tham gia từ {profile.joinDate}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow duration-200 animate-stagger-1"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 space-y-6">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4">Thông tin cá nhân</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    <UserIcon className="w-4 h-4 inline mr-2" />
                    Họ và tên
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-200 font-medium outline-none"
                    />
                  ) : (
                    <p className="text-base font-bold text-gray-900">{profile.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    <EnvelopeIcon className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-200 font-medium outline-none"
                    />
                  ) : (
                    <p className="text-base font-bold text-gray-900">{profile.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    <PhoneIcon className="w-4 h-4 inline mr-2" />
                    Số điện thoại
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-200 font-medium outline-none"
                    />
                  ) : (
                    <p className="text-base font-bold text-gray-900">{profile.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    <MapPinIcon className="w-4 h-4 inline mr-2" />
                    Địa chỉ
                  </label>
                  {isEditing ? (
                    <textarea
                      value={profile.address}
                      onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-200 font-medium outline-none resize-none h-20"
                    />
                  ) : (
                    <p className="text-base font-bold text-gray-900">{profile.address}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4">Bảo mật</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => showInfo('Tính năng đổi mật khẩu sẽ sớm có mặt!')}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between group"
                >
                  <span className="font-bold text-gray-700">Đổi mật khẩu</span>
                  <span className="text-emerald-600 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
                <button 
                  onClick={() => showInfo('Tính năng xác thực 2 lớp sẽ sớm có mặt!')}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between group"
                >
                  <span className="font-bold text-gray-700">Xác thực 2 lớp</span>
                  <Badge color="warning" size="sm">Chưa bật</Badge>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default ProfilePage

