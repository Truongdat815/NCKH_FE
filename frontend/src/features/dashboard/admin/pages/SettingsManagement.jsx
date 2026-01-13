import React, { useState } from 'react'
import { 
  Cog6ToothIcon,
  BellIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  PaintBrushIcon,
  ServerIcon,
  KeyIcon,
  DocumentTextIcon,
  CheckIcon
} from '@heroicons/react/24/outline'
import { useToast } from '@/shared/hooks/useToast'
import Badge from '@/shared/components/common/Badge'

const SettingsManagement = () => {
  const { showSuccess } = useToast()
  
  const [settings, setSettings] = useState({
    siteName: 'AgriSmart',
    siteDescription: 'Hệ sinh thái số cho Nông nghiệp Việt Nam',
    siteEmail: 'contact@agrismart.vn',
    sitePhone: '1900-xxxx',
    maintenanceMode: false,
    allowRegistration: true,
    requireEmailVerification: true,
    maxUploadSize: 10, // MB
    currency: 'VND',
    timezone: 'Asia/Ho_Chi_Minh',
    language: 'vi',
    theme: 'light',
  })

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    orderNotifications: true,
    systemNotifications: true,
  })

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    sessionTimeout: 30, // minutes
    passwordMinLength: 8,
    requireStrongPassword: true,
    maxLoginAttempts: 5,
  })

  const handleSave = (section) => {
    showSuccess(`Đã lưu cài đặt ${section} thành công!`)
  }

  const SettingSection = ({ title, icon: Icon, children }) => (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
          <Icon className="w-5 h-5 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
  )

  const SettingItem = ({ label, description, children }) => (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex-1">
          <label className="block text-sm font-bold text-gray-900 mb-1">{label}</label>
          {description && (
            <p className="text-xs text-gray-500">{description}</p>
          )}
        </div>
        <div className="sm:w-64">
          {children}
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Cài Đặt Hệ Thống</h1>
          <p className="text-gray-500 text-sm mt-1">Quản lý cấu hình và thiết lập hệ thống</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <SettingSection title="Cài Đặt Chung" icon={Cog6ToothIcon}>
          <SettingItem label="Tên website" description="Tên hiển thị của website">
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </SettingItem>
          <SettingItem label="Mô tả website" description="Mô tả ngắn về website">
            <input
              type="text"
              value={settings.siteDescription}
              onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </SettingItem>
          <SettingItem label="Email liên hệ" description="Email chính của hệ thống">
            <input
              type="email"
              value={settings.siteEmail}
              onChange={(e) => setSettings({ ...settings, siteEmail: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </SettingItem>
          <SettingItem label="Số điện thoại" description="Hotline hỗ trợ">
            <input
              type="tel"
              value={settings.sitePhone}
              onChange={(e) => setSettings({ ...settings, sitePhone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </SettingItem>
          <SettingItem label="Đơn vị tiền tệ" description="Đơn vị tiền tệ mặc định">
            <select
              value={settings.currency}
              onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            >
              <option value="VND">VND (₫)</option>
              <option value="USD">USD ($)</option>
            </select>
          </SettingItem>
          <SettingItem label="Múi giờ" description="Múi giờ của hệ thống">
            <select
              value={settings.timezone}
              onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            >
              <option value="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh (GMT+7)</option>
              <option value="UTC">UTC (GMT+0)</option>
            </select>
          </SettingItem>
          <div className="pt-4">
            <button
              onClick={() => handleSave('chung')}
              className="w-full px-4 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
            >
              <CheckIcon className="w-5 h-5" />
              Lưu Cài Đặt Chung
            </button>
          </div>
        </SettingSection>

        {/* System Settings */}
        <SettingSection title="Cài Đặt Hệ Thống" icon={ServerIcon}>
          <SettingItem label="Chế độ bảo trì" description="Tạm thời tắt website để bảo trì">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.maintenanceMode}
                onChange={(e) => setSettings({ ...settings, maintenanceMode: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </SettingItem>
          <SettingItem label="Cho phép đăng ký" description="Cho phép người dùng mới đăng ký">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.allowRegistration}
                onChange={(e) => setSettings({ ...settings, allowRegistration: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </SettingItem>
          <SettingItem label="Yêu cầu xác thực email" description="Yêu cầu xác thực email khi đăng ký">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.requireEmailVerification}
                onChange={(e) => setSettings({ ...settings, requireEmailVerification: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </SettingItem>
          <SettingItem label="Kích thước upload tối đa (MB)" description="Kích thước file upload tối đa">
            <input
              type="number"
              min="1"
              max="100"
              value={settings.maxUploadSize}
              onChange={(e) => setSettings({ ...settings, maxUploadSize: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </SettingItem>
          <div className="pt-4">
            <button
              onClick={() => handleSave('hệ thống')}
              className="w-full px-4 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
            >
              <CheckIcon className="w-5 h-5" />
              Lưu Cài Đặt Hệ Thống
            </button>
          </div>
        </SettingSection>

        {/* Notifications */}
        <SettingSection title="Thông Báo" icon={BellIcon}>
          <SettingItem label="Thông báo Email" description="Gửi thông báo qua email">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.emailNotifications}
                onChange={(e) => setNotifications({ ...notifications, emailNotifications: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </SettingItem>
          <SettingItem label="Thông báo SMS" description="Gửi thông báo qua SMS">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.smsNotifications}
                onChange={(e) => setNotifications({ ...notifications, smsNotifications: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </SettingItem>
          <SettingItem label="Thông báo Push" description="Thông báo đẩy trên trình duyệt">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.pushNotifications}
                onChange={(e) => setNotifications({ ...notifications, pushNotifications: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </SettingItem>
          <SettingItem label="Thông báo đơn hàng" description="Thông báo khi có đơn hàng mới">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.orderNotifications}
                onChange={(e) => setNotifications({ ...notifications, orderNotifications: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </SettingItem>
          <div className="pt-4">
            <button
              onClick={() => handleSave('thông báo')}
              className="w-full px-4 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
            >
              <CheckIcon className="w-5 h-5" />
              Lưu Cài Đặt Thông Báo
            </button>
          </div>
        </SettingSection>

        {/* Security */}
        <SettingSection title="Bảo Mật" icon={ShieldCheckIcon}>
          <SettingItem label="Xác thực 2 yếu tố" description="Yêu cầu xác thực 2 yếu tố cho admin">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={security.twoFactorAuth}
                onChange={(e) => setSecurity({ ...security, twoFactorAuth: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </SettingItem>
          <SettingItem label="Thời gian hết hạn phiên (phút)" description="Thời gian tự động đăng xuất">
            <input
              type="number"
              min="5"
              max="1440"
              value={security.sessionTimeout}
              onChange={(e) => setSecurity({ ...security, sessionTimeout: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </SettingItem>
          <SettingItem label="Độ dài mật khẩu tối thiểu" description="Số ký tự tối thiểu cho mật khẩu">
            <input
              type="number"
              min="6"
              max="32"
              value={security.passwordMinLength}
              onChange={(e) => setSecurity({ ...security, passwordMinLength: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </SettingItem>
          <SettingItem label="Yêu cầu mật khẩu mạnh" description="Yêu cầu chữ hoa, số và ký tự đặc biệt">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={security.requireStrongPassword}
                onChange={(e) => setSecurity({ ...security, requireStrongPassword: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </SettingItem>
          <SettingItem label="Số lần đăng nhập sai tối đa" description="Khóa tài khoản sau N lần đăng nhập sai">
            <input
              type="number"
              min="3"
              max="10"
              value={security.maxLoginAttempts}
              onChange={(e) => setSecurity({ ...security, maxLoginAttempts: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </SettingItem>
          <div className="pt-4">
            <button
              onClick={() => handleSave('bảo mật')}
              className="w-full px-4 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
            >
              <CheckIcon className="w-5 h-5" />
              Lưu Cài Đặt Bảo Mật
            </button>
          </div>
        </SettingSection>
      </div>
    </div>
  )
}

export default SettingsManagement

