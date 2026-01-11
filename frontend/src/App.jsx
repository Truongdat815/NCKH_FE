import { Outlet } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      {/* Navbar luôn nằm trên cùng */}
      <Navbar />
      
      {/* main này sẽ có padding-top là 96px để né cái Navbar 80px */}
      <main className="pt-24 flex-grow w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
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
