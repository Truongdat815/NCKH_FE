import React, { useState } from 'react'
import { PlusIcon, TrashIcon, PencilSquareIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline'
import PageTransition from '@/shared/components/common/PageTransition'
import Badge from '@/shared/components/common/Badge'
import { useToast } from '@/shared/hooks/useToast'
import Modal from '@/shared/components/common/Modal'

const EnterpriseDashboard = () => {
  const { showSuccess, showError } = useToast()
  const [products, setProducts] = useState([
    { id: 1, name: 'Phân bón NPK Đầu Trâu', stock: 1200, sold: 450, status: 'Còn hàng' },
    { id: 2, name: 'Thuốc trừ sâu Bio-B', stock: 0, sold: 120, status: 'Hết hàng' },
    { id: 3, name: 'Hạt giống lúa ST25', stock: 500, sold: 320, status: 'Còn hàng' },
    { id: 4, name: 'Phân hữu cơ vi sinh', stock: 800, sold: 210, status: 'Còn hàng' },
  ])
  const [editingProduct, setEditingProduct] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

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
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight uppercase">Quản Lý Sản Phẩm</h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider text-xs mt-2">Dành cho Doanh Nghiệp</p>
          </div>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200/50 hover:bg-emerald-700 hover:shadow-xl transition-all duration-200 active:scale-[0.98] flex items-center gap-2 self-start sm:self-auto hover:scale-105"
          >
            <PlusIcon className="w-5 h-5" /> THÊM VẬT TƯ
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left">
              <thead className="bg-gradient-to-r from-gray-50 to-emerald-50/30 border-b border-gray-100">
                <tr>
                  {['Sản phẩm', 'Tồn kho', 'Đã bán', 'Trạng thái', 'Hành động'].map((h, idx) => (
                    <th 
                      key={h} 
                      className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400 whitespace-nowrap animate-stagger-1"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {products.map((p, idx) => (
                  <tr 
                    key={p.id} 
                    className="hover:bg-emerald-50/30 transition-all duration-200 animate-stagger-1"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">{p.name}</p>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">SKU: #AGRI-{p.id}00X</p>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-600 whitespace-nowrap">{p.stock} kg/lít</td>
                    <td className="px-6 py-4 font-bold text-emerald-600 whitespace-nowrap">{p.sold}</td>
                    <td className="px-6 py-4">
                      <Badge color={p.stock > 0 ? 'success' : 'danger'}>{p.status}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleEdit(p)}
                          className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-200 active:scale-95"
                        >
                          <PencilSquareIcon className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleDelete(p.id)}
                          className="p-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white hover:scale-110 transition-all duration-200 active:scale-95"
                        >
                          <TrashIcon className="w-5 h-5" />
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
        title="Thêm sản phẩm mới"
      >
        <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault()
          showSuccess('Đã thêm sản phẩm mới!')
          setIsAddModalOpen(false)
        }}>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Tên sản phẩm</label>
            <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Tồn kho</label>
              <input type="number" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Giá</label>
              <input type="number" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <button type="button" onClick={() => setIsAddModalOpen(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">
              Hủy
            </button>
            <button type="submit" className="flex-1 px-4 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors">
              Thêm sản phẩm
            </button>
          </div>
        </form>
      </Modal>
    </PageTransition>
  )
}

export default EnterpriseDashboard

