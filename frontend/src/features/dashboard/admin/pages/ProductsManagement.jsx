import React, { useState } from 'react'
import { 
  PlusIcon, 
  PencilSquareIcon, 
  TrashIcon, 
  MagnifyingGlassIcon,
  FunnelIcon,
  PhotoIcon,
  EyeIcon,
  ArchiveBoxIcon
} from '@heroicons/react/24/outline'
import { useToast } from '@/shared/hooks/useToast'
import Modal from '@/shared/components/common/Modal'
import Badge from '@/shared/components/common/Badge'

const ProductsManagement = () => {
  const { showSuccess, showError } = useToast()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [viewProduct, setViewProduct] = useState(null)
  
  const [products, setProducts] = useState([
    { id: 1, name: 'Phân bón NPK Đầu Trâu', category: 'Phân bón', price: 150000, stock: 1200, sold: 450, status: 'active', image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300', description: 'Phân bón NPK chất lượng cao', supplier: 'Công ty A', createdAt: '2025-01-01' },
    { id: 2, name: 'Thuốc trừ sâu Bio-B', category: 'Thuốc BVTV', price: 85000, stock: 0, sold: 120, status: 'out_of_stock', image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300', description: 'Thuốc trừ sâu sinh học', supplier: 'Công ty B', createdAt: '2025-01-02' },
    { id: 3, name: 'Hạt giống lúa ST25', category: 'Hạt giống', price: 120000, stock: 500, sold: 320, status: 'active', image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300', description: 'Hạt giống lúa chất lượng cao', supplier: 'Công ty C', createdAt: '2025-01-03' },
    { id: 4, name: 'Phân hữu cơ vi sinh', category: 'Phân bón', price: 95000, stock: 800, sold: 210, status: 'active', image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300', description: 'Phân hữu cơ an toàn', supplier: 'Công ty D', createdAt: '2025-01-04' },
    { id: 5, name: 'Máy phun thuốc điện', category: 'Thiết bị', price: 2500000, stock: 15, sold: 8, status: 'active', image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300', description: 'Máy phun thuốc tự động', supplier: 'Công ty E', createdAt: '2025-01-05' },
  ])

  const categories = ['all', 'Phân bón', 'Thuốc BVTV', 'Hạt giống', 'Thiết bị', 'Khác']
  const statuses = ['all', 'active', 'out_of_stock', 'inactive']

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.supplier?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory
    const matchesStatus = filterStatus === 'all' || product.status === filterStatus
    return matchesSearch && matchesCategory && matchesStatus
  })

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      setProducts(products.filter(p => p.id !== id))
      showSuccess('Đã xóa sản phẩm thành công!')
    }
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setIsAddModalOpen(true)
  }

  const handleAdd = () => {
    setEditingProduct(null)
    setIsAddModalOpen(true)
  }

  const handleSave = (formData) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...formData } : p))
      showSuccess('Đã cập nhật sản phẩm thành công!')
    } else {
      const newProduct = {
        id: products.length + 1,
        ...formData,
        sold: 0,
        createdAt: new Date().toISOString().split('T')[0],
        status: formData.stock > 0 ? 'active' : 'out_of_stock',
      }
      setProducts([...products, newProduct])
      showSuccess('Đã thêm sản phẩm mới!')
    }
    setIsAddModalOpen(false)
    setEditingProduct(null)
  }

  const toggleProductStatus = (id) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, status: p.status === 'active' ? 'inactive' : 'active' } : p
    ))
    showSuccess('Đã cập nhật trạng thái sản phẩm!')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Sản Phẩm</h1>
          <p className="text-gray-500 text-sm mt-1">Tổng cộng: {filteredProducts.length} sản phẩm</p>
        </div>
        <button
          onClick={handleAdd}
          className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all flex items-center gap-2"
        >
          <PlusIcon className="w-5 h-5" />
          Thêm Sản Phẩm
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
            />
          </div>
          <div className="relative">
            <FunnelIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="pl-10 pr-8 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none appearance-none bg-white"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat === 'all' ? 'Tất cả danh mục' : cat}</option>
              ))}
            </select>
          </div>
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-4 pr-8 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none appearance-none bg-white"
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status === 'all' ? 'Tất cả trạng thái' : 
                   status === 'active' ? 'Đang bán' :
                   status === 'out_of_stock' ? 'Hết hàng' : 'Ngừng bán'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group">
            <div className="relative h-48 bg-gray-100 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  onClick={() => setViewProduct(product)}
                  className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
                  title="Xem chi tiết"
                >
                  <EyeIcon className="w-4 h-4 text-gray-700" />
                </button>
                <button
                  onClick={() => handleEdit(product)}
                  className="p-2 bg-blue-500/90 backdrop-blur-sm rounded-lg hover:bg-blue-600 transition-colors"
                  title="Sửa"
                >
                  <PencilSquareIcon className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="p-2 bg-red-500/90 backdrop-blur-sm rounded-lg hover:bg-red-600 transition-colors"
                  title="Xóa"
                >
                  <TrashIcon className="w-4 h-4 text-white" />
                </button>
              </div>
              {product.status === 'out_of_stock' && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge color="danger">Hết hàng</Badge>
                </div>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">{product.category}</p>
                </div>
                <button
                  onClick={() => toggleProductStatus(product.id)}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${
                    product.status === 'active' 
                      ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {product.status === 'active' ? 'Đang bán' : 'Ngừng bán'}
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Giá bán:</span>
                  <span className="font-bold text-emerald-600">{product.price.toLocaleString('vi-VN')}₫</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Tồn kho:</span>
                  <span className="font-bold text-gray-900">{product.stock.toLocaleString('vi-VN')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Đã bán:</span>
                  <span className="font-bold text-blue-600">{product.sold.toLocaleString('vi-VN')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Nhà cung cấp:</span>
                  <span className="font-medium text-gray-700">{product.supplier}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
          <ArchiveBoxIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 font-medium">Không tìm thấy sản phẩm nào</p>
        </div>
      )}

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false)
          setEditingProduct(null)
        }}
        title={editingProduct ? 'Sửa Sản Phẩm' : 'Thêm Sản Phẩm Mới'}
        size="lg"
      >
        <ProductForm
          product={editingProduct}
          onSave={handleSave}
          onCancel={() => {
            setIsAddModalOpen(false)
            setEditingProduct(null)
          }}
        />
      </Modal>

      {/* View Product Modal */}
      <Modal
        isOpen={!!viewProduct}
        onClose={() => setViewProduct(null)}
        title="Chi Tiết Sản Phẩm"
        size="lg"
      >
        {viewProduct && (
          <div className="space-y-4">
            <div className="relative h-64 bg-gray-100 rounded-xl overflow-hidden mb-4">
              <img src={viewProduct.image} alt={viewProduct.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Tên sản phẩm</label>
                <p className="text-gray-900 font-semibold">{viewProduct.name}</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Danh mục</label>
                <p className="text-gray-900 font-semibold">{viewProduct.category}</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Giá bán</label>
                <p className="text-emerald-600 font-bold text-lg">{viewProduct.price.toLocaleString('vi-VN')}₫</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Tồn kho</label>
                <p className="text-gray-900 font-semibold">{viewProduct.stock.toLocaleString('vi-VN')}</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Đã bán</label>
                <p className="text-blue-600 font-semibold">{viewProduct.sold.toLocaleString('vi-VN')}</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nhà cung cấp</label>
                <p className="text-gray-900 font-semibold">{viewProduct.supplier}</p>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-1">Mô tả</label>
                <p className="text-gray-600">{viewProduct.description}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

const ProductForm = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    category: product?.category || 'Phân bón',
    price: product?.price || '',
    stock: product?.stock || '',
    description: product?.description || '',
    supplier: product?.supplier || '',
    image: product?.image || 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Tên sản phẩm *</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Danh mục *</label>
          <select
            required
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
          >
            <option value="Phân bón">Phân bón</option>
            <option value="Thuốc BVTV">Thuốc BVTV</option>
            <option value="Hạt giống">Hạt giống</option>
            <option value="Thiết bị">Thiết bị</option>
            <option value="Khác">Khác</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Nhà cung cấp *</label>
          <input
            type="text"
            required
            value={formData.supplier}
            onChange={(e) => setFormData({ ...formData, supplier: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Giá bán (₫) *</label>
          <input
            type="number"
            required
            min="0"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Tồn kho *</label>
          <input
            type="number"
            required
            min="0"
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
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
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">URL ảnh</label>
        <div className="flex gap-3">
          <input
            type="url"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            placeholder="https://..."
          />
          {formData.image && (
            <div className="w-20 h-20 rounded-xl overflow-hidden border border-gray-200">
              <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
            </div>
          )}
        </div>
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
          {product ? 'Cập nhật' : 'Thêm mới'}
        </button>
      </div>
    </form>
  )
}

export default ProductsManagement

