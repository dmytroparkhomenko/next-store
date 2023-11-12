"use client"

// Next
import Link from "next/link"

// Hooks
import { useState } from 'react';

// UI
import AddToCart from '@/components/product/add-to-cart'
import Alert from '@/components/product/alert'

export default function ProductLabel({product}) {
  const [isAlertOpen, setAlertOpen] = useState(false)

  return (
    <div className="relative">
      {isAlertOpen ? <Alert setAlertOpen={setAlertOpen}/> : null}
      <h2 className="text-3xl mb-4">{product.title}</h2>
      <div className='text-2xl text-violet-500 mb-4'>${product.price}</div>
      <p className='mb-4'>{product.description}</p>
      <div 
        style={
          product.rating.rate > 3.9 ? {borderColor: '#22c55e', backgroundColor: '#22c55e'} 
          : product.rating.rate > 2.9 ? {borderColor: '#facc15', backgroundColor: '#facc15'}
          : {borderColor: '#b91c1c	', backgroundColor: '#b91c1c'}
        }
        className='py-1 px-3 mb-4 inline-block border rounded-full text-white'>Rating: {product.rating.rate}
      </div>
      <div className='py-1 px-3 ml-2 mb-4 inline-block border border-indigo-500 rounded-full'>Reviews: {product.rating.count}</div>
      <p className='mb-4 text-gray-400'>
          <Link href={`/store/${product.category}`}>
            Category: #{product.category}
          </Link>
      </p>
      <AddToCart productData={product} isAlertOpen={isAlertOpen} setAlertOpen={setAlertOpen}/> 
    </div>
  )
}