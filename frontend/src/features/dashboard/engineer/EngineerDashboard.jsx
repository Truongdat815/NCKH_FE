import React from 'react'
import { Link } from 'react-router-dom'
import { 
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CheckCircleIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid'
import { QrCodeIcon, CalendarIcon } from '@heroicons/react/24/outline'
import PageTransition from '../../../components/common/PageTransition'

const EngineerDashboard = () => {
  const stats = [
    { label: 'Tổng câu hỏi đã trả lời', value: '245', icon: ChatBubbleLeftRightIcon, color: 'bg-blue-500', trend: '+12 tuần này' },
    { label: 'Doanh thu tháng', value: '1.225.000₫', icon: CurrencyDollarIcon, color: 'bg-emerald-500', trend: '+18%' },
    { label: 'Đánh giá trung bình', value: '4.9/5.0', icon: SparklesIcon, color: 'bg-yellow-500', trend: 'Xuất sắc' },
    { label: 'Câu hỏi đang chờ', value: '8', icon: ClockIcon, color: 'bg-orange-500', trend: 'Cần xử lý' },
  ]

  const recentQuestions = [
    {
      id: 1,
      farmer: 'Lê Văn Tèo',
      question: 'Lúa nhà em đang bị vàng lá, có phải bệnh đạo ôn không?',
      category: 'Bệnh cây trồng',
      time: '2 giờ trước',
      status: 'Đã trả lời',
      reward: '500₫',
      image: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 2,
      farmer: 'Nguyễn Thị Mai',
      question: 'Cà chua bị héo đột ngột, lá vẫn xanh, nguyên nhân là gì?',
      category: 'Chẩn đoán',
      time: '5 giờ trước',
      status: 'Đang xử lý',
      reward: '500₫',
      image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 3,
      farmer: 'Trần Văn Đức',
      question: 'Phân bón NPK nào phù hợp cho giai đoạn đẻ nhánh của lúa?',
      category: 'Tư vấn phân bón',
      time: '1 ngày trước',
      status: 'Đã trả lời',
      reward: '500₫',
    },
    {
      id: 4,
      farmer: 'Phạm Thị Hoa',
      question: 'Cách phòng trừ sâu cuốn lá hiệu quả nhất?',
      category: 'Sâu bệnh',
      time: '2 ngày trước',
      status: 'Đã trả lời',
      reward: '500₫',
    },
  ]

  const earnings = [
    { month: 'Tháng 1/2026', amount: '1.225.000₫', questions: 245, avgRating: 4.9 },
    { month: 'Tháng 12/2025', amount: '980.000₫', questions: 196, avgRating: 4.8 },
    { month: 'Tháng 11/2025', amount: '1.150.000₫', questions: 230, avgRating: 4.9 },
  ]

  const expertise = [
    { topic: 'Bệnh cây lúa', solved: 120, rating: 4.9 },
    { topic: 'Phân bón & Dinh dưỡng', solved: 85, rating: 4.8 },
    { topic: 'Thuốc bảo vệ thực vật', solved: 40, rating: 5.0 },
  ]

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">Dashboard Kỹ Sư</h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider text-xs mt-2">Tư vấn & Hỗ trợ Nông dân</p>
          </div>
          <Link to="/community" className="px-6 py-3 bg-emerald-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-emerald-100 hover:scale-105 transition-all flex items-center gap-2">
            <ChatBubbleLeftRightIcon className="w-5 h-5" /> Trả lời câu hỏi
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{stat.value}</h3>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Questions */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h3 className="text-xl font-bold text-gray-900">Câu Hỏi Gần Đây</h3>
              <Link to="/community" className="text-sm font-bold text-emerald-600 hover:underline self-start sm:self-auto">Xem tất cả →</Link>
            </div>
            <div className="space-y-4">
              {recentQuestions.map((q) => (
                <div key={q.id} className="bg-gray-50/50 p-6 rounded-3xl border border-transparent hover:border-emerald-200 transition-all cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 font-bold">
                        {q.farmer.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{q.farmer}</h4>
                        <p className="text-xs text-gray-400 font-bold">{q.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">{q.reward}</span>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        q.status === 'Đã trả lời' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {q.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium mb-3 group-hover:text-emerald-600 transition-colors">{q.question}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-gray-400 bg-white px-3 py-1 rounded-full">{q.category}</span>
                    {q.image && (
                      <img src={q.image} alt="question" className="w-16 h-16 rounded-xl object-cover border-2 border-white shadow-sm" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Earnings & Expertise */}
          <div className="space-y-4">
            {/* Wallet */}
            <div className="bg-gradient-to-br from-emerald-900 to-green-800 p-6 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-bold text-emerald-200 uppercase tracking-widest mb-2">Ví AgriSmart</p>
                    <h3 className="text-3xl font-bold">1.225.000₫</h3>
                  </div>
                  <div className="text-4xl">💰</div>
                </div>
                <button className="w-full py-3 bg-white text-emerald-900 rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg hover:bg-emerald-50 transition-all">
                  Rút tiền
                </button>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="text-base font-bold mb-4">Lĩnh Vực Chuyên Môn</h4>
              <div className="space-y-4">
                {expertise.map((exp, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-gray-900">{exp.topic}</span>
                      <span className="text-xs font-bold text-emerald-600">{exp.rating}⭐</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(exp.solved / 150) * 100}%` }}></div>
                      </div>
                      <span className="text-xs font-bold text-gray-500">{exp.solved} câu</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Earnings */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="text-base font-bold mb-4">Doanh Thu 3 Tháng Gần Đây</h4>
              <div className="space-y-4">
                {earnings.map((earning, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{earning.month}</p>
                      <p className="text-lg font-bold text-gray-900 mt-1">{earning.amount}</p>
                      <p className="text-xs text-gray-500 font-medium">{earning.questions} câu • {earning.avgRating}⭐</p>
                    </div>
                    <div className="text-2xl">📈</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default EngineerDashboard

