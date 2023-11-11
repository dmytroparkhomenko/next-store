"use client"

import { useEffect, useState } from 'react'
import { ProductsDataContext } from '@/context/productsContext'

import ProductsList from './products-list';
import FilterBar from './filter-bar';
import SearchBar from './search-bar';  

export default function Catalog({data, categoriesData = false}) {
  const fetchedData = data; 
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(false);

  useEffect(() => {
    setProducts(data)
    setCategories(categoriesData)
  }, [])

  return (
    <>
      {categories ?
        <div className="tabs flex-col sm:flex-row">
          <FilterBar 
            products={fetchedData} 
            categories={categories} 
            setProducts={setProducts}
          />
          <SearchBar 
            products={fetchedData} 
            setProducts={setProducts}
          />
        </div> 
      : null}
      <ProductsDataContext.Provider value={products}>
        <ProductsList/>
      </ProductsDataContext.Provider>
    </>
  )
} 