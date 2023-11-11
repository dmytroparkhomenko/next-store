"use client"

import { useState } from "react"

export default function FilterBar({products, categories, setProducts}) {
  const [activeTab, changeActiveTab] = useState(-1)

  return (
    <>
      <ul>
        <span className="mr-2 text-base text-gray-900">Category: </span>
        <li 
          className={activeTab === -1 ? "is-active" : null} 
          onClick={() => {
            setProducts(products)
            changeActiveTab(-1)
          }}
        >
            <a>All</a>
        </li>
        {categories ? categories.map((category, index) => {
          return (
            <li 
              key={index} 
              onClick={() => {
                setProducts(products.filter(productItem => productItem.category == category))
                changeActiveTab(index)
              }}
              className={activeTab === index ? "is-active" : null}
            >
              <a>{category}</a>
            </li>
          )
        }) : null}
      </ul>
    </>
  )
}