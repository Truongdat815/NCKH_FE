import React, { useState } from 'react'
import { 
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CalendarIcon,
  DocumentArrowDownIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Badge from '@/shared/components/common/Badge'

const ReportsManagement = () => {
  const [dateRange, setDateRange] = useState('month')
  const [reportType, setReportType] = useState('sales')

  // Sample data
  const salesData = [
    { month: 'T1', sales: 2400000, orders: 120, users: 45 },
    { month: 'T2', sales: 2800000, orders: 145, users: 52 },
    { month: 'T3', sales: 3200000, orders: 168, users: 61 },
    { month: 'T4', sales: 2900000, orders: 152, users: 58 },
    { month: 'T5', sales: 3500000, orders: 180, users: 68 },
    { month: 'T6', sales: 3800000, orders: 195, users: 72 },
  ]

  const productData = [
    { name: 'Phân bón', value: 35, color: '#10b981' },
    { name: 'Thuốc BVTV', value: 25, color: '#3b82f6' },
    { name: 'Hạt giống', value: 20, color: '#f59e0b' },
    { name: 'Thiết bị', value: 15, color: '#ef4444' },
    { name: 'Khác', value: 5, color: '#8b5cf6' },
  ]

  const topProducts = [
    { id: 1, name: 'Phân bón NPK Đầu Trâu', sales: 450, revenue: 67500000, growth: '+15%' },
    { id: 2, name: 'Thuốc trừ sâu Bio-B', sales: 320, revenue: 27200000, growth: '+8%' },
    { id: 3, name: 'Hạt giống lúa ST25', sales: 280, revenue: 33600000, growth: '+22%' },
    { id: 4, name: 'Phân hữu cơ vi sinh', sales: 210, revenue: 19950000, growth: '+12%' },
    { id: 5, name: 'Máy phun thuốc điện', sales: 8, revenue: 20000000, growth: '+5%' },
  ]

  const stats = [
    { label: 'Tổng doanh thu', value: '18.6B ₫', change: '+18.5%', trend: 'up', icon: ChartBarIcon },
    { label: 'Đơn hàng', value: '960', change: '+12.3%', trend: 'up', icon: ArrowTrendingUpIcon },
    { label: 'Khách hàng mới', value: '356', change: '+8.7%', trend: 'up', icon: ArrowTrendingUpIcon },
    { label: 'Tỷ lệ hoàn trả', value: '2.1%', change: '-0.5%', trend: 'down', icon: ArrowTrendingDownIcon },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Báo Cáo & Phân Tích</h1>
          <p className="text-gray-500 text-sm mt-1">Thống kê và phân tích dữ liệu hệ thống</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <FunnelIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="pl-10 pr-8 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none appearance-none bg-white"
            >
              <option value="week">7 ngày qua</option>
              <option value="month">Tháng này</option>
              <option value="quarter">Quý này</option>
              <option value="year">Năm nay</option>
            </select>
          </div>
          <button className="px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors flex items-center gap-2">
            <DocumentArrowDownIcon className="w-5 h-5" />
            Xuất Excel
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <Badge color={stat.trend === 'up' ? 'success' : 'danger'}>
                  {stat.change}
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          )
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Doanh Thu Theo Tháng</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => value.toLocaleString('vi-VN')} />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={2} name="Doanh thu (₫)" />
              <Line type="monotone" dataKey="orders" stroke="#3b82f6" strokeWidth={2} name="Đơn hàng" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Product Distribution */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Phân Bố Sản Phẩm</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={productData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {productData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900">Sản Phẩm Bán Chạy</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {['STT', 'Tên sản phẩm', 'Số lượng bán', 'Doanh thu', 'Tăng trưởng'].map(header => (
                  <th key={header} className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {topProducts.map((product, idx) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-gray-900">#{idx + 1}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-gray-900">{product.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{product.sales}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-emerald-600">{product.revenue.toLocaleString('vi-VN')}₫</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge color="success">{product.growth}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ReportsManagement


