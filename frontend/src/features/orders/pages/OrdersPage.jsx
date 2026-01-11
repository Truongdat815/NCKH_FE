import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  MagnifyingGlassIcon, 
  FunnelIcon,
  TruckIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  EyeIcon
} from '@heroicons/react/24/outline'
import PageTransition from '../../../components/common/PageTransition'
import Badge from '../../../components/common/Badge'
import EmptyState from '../../../components/common/EmptyState'
import { useToast } from '../../../hooks/useToast'
import Modal from '../../../components/common/Modal'

const OrdersPage = () => {
  const { showSuccess, showError } = useToast()
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [orders, setOrders] = useState([
    { 
      id: '#ORD-001', 
      product: 'Gạo ST25 - 100kg', 
      buyer: 'Công ty ABC', 
      amount: '8.500.000₫', 
      status: 'completed', 
      date: '10/01/2026',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=200'
    },
    { 
      id: '#ORD-002', 
      product: 'Lúa tươi - 500kg', 
      buyer: 'Siêu thị XYZ', 
      amount: '3.200.000₫', 
      status: 'shipping', 
      date: '11/01/2026',
      image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=200'
    },
    { 
      id: '#ORD-003', 
      product: 'Gạo ST25 - 200kg', 
      buyer: 'Nhà hàng DEF', 
      amount: '17.000.000₫', 
      status: 'pending', 
      date: '11/01/2026',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=200'
    },
    { 
      id: '#ORD-004', 
      product: 'Lúa tươi - 300kg', 
      buyer: 'Cửa hàng GHI', 
      amount: '1.920.000₫', 
      status: 'completed', 
      date: '09/01/2026',
      image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=200'
    },
  ])

  const handleConfirmOrder = (orderId) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: 'shipping' } : order
    ))
    showSuccess('Đã xác nhận đơn hàng!')
  }

  const handleViewOrder = (order) => {
    setSelectedOrder(order)
  }

  const statusConfig = {
    completed: { label: 'Hoàn thành', color: 'success', icon: CheckCircleIcon },
    shipping: { label: 'Đang giao', color: 'info', icon: TruckIcon },
    pending: { label: 'Chờ xác nhận', color: 'warning', icon: ClockIcon },
    cancelled: { label: 'Đã hủy', color: 'danger', icon: XCircleIcon },
  }

  const filters = [
    { value: 'all', label: 'Tất cả' },
    { value: 'pending', label: 'Chờ xác nhận' },
    { value: 'shipping', label: 'Đang giao' },
    { value: 'completed', label: 'Hoàn thành' },
  ]

  const filteredOrders = orders.filter(order => {
    const matchesFilter = filter === 'all' || order.status === filter
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.buyer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">Quản Lý Đơn Hàng</h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider text-xs mt-2">Theo dõi và quản lý đơn hàng của bạn</p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-gray-50 transition-all duration-200">
              Xuất Excel
            </button>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-200" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-200 text-sm font-medium outline-none"
                placeholder="Tìm kiếm theo mã đơn, sản phẩm, người mua..."
              />
            </div>
            <div className="flex items-center gap-2 bg-gray-50 rounded-2xl p-1">
              {filters.map(f => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    filter === f.value
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length > 0 ? (
          <div className="space-y-4">
            {filteredOrders.map((order, idx) => {
              const status = statusConfig[order.status]
              const StatusIcon = status.icon
              
              return (
                <div
                  key={order.id}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover-lift animate-stagger-1"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Image */}
                      <div className="flex-shrink-0">
                        <img 
                          src={order.image} 
                          alt={order.product}
                          className="w-24 h-24 rounded-2xl object-cover border-2 border-gray-100"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-bold text-gray-900">{order.id}</h3>
                              <Badge color={status.color} size="sm">
                                <StatusIcon className="w-3 h-3 inline mr-1" />
                                {status.label}
                              </Badge>
                            </div>
                            <p className="text-base font-bold text-gray-700 mb-1">{order.product}</p>
                            <p className="text-sm text-gray-500 mb-3">Người mua: <span className="font-bold text-gray-700">{order.buyer}</span></p>
                            <div className="flex flex-wrap items-center gap-4 text-sm">
                              <span className="text-gray-500">Ngày đặt: <span className="font-bold text-gray-700">{order.date}</span></span>
                              <span className="text-emerald-600 font-bold text-lg">{order.amount}</span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => handleViewOrder(order)}
                              className="p-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-all duration-200 hover:scale-110 active:scale-95"
                            >
                              <EyeIcon className="w-5 h-5" />
                            </button>
                            {order.status === 'pending' && (
                              <button 
                                onClick={() => handleConfirmOrder(order.id)}
                                className="px-4 py-2 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all duration-200 hover:scale-105 active:scale-95"
                              >
                                Xác nhận
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <EmptyState
            icon="📦"
            title="Không tìm thấy đơn hàng"
            description={`Không có đơn hàng nào phù hợp với bộ lọc "${filters.find(f => f.value === filter)?.label}".`}
            actionLabel="Xem tất cả đơn hàng"
            actionOnClick={() => setFilter('all')}
          />
        )}

        {/* Stats Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Tổng đơn', value: orders.length, color: 'bg-blue-50 text-blue-600' },
            { label: 'Chờ xác nhận', value: orders.filter(o => o.status === 'pending').length, color: 'bg-yellow-50 text-yellow-600' },
            { label: 'Đang giao', value: orders.filter(o => o.status === 'shipping').length, color: 'bg-purple-50 text-purple-600' },
            { label: 'Hoàn thành', value: orders.filter(o => o.status === 'completed').length, color: 'bg-emerald-50 text-emerald-600' },
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center animate-stagger-1"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Order Detail Modal */}
      <Modal
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        title="Chi tiết đơn hàng"
        size="lg"
      >
        {selectedOrder && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Mã đơn hàng</p>
                <p className="text-lg font-bold text-gray-900">{selectedOrder.id}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Trạng thái</p>
                <Badge color={statusConfig[selectedOrder.status].color}>
                  {statusConfig[selectedOrder.status].label}
                </Badge>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Người mua</p>
                <p className="text-base font-bold text-gray-900">{selectedOrder.buyer}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Ngày đặt</p>
                <p className="text-base font-bold text-gray-900">{selectedOrder.date}</p>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Sản phẩm</p>
              <div className="flex items-center gap-4">
                <img src={selectedOrder.image} alt={selectedOrder.product} className="w-20 h-20 rounded-xl object-cover" />
                <div>
                  <p className="font-bold text-gray-900">{selectedOrder.product}</p>
                  <p className="text-xl font-bold text-emerald-600 mt-1">{selectedOrder.amount}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </PageTransition>
  )
}

export default OrdersPage

