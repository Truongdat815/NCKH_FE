import React, { useState } from 'react'
import { 
  PlusIcon, 
  PencilSquareIcon, 
  TrashIcon, 
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'
import { useToast } from '@/shared/hooks/useToast'
import Modal from '@/shared/components/common/Modal'
import Badge from '@/shared/components/common/Badge'

const PostsManagement = () => {
  const { showSuccess, showError } = useToast()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingPost, setEditingPost] = useState(null)
  const [viewPost, setViewPost] = useState(null)
  
  const [posts, setPosts] = useState([
    { id: 1, title: 'Kỹ thuật trồng lúa ST25 đạt năng suất cao', author: 'Nguyễn Văn A', category: 'Kỹ thuật', likes: 125, comments: 23, views: 1250, status: 'published', createdAt: '2025-01-10', content: 'Hướng dẫn chi tiết cách trồng lúa ST25...' },
    { id: 2, title: 'Phân bón hữu cơ - Giải pháp bền vững', author: 'Trần Thị B', category: 'Kiến thức', likes: 89, comments: 15, views: 890, status: 'published', createdAt: '2025-01-09', content: 'Tìm hiểu về phân bón hữu cơ...' },
    { id: 3, title: 'Cách phòng trừ sâu bệnh hiệu quả', author: 'Lê Văn C', category: 'Kỹ thuật', likes: 156, comments: 32, views: 2100, status: 'published', createdAt: '2025-01-08', content: 'Các biện pháp phòng trừ sâu bệnh...' },
    { id: 4, title: 'Thị trường nông sản tuần này', author: 'Phạm Thị D', category: 'Thị trường', likes: 67, comments: 8, views: 450, status: 'draft', createdAt: '2025-01-07', content: 'Tình hình giá cả nông sản...' },
    { id: 5, title: 'Công nghệ AI trong nông nghiệp', author: 'Hoàng Văn E', category: 'Công nghệ', likes: 234, comments: 45, views: 3200, status: 'published', createdAt: '2025-01-06', content: 'Ứng dụng AI trong nông nghiệp...' },
  ])

  const statuses = ['all', 'published', 'draft', 'archived']

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || post.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      setPosts(posts.filter(p => p.id !== id))
      showSuccess('Đã xóa bài viết thành công!')
    }
  }

  const handleEdit = (post) => {
    setEditingPost(post)
    setIsAddModalOpen(true)
  }

  const handleAdd = () => {
    setEditingPost(null)
    setIsAddModalOpen(true)
  }

  const handleSave = (formData) => {
    if (editingPost) {
      setPosts(posts.map(p => p.id === editingPost.id ? { ...p, ...formData } : p))
      showSuccess('Đã cập nhật bài viết thành công!')
    } else {
      const newPost = {
        id: posts.length + 1,
        ...formData,
        likes: 0,
        comments: 0,
        views: 0,
        createdAt: new Date().toISOString().split('T')[0],
        status: 'draft',
      }
      setPosts([...posts, newPost])
      showSuccess('Đã thêm bài viết mới!')
    }
    setIsAddModalOpen(false)
    setEditingPost(null)
  }

  const togglePostStatus = (id, newStatus) => {
    setPosts(posts.map(p => 
      p.id === id ? { ...p, status: newStatus } : p
    ))
    showSuccess('Đã cập nhật trạng thái bài viết!')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Bài Viết</h1>
          <p className="text-gray-500 text-sm mt-1">Tổng cộng: {filteredPosts.length} bài viết</p>
        </div>
        <button
          onClick={handleAdd}
          className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all flex items-center gap-2"
        >
          <PlusIcon className="w-5 h-5" />
          Viết Bài Mới
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
            />
          </div>
          <div className="relative">
            <FunnelIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-10 pr-8 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none appearance-none bg-white"
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status === 'all' ? 'Tất cả trạng thái' : 
                   status === 'published' ? 'Đã xuất bản' :
                   status === 'draft' ? 'Bản nháp' : 'Đã lưu trữ'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {['ID', 'Tiêu đề', 'Tác giả', 'Danh mục', 'Lượt thích', 'Bình luận', 'Lượt xem', 'Trạng thái', 'Ngày tạo', 'Hành động'].map(header => (
                  <th key={header} className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredPosts.map(post => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-gray-900">#{post.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-xs">
                      <p className="text-sm font-bold text-gray-900 truncate">{post.title}</p>
                      <p className="text-xs text-gray-500 line-clamp-1">{post.content}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge color="info">{post.category}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-red-600">{post.likes}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-blue-600">{post.comments}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-gray-600">{post.views.toLocaleString('vi-VN')}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      {post.status === 'published' ? (
                        <button
                          onClick={() => togglePostStatus(post.id, 'archived')}
                          className="px-3 py-1 text-xs font-bold bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200 transition-colors flex items-center gap-1"
                        >
                          <CheckCircleIcon className="w-3 h-3" />
                          Đã xuất bản
                        </button>
                      ) : post.status === 'draft' ? (
                        <button
                          onClick={() => togglePostStatus(post.id, 'published')}
                          className="px-3 py-1 text-xs font-bold bg-yellow-100 text-yellow-700 rounded-full hover:bg-yellow-200 transition-colors"
                        >
                          Bản nháp
                        </button>
                      ) : (
                        <button
                          onClick={() => togglePostStatus(post.id, 'published')}
                          className="px-3 py-1 text-xs font-bold bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          Đã lưu trữ
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{post.createdAt}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setViewPost(post)}
                        className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                        title="Xem"
                      >
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(post)}
                        className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors"
                        title="Sửa"
                      >
                        <PencilSquareIcon className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
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

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false)
          setEditingPost(null)
        }}
        title={editingPost ? 'Sửa Bài Viết' : 'Viết Bài Mới'}
        size="lg"
      >
        <PostForm
          post={editingPost}
          onSave={handleSave}
          onCancel={() => {
            setIsAddModalOpen(false)
            setEditingPost(null)
          }}
        />
      </Modal>

      {/* View Post Modal */}
      <Modal
        isOpen={!!viewPost}
        onClose={() => setViewPost(null)}
        title={viewPost?.title}
        size="lg"
      >
        {viewPost && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Tác giả: <strong className="text-gray-900">{viewPost.author}</strong></span>
              <span>•</span>
              <span>Danh mục: <strong className="text-gray-900">{viewPost.category}</strong></span>
              <span>•</span>
              <span>Ngày: <strong className="text-gray-900">{viewPost.createdAt}</strong></span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-red-600 font-semibold">❤️ {viewPost.likes} lượt thích</span>
              <span className="text-blue-600 font-semibold">💬 {viewPost.comments} bình luận</span>
              <span className="text-gray-600 font-semibold">👁️ {viewPost.views.toLocaleString('vi-VN')} lượt xem</span>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{viewPost.content}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

const PostForm = ({ post, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    category: post?.category || 'Kỹ thuật',
    author: post?.author || '',
    content: post?.content || '',
    status: post?.status || 'draft',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Tiêu đề *</label>
        <input
          type="text"
          required
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
            <option value="Kỹ thuật">Kỹ thuật</option>
            <option value="Kiến thức">Kiến thức</option>
            <option value="Thị trường">Thị trường</option>
            <option value="Công nghệ">Công nghệ</option>
            <option value="Khác">Khác</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Tác giả *</label>
          <input
            type="text"
            required
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Nội dung *</label>
        <textarea
          required
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          rows={8}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
          placeholder="Nhập nội dung bài viết..."
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Trạng thái</label>
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
        >
          <option value="draft">Bản nháp</option>
          <option value="published">Xuất bản</option>
          <option value="archived">Lưu trữ</option>
        </select>
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
          {post ? 'Cập nhật' : 'Lưu bài viết'}
        </button>
      </div>
    </form>
  )
}

export default PostsManagement

