// API
import { getSingleCategory } from '@/api/store-fetching/index.js'

// React & next imports 
import Link from 'next/link' 

// UI
import ProductItem from '@/components/store/product-item';

export default async function CategoryPage({params}) {
  const categoryProducts = await getSingleCategory(params.category)

  return (
    <>
      <Link 
        href="/store/"
        className='block mb-2'
      >
        &#8592; go to all categories
      </Link>
      <h2 className="is-size-3 mb-4">Category: {decodeURIComponent(params.category)}</h2>
      <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {categoryProducts.map((product, index) => {
            return <ProductItem key={index} product={product} />
          })}
      </div>
    </>
  )
} 
