import Link from 'next/link'

// API
import { getSingleProduct } from '@/api/store-fetching/index.js' 

// UI
import BreadCrumbs from '@/components/store/bread-crumbs'

// product features
import ProductLabel from '@/components/product/label'

export default async function ProductPage({params}) {
  const product = await getSingleProduct(params['product'][0])

  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
          <BreadCrumbs category={product.category} />
          <img src={product.image} alt={product.description} className="w-3/4 my-4 max-w-sm	mx-auto"/>
        </div>

        <div className='w-full md:w-1/2 md:mt-4 p-4'>
          <ProductLabel product={product} />
        </div>
        
      </div>
    </>
  )
}
