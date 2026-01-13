import React, { useState } from 'react'

const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false)

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  }

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`absolute z-50 ${positions[position]} whitespace-nowrap`}>
          <div className="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-xl">
            {content}
            <div className={`absolute ${position === 'top' ? 'top-full' : 'bottom-full'} left-1/2 -translate-x-1/2 w-0 h-0 border-4 border-transparent ${
              position === 'top' ? 'border-t-gray-900' : 'border-b-gray-900'
            }`}></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Tooltip

