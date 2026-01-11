import React from 'react'

const Badge = ({ children, color = 'primary', size = 'md' }) => {
  const colors = {
    primary: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    secondary: 'bg-blue-50 text-blue-700 border-blue-200',
    success: 'bg-green-50 text-green-700 border-green-200',
    danger: 'bg-red-50 text-red-700 border-red-200',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    info: 'bg-blue-50 text-blue-700 border-blue-200',
    gray: 'bg-gray-50 text-gray-700 border-gray-200',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px] rounded-lg',
    md: 'px-2.5 py-1 text-xs rounded-lg',
    lg: 'px-3 py-1.5 text-sm rounded-xl',
  }
  
  return (
    <span className={`inline-flex items-center gap-1 font-bold border ${colors[color]} ${sizes[size]} transition-all duration-200`}>
      {children}
    </span>
  )
}

export default Badge

