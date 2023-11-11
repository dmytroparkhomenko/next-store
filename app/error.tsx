"use client"

import Link from 'next/link'
 
const NotFound: React.FC = () => {
  return (
    <div className='text-center mt-5'>
      <h2 className='text-2xl font-bold mb-2'>Something went wrong</h2>
      <Link className="button rouned-md bg-violet-500 text-white hover:text-white" href="/">Return Home 🏠</Link>
    </div>
  )
}