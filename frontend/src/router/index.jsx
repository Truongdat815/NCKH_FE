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
import CartPage from '../features/marketplace/pages/CartPage'
import CheckoutPage from '../features/marketplace/pages/CheckoutPage'
import AIAnalysisPage from '../features/ai-service/pages/AIAnalysisPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: (
          <div className="flex flex-col space-y-20">
            {/* HERO SECTION */}
            <section className="relative h-[80vh] -mt-20 rounded-b-[80px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover" alt="hero" />
              <div className="absolute inset-0 bg-black/50 flex items-center px-12">
                <div className="max-w-4xl space-y-6">
                  <h1 className="text-7xl font-[900] text-white leading-none tracking-tighter">AGRISMART 2026</h1>
                  <p className="text-xl text-white/80 max-w-xl font-medium">Hệ sinh thái số cho Nông nghiệp Việt Nam hiện đại.</p>
                  <div className="flex gap-4 pt-4">
                    <Link to="/marketplace" className="px-10 py-4 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-500 transition-all">KHÁM PHÁ</Link>
                    <Link to="/community" className="px-10 py-4 bg-white text-emerald-600 font-black rounded-2xl hover:bg-gray-100 transition-all">HỎI ĐÁP</Link>
                  </div>
                </div>
              </div>
            </section>

            {/* QUICK LINKS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
              {[
                { t: 'Sàn Vật Tư', i: '🛒', c: 'bg-emerald-50', link: '/marketplace' },
                { t: 'Nhật Ký Số', i: '📜', c: 'bg-blue-50', link: '/farming-log' },
                { t: 'Chẩn Đoán AI', i: '🧠', c: 'bg-orange-50', link: '/ai-diagnosis' },
              ].map(f => (
                <Link key={f.t} to={f.link} className="p-10 rounded-[50px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center">
                  <div className={`w-20 h-20 ${f.c} rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6`}>{f.i}</div>
                  <h3 className="text-xl font-black text-gray-900">{f.t}</h3>
                </Link>
              ))}
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
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'ai-diagnosis', element: <AIAnalysisPage /> },
    ],
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
])

export default router
