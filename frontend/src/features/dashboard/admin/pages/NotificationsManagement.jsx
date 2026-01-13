import React, { useState } from 'react'
import { 
  BellIcon,
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'
import { useToast } from '@/shared/hooks/useToast'
import Modal from '@/shared/components/common/Modal'
import Badge from '@/shared/components/common/Badge'

const NotificationsManagement = () => {
  const { showSuccess } = useToast()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingNotification, setEditingNotification] = useState(null)

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Cảnh báo: Bệnh đạo ôn tại Tiền Giang', type: 'warning', message: 'Phát hiện bệnh đạo ôn tại khu vực Tiền Giang. Vui lòng kiểm tra và xử lý.', status: 'active', createdAt: '2025-01-11', sent: 1250 },
    { id: 2, title: 'Khuyến mãi: Giảm 20% phân bón NPK', type: 'promotion', message: 'Chương trình khuyến mãi đặc biệt giảm 20% cho tất cả sản phẩm phân bón NPK.', status: 'active', createdAt: '2025-01-10', sent: 3200 },
    { id: 3, title: 'Thông báo bảo trì hệ thống', type: 'system', message: 'Hệ thống sẽ bảo trì từ 2h-4h sáng ngày mai. Vui lòng lưu công việc.', status: 'sent', createdAt: '2025-01-09', sent: 5000 },
    { id: 4, title: 'Đơn hàng mới #ORD-001', type: 'order', message: 'Bạn có đơn hàng mới từ khách hàng Nguyễn Văn A. Tổng giá trị: 300,000₫', status: 'active', createdAt: '2025-01-08', sent: 0 },
    { id: 5, title: 'Cập nhật chính sách vận chuyển', type: 'policy', message: 'Chính sách vận chuyển đã được cập nhật. Vui lòng xem chi tiết.', status: 'draft', createdAt: '2025-01-07', sent: 0 },
  ])

  const types = ['all', 'warning', 'promotion', 'system', 'order', 'policy']

  const filteredNotifications = notifications.filter(notif => {
    const matchesSearch = notif.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notif.message?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === 'all' || notif.type === filterType
    return matchesSearch && matchesType
  })

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc muốn xóa thông báo này?')) {
      setNotifications(notifications.filter(n => n.id !== id))
      showSuccess('Đã xóa thông báo thành công!')
    }
  }

  const handleSend = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, status: 'sent', sent: n.sent + 1000 } : n
    ))
    showSuccess('Đã gửi thông báo thành công!')
  }

  const handleSave = (formData) => {
    if (editingNotification) {
      setNotifications(notifications.map(n => n.id === editingNotification.id ? { ...n, ...formData } : n))
      showSuccess('Đã cập nhật thông báo thành công!')
    } else {
      const newNotif = {
        id: notifications.length + 1,
        ...formData,
        sent: 0,
        createdAt: new Date().toISOString().split('T')[0],
        status: 'draft',
      }
      setNotifications([...notifications, newNotif])
      showSuccess('Đã tạo thông báo mới!')
    }
    setIsAddModalOpen(false)
    setEditingNotification(null)
  }

  const getTypeBadge = (type) => {
    const config = {
      warning: { color: 'danger', label: 'Cảnh báo' },
      promotion: { color: 'success', label: 'Khuyến mãi' },
      system: { color: 'info', label: 'Hệ thống' },
      order: { color: 'info', label: 'Đơn hàng' },
      policy: { color: 'warning', label: 'Chính sách' },
    }
    const c = config[type] || config.system
    return <Badge color={c.color}>{c.label}</Badge>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Thông Báo</h1>
          <p className="text-gray-500 text-sm mt-1">Tổng cộng: {filteredNotifications.length} thông báo</p>
        </div>
        <button
          onClick={() => {
            setEditingNotification(null)
            setIsAddModalOpen(true)
          }}
          className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all flex items-center gap-2"
        >
          <PlusIcon className="w-5 h-5" />
          Tạo Thông Báo
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm thông báo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
            />
          </div>
          <div className="relative">
            <FunnelIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="pl-10 pr-8 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none appearance-none bg-white"
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'Tất cả loại' : 
                   type === 'warning' ? 'Cảnh báo' :
                   type === 'promotion' ? 'Khuyến mãi' :
                   type === 'system' ? 'Hệ thống' :
                   type === 'order' ? 'Đơn hàng' : 'Chính sách'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map(notif => (
          <div key={notif.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <BellIcon className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-lg font-bold text-gray-900">{notif.title}</h3>
                  {getTypeBadge(notif.type)}
                  <Badge color={
                    notif.status === 'sent' ? 'success' :
                    notif.status === 'active' ? 'info' : 'warning'
                  }>
                    {notif.status === 'sent' ? 'Đã gửi' :
                     notif.status === 'active' ? 'Hoạt động' : 'Bản nháp'}
                  </Badge>
                </div>
                <p className="text-gray-700 mb-3">{notif.message}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📅 {notif.createdAt}</span>
                  <span>📤 Đã gửi: {notif.sent.toLocaleString('vi-VN')}</span>
                </div>
              </div>
              <div className="flex gap-2">
                {notif.status !== 'sent' && (
                  <button
                    onClick={() => handleSend(notif.id)}
                    className="px-4 py-2 bg-emerald-600 text-white text-sm font-bold rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Gửi ngay
                  </button>
                )}
                <button
                  onClick={() => {
                    setEditingNotification(notif)
                    setIsAddModalOpen(true)
                  }}
                  className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                  title="Sửa"
                >
                  <PencilSquareIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(notif.id)}
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

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false)
          setEditingNotification(null)
        }}
        title={editingNotification ? 'Sửa Thông Báo' : 'Tạo Thông Báo Mới'}
        size="lg"
      >
        <NotificationForm
          notification={editingNotification}
          onSave={handleSave}
          onCancel={() => {
            setIsAddModalOpen(false)
            setEditingNotification(null)
          }}
        />
      </Modal>
    </div>
  )
}

const NotificationForm = ({ notification, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: notification?.title || '',
    type: notification?.type || 'system',
    message: notification?.message || '',
    status: notification?.status || 'draft',
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
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Loại thông báo *</label>
        <select
          required
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
        >
          <option value="warning">Cảnh báo</option>
          <option value="promotion">Khuyến mãi</option>
          <option value="system">Hệ thống</option>
          <option value="order">Đơn hàng</option>
          <option value="policy">Chính sách</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Nội dung *</label>
        <textarea
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={6}
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
          {notification ? 'Cập nhật' : 'Tạo mới'}
        </button>
      </div>
    </form>
  )
}

export default NotificationsManagement


