import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { 
  BuildingOfficeIcon,
  ShoppingBagIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowLeftIcon,
  BellIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const EnterpriseNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const enterpriseNavigation = [
    { name: 'Tổng Quan', href: '/dashboard/enterprise', icon: ChartBarIcon },
    { name: 'Sản Phẩm', href: '/dashboard/enterprise/products', icon: ShoppingBagIcon },
    { name: 'Đơn Hàng', href: '/dashboard/enterprise/orders', icon: ClipboardDocumentListIcon },
    { name: 'Khách Hàng', href: '/dashboard/enterprise/customers', icon: UserGroupIcon },
    { name: 'Doanh Thu', href: '/dashboard/enterprise/revenue', icon: CurrencyDollarIcon },
    { name: 'Cài Đặt', href: '/dashboard/enterprise/settings', icon: Cog6ToothIcon },
  ]

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/')

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Back */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Về trang chủ"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <Link to="/dashboard/enterprise" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200/50 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-transparent"></div>
                <BuildingOfficeIcon className="w-7 h-7 text-white relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 leading-none group-hover:text-emerald-600 transition-colors">Doanh Nghiệp</span>
                <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider mt-0.5">Enterprise Dashboard</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Enterprise navigation">
            {enterpriseNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-xl transition-all duration-300 whitespace-nowrap ${
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

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3 border-l border-gray-100 pl-5 ml-3">
            <button className="relative p-2 text-gray-500 hover:text-emerald-600 transition-colors">
              <BellIcon className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold rounded-xl hover:bg-gray-200 transition-colors"
            >
              Thoát
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
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
        <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {enterpriseNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-bold ${
                  isActive(item.href) ? 'text-emerald-600 bg-emerald-50' : 'text-gray-600'
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

export default EnterpriseNavbar

