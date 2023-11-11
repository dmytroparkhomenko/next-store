import { useContext } from 'react';
import { ProductsDataContext } from '@/context/productsContext';
import ProductItem from './product-item'

export default function ProductsList() {

    const products = useContext(ProductsDataContext);

    return (
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {products.map((product, index) => {
               return <ProductItem key={index} product={product}/>
            })}
        </div>
    )
} 