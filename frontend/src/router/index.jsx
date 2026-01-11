import { createBrowserRouter, Link } from 'react-router-dom'
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
                <section className="relative h-[70vh] -mt-16 rounded-b-[60px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover" alt="hero" />
              <div className="absolute inset-0 bg-black/50 flex items-center px-12">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[900] text-white leading-none tracking-tight">AGRISMART 2026</h1>
                    <p className="text-lg sm:text-xl text-white/90 max-w-xl font-medium">Hệ sinh thái số cho Nông nghiệp Việt Nam hiện đại.</p>
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Link to="/marketplace" className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all duration-200 text-center shadow-lg active:scale-[0.98]">KHÁM PHÁ</Link>
                      <Link to="/community" className="px-8 py-3 bg-white/95 text-emerald-600 font-bold rounded-xl hover:bg-white transition-all duration-200 text-center shadow-lg active:scale-[0.98]">HỎI ĐÁP</Link>
                    </div>
                  </div>
              </div>
            </section>

                {/* QUICK LINKS */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { t: 'Sàn Vật Tư', i: '🛒', c: 'bg-emerald-50', link: '/marketplace' },
                      { t: 'Nhật Ký Số', i: '📜', c: 'bg-blue-50', link: '/farming-log' },
                      { t: 'Chẩn Đoán AI', i: '🧠', c: 'bg-orange-50', link: '/ai-diagnosis' },
                    ].map(f => (
                      <Link key={f.t} to={f.link} className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-200 text-center group">
                        <div className={`w-16 h-16 ${f.c} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>{f.i}</div>
                        <h3 className="text-lg font-[900] text-gray-900">{f.t}</h3>
                      </Link>
                    ))}
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
      { path: 'ai-diagnosis', element: <AIAnalysisPage /> },
      { path: 'ai-chat', element: <AIChatPage /> },
    ],
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
])

export default router
