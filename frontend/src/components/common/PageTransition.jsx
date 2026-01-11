import React from 'react'

const PageTransition = ({ children }) => {
  // Bỏ hoàn toàn Framer Motion, dùng div thường để test
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {children}
    </div>
  )
}

export default PageTransition
