import { Outlet } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      {/* Navbar luôn nằm trên cùng */}
      <Navbar />
      
      {/* Main content - padding top để tránh navbar */}
      <main className="pt-20 flex-grow w-full">
        <Outlet />
      </main>
      
      <footer className="bg-white border-t border-gray-100 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm font-medium">
          © 2026 AgriSmart - Dự án Nghiên cứu Khoa học Nông nghiệp Việt Nam.
        </div>
      </footer>
    </div>
  )
}

export default App
