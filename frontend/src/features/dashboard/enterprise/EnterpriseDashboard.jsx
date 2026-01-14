import React, { useState } from 'react'
import { 
  PlusIcon, 
  TrashIcon, 
  PencilSquareIcon, 
  ArchiveBoxIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  UsersIcon,
  ArrowTrendingUpIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import PageTransition from '@/shared/components/common/PageTransition'
import Badge from '@/shared/components/common/Badge'
import { useToast } from '@/shared/hooks/useToast'
import Modal from '@/shared/components/common/Modal'

const EnterpriseDashboard = () => {
  const { showSuccess, showError } = useToast()
  const [products, setProducts] = useState([
    { id: 1, name: 'Phân bón NPK Đầu Trâu', sku: 'AGRI-100X', stock: 1200, sold: 450, status: 'Còn hàng', price: 25000 },
    { id: 2, name: 'Thuốc trừ sâu Bio-B', sku: 'AGRI-200X', stock: 0, sold: 120, status: 'Hết hàng', price: 45000 },
    { id: 3, name: 'Hạt giống lúa ST25', sku: 'AGRI-300X', stock: 500, sold: 320, status: 'Còn hàng', price: 85000 },
    { id: 4, name: 'Phân hữu cơ vi sinh', sku: 'AGRI-400X', stock: 800, sold: 210, status: 'Còn hàng', price: 18000 },
  ])
  const [editingProduct, setEditingProduct] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const stats = [
    { label: 'Tổng Doanh Thu', value: '28.5M ₫', icon: CurrencyDollarIcon, color: 'bg-emerald-500', trend: '+12.5%' },
    { label: 'Sản Phẩm', value: products.length.toString(), icon: ShoppingBagIcon, color: 'bg-blue-500', trend: 'Đang bán' },
    { label: 'Khách Hàng', value: '1,240', icon: UsersIcon, color: 'bg-orange-500', trend: '+8.2%' },
    { label: 'Đơn Hàng', value: '342', icon: ArchiveBoxIcon, color: 'bg-purple-500', trend: 'Tháng này' },
  ]

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      setProducts(products.filter(p => p.id !== id))
      showSuccess('Đã xóa sản phẩm thành công!')
    }
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
  }

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200/50">
              <BuildingOfficeIcon className="w-9 h-9 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Bảng Điều Khiển Doanh Nghiệp
              </h1>
              <p className="text-gray-500 text-sm mt-1 font-medium">
                Quản lý sản phẩm, đơn hàng và doanh thu của bạn
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div 
              key={stat.label}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover-lift animate-stagger-1"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
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

        {/* Products Section */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-green-50 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <ShoppingBagIcon className="w-6 h-6 text-emerald-600" />
                Quản Lý Sản Phẩm
              </h2>
              <p className="text-sm text-gray-500 mt-1">Tổng cộng: {products.length} sản phẩm</p>
            </div>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200/50 hover:bg-emerald-700 hover:shadow-xl transition-all duration-200 active:scale-[0.98] flex items-center gap-2 hover:scale-105"
            >
              <PlusIcon className="w-5 h-5" />
              Thêm Sản Phẩm
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Sản phẩm</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">SKU</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">Tồn kho</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">Đã bán</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">Giá</th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Trạng thái</th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.map((p, idx) => (
                  <tr 
                    key={p.id} 
                    className="hover:bg-emerald-50/30 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">{p.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-gray-500">#{p.sku}</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-bold text-gray-700">{p.stock.toLocaleString('vi-VN')} kg/lít</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-bold text-emerald-600">{p.sold.toLocaleString('vi-VN')}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-bold text-gray-900">{p.price.toLocaleString('vi-VN')} ₫</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Badge color={p.stock > 0 ? 'success' : 'danger'} className="text-xs font-bold">
                        {p.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => handleEdit(p)}
                          className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
                          title="Chỉnh sửa"
                        >
                          <PencilSquareIcon className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(p.id)}
                          className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
                          title="Xóa"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Product Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Thêm Sản Phẩm Mới"
      >
        <form className="space-y-5" onSubmit={(e) => {
          e.preventDefault()
          showSuccess('Đã thêm sản phẩm mới thành công!')
          setIsAddModalOpen(false)
        }}>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Tên sản phẩm <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              required 
              placeholder="Nhập tên sản phẩm"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" 
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Mã SKU <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              required 
              placeholder="AGRI-XXX"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" 
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Tồn kho (kg/lít) <span className="text-red-500">*</span>
              </label>
              <input 
                type="number" 
                required 
                min="0"
                placeholder="0"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Giá (₫) <span className="text-red-500">*</span>
              </label>
              <input 
                type="number" 
                required 
                min="0"
                placeholder="0"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" 
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Mô tả sản phẩm
            </label>
            <textarea 
              rows="3"
              placeholder="Nhập mô tả về sản phẩm..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none" 
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button 
              type="button" 
              onClick={() => setIsAddModalOpen(false)} 
              className="flex-1 px-5 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all duration-200 active:scale-[0.98]"
            >
              Hủy
            </button>
            <button 
              type="submit" 
              className="flex-1 px-5 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-emerald-200/50 hover:shadow-xl"
            >
              Thêm Sản Phẩm
            </button>
          </div>
        </form>
      </Modal>
    </PageTransition>
  )
}

export default EnterpriseDashboard

