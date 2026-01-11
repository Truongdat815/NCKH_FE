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
  ShoppingCartIcon
} from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Thị Trường', href: '/marketplace', icon: ShoppingBagIcon },
    { name: 'Cộng Đồng', href: '/community', icon: UserGroupIcon },
    { name: 'Nhật Ký Số', href: '/farming-log', icon: BookOpenIcon },
    { name: 'Thống Kê', href: '/dashboard', icon: ChartBarIcon },
    { name: 'Bác Sỹ AI', href: '/ai-diagnosis', icon: SparklesIcon },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
              <span className="text-3xl">🌾</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-[900] text-gray-900 leading-none tracking-tighter uppercase">AgriSmart</span>
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mt-1">Smart Agriculture</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold rounded-xl transition-all ${
                  isActive(item.href)
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-500 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5 stroke-[2.5px]" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-4 border-l border-gray-100 pl-6 ml-2">
            <Link to="/cart" className="relative p-2 text-gray-500 hover:text-emerald-600 transition-colors">
              <ShoppingCartIcon className="w-6 h-6 stroke-[2px]" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center">2</span>
            </Link>
            <Link to="/login" className="text-sm font-black text-gray-500 hover:text-emerald-600 transition-colors uppercase tracking-widest">
              Đăng nhập
            </Link>
            <Link to="/register" className="px-6 py-3 bg-emerald-600 text-white text-xs font-black rounded-2xl shadow-xl shadow-emerald-100 hover:bg-emerald-700 transition-all hover:-translate-y-0.5 active:scale-95 uppercase tracking-widest">
              Bắt đầu
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 focus:outline-none"
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-black ${
                  isActive(item.href) ? 'text-emerald-600 bg-emerald-50' : 'text-gray-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-6 h-6" />
                {item.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Link to="/login" className="py-4 text-center font-black text-gray-500 bg-gray-50 rounded-2xl">Đăng nhập</Link>
              <Link to="/register" className="py-4 text-center font-black text-white bg-emerald-600 rounded-2xl shadow-lg">Đăng ký</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
