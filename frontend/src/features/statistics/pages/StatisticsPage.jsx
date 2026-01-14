import React, { useState } from 'react'
import { 
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  MapPinIcon,
  CalendarIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'
import PageTransition from '@/shared/components/common/PageTransition'
import Badge from '@/shared/components/common/Badge'

const StatisticsPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const [selectedRegion, setSelectedRegion] = useState('all')

  // Sample data - sẽ được thay thế bằng API call
  const marketData = [
    { 
      name: 'Lúa ST25', 
      category: 'Lúa gạo',
      currentPrice: 18500, 
      change: 350, 
      changePercent: 1.93,
      region: 'Đồng bằng sông Cửu Long',
      trend: 'up'
    },
    { 
      name: 'Phân NPK', 
      category: 'Phân bón',
      currentPrice: 12500, 
      change: -1200, 
      changePercent: -8.76,
      region: 'Toàn quốc',
      trend: 'down'
    },
    { 
      name: 'Xoài Cát', 
      category: 'Trái cây',
      currentPrice: 45000, 
      change: 2000, 
      changePercent: 4.65,
      region: 'Miền Tây',
      trend: 'up'
    },
    { 
      name: 'Cà phê Robusta', 
      category: 'Cà phê',
      currentPrice: 52000, 
      change: 1500, 
      changePercent: 2.97,
      region: 'Tây Nguyên',
      trend: 'up'
    },
    { 
      name: 'Hạt tiêu', 
      category: 'Gia vị',
      currentPrice: 185000, 
      change: -5000, 
      changePercent: -2.63,
      region: 'Tây Nguyên',
      trend: 'down'
    },
    { 
      name: 'Cao su', 
      category: 'Công nghiệp',
      currentPrice: 32000, 
      change: 800, 
      changePercent: 2.56,
      region: 'Đông Nam Bộ',
      trend: 'up'
    },
  ]

  const summaryStats = [
    { 
      label: 'Tổng sản phẩm theo dõi', 
      value: '156', 
      icon: ShoppingBagIcon, 
      color: 'bg-blue-500',
      change: '+12 sản phẩm mới'
    },
    { 
      label: 'Biến động giá trung bình', 
      value: '+2.4%', 
      icon: ChartBarIcon, 
      color: 'bg-emerald-500',
      change: 'So với tháng trước'
    },
    { 
      label: 'Khu vực theo dõi', 
      value: '8', 
      icon: MapPinIcon, 
      color: 'bg-orange-500',
      change: 'Tỉnh/Thành phố'
    },
    { 
      label: 'Cập nhật gần nhất', 
      value: 'Hôm nay', 
      icon: CalendarIcon, 
      color: 'bg-purple-500',
      change: '14:30 - 15/01/2026'
    },
  ]

  const periods = [
    { value: 'week', label: 'Tuần này' },
    { value: 'month', label: 'Tháng này' },
    { value: 'quarter', label: 'Quý này' },
    { value: 'year', label: 'Năm nay' },
  ]

  const regions = [
    { value: 'all', label: 'Tất cả khu vực' },
    { value: 'north', label: 'Miền Bắc' },
    { value: 'central', label: 'Miền Trung' },
    { value: 'south', label: 'Miền Nam' },
  ]

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">Thống Kê Thị Trường</h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider text-xs mt-2">
              Dữ liệu giá cả và xu hướng nông sản thời gian thực
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <FunnelIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {periods.map(p => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>
            <div className="relative">
              <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {regions.map(r => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
            </div>
          </div>
        </header>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryStats.map((stat, idx) => (
            <div 
              key={stat.label}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group hover-lift animate-stagger-1"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-125 group-hover:rotate-6 transition-all duration-500`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">{stat.value}</h3>
              <p className="text-xs text-gray-500">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Market Data Table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-green-50">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
              <ChartBarIcon className="w-6 h-6 text-emerald-600" />
              Bảng Giá Nông Sản
            </h2>
            <p className="text-sm text-gray-500 mt-1">Cập nhật theo thời gian thực từ các thị trường trên toàn quốc</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Sản phẩm</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Danh mục</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Khu vực</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">Giá hiện tại</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">Biến động</th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Xu hướng</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {marketData.map((item, idx) => (
                  <tr 
                    key={item.name}
                    className="hover:bg-emerald-50/50 transition-colors duration-200 animate-stagger-1"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">{item.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge color="info" className="text-xs">{item.category}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPinIcon className="w-4 h-4" />
                        {item.region}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="font-bold text-gray-900">
                        {item.currentPrice.toLocaleString('vi-VN')} ₫/kg
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className={`flex items-center justify-end gap-2 font-bold ${
                        item.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
                      }`}>
                        {item.trend === 'up' ? (
                          <ArrowTrendingUpIcon className="w-5 h-5" />
                        ) : (
                          <ArrowTrendingDownIcon className="w-5 h-5" />
                        )}
                        <span>
                          {item.change > 0 ? '+' : ''}{item.change.toLocaleString('vi-VN')} ₫
                        </span>
                        <span className="text-sm">
                          ({item.changePercent > 0 ? '+' : ''}{item.changePercent}%)
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Badge 
                        color={item.trend === 'up' ? 'success' : 'danger'}
                        className="text-xs font-bold"
                      >
                        {item.trend === 'up' ? 'Tăng' : 'Giảm'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-6 rounded-3xl text-white shadow-xl">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <ArrowTrendingUpIcon className="w-5 h-5" />
              Sản phẩm tăng giá nhiều nhất
            </h3>
            <div className="space-y-3">
              {marketData
                .filter(item => item.trend === 'up')
                .sort((a, b) => b.changePercent - a.changePercent)
                .slice(0, 3)
                .map((item, idx) => (
                  <div key={item.name} className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm text-white/80">{item.region}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-emerald-200">+{item.changePercent}%</div>
                      <div className="text-sm text-white/80">{item.currentPrice.toLocaleString('vi-VN')} ₫</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-orange-600 p-6 rounded-3xl text-white shadow-xl">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <ArrowTrendingDownIcon className="w-5 h-5" />
              Sản phẩm giảm giá nhiều nhất
            </h3>
            <div className="space-y-3">
              {marketData
                .filter(item => item.trend === 'down')
                .sort((a, b) => a.changePercent - b.changePercent)
                .slice(0, 3)
                .map((item, idx) => (
                  <div key={item.name} className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm text-white/80">{item.region}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-200">{item.changePercent}%</div>
                      <div className="text-sm text-white/80">{item.currentPrice.toLocaleString('vi-VN')} ₫</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default StatisticsPage

