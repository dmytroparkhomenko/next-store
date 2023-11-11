"use client"

import Catalog from '../store/catalog'
import { useRouter } from 'next/navigation'

export default async function OurProductsSection({products}) {
  const router = useRouter(); 

  return (
    <>
      <h2 className="text-3xl mb-4">Popular now</h2>
      <Catalog data={products} categoriesData={false}/>

      <button 
          className='mt-5 button is-info is-light is-medium is-flex mx-auto'
          onClick={() => router.push('/store')} >
          Show all products
      </button>
    </>
  )
}