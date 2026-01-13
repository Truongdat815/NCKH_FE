import React, { useState } from 'react'
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  TruckIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { useToast } from '@/shared/hooks/useToast'
import Modal from '@/shared/components/common/Modal'
import Badge from '@/shared/components/common/Badge'

const OrdersManagement = () => {
  const { showSuccess } = useToast()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [viewOrder, setViewOrder] = useState(null)
  
  const [orders, setOrders] = useState([
    { id: 'ORD-001', customer: 'Nguyễn Văn A', product: 'Phân bón NPK - 50kg', quantity: 2, total: 300000, status: 'pending', date: '2025-01-11', payment: 'Chưa thanh toán', shipping: 'Chưa giao hàng' },
    { id: 'ORD-002', customer: 'Trần Thị B', product: 'Thuốc trừ sâu Bio-B - 10 lít', quantity: 1, total: 85000, status: 'processing', date: '2025-01-10', payment: 'Đã thanh toán', shipping: 'Đang chuẩn bị' },
    { id: 'ORD-003', customer: 'Lê Văn C', product: 'Hạt giống lúa ST25 - 20kg', quantity: 3, total: 360000, status: 'shipped', date: '2025-01-09', payment: 'Đã thanh toán', shipping: 'Đang vận chuyển' },
    { id: 'ORD-004', customer: 'Phạm Thị D', product: 'Phân hữu cơ vi sinh - 30kg', quantity: 2, total: 190000, status: 'delivered', date: '2025-01-08', payment: 'Đã thanh toán', shipping: 'Đã giao hàng' },
    { id: 'ORD-005', customer: 'Hoàng Văn E', product: 'Máy phun thuốc điện', quantity: 1, total: 2500000, status: 'cancelled', date: '2025-01-07', payment: 'Đã hoàn tiền', shipping: 'Đã hủy' },
  ])

  const statuses = ['all', 'pending', 'processing', 'shipped', 'delivered', 'cancelled']

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.product?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(o => 
      o.id === id ? { 
        ...o, 
        status: newStatus,
        payment: newStatus === 'cancelled' ? 'Đã hoàn tiền' : o.payment,
        shipping: newStatus === 'cancelled' ? 'Đã hủy' : 
                 newStatus === 'delivered' ? 'Đã giao hàng' :
                 newStatus === 'shipped' ? 'Đang vận chuyển' :
                 newStatus === 'processing' ? 'Đang chuẩn bị' : o.shipping
      } : o
    ))
    showSuccess('Đã cập nhật trạng thái đơn hàng!')
  }

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { color: 'warning', label: 'Chờ xử lý', icon: ClockIcon },
      processing: { color: 'info', label: 'Đang xử lý', icon: TruckIcon },
      shipped: { color: 'info', label: 'Đang giao', icon: TruckIcon },
      delivered: { color: 'success', label: 'Đã giao', icon: CheckCircleIcon },
      cancelled: { color: 'danger', label: 'Đã hủy', icon: XCircleIcon },
    }
    const config = statusConfig[status] || statusConfig.pending
    const Icon = config.icon
    return (
      <Badge color={config.color}>
        <Icon className="w-4 h-4 inline mr-1" />
        {config.label}
      </Badge>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Đơn Hàng</h1>
          <p className="text-gray-500 text-sm mt-1">Tổng cộng: {filteredOrders.length} đơn hàng</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-white px-4 py-2 rounded-xl border border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Tổng doanh thu</p>
            <p className="text-lg font-bold text-emerald-600">
              {orders
                .filter(o => o.status === 'delivered')
                .reduce((sum, o) => sum + o.total, 0)
                .toLocaleString('vi-VN')}₫
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm đơn hàng..."
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
                   status === 'pending' ? 'Chờ xử lý' :
                   status === 'processing' ? 'Đang xử lý' :
                   status === 'shipped' ? 'Đang giao' :
                   status === 'delivered' ? 'Đã giao' : 'Đã hủy'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {['Mã đơn', 'Khách hàng', 'Sản phẩm', 'Số lượng', 'Tổng tiền', 'Thanh toán', 'Vận chuyển', 'Trạng thái', 'Ngày', 'Hành động'].map(header => (
                  <th key={header} className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map(order => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-gray-900">{order.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-gray-900">{order.customer}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{order.product}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-gray-900">{order.quantity}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-emerald-600">{order.total.toLocaleString('vi-VN')}₫</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      order.payment === 'Đã thanh toán' ? 'bg-emerald-100 text-emerald-700' :
                      order.payment === 'Đã hoàn tiền' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.payment}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-xs text-gray-600">{order.shipping}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(order.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{order.date}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setViewOrder(order)}
                        className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                        title="Xem chi tiết"
                      >
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      {order.status === 'pending' && (
                        <button
                          onClick={() => updateOrderStatus(order.id, 'processing')}
                          className="px-3 py-1 text-xs font-bold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                        >
                          Xử lý
                        </button>
                      )}
                      {order.status === 'processing' && (
                        <button
                          onClick={() => updateOrderStatus(order.id, 'shipped')}
                          className="px-3 py-1 text-xs font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Giao hàng
                        </button>
                      )}
                      {order.status === 'shipped' && (
                        <button
                          onClick={() => updateOrderStatus(order.id, 'delivered')}
                          className="px-3 py-1 text-xs font-bold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                        >
                          Hoàn thành
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Order Modal */}
      <Modal
        isOpen={!!viewOrder}
        onClose={() => setViewOrder(null)}
        title={`Chi Tiết Đơn Hàng ${viewOrder?.id}`}
        size="lg"
      >
        {viewOrder && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Khách hàng</label>
                <p className="text-gray-900 font-semibold">{viewOrder.customer}</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Ngày đặt</label>
                <p className="text-gray-900 font-semibold">{viewOrder.date}</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Sản phẩm</label>
                <p className="text-gray-900 font-semibold">{viewOrder.product}</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Số lượng</label>
                <p className="text-gray-900 font-semibold">{viewOrder.quantity}</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Tổng tiền</label>
                <p className="text-emerald-600 font-bold text-lg">{viewOrder.total.toLocaleString('vi-VN')}₫</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Trạng thái</label>
                {getStatusBadge(viewOrder.status)}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Thanh toán</label>
                <p className="text-gray-900 font-semibold">{viewOrder.payment}</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Vận chuyển</label>
                <p className="text-gray-900 font-semibold">{viewOrder.shipping}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100 flex gap-3">
              {viewOrder.status === 'pending' && (
                <button
                  onClick={() => {
                    updateOrderStatus(viewOrder.id, 'processing')
                    setViewOrder({ ...viewOrder, status: 'processing' })
                  }}
                  className="flex-1 px-4 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors"
                >
                  Xử lý đơn hàng
                </button>
              )}
              {viewOrder.status === 'processing' && (
                <button
                  onClick={() => {
                    updateOrderStatus(viewOrder.id, 'shipped')
                    setViewOrder({ ...viewOrder, status: 'shipped' })
                  }}
                  className="flex-1 px-4 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Xác nhận giao hàng
                </button>
              )}
              {viewOrder.status === 'shipped' && (
                <button
                  onClick={() => {
                    updateOrderStatus(viewOrder.id, 'delivered')
                    setViewOrder({ ...viewOrder, status: 'delivered' })
                  }}
                  className="flex-1 px-4 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors"
                >
                  Hoàn thành đơn hàng
                </button>
              )}
              {viewOrder.status !== 'cancelled' && viewOrder.status !== 'delivered' && (
                <button
                  onClick={() => {
                    updateOrderStatus(viewOrder.id, 'cancelled')
                    setViewOrder({ ...viewOrder, status: 'cancelled' })
                  }}
                  className="px-4 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
                >
                  Hủy đơn
                </button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default OrdersManagement

