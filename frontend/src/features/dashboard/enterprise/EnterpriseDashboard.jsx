import React from 'react'
import { PlusIcon, TrashIcon, PencilSquareIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline'
import PageTransition from '../../../components/common/PageTransition'
import Badge from '../../../components/common/Badge'

const EnterpriseDashboard = () => {
  const products = [
    { id: 1, name: 'Phân bón NPK Đầu Trâu', stock: 1200, sold: 450, status: 'Còn hàng' },
    { id: 2, name: 'Thuốc trừ sâu Bio-B', stock: 0, sold: 120, status: 'Hết hàng' },
  ]

  return (
    <PageTransition>
      <div className="py-8 space-y-10">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-5xl font-[900] text-gray-900 tracking-tighter uppercase">Quản Lý Sản Phẩm</h1>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-2">Dành cho Doanh Nghiệp</p>
          </div>
          <button className="px-8 py-4 bg-emerald-600 text-white font-black rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center gap-2">
            <PlusIcon className="w-6 h-6" /> THÊM VẬT TƯ
          </button>
        </div>

        <div className="bg-white rounded-[45px] border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {['Sản phẩm', 'Tồn kho', 'Đã bán', 'Trạng thái', 'Hành động'].map(h => (
                  <th key={h} className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map(p => (
                <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <p className="font-black text-gray-900">{p.name}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">SKU: #AGRI-{p.id}00X</p>
                  </td>
                  <td className="px-8 py-6 font-bold text-gray-600">{p.stock} kg/lít</td>
                  <td className="px-8 py-6 font-bold text-emerald-600">{p.sold}</td>
                  <td className="px-8 py-6">
                    <Badge color={p.stock > 0 ? 'success' : 'danger'}>{p.status}</Badge>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex gap-2">
                      <button className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all"><PencilSquareIcon className="w-5 h-5" /></button>
                      <button className="p-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all"><TrashIcon className="w-5 h-5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageTransition>
  )
}

export default EnterpriseDashboard

