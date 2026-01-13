import React, { useState } from 'react'
import { 
  StarIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'
import Badge from '@/shared/components/common/Badge'
import Modal from '@/shared/components/common/Modal'

const ReviewsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterRating, setFilterRating] = useState('all')
  const [viewReview, setViewReview] = useState(null)

  const [reviews, setReviews] = useState([
    { id: 1, product: 'Phân bón NPK Đầu Trâu', customer: 'Nguyễn Văn A', rating: 5, comment: 'Sản phẩm rất tốt, cây trồng phát triển nhanh!', status: 'approved', date: '2025-01-10', helpful: 12 },
    { id: 2, product: 'Thuốc trừ sâu Bio-B', customer: 'Trần Thị B', rating: 4, comment: 'Hiệu quả tốt, an toàn cho môi trường', status: 'approved', date: '2025-01-09', helpful: 8 },
    { id: 3, product: 'Hạt giống lúa ST25', customer: 'Lê Văn C', rating: 5, comment: 'Hạt giống chất lượng cao, năng suất tốt', status: 'pending', date: '2025-01-08', helpful: 0 },
    { id: 4, product: 'Phân hữu cơ vi sinh', customer: 'Phạm Thị D', rating: 2, comment: 'Không hiệu quả như mong đợi', status: 'approved', date: '2025-01-07', helpful: 3 },
    { id: 5, product: 'Máy phun thuốc điện', customer: 'Hoàng Văn E', rating: 5, comment: 'Máy hoạt động tốt, tiết kiệm thời gian', status: 'approved', date: '2025-01-06', helpful: 15 },
  ])

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.customer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.comment?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || review.status === filterStatus
    const matchesRating = filterRating === 'all' || review.rating === parseInt(filterRating)
    return matchesSearch && matchesStatus && matchesRating
  })

  const handleApprove = (id) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, status: 'approved' } : r))
  }

  const handleReject = (id) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, status: 'rejected' } : r))
  }

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc muốn xóa đánh giá này?')) {
      setReviews(reviews.filter(r => r.id !== id))
    }
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      i < rating ? (
        <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
      ) : (
        <StarIcon key={i} className="w-5 h-5 text-gray-300" />
      )
    ))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Đánh Giá</h1>
          <p className="text-gray-500 text-sm mt-1">Tổng cộng: {filteredReviews.length} đánh giá</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm đánh giá..."
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
              className="pl-10 pr-8 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none appearance-none bg-white"
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="approved">Đã duyệt</option>
              <option value="pending">Chờ duyệt</option>
              <option value="rejected">Từ chối</option>
            </select>
          </div>
          <div className="relative">
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
              className="pl-4 pr-8 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none appearance-none bg-white"
            >
              <option value="all">Tất cả sao</option>
              <option value="5">5 sao</option>
              <option value="4">4 sao</option>
              <option value="3">3 sao</option>
              <option value="2">2 sao</option>
              <option value="1">1 sao</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map(review => (
          <div key={review.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{review.product}</h3>
                  <Badge color={
                    review.status === 'approved' ? 'success' :
                    review.status === 'pending' ? 'warning' : 'danger'
                  }>
                    {review.status === 'approved' ? 'Đã duyệt' :
                     review.status === 'pending' ? 'Chờ duyệt' : 'Từ chối'}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  {renderStars(review.rating)}
                  <span className="text-sm text-gray-500">bởi {review.customer}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 mb-2">{review.comment}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>👍 {review.helpful} hữu ích</span>
                </div>
              </div>
              <div className="flex gap-2">
                {review.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleApprove(review.id)}
                      className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors"
                      title="Duyệt"
                    >
                      <CheckCircleIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleReject(review.id)}
                      className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                      title="Từ chối"
                    >
                      <XCircleIcon className="w-5 h-5" />
                    </button>
                  </>
                )}
                <button
                  onClick={() => setViewReview(review)}
                  className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                  title="Xem chi tiết"
                >
                  <EyeIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(review.id)}
                  className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                  title="Xóa"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Review Modal */}
      <Modal
        isOpen={!!viewReview}
        onClose={() => setViewReview(null)}
        title="Chi Tiết Đánh Giá"
      >
        {viewReview && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Sản phẩm</label>
              <p className="text-gray-900 font-semibold">{viewReview.product}</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Khách hàng</label>
              <p className="text-gray-900 font-semibold">{viewReview.customer}</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Đánh giá</label>
              <div className="flex items-center gap-2">
                {renderStars(viewReview.rating)}
                <span className="text-gray-600">({viewReview.rating}/5)</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Bình luận</label>
              <p className="text-gray-700">{viewReview.comment}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Ngày đánh giá</label>
                <p className="text-gray-600">{viewReview.date}</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Hữu ích</label>
                <p className="text-gray-600">{viewReview.helpful} lượt</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default ReviewsManagement


