import React from 'react'
import PageTransition from '../../../components/common/PageTransition'

const CheckoutPage = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-[900] text-gray-900 tracking-tight text-center">Xác nhận đơn hàng</h1>
        
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xl space-y-6">
          <section className="space-y-4">
            <h3 className="text-base font-[900] text-emerald-600 uppercase tracking-wider flex items-center gap-2">
              <span className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center text-xs">1</span> Thông tin nhận hàng
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Họ và tên" className="p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 outline-none" />
              <input type="text" placeholder="Số điện thoại" className="p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 outline-none" />
              <input type="text" placeholder="Địa chỉ chi tiết" className="md:col-span-2 p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-base font-[900] text-emerald-600 uppercase tracking-wider flex items-center gap-2">
              <span className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center text-xs">2</span> Phương thức thanh toán
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Tiền mặt', 'Ví AgriSmart', 'Thẻ ATM'].map(m => (
                <label key={m} className="p-4 bg-gray-50 rounded-2xl border-2 border-transparent cursor-pointer hover:border-emerald-200 transition-all flex items-center gap-3">
                  <input type="radio" name="payment" className="text-emerald-600 focus:ring-emerald-500" />
                  <span className="font-bold text-gray-700">{m}</span>
                </label>
              ))}
            </div>
          </section>

          <button className="w-full py-4 bg-emerald-600 text-white font-[900] rounded-2xl shadow-xl shadow-emerald-200/50 hover:bg-emerald-700 transition-all duration-200 text-base uppercase tracking-wider active:scale-[0.98]">
            Xác nhận đặt hàng ngay
          </button>
        </div>
      </div>
    </PageTransition>
  )
}

export default CheckoutPage
