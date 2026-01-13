import React from 'react'
import Skeleton from './Skeleton'

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-3">
      <Skeleton variant="card" className="aspect-[4/5] mb-4" />
      <div className="px-3 pb-3 space-y-3">
        <div className="flex justify-between">
          <Skeleton variant="text" className="w-16 h-4" />
          <Skeleton variant="text" className="w-12 h-4" />
        </div>
        <Skeleton variant="title" className="w-full h-5 mb-2" />
        <Skeleton variant="text" className="w-3/4 h-6" />
      </div>
    </div>
  )
}

export default ProductCardSkeleton

