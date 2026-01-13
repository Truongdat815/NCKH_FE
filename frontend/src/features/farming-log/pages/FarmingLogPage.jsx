import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  BeakerIcon, CloudIcon, BugAntIcon, BoltIcon, CalendarIcon, MapPinIcon, Square3Stack3DIcon, SunIcon, ExclamationTriangleIcon,
  ChartBarIcon, TableCellsIcon, CalendarDaysIcon
} from '@heroicons/react/24/solid'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import PageTransition from '@/shared/components/common/PageTransition'
import { useToast } from '@/shared/hooks/useToast'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const FarmingLogPage = () => {
  const { showSuccess } = useToast()
  const [viewMode, setViewMode] = useState('timeline') // timeline, calendar, analytics
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const stats = [
    { label: 'Độ ẩm đất', value: '65%', icon: CloudIcon, color: 'bg-blue-50 text-blue-600' },
    { label: 'Nhiệt độ', value: '28°C', icon: SunIcon, color: 'bg-orange-50 text-orange-600' },
    { label: 'Dịch bệnh', value: 'Thấp', icon: ExclamationTriangleIcon, color: 'bg-emerald-50 text-emerald-600' },
  ]

  const currentSeason = {
    id: 'S001',
    name: 'Vụ Lúa ST25 - Đông Xuân 2026',
    crop: 'Lúa ST25',
    startDate: '01/12/2025',
    location: 'Tiền Giang',
    area: '2.5 Hecta',
    status: 'Đang làm đòng',
  }

  const farmingActivities = [
    { id: 1, date: new Date(2026, 0, 15), dateStr: '15/01/2026', title: 'Bón phân thúc đợt 2 bằng NPK Đầu Trâu', type: 'Bón phân', icon: BeakerIcon, color: 'bg-emerald-500', details: 'Sử dụng NPK 16-16-8, liều lượng 20kg/sào' },
    { id: 2, date: new Date(2026, 0, 5), dateStr: '05/01/2026', title: 'Phun ngừa đạo ôn lá theo tư vấn kỹ sư', type: 'Cảnh báo', icon: BugAntIcon, color: 'bg-red-500', details: 'Phun thuốc Tricyclazole, phủ đều toàn bộ ruộng' },
    { id: 3, date: new Date(2026, 0, 1), dateStr: '01/01/2026', title: 'Khởi tạo dữ liệu vụ mùa AgriSmart', type: 'Hệ thống', icon: BoltIcon, color: 'bg-blue-500', details: 'Ghi nhận bởi hệ thống cảm biến & nông dân' },
    { id: 4, date: new Date(2025, 11, 28), dateStr: '28/12/2025', title: 'Bón phân lót đợt 1', type: 'Bón phân', icon: BeakerIcon, color: 'bg-emerald-500', details: 'Phân hữu cơ vi sinh, 500kg/ha' },
    { id: 5, date: new Date(2025, 11, 25), dateStr: '25/12/2025', title: 'Gieo mạ', type: 'Khởi tạo', icon: BoltIcon, color: 'bg-yellow-500', details: 'Hạt giống ST25 F1, mật độ 150kg/ha' },
  ]

  // Analytics data
  const analyticsData = [
    { month: 'T12', activities: 8, expenses: 3500000, yield: 85 },
    { month: 'T1', activities: 12, expenses: 5200000, yield: 92 },
    { month: 'T2', activities: 15, expenses: 6800000, yield: 95 },
  ]

  const activityTypesData = [
    { type: 'Bón phân', count: 8, color: '#10b981' },
    { type: 'Tưới nước', count: 15, color: '#3b82f6' },
    { type: 'Phun thuốc', count: 5, color: '#ef4444' },
    { type: 'Thu hoạch', count: 2, color: '#f59e0b' },
  ]

  // Export function
  const handleExport = (format) => {
    const csvContent = [
      ['Ngày', 'Loại', 'Hoạt động', 'Chi tiết'].join(','),
      ...farmingActivities.map(a => [
        a.dateStr,
        a.type,
        a.title,
        a.details
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `nhat-ky-canh-tac-${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    showSuccess(`Đã xuất file ${format.toUpperCase()} thành công!`)
  }

  // Simple calendar generator
  const getDaysInMonth = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const days = []
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const activity = farmingActivities.find(a => 
        a.date.getDate() === day && 
        a.date.getMonth() === month && 
        a.date.getFullYear() === year
      )
      days.push({ day, date, activity })
    }
    
    return days
  }

  const calendarDays = getDaysInMonth(selectedMonth, selectedYear)

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-2">
            <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-50 px-3 py-1.5 rounded-full">Digital Farming 4.0</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">{currentSeason.name}</h1>
          </div>
          <Link
            to="/farming-log/new"
            className="group px-6 py-3 bg-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-200/50 hover:bg-emerald-700 hover:shadow-2xl transition-all duration-200 active:scale-[0.98] uppercase tracking-wider text-sm self-start sm:self-auto relative overflow-hidden inline-flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>+</span> Tạo Nhật Ký Mới
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </Link>
        </div>

        {/* Overview Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <Square3Stack3DIcon className="w-4 h-4 text-emerald-500" /> Chi tiết vụ mùa
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center"><CalendarIcon className="w-5 h-5 text-gray-400" /></div>
                <div><p className="text-xs font-bold text-gray-400 uppercase">Ngày bắt đầu</p><p className="font-bold text-gray-900">{currentSeason.startDate}</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center"><MapPinIcon className="w-5 h-5 text-gray-400" /></div>
                <div><p className="text-xs font-bold text-gray-400 uppercase">Vị trí</p><p className="font-bold text-gray-900">{currentSeason.location}</p></div>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map(s => {
              const IconComponent = s.icon
              return (
                <div key={s.label} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center items-center text-center space-y-3 hover:shadow-lg transition-all duration-200 group">
                  <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{s.label}</div>
                    <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline View */}
        {viewMode === 'timeline' && (
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50/50 rounded-bl-[150px] -mr-24 -mt-24 pointer-events-none"></div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3 uppercase tracking-tight border-b border-gray-100 pb-4">
              <span>Dòng thời gian canh tác</span>
              <span className="h-px bg-gray-100 flex-1"></span>
            </h3>
            
            <div className="space-y-8 relative">
              <div className="absolute left-[23px] top-4 bottom-4 w-1 bg-gradient-to-b from-emerald-500 via-emerald-200 to-gray-50 rounded-full"></div>
              
              {farmingActivities
                .sort((a, b) => b.date - a.date)
                .map((item, idx) => {
                  const IconComponent = item.icon
                  return (
                    <div key={item.id} className="relative flex gap-6 items-start group">
                      <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-200`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1 bg-gray-50/50 p-6 rounded-3xl border border-transparent hover:border-emerald-200 hover:bg-white transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{item.type}</span>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.dateStr}</span>
                        </div>
                        <h4 className="text-base font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed italic opacity-80">{item.details}</p>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        )}

        {/* Calendar View */}
        {viewMode === 'calendar' && (
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight">Lịch canh tác</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (selectedMonth === 0) {
                      setSelectedMonth(11)
                      setSelectedYear(selectedYear - 1)
                    } else {
                      setSelectedMonth(selectedMonth - 1)
                    }
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  ←
                </button>
                <span className="px-4 py-2 font-bold text-gray-900">
                  {new Date(selectedYear, selectedMonth).toLocaleDateString('vi-VN', { month: 'long', year: 'numeric' })}
                </span>
                <button
                  onClick={() => {
                    if (selectedMonth === 11) {
                      setSelectedMonth(0)
                      setSelectedYear(selectedYear + 1)
                    } else {
                      setSelectedMonth(selectedMonth + 1)
                    }
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  →
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map(day => (
                <div key={day} className="text-center text-xs font-bold text-gray-400 py-2">{day}</div>
              ))}
              {calendarDays.map((dayData, idx) => (
                <div
                  key={idx}
                  className={`min-h-[60px] p-2 rounded-xl border-2 transition-all ${
                    dayData === null
                      ? 'border-transparent'
                      : dayData.activity
                      ? 'border-emerald-200 bg-emerald-50 hover:bg-emerald-100'
                      : 'border-gray-100 hover:bg-gray-50'
                  }`}
                >
                  {dayData && (
                    <>
                      <div className="text-sm font-bold text-gray-900 mb-1">{dayData.day}</div>
                      {dayData.activity && (
                        <div className="w-full h-1.5 bg-emerald-500 rounded-full"></div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics View */}
        {viewMode === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Số hoạt động theo tháng</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="activities" stroke="#10b981" strokeWidth={2} name="Hoạt động" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Phân loại hoạt động</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={activityTypesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#10b981" name="Số lượng" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Tổng quan hoạt động</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Tổng hoạt động', value: farmingActivities.length, icon: TableCellsIcon, color: 'bg-blue-50 text-blue-600' },
                  { label: 'Chi phí ước tính', value: '15.500.000đ', icon: ChartBarIcon, color: 'bg-orange-50 text-orange-600' },
                  { label: 'Năng suất dự kiến', value: '95%', icon: SunIcon, color: 'bg-emerald-50 text-emerald-600' },
                ].map((stat, idx) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={idx} className="p-4 bg-gray-50 rounded-2xl flex items-center gap-4">
                      <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase">{stat.label}</p>
                        <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  )
}

export default FarmingLogPage
