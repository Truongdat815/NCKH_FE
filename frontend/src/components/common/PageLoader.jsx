import React from 'react'
import LoadingSpinner from './LoadingSpinner'

const PageLoader = ({ message = 'Đang tải...' }) => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center space-y-4 animate-fade-in-up">
        <LoadingSpinner size="lg" className="mx-auto" />
        <p className="text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  )
}

export default PageLoader

