import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const PageTransition = ({ children, className = '' }) => {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (containerRef.current) {
      const element = containerRef.current
      
      // Initial state - fade out
      element.style.opacity = '0'
      element.style.transform = 'translateY(8px)'
      
      // Smooth fade in với easing cực kỳ mượt
      const rafId = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (element) {
            element.style.transition = 'opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            element.style.opacity = '1'
            element.style.transform = 'translateY(0)'
          }
        })
      })

      return () => cancelAnimationFrame(rafId)
    }
  }, [location.pathname])

  return (
    <div 
      ref={containerRef} 
      className={`page-transition ${className}`}
      style={{
        willChange: 'opacity, transform',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)'
      }}
    >
      {children}
    </div>
  )
}

export default PageTransition
