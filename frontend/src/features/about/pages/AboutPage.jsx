import React from 'react'
import { Link } from 'react-router-dom'
import { 
  SparklesIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import PageTransition from '../../../components/common/PageTransition'

const AboutPage = () => {
  const features = [
    { icon: SparklesIcon, title: 'AI Chẩn Đoán', desc: 'Công nghệ AI tiên tiến phân tích bệnh cây trồng', color: 'bg-emerald-50 text-emerald-600' },
    { icon: UserGroupIcon, title: 'Cộng Đồng', desc: 'Kết nối nông dân và chuyên gia trên toàn quốc', color: 'bg-blue-50 text-blue-600' },
    { icon: ChartBarIcon, title: 'Thống Kê', desc: 'Dữ liệu thời gian thực về thị trường nông sản', color: 'bg-orange-50 text-orange-600' },
    { icon: ShieldCheckIcon, title: 'Bảo Mật', desc: 'Hệ thống bảo mật cao, đảm bảo thông tin người dùng', color: 'bg-purple-50 text-purple-600' },
  ]

  const team = [
    { name: 'Nguyễn Văn A', role: 'CEO & Founder', avatar: 'https://i.pravatar.cc/150?u=ceo' },
    { name: 'Trần Thị B', role: 'CTO', avatar: 'https://i.pravatar.cc/150?u=cto' },
    { name: 'Lê Văn C', role: 'Head of AI', avatar: 'https://i.pravatar.cc/150?u=ai' },
  ]

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Hero */}
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl animate-bounce-in relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-transparent"></div>
            <svg className="w-14 h-14 text-white relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L8 6L10 8L12 6L14 8L16 6L12 2Z" fill="currentColor" opacity="0.9"/>
              <path d="M12 6L8 10L10 12L12 10L14 12L16 10L12 6Z" fill="currentColor" opacity="0.8"/>
              <path d="M12 10L8 14L10 16L12 14L14 16L16 14L12 10Z" fill="currentColor" opacity="0.7"/>
              <line x1="12" y1="16" x2="12" y2="22" stroke="currentColor" strokeWidth="2.5"/>
              <path d="M12 18L9 20L10 22L12 20L14 22L15 20L12 18Z" fill="currentColor" opacity="0.6"/>
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Về AgriSmart
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            AgriSmart là nền tảng số toàn diện cho nông nghiệp Việt Nam, kết nối nông dân, doanh nghiệp và người tiêu dùng trong một hệ sinh thái thông minh.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 sm:p-12 border border-emerald-100 animate-scale-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Sứ Mệnh Của Chúng Tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Hiện Đại Hóa', desc: 'Đưa công nghệ 4.0 vào nông nghiệp Việt Nam' },
              { title: 'Kết Nối', desc: 'Tạo cầu nối giữa nông dân và thị trường' },
              { title: 'Bền Vững', desc: 'Phát triển nông nghiệp bền vững và thân thiện môi trường' },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 animate-stagger-1"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tính Năng Nổi Bật</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover-lift animate-stagger-1 text-center"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Đội Ngũ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 text-center animate-stagger-1"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-emerald-100" />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500 font-bold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-emerald-600 to-green-500 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 relative overflow-hidden animate-fade-in-up">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-bl-full"></div>
          <div className="relative z-10">
            <HeartIcon className="w-16 h-16 mx-auto mb-4 text-emerald-200" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tham Gia Cùng Chúng Tôi</h2>
            <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
              Hãy trở thành một phần của cộng đồng nông nghiệp số lớn nhất Việt Nam
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-[0.98]"
              >
                Đăng ký ngay
              </Link>
              <Link
                to="/community"
                className="px-8 py-3 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-[0.98]"
              >
                Tham gia cộng đồng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default AboutPage

