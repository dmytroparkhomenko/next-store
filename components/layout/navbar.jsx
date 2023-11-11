"use client"

// Next
import Link from 'next/link'

// Context
import useCart from 'context/cartContext'

// UI
import { CartIcon } from '../symbols/svg';

export default function Navbar() {
    const { cart } = useCart();

    return (
      <header>
        <nav className="navbar p-2 is-flex">
          <div className="navbar-brand">
            <Link className="navbar-item" href="/">
              <span className="is-size-4 has-text-weight-bold">Next.js Store</span>
            </Link>
          </div>

          <div className="p-2 is-flex">
            <Link 
              href="/"
              className="navbar-item has-text-weight-medium">
              Home
            </Link>

            <Link 
              href="/store"
              className="navbar-item has-text-weight-medium">
              Store
            </Link>

            <Link 
              href="/blog"
              className="navbar-item has-text-weight-medium">
              Blog
            </Link>

            <Link 
              href="/cart"
              className="navbar-item has-text-weight-medium absolute right-7 top-4 border rounded-md p-2.5">
              <CartIcon /> 
              {cart.length > 0 ? <div className="absolute right-0 top-0 -mt-2 -mr-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white text-center">{cart.length}</div> : null}
            </Link>
          </div>
        </nav>
        <hr className="pt-0 mt-0 h-0.5"/>
      </header>
    )   
}