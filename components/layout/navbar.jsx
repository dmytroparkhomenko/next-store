"use client"

// Next
import Link from 'next/link'

// Context
import useCart from 'context/cartContext'

// UI
import { CartIcon } from '../symbols/svg';

export default function Navbar() {
    const { getFullCartQuantity } = useCart();

    const quantity = getFullCartQuantity();

    return (
      <header>
        <nav className="px-5 py-2 flex items-center justify-between">
          <div>
            <Link className="text-2xl" href="/">
              <span className="font-bold mr-1">NEXT</span>
              <span className="font-light">store</span>
            </Link>
          </div>

          <div className="p-2 flex font-medium gap-7">
            <Link 
              href="/">
              Home
            </Link>

            <Link 
              href="/store">
              Store
            </Link>

            <Link 
              href="/blog">
              Blog
            </Link>
          </div>
          <div className='p-2'>
            {/* "absolute right-7 top-4"*/}
            <Link 
              href="/cart"
              className="navbar-item font-medium border rounded-md p-2.5">
              <CartIcon /> 
              {quantity > 0 ? <div className="absolute right-0 top-0 -mt-2 -mr-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white text-center">{quantity}</div> : null}
            </Link>
          </div>
        </nav>
        <hr className="pt-0 my-0 h-0.5"/>
      </header>
    )   
}