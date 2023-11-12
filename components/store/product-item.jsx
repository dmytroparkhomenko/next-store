"use client"

import AddToCart from "@/components/product/add-to-cart"
import Link from "next/link"

import Alert from '@/components/product/alert'
import { useState } from 'react';

export default function ProductItem({product}) {

    const [isAlertOpen, setAlertOpen] = useState(false)

    return (
        <div className="flex flex-row justify-between group relative card">
            {isAlertOpen ? <Alert setAlertOpen={setAlertOpen}/> : null}
            <div className="flex flex-col justify-between card-content">
                <div className="is-flex is-flex-direction-column is-align-items-flex-start">
                    <span className="tag is-link is-normal">Rating: {product.rating.rate}</span>  
                    <span className="tag is-link is-normal mt-1 mb-3">Reviews: {product.rating.count}</span>  
                </div>
                <Link href={`/store/${product.category}/${product.id}`}>
                    <img 
                        src={product.image} 
                        alt={product.description}
                        className="image is-128x128 mx-auto"
                    />
                    <p className="text-xl font-medium mt-3 mb-2">
                        {product.title.length > 22
                        ? `${product.title.slice(0, 22)}...` 
                        : product.title}
                    </p>
                </Link>
                <p className="font-light">
                    {product.description.length > 120
                    ? `${product.description.slice(0, 120)}...` 
                    : product.description}
                </p> 
                <div className="purchase my-2.5 flex items-center justify-between">
                    <Link 
                        className="font-light text-gray-500"
                        href={`/store/${product.category}`}
                    >
                        #{product.category}
                    </Link>
                    <a className='is-size-5'>
                        ${product.price}
                    </a>
                </div>
                <Link 
                    className="button is-fullwidth" 
                    href={`/store/${product.category}/${product.id}`}
                >
                    Show details
                </Link>
                <AddToCart classNames={'button is-info is-fullwidth mt-1.5'} productData={product} setAlertOpen={setAlertOpen}/>
            </div>
        </div>
    )
}