import React from 'react'

/**
 * Logo component for AgriSmart
 * Modern design combining agriculture (leaf) with technology (connected nodes)
 */
const Logo = ({ 
  size = 'md', 
  showText = true, 
  variant = 'default',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  }

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12'
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  }

  const gradientClasses = {
    default: 'from-emerald-500 via-green-500 to-teal-600',
    admin: 'from-purple-500 via-violet-600 to-indigo-600',
    enterprise: 'from-blue-500 via-cyan-500 to-teal-600'
  }

  const shadowClasses = {
    default: 'shadow-emerald-200/50',
    admin: 'shadow-purple-200/50',
    enterprise: 'shadow-blue-200/50'
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} bg-gradient-to-br ${gradientClasses[variant]} rounded-2xl flex items-center justify-center shadow-lg ${shadowClasses[variant]} group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 relative overflow-hidden`}>
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${variant === 'default' ? 'from-emerald-400/30' : variant === 'admin' ? 'from-purple-400/30' : 'from-blue-400/30'} to-transparent`}></div>
        
        {/* Modern Logo SVG - Elegant leaf with smart technology network */}
        <svg 
          className={`${iconSizes[size]} text-white relative z-10`} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Leaf - Elegant curved shape */}
          <path 
            d="M12 2C8.5 2 6 4.5 6 8C6 11 8 13.5 11 14.5C11.5 14.7 12 14.8 12.5 15C13 15.2 13.5 15.3 14 15.5C15.5 16 17 15.5 18 14.5C19 13.5 19.5 12 19.5 10.5C19.5 8 18 6 16 5.5C15 5 14 4.5 13 4C12.5 3.5 12 2.5 12 2Z" 
            fill="currentColor" 
            opacity="0.98"
          />
          
          {/* Leaf Veins - Natural and flowing */}
          <path 
            d="M12 2L12 15.5M8 6.5L12 4.5L16 6.5M8 10L12 8L16 10M8 13L12 11.5L16 13" 
            stroke="currentColor" 
            strokeWidth="1.3" 
            strokeLinecap="round" 
            opacity="0.75"
          />
          
          {/* Smart Technology Network Nodes */}
          <circle cx="7.5" cy="7" r="1.3" fill="currentColor" opacity="1" />
          <circle cx="16.5" cy="7" r="1.3" fill="currentColor" opacity="1" />
          <circle cx="7.5" cy="11" r="1.3" fill="currentColor" opacity="1" />
          <circle cx="16.5" cy="11" r="1.3" fill="currentColor" opacity="1" />
          <circle cx="12" cy="19" r="1.3" fill="currentColor" opacity="1" />
          
          {/* Network Connection Lines - Smart agriculture */}
          <path 
            d="M7.5 7L12 4.5L16.5 7M7.5 11L12 9L16.5 11M7.5 11L12 13L16.5 11M12 13L12 19" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeLinecap="round" 
            opacity="0.6"
          />
          
          {/* Tech Accent Dots */}
          <circle cx="10" cy="9" r="0.7" fill="currentColor" opacity="0.8" />
          <circle cx="14" cy="9" r="0.7" fill="currentColor" opacity="0.8" />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizes[size]} font-bold text-gray-900 leading-none tracking-tight group-hover:text-emerald-600 transition-colors duration-200`}>
            AgriSmart
          </span>
          <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider mt-0.5">
            Smart Agriculture
          </span>
        </div>
      )}
    </div>
  )
}

export default Logo

