import React, { useState } from 'react'
import { 
  PlusIcon, 
  PencilSquareIcon, 
  MagnifyingGlassIcon,
  FunnelIcon,
  UserPlusIcon,
  ShieldCheckIcon,
  UserIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'
import { useToast } from '@/shared/hooks/useToast'
import Modal from '@/shared/components/common/Modal'
import Badge from '@/shared/components/common/Badge'

const UsersManagement = () => {
  const { showSuccess, showError } = useToast()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRole, setFilterRole] = useState('all')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  
  const [users, setUsers] = useState([
    { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@email.com', phone: '0901234567', role: 'farmer', verified: true, createdAt: '2025-01-01', status: 'active' },
    { id: 2, name: 'Trần Thị B', email: 'tranthib@email.com', phone: '0901234568', role: 'enterprise', verified: true, createdAt: '2025-01-02', status: 'active' },
    { id: 3, name: 'Lê Văn C', email: 'levanc@email.com', phone: '0901234569', role: 'engineer', verified: false, createdAt: '2025-01-03', status: 'active' },
    { id: 4, name: 'Phạm Thị D', email: 'phamthid@email.com', phone: '0901234570', role: 'consumer', verified: true, createdAt: '2025-01-04', status: 'inactive' },
    { id: 5, name: 'Hoàng Văn E', email: 'hoangvane@email.com', phone: '0901234571', role: 'farmer', verified: true, createdAt: '2025-01-05', status: 'active' },
  ])

  const roles = [
    { value: 'all', label: 'Tất cả' },
    { value: 'admin', label: 'Admin' },
    { value: 'farmer', label: 'Nông dân' },
    { value: 'enterprise', label: 'Doanh nghiệp' },
    { value: 'engineer', label: 'Kỹ sư' },
    { value: 'consumer', label: 'Người tiêu dùng' },
  ]

  const roleLabels = {
    admin: 'Admin',
    farmer: 'Nông dân',
    enterprise: 'Doanh nghiệp',
    engineer: 'Kỹ sư',
    consumer: 'Người tiêu dùng',
  }

  const roleColors = {
    admin: 'bg-purple-100 text-purple-700',
    farmer: 'bg-emerald-100 text-emerald-700',
    enterprise: 'bg-blue-100 text-blue-700',
    engineer: 'bg-orange-100 text-orange-700',
    consumer: 'bg-pink-100 text-pink-700',
  }

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.phone.includes(searchTerm)
    const matchesRole = filterRole === 'all' || user.role === filterRole
    return matchesSearch && matchesRole
  })


  const handleEdit = (user) => {
    setEditingUser(user)
    setIsAddModalOpen(true)
  }

  const handleAdd = () => {
    setEditingUser(null)
    setIsAddModalOpen(true)
  }

  const handleSave = (formData) => {
    if (editingUser) {
      setUsers(users.map(u => u.id === editingUser.id ? { ...u, ...formData } : u))
      showSuccess('Đã cập nhật người dùng thành công!')
    } else {
      const newUser = {
        id: users.length + 1,
        ...formData,
        verified: false,
        createdAt: new Date().toISOString().split('T')[0],
        status: 'active',
      }
      setUsers([...users, newUser])
      showSuccess('Đã thêm người dùng mới!')
    }
    setIsAddModalOpen(false)
    setEditingUser(null)
  }

  const toggleUserStatus = (id) => {
    setUsers(users.map(u => 
      u.id === id ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' } : u
    ))
    showSuccess('Đã cập nhật trạng thái người dùng!')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Người Dùng</h1>
          <p className="text-gray-500 text-sm mt-1">Tổng cộng: {filteredUsers.length} người dùng</p>
        </div>
        <button
          onClick={handleAdd}
          className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all flex items-center gap-2"
        >
          <UserPlusIcon className="w-5 h-5" />
          Thêm Người Dùng
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, email, số điện thoại..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
            />
          </div>
          <div className="relative">
            <FunnelIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="pl-10 pr-8 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none appearance-none bg-white"
            >
              {roles.map(role => (
                <option key={role.value} value={role.value}>{role.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {['ID', 'Tên', 'Email', 'Số điện thoại', 'Vai trò', 'Xác thực', 'Trạng thái', 'Ngày tạo', 'Hành động'].map(header => (
                  <th key={header} className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredUsers.map(user => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-gray-900">#{user.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <UserIcon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="text-sm font-bold text-gray-900">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{user.email}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{user.phone}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full whitespace-nowrap ${roleColors[user.role]}`}>
                      {roleLabels[user.role]}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.verified ? (
                      <Badge color="success">
                        <ShieldCheckIcon className="w-3.5 h-3.5" />
                        <span>Đã xác thực</span>
                      </Badge>
                    ) : (
                      <Badge color="warning">Chưa xác thực</Badge>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge color={user.status === 'active' ? 'success' : 'danger'}>
                      {user.status === 'active' ? 'Hoạt động' : 'Vô hiệu hóa'}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{user.createdAt}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(user)}
                        className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
                        title="Chỉnh sửa"
                      >
                        <PencilSquareIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => toggleUserStatus(user.id)}
                        className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 ${
                          user.status === 'active'
                            ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        title={user.status === 'active' ? 'Vô hiệu hóa' : 'Kích hoạt'}
                      >
                        {user.status === 'active' ? (
                          <XCircleIcon className="w-5 h-5" />
                        ) : (
                          <CheckCircleIcon className="w-5 h-5" />
                        )}
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
          setEditingUser(null)
        }}
        title={editingUser ? 'Sửa Người Dùng' : 'Thêm Người Dùng Mới'}
        size="lg"
      >
        <UserForm
          user={editingUser}
          onSave={handleSave}
          onCancel={() => {
            setIsAddModalOpen(false)
            setEditingUser(null)
          }}
        />
      </Modal>
    </div>
  )
}

const UserForm = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    role: user?.role || 'farmer',
    address: user?.address || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên *</label>
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
          <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Vai trò *</label>
        <select
          required
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
        >
          <option value="farmer">Nông dân</option>
          <option value="enterprise">Doanh nghiệp</option>
          <option value="engineer">Kỹ sư</option>
          <option value="consumer">Người tiêu dùng</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Địa chỉ</label>
        <textarea
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          rows={3}
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
          {user ? 'Cập nhật' : 'Thêm mới'}
        </button>
      </div>
    </form>
  )
}

export default UsersManagement

