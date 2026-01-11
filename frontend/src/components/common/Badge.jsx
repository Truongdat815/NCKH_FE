import React from 'react'

const Badge = ({ children, color = 'primary' }) => {
  const colors = {
    primary: 'bg-primary-50 text-primary-700 border-primary-100',
    secondary: 'bg-secondary-50 text-secondary-700 border-secondary-100',
    success: 'bg-green-50 text-green-700 border-green-100',
    danger: 'bg-red-50 text-red-700 border-red-100',
    info: 'bg-blue-50 text-blue-700 border-blue-100',
  }
  
  return (
    <span className={`px-2 py-1 rounded-md text-xs font-semibold border ${colors[color]}`}>
      {children}
    </span>
  )
}

export default Badge

