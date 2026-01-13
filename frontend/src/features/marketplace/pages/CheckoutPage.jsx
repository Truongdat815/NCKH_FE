import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BanknotesIcon, WalletIcon, CreditCardIcon } from '@heroicons/react/24/outline'
import PageTransition from '@/shared/components/common/PageTransition'
import { useToast } from '@/shared/hooks/useToast'

const CheckoutPage = () => {
  const navigate = useNavigate()
  const { showSuccess, showError } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    payment: 'cash'
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ và tên'
    if (!formData.phone.trim()) newErrors.phone = 'Vui lòng nhập số điện thoại'
    else if (!/^[0-9]{10,11}$/.test(formData.phone)) newErrors.phone = 'Số điện thoại không hợp lệ'
    if (!formData.address.trim()) newErrors.address = 'Vui lòng nhập địa chỉ'
    if (!formData.payment) newErrors.payment = 'Vui lòng chọn phương thức thanh toán'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      showSuccess('Đặt hàng thành công!')
      setTimeout(() => {
        navigate('/checkout/success')
      }, 1000)
    } else {
      showError('Vui lòng điền đầy đủ thông tin')
    }
  }

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight text-center">Xác nhận đơn hàng</h1>
        
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xl space-y-6">
          <section className="space-y-4">
            <h3 className="text-base font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-2">
              <span className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center text-xs">1</span> Thông tin nhận hàng
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Họ và tên *" 
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                    if (errors.name) setErrors({ ...errors, name: '' })
                  }}
                  className={`w-full p-4 bg-gray-50 rounded-2xl border transition-all duration-200 font-medium outline-none ${
                    errors.name 
                      ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                  } focus:bg-white`}
                />
                {errors.name && <p className="text-xs text-red-600 mt-1 ml-1">{errors.name}</p>}
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Số điện thoại *" 
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value })
                    if (errors.phone) setErrors({ ...errors, phone: '' })
                  }}
                  className={`w-full p-4 bg-gray-50 rounded-2xl border transition-all duration-200 font-medium outline-none ${
                    errors.phone 
                      ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                  } focus:bg-white`}
                />
                {errors.phone && <p className="text-xs text-red-600 mt-1 ml-1">{errors.phone}</p>}
              </div>
              <div className="md:col-span-2">
                <input 
                  type="text" 
                  placeholder="Địa chỉ chi tiết *" 
                  value={formData.address}
                  onChange={(e) => {
                    setFormData({ ...formData, address: e.target.value })
                    if (errors.address) setErrors({ ...errors, address: '' })
                  }}
                  className={`w-full p-4 bg-gray-50 rounded-2xl border transition-all duration-200 font-medium outline-none ${
                    errors.address 
                      ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                  } focus:bg-white`}
                />
                {errors.address && <p className="text-xs text-red-600 mt-1 ml-1">{errors.address}</p>}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-base font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-2">
              <span className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center text-xs">2</span> Phương thức thanh toán
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { value: 'cash', label: 'Tiền mặt', icon: BanknotesIcon },
                { value: 'wallet', label: 'Ví AgriSmart', icon: WalletIcon },
                { value: 'atm', label: 'Thẻ ATM', icon: CreditCardIcon }
              ].map(m => {
                const IconComponent = m.icon
                return (
                  <label 
                    key={m.value} 
                    className={`group p-4 bg-gray-50 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex items-center gap-3 hover:scale-105 active:scale-95 ${
                      formData.payment === m.value
                        ? 'border-emerald-500 bg-emerald-50 shadow-md'
                        : 'border-transparent hover:border-emerald-300 hover:bg-emerald-50'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="payment" 
                      value={m.value}
                      checked={formData.payment === m.value}
                      onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                      className="text-emerald-600 focus:ring-emerald-500 w-4 h-4" 
                    />
                    <IconComponent className={`w-6 h-6 transition-colors duration-200 ${
                      formData.payment === m.value ? 'text-emerald-600' : 'text-gray-400 group-hover:text-emerald-600'
                    }`} />
                    <span className={`font-bold transition-colors duration-200 ${
                      formData.payment === m.value ? 'text-emerald-700' : 'text-gray-700 group-hover:text-emerald-700'
                    }`}>
                      {m.label}
                    </span>
                </label>
                )
              })}
            </div>
          </section>

          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-200/50 hover:bg-emerald-700 transition-all duration-200 text-base uppercase tracking-wider active:scale-[0.98] text-center group relative overflow-hidden hover:shadow-2xl hover:-translate-y-1"
            >
              <span className="relative z-10">Xác nhận đặt hàng ngay</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          </form>
        </div>
      </div>
    </PageTransition>
  )
}

export default CheckoutPage
