import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  ShoppingBagIcon, 
  UserGroupIcon, 
  BookOpenIcon, 
  ChartBarIcon,
  Bars3Icon,
  XMarkIcon,
  SparklesIcon,
  ShoppingCartIcon,
  UserIcon
} from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Thị Trường', href: '/marketplace', icon: ShoppingBagIcon },
    { name: 'Cộng Đồng', href: '/community', icon: UserGroupIcon },
    { name: 'Nhật Ký Số', href: '/farming-log', icon: BookOpenIcon },
    { name: 'Thống Kê', href: '/dashboard', icon: ChartBarIcon },
    { name: 'Bác Sỹ AI', href: '/ai-chat', icon: SparklesIcon },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="AgriSmart - Trang chủ">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-md shadow-emerald-200/50 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent"></div>
              <svg className="w-7 h-7 text-white relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Bông lúa */}
                <path d="M12 2L8 6L10 8L12 6L14 8L16 6L12 2Z" fill="currentColor" opacity="0.9"/>
                <path d="M12 6L8 10L10 12L12 10L14 12L16 10L12 6Z" fill="currentColor" opacity="0.8"/>
                <path d="M12 10L8 14L10 16L12 14L14 16L16 14L12 10Z" fill="currentColor" opacity="0.7"/>
                {/* Thân lúa */}
                <line x1="12" y1="16" x2="12" y2="22" stroke="currentColor" strokeWidth="2.5"/>
                {/* Lá */}
                <path d="M12 18L9 20L10 22L12 20L14 22L15 20L12 18Z" fill="currentColor" opacity="0.6"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-none tracking-tight group-hover:text-emerald-600 transition-colors duration-200">AgriSmart</span>
              <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider mt-0.5">Smart Agriculture</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-xl transition-all duration-300 whitespace-nowrap relative ${
                  isActive(item.href)
                    ? 'text-emerald-600 bg-emerald-50 shadow-sm'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50'
                } hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                <item.icon className="w-4 h-4 stroke-[2.5px]" aria-hidden="true" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-3 border-l border-gray-100 pl-5 ml-3">
            <Link to="/cart" className="relative p-2 text-gray-500 hover:text-emerald-600 transition-colors">
              <ShoppingCartIcon className="w-6 h-6 stroke-[2px]" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
            </Link>
            <Link to="/login" className="text-sm font-bold text-gray-600 hover:text-emerald-600 transition-colors duration-200 whitespace-nowrap hover:scale-105 active:scale-95">
              Đăng nhập
            </Link>
            <Link to="/register" className="group relative px-5 py-2.5 bg-emerald-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-emerald-200/50 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300 active:scale-[0.98] whitespace-nowrap overflow-hidden hover:-translate-y-0.5">
              <span className="relative z-10">Bắt đầu</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link to="/profile" className="p-2 text-gray-500 hover:text-emerald-600 transition-colors duration-200 rounded-xl hover:bg-emerald-50">
              <UserIcon className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <XMarkIcon className="h-8 w-8" aria-hidden="true" /> : <Bars3Icon className="h-8 w-8" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300" role="menu">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                  isActive(item.href) ? 'text-emerald-600 bg-emerald-50' : 'text-gray-600'
                }`}
                onClick={() => setIsOpen(false)}
                role="menuitem"
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                <item.icon className="w-6 h-6" aria-hidden="true" />
                {item.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Link to="/login" className="py-4 text-center font-bold text-gray-500 bg-gray-50 rounded-2xl">Đăng nhập</Link>
              <Link to="/register" className="py-4 text-center font-bold text-white bg-emerald-600 rounded-2xl shadow-lg">Đăng ký</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
