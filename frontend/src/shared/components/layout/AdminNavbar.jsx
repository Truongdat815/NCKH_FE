import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { 
  HomeIcon,
  UsersIcon,
  ShoppingBagIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  TagIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowLeftIcon,
  BellIcon,
  ChartPieIcon,
  StarIcon,
  MegaphoneIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Chia menu thành 2 nhóm: chính và phụ
  const mainNavigation = [
    { name: 'Tổng Quan', href: '/dashboard', icon: ChartBarIcon },
    { name: 'Người Dùng', href: '/dashboard/users', icon: UsersIcon },
    { name: 'Sản Phẩm', href: '/dashboard/products', icon: ShoppingBagIcon },
    { name: 'Đơn Hàng', href: '/dashboard/orders', icon: ClipboardDocumentListIcon },
    { name: 'Báo Cáo', href: '/dashboard/reports', icon: ChartPieIcon },
  ]

  const secondaryNavigation = [
    { name: 'Bài Viết', href: '/dashboard/posts', icon: DocumentTextIcon },
    { name: 'Danh Mục', href: '/dashboard/categories', icon: TagIcon },
    { name: 'Đánh Giá', href: '/dashboard/reviews', icon: StarIcon },
    { name: 'Thông Báo', href: '/dashboard/notifications', icon: MegaphoneIcon },
    { name: 'Cài Đặt', href: '/dashboard/settings', icon: Cog6ToothIcon },
  ]

  const adminNavigation = [...mainNavigation, ...secondaryNavigation]

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/')

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-4">
          {/* Logo & Back */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => navigate('/')}
              className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200"
              aria-label="Về trang chủ"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <Link to="/dashboard" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-200/50 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-transparent"></div>
                <ShieldCheckIcon className="w-7 h-7 text-white relative z-10" />
              </div>
              <div className="flex flex-col hidden md:flex">
                <span className="text-lg font-bold text-gray-900 leading-none group-hover:text-purple-600 transition-colors duration-200">Quản Trị Hệ Thống</span>
                <span className="text-[10px] font-semibold text-purple-600 uppercase tracking-wider mt-0.5">Admin Dashboard</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav - Main items */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center max-w-5xl mx-auto px-4" role="navigation" aria-label="Admin navigation">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 whitespace-nowrap ${
                  isActive(item.href)
                    ? 'text-purple-600 bg-purple-50 shadow-sm border border-purple-200'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/60'
                } hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                <item.icon className="w-4 h-4 stroke-[2.5px]" aria-hidden="true" />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Secondary menu với dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-gray-700 rounded-xl hover:text-purple-600 hover:bg-purple-50/60 transition-all duration-200 whitespace-nowrap hover:scale-105 active:scale-95">
                <Cog6ToothIcon className="w-4 h-4 stroke-[2.5px]" />
                <span>Thêm</span>
                <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown menu */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {secondaryNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center gap-3 px-4 py-3 text-sm font-bold transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-purple-600 bg-purple-50'
                          : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Tablet Nav - Chỉ hiện main items */}
          <nav className="hidden md:flex lg:hidden items-center gap-1 flex-1 justify-center px-2" role="navigation">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isActive(item.href)
                    ? 'text-purple-600 bg-purple-50 border border-purple-200'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/60'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0 border-l border-gray-100 pl-4 ml-2">
            <button className="relative p-2.5 text-gray-500 hover:text-purple-600 transition-all duration-200 rounded-xl hover:bg-purple-50">
              <BellIcon className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-5 py-2.5 bg-gray-100 text-gray-700 text-sm font-bold rounded-xl hover:bg-gray-200 transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
            >
              Thoát
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {adminNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-bold transition-all duration-200 ${
                  isActive(item.href) ? 'text-purple-600 bg-purple-50 border border-purple-100' : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-6 h-6" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default AdminNavbar

