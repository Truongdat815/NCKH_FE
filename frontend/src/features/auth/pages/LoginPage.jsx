import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import PageTransition from '../../../components/common/PageTransition'

const LoginPage = () => {
  const navigate = useNavigate()
  const [role, setRole] = useState('admin') // Default role

  const handleSubmit = (e) => {
    e.preventDefault()
    // Không cần check API, redirect trực tiếp theo role
    const roleRoutes = {
      admin: '/dashboard',
      enterprise: '/dashboard/enterprise',
      farmer: '/dashboard/farmer',
      engineer: '/dashboard/engineer',
      consumer: '/dashboard/consumer'
    }
    navigate(roleRoutes[role] || '/dashboard')
  }

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <div className="text-center">
            <div className="mx-auto h-14 w-14 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200/50 mb-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent"></div>
              <svg className="w-9 h-9 text-white relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L8 6L10 8L12 6L14 8L16 6L12 2Z" fill="currentColor" opacity="0.9"/>
                <path d="M12 6L8 10L10 12L12 10L14 12L16 10L12 6Z" fill="currentColor" opacity="0.8"/>
                <path d="M12 10L8 14L10 16L12 14L14 16L16 14L12 10Z" fill="currentColor" opacity="0.7"/>
                <line x1="12" y1="16" x2="12" y2="22" stroke="currentColor" strokeWidth="2.5"/>
                <path d="M12 18L9 20L10 22L12 20L14 22L15 20L12 18Z" fill="currentColor" opacity="0.6"/>
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Chào mừng trở lại!
            </h2>
            <p className="mt-3 text-sm text-gray-400 font-bold uppercase tracking-widest">
              Hoặc{' '}
              <Link to="/register" className="text-emerald-600 hover:underline">
                đăng ký tài khoản mới
              </Link>
            </p>
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-3">
              Đăng nhập với vai trò:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 'admin', label: 'Admin', icon: '👑', color: 'bg-purple-100 text-purple-700 border-purple-200' },
                { value: 'enterprise', label: 'Doanh nghiệp', icon: '🏢', color: 'bg-blue-100 text-blue-700 border-blue-200' },
                { value: 'farmer', label: 'Nông dân', icon: '🌾', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
                { value: 'engineer', label: 'Kỹ sư', icon: '🔬', color: 'bg-orange-100 text-orange-700 border-orange-200' },
                { value: 'consumer', label: 'Người tiêu dùng', icon: '🛒', color: 'bg-pink-100 text-pink-700 border-pink-200' },
              ].map(r => (
                <button
                  key={r.value}
                  type="button"
                  onClick={() => setRole(r.value)}
                  className={`px-4 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                    role === r.value
                      ? `${r.color} border-current shadow-md scale-105`
                      : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-1">{r.icon}</span> {r.label}
                </button>
              ))}
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  defaultValue="demo@agrismart.com"
                  className="appearance-none rounded-2xl relative block w-full pl-12 px-4 py-4 border border-gray-100 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all sm:text-sm bg-gray-50/50 font-medium"
                  placeholder="Địa chỉ Email"
                />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LockClosedIcon className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  defaultValue="123456"
                  className="appearance-none rounded-2xl relative block w-full pl-12 px-4 py-4 border border-gray-100 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all sm:text-sm bg-gray-50/50 font-medium"
                  placeholder="Mật khẩu"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded-lg"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm font-bold text-gray-500">
                  Ghi nhớ đăng nhập
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-bold text-emerald-600 hover:underline">
                  Quên mật khẩu?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-2xl text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all shadow-xl shadow-emerald-100 uppercase tracking-widest"
            >
              Đăng nhập ngay →
            </button>
          </form>
        </div>
      </div>
    </PageTransition>
  )
}

export default LoginPage
