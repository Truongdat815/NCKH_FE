import React, { useState } from 'react'
import { 
  PlusIcon, 
  PencilSquareIcon, 
  TrashIcon, 
  MagnifyingGlassIcon,
  TagIcon,
  FolderIcon
} from '@heroicons/react/24/outline'
import { useToast } from '@/shared/hooks/useToast'
import Modal from '@/shared/components/common/Modal'
import Badge from '@/shared/components/common/Badge'

const CategoriesManagement = () => {
  const { showSuccess } = useToast()
  const [searchTerm, setSearchTerm] = useState('')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState(null)
  
  const [categories, setCategories] = useState([
    { id: 1, name: 'Phân bón', slug: 'phan-bon', description: 'Các loại phân bón hóa học và hữu cơ', productCount: 45, status: 'active', createdAt: '2025-01-01' },
    { id: 2, name: 'Thuốc BVTV', slug: 'thuoc-bvtv', description: 'Thuốc bảo vệ thực vật', productCount: 32, status: 'active', createdAt: '2025-01-02' },
    { id: 3, name: 'Hạt giống', slug: 'hat-giong', description: 'Hạt giống các loại cây trồng', productCount: 28, status: 'active', createdAt: '2025-01-03' },
    { id: 4, name: 'Thiết bị', slug: 'thiet-bi', description: 'Máy móc và thiết bị nông nghiệp', productCount: 15, status: 'active', createdAt: '2025-01-04' },
    { id: 5, name: 'Vật tư khác', slug: 'vat-tu-khac', description: 'Các vật tư nông nghiệp khác', productCount: 8, status: 'inactive', createdAt: '2025-01-05' },
  ])

  const filteredCategories = categories.filter(cat => {
    return cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           cat.description?.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc muốn xóa danh mục này?')) {
      setCategories(categories.filter(c => c.id !== id))
      showSuccess('Đã xóa danh mục thành công!')
    }
  }

  const handleEdit = (category) => {
    setEditingCategory(category)
    setIsAddModalOpen(true)
  }

  const handleAdd = () => {
    setEditingCategory(null)
    setIsAddModalOpen(true)
  }

  const handleSave = (formData) => {
    if (editingCategory) {
      setCategories(categories.map(c => c.id === editingCategory.id ? { ...c, ...formData } : c))
      showSuccess('Đã cập nhật danh mục thành công!')
    } else {
      const newCategory = {
        id: categories.length + 1,
        ...formData,
        slug: formData.name.toLowerCase().replace(/\s+/g, '-'),
        productCount: 0,
        createdAt: new Date().toISOString().split('T')[0],
        status: 'active',
      }
      setCategories([...categories, newCategory])
      showSuccess('Đã thêm danh mục mới!')
    }
    setIsAddModalOpen(false)
    setEditingCategory(null)
  }

  const toggleCategoryStatus = (id) => {
    setCategories(categories.map(c => 
      c.id === id ? { ...c, status: c.status === 'active' ? 'inactive' : 'active' } : c
    ))
    showSuccess('Đã cập nhật trạng thái danh mục!')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Danh Mục</h1>
          <p className="text-gray-500 text-sm mt-1">Tổng cộng: {filteredCategories.length} danh mục</p>
        </div>
        <button
          onClick={handleAdd}
          className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all flex items-center gap-2"
        >
          <PlusIcon className="w-5 h-5" />
          Thêm Danh Mục
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm danh mục..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map(category => (
          <div key={category.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all p-6 group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <TagIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                  <p className="text-xs text-gray-500 font-mono">{category.slug}</p>
                </div>
              </div>
              <button
                onClick={() => toggleCategoryStatus(category.id)}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${
                  category.status === 'active' 
                    ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.status === 'active' ? 'Hoạt động' : 'Vô hiệu'}
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">{category.description}</p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FolderIcon className="w-4 h-4" />
                <span className="font-semibold">{category.productCount} sản phẩm</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(category)}
                  className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                  title="Sửa"
                >
                  <PencilSquareIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                  title="Xóa"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
          <TagIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 font-medium">Không tìm thấy danh mục nào</p>
        </div>
      )}

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false)
          setEditingCategory(null)
        }}
        title={editingCategory ? 'Sửa Danh Mục' : 'Thêm Danh Mục Mới'}
      >
        <CategoryForm
          category={editingCategory}
          onSave={handleSave}
          onCancel={() => {
            setIsAddModalOpen(false)
            setEditingCategory(null)
          }}
        />
      </Modal>
    </div>
  )
}

const CategoryForm = ({ category, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: category?.name || '',
    description: category?.description || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Tên danh mục *</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Mô tả</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
        />
      </div>
      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
        >
          Hủy
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors"
        >
          {category ? 'Cập nhật' : 'Thêm mới'}
        </button>
      </div>
    </form>
  )
}

export default CategoriesManagement

