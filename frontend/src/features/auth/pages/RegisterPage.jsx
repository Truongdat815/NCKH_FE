import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserIcon, BuildingOfficeIcon, AcademicCapIcon, IdentificationIcon } from '@heroicons/react/24/outline'
import PageTransition from '@/shared/components/common/PageTransition'

const roles = [
  { id: 'farmer', name: 'Nông dân', icon: UserIcon, desc: 'Mua vật tư, bán nông sản' },
  { id: 'enterprise', name: 'Doanh nghiệp', icon: BuildingOfficeIcon, desc: 'Cung cấp vật tư nông nghiệp' },
  { id: 'engineer', name: 'Kỹ sư', icon: AcademicCapIcon, desc: 'Tư vấn kỹ thuật chuyên sâu' },
  { id: 'consumer', name: 'Người mua', icon: IdentificationIcon, desc: 'Mua nông sản sạch QR' },
]

const RegisterPage = () => {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState('farmer')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Fake register - redirect trực tiếp theo role (không cần API)
    const roleRoutes = {
      farmer: '/dashboard/farmer',
      enterprise: '/dashboard/enterprise',
      engineer: '/dashboard/engineer',
      consumer: '/dashboard/consumer'
    }
    navigate(roleRoutes[selectedRole] || '/dashboard/farmer')
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50/50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight uppercase">Gia nhập AgriSmart</h2>
            <p className="mt-2 text-sm text-gray-400 font-bold uppercase tracking-wider">Lựa chọn vai trò phù hợp với bạn</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roles.map((role) => (
              <div
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300 flex flex-col items-center text-center gap-4 ${
                  selectedRole === role.id 
                  ? 'border-emerald-500 bg-emerald-50 ring-4 ring-emerald-500/10' 
                  : 'border-gray-50 hover:border-emerald-200 bg-gray-50/30'
                }`}
              >
                <div className={`p-4 rounded-2xl shadow-inner ${selectedRole === role.id ? 'bg-emerald-500 text-white' : 'bg-white text-gray-400'}`}>
                  <role.icon className="h-8 w-8 stroke-[2px]" />
                </div>
                <div>
                  <h3 className={`font-bold text-sm uppercase tracking-widest ${selectedRole === role.id ? 'text-emerald-700' : 'text-gray-900'}`}>{role.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" required className="appearance-none rounded-2xl block w-full px-4 py-3 border border-gray-200 placeholder-gray-400 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50/50 font-medium outline-none transition-all" placeholder="Họ và tên" />
            <input type="text" required className="appearance-none rounded-2xl block w-full px-4 py-3 border border-gray-200 placeholder-gray-400 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50/50 font-medium outline-none transition-all" placeholder="Số điện thoại" />
            <input type="email" required className="md:col-span-2 appearance-none rounded-2xl block w-full px-4 py-3 border border-gray-200 placeholder-gray-400 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50/50 font-medium outline-none transition-all" placeholder="Địa chỉ Email" />
            <input type="password" required className="appearance-none rounded-2xl block w-full px-4 py-3 border border-gray-200 placeholder-gray-400 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50/50 font-medium outline-none transition-all" placeholder="Mật khẩu" />
            <input type="password" required className="appearance-none rounded-2xl block w-full px-4 py-3 border border-gray-200 placeholder-gray-400 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50/50 font-medium outline-none transition-all" placeholder="Xác nhận" />

            <div className="md:col-span-2 flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
              <input type="checkbox" required className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-200 rounded-lg" />
              <label className="text-sm font-bold text-gray-500">Tôi đồng ý với mọi điều khoản bảo mật của AgriSmart</label>
            </div>

            <button type="submit" className="md:col-span-2 py-3.5 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200/50 hover:bg-emerald-700 hover:shadow-xl transition-all duration-200 uppercase tracking-wider text-sm active:scale-[0.98]">
              Đăng ký ngay
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 font-bold uppercase tracking-wider pt-4 border-t border-gray-100">
            Đã có tài khoản?{' '}
            <Link to="/login" className="text-emerald-600 hover:underline">Đăng nhập</Link>
          </p>
        </div>
      </div>
    </PageTransition>
  )
}

export default RegisterPage
