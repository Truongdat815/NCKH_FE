import { createBrowserRouter, Link } from 'react-router-dom'
import { ShoppingBagIcon, BookOpenIcon, SparklesIcon } from '@heroicons/react/24/outline'
import App from '../App'
import LoginPage from '../features/auth/pages/LoginPage'
import RegisterPage from '../features/auth/pages/RegisterPage'
import MarketplacePage from '../features/marketplace/pages/MarketplacePage'
import CommunityPage from '../features/community/pages/CommunityPage'
import FarmingLogPage from '../features/farming-log/pages/FarmingLogPage'
import ProductDetailPage from '../features/marketplace/pages/ProductDetailPage'
import AdminDashboard from '../features/dashboard/admin/AdminDashboard'
import EnterpriseDashboard from '../features/dashboard/enterprise/EnterpriseDashboard'
import FarmerDashboard from '../features/dashboard/farmer/FarmerDashboard'
import EngineerDashboard from '../features/dashboard/engineer/EngineerDashboard'
import ConsumerDashboard from '../features/dashboard/consumer/ConsumerDashboard'
import CartPage from '../features/marketplace/pages/CartPage'
import CheckoutPage from '../features/marketplace/pages/CheckoutPage'
import AIAnalysisPage from '../features/ai-service/pages/AIAnalysisPage'
import AIChatPage from '../features/ai-service/pages/AIChatPage'
import OrdersPage from '../features/orders/pages/OrdersPage'
import FarmingLogNewPage from '../features/farming-log/pages/FarmingLogNewPage'
import CheckoutSuccessPage from '../features/marketplace/pages/CheckoutSuccessPage'
import ProfilePage from '../features/profile/pages/ProfilePage'
import AboutPage from '../features/about/pages/AboutPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
            element: (
              <div className="flex flex-col space-y-16">
                {/* HERO SECTION */}
                <section className="relative h-[70vh] -mt-16 rounded-b-[48px] sm:rounded-b-[60px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover animate-float" alt="hero" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 flex items-center px-12">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5 animate-fade-in-up">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight animate-scale-in-center">AGRISMART 2026</h1>
                    <p className="text-lg sm:text-xl text-white/90 max-w-xl font-medium animate-slide-in-right" style={{ animationDelay: '0.2s', opacity: 0 }}>Hệ sinh thái số cho Nông nghiệp Việt Nam hiện đại.</p>
                    <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
                      <Link to="/marketplace" className="group px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all duration-300 text-center shadow-xl hover:shadow-2xl hover:shadow-emerald-500/50 active:scale-[0.98] hover:-translate-y-1 relative overflow-hidden">
                        <span className="relative z-10">KHÁM PHÁ</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                      <Link to="/community" className="px-8 py-3 bg-white/95 text-emerald-600 font-bold rounded-xl hover:bg-white transition-all duration-300 text-center shadow-xl hover:shadow-2xl active:scale-[0.98] hover:-translate-y-1 hover:scale-105">HỎI ĐÁP</Link>
                    </div>
                  </div>
              </div>
            </section>

                {/* QUICK LINKS */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { t: 'Sàn Vật Tư', icon: ShoppingBagIcon, c: 'bg-emerald-50 text-emerald-600', link: '/marketplace', delay: '0.1s' },
                      { t: 'Nhật Ký Số', icon: BookOpenIcon, c: 'bg-blue-50 text-blue-600', link: '/farming-log', delay: '0.2s' },
                      { t: 'Chẩn Đoán AI', icon: SparklesIcon, c: 'bg-orange-50 text-orange-600', link: '/ai-chat', delay: '0.3s' },
                    ].map((f, idx) => {
                      const IconComponent = f.icon
                      return (
                        <Link 
                          key={f.t} 
                          to={f.link} 
                          className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-center group hover-lift animate-stagger-1"
                          style={{ animationDelay: f.delay }}
                        >
                          <div className={`w-16 h-16 ${f.c} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300`}>
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">{f.t}</h3>
                        </Link>
                      )
                    })}
                  </div>
                </div>
          </div>
        ),
      },
      { path: 'marketplace', element: <MarketplacePage /> },
      { path: 'marketplace/:id', element: <ProductDetailPage /> },
      { path: 'community', element: <CommunityPage /> },
      { path: 'farming-log', element: <FarmingLogPage /> },
      { path: 'dashboard', element: <AdminDashboard /> },
      { path: 'dashboard/enterprise', element: <EnterpriseDashboard /> },
      { path: 'dashboard/farmer', element: <FarmerDashboard /> },
      { path: 'dashboard/engineer', element: <EngineerDashboard /> },
      { path: 'dashboard/consumer', element: <ConsumerDashboard /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'checkout/success', element: <CheckoutSuccessPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'farming-log/new', element: <FarmingLogNewPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'ai-diagnosis', element: <AIAnalysisPage /> },
      { path: 'ai-chat', element: <AIChatPage /> },
    ],
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
])

export default router
