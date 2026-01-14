import { createBrowserRouter, Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ShoppingBagIcon, BookOpenIcon, SparklesIcon } from '@heroicons/react/24/outline'
import App from '../App'
import LoadingSpinner from '@/shared/components/common/LoadingSpinner'

// Lazy load all pages for code splitting
const LoginPage = lazy(() => import('@/features/auth/pages/LoginPage'))
const RegisterPage = lazy(() => import('@/features/auth/pages/RegisterPage'))
const MarketplacePage = lazy(() => import('@/features/marketplace/pages/MarketplacePage'))
const CommunityPage = lazy(() => import('@/features/community/pages/CommunityPage'))
const FarmingLogPage = lazy(() => import('@/features/farming-log/pages/FarmingLogPage'))
const ProductDetailPage = lazy(() => import('@/features/marketplace/pages/ProductDetailPage'))
const AdminDashboard = lazy(() => import('@/features/dashboard/admin/AdminDashboard'))
const UsersManagement = lazy(() => import('@/features/dashboard/admin/pages/UsersManagement'))
const ProductsManagement = lazy(() => import('@/features/dashboard/admin/pages/ProductsManagement'))
const PostsManagement = lazy(() => import('@/features/dashboard/admin/pages/PostsManagement'))
const OrdersManagement = lazy(() => import('@/features/dashboard/admin/pages/OrdersManagement'))
const CategoriesManagement = lazy(() => import('@/features/dashboard/admin/pages/CategoriesManagement'))
const SettingsManagement = lazy(() => import('@/features/dashboard/admin/pages/SettingsManagement'))
const ReportsManagement = lazy(() => import('@/features/dashboard/admin/pages/ReportsManagement'))
const ReviewsManagement = lazy(() => import('@/features/dashboard/admin/pages/ReviewsManagement'))
const NotificationsManagement = lazy(() => import('@/features/dashboard/admin/pages/NotificationsManagement'))
const EnterpriseDashboard = lazy(() => import('@/features/dashboard/enterprise/EnterpriseDashboard'))
const FarmerDashboard = lazy(() => import('@/features/dashboard/farmer/FarmerDashboard'))
const EngineerDashboard = lazy(() => import('@/features/dashboard/engineer/EngineerDashboard'))
const ConsumerDashboard = lazy(() => import('@/features/dashboard/consumer/ConsumerDashboard'))
const CartPage = lazy(() => import('@/features/marketplace/pages/CartPage'))
const CheckoutPage = lazy(() => import('@/features/marketplace/pages/CheckoutPage'))
const AIAnalysisPage = lazy(() => import('@/features/ai-service/pages/AIAnalysisPage'))
const AIChatPage = lazy(() => import('@/features/ai-service/pages/AIChatPage'))
const OrdersPage = lazy(() => import('@/features/orders/pages/OrdersPage'))
const FarmingLogNewPage = lazy(() => import('@/features/farming-log/pages/FarmingLogNewPage'))
const CheckoutSuccessPage = lazy(() => import('@/features/marketplace/pages/CheckoutSuccessPage'))
const ProfilePage = lazy(() => import('@/features/profile/pages/ProfilePage'))
const AboutPage = lazy(() => import('@/features/about/pages/AboutPage'))
const StatisticsPage = lazy(() => import('@/features/statistics/pages/StatisticsPage'))

// Wrapper component for Suspense
const LazyWrapper = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
)

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
      { path: 'marketplace', element: <LazyWrapper><MarketplacePage /></LazyWrapper> },
      { path: 'marketplace/:id', element: <LazyWrapper><ProductDetailPage /></LazyWrapper> },
      { path: 'community', element: <LazyWrapper><CommunityPage /></LazyWrapper> },
      { path: 'farming-log', element: <LazyWrapper><FarmingLogPage /></LazyWrapper> },
      { path: 'dashboard', element: <LazyWrapper><AdminDashboard /></LazyWrapper> },
      { path: 'dashboard/users', element: <LazyWrapper><UsersManagement /></LazyWrapper> },
      { path: 'dashboard/products', element: <LazyWrapper><ProductsManagement /></LazyWrapper> },
      { path: 'dashboard/posts', element: <LazyWrapper><PostsManagement /></LazyWrapper> },
      { path: 'dashboard/orders', element: <LazyWrapper><OrdersManagement /></LazyWrapper> },
      { path: 'dashboard/categories', element: <LazyWrapper><CategoriesManagement /></LazyWrapper> },
      { path: 'dashboard/settings', element: <LazyWrapper><SettingsManagement /></LazyWrapper> },
      { path: 'dashboard/reports', element: <LazyWrapper><ReportsManagement /></LazyWrapper> },
      { path: 'dashboard/reviews', element: <LazyWrapper><ReviewsManagement /></LazyWrapper> },
      { path: 'dashboard/notifications', element: <LazyWrapper><NotificationsManagement /></LazyWrapper> },
      { path: 'dashboard/enterprise', element: <LazyWrapper><EnterpriseDashboard /></LazyWrapper> },
      { path: 'dashboard/farmer', element: <LazyWrapper><FarmerDashboard /></LazyWrapper> },
      { path: 'dashboard/engineer', element: <LazyWrapper><EngineerDashboard /></LazyWrapper> },
      { path: 'dashboard/consumer', element: <LazyWrapper><ConsumerDashboard /></LazyWrapper> },
      { path: 'cart', element: <LazyWrapper><CartPage /></LazyWrapper> },
      { path: 'checkout', element: <LazyWrapper><CheckoutPage /></LazyWrapper> },
      { path: 'checkout/success', element: <LazyWrapper><CheckoutSuccessPage /></LazyWrapper> },
      { path: 'orders', element: <LazyWrapper><OrdersPage /></LazyWrapper> },
      { path: 'farming-log/new', element: <LazyWrapper><FarmingLogNewPage /></LazyWrapper> },
      { path: 'profile', element: <LazyWrapper><ProfilePage /></LazyWrapper> },
      { path: 'about', element: <LazyWrapper><AboutPage /></LazyWrapper> },
      { path: 'statistics', element: <LazyWrapper><StatisticsPage /></LazyWrapper> },
      { path: 'ai-diagnosis', element: <LazyWrapper><AIAnalysisPage /></LazyWrapper> },
      { path: 'ai-chat', element: <LazyWrapper><AIChatPage /></LazyWrapper> },
    ],
  },
  { path: '/login', element: <LazyWrapper><LoginPage /></LazyWrapper> },
  { path: '/register', element: <LazyWrapper><RegisterPage /></LazyWrapper> },
])

export default router
