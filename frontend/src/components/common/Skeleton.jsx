import React from 'react'

const Skeleton = ({ className = '', variant = 'default' }) => {
  const variants = {
    default: 'skeleton rounded-lg',
    circle: 'skeleton rounded-full',
    text: 'skeleton rounded h-4',
    title: 'skeleton rounded h-6',
    card: 'skeleton rounded-3xl',
  }

  return <div className={`${variants[variant]} ${className}`}></div>
}

export default Skeleton

