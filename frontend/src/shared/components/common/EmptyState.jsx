import React from 'react'
import { Link } from 'react-router-dom'

const EmptyState = ({ 
  icon = '📦', 
  title = 'Không có dữ liệu', 
  description = 'Hiện tại chưa có nội dung nào để hiển thị.',
  actionLabel,
  actionLink,
  actionOnClick
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-24 h-24 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl flex items-center justify-center text-5xl mb-6 shadow-lg animate-scale-in">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-500 font-medium max-w-md mb-8 leading-relaxed">{description}</p>
      {(actionLabel && actionLink) && (
        <Link 
          to={actionLink}
          className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200/50 hover:bg-emerald-700 hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
        >
          {actionLabel}
        </Link>
      )}
      {actionLabel && actionOnClick && (
        <button 
          onClick={actionOnClick}
          className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200/50 hover:bg-emerald-700 hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}

export default EmptyState

