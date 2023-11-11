"use client"

import { useState } from "react"

export default function SearchBar({products, setProducts}) {
  const [input, setInput] = useState('');

  return (
    <div className="flex items-center border-b border-[#dadada]">
      <label htmlFor="search" className="text-base mr-2 text-gray-900">
        Search
      </label>
      <div className="relative rounded-md shadow-sm">
        <input
          type="text"
          name="search"
          className="block w-full rounded border-0 py-1 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Type here"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            if (e.target.value === '') {
              setProducts(products)
              return;
            }
            setProducts(products.filter(item => item.title.includes(input) || item.description.includes(input)))
          }}
        />
      </div>
    </div>
  )
}