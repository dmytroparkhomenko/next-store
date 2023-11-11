"use client"

// Next
import Link from 'next/link';

// Cart 
import useCart from 'context/cartContext'

// UI
import ProductItem from '@/components/cart/product-item';

// checkout
import { FREE_SHIPPING_UP, SHIPPING_COST } from 'config';
import CheckoutForm from '@/components/cart/checkout-form'
import { createCheckoutSession } from '@/api/checkout-sessions/index'

export default function Cart() {

  const { cart, removeFromCart, updateQuantityIncrement, updateQuantityDecrement } = useCart();  

  const ActualPrice = +(cart.reduce((accumulator, currentValue) => 
    accumulator + (currentValue.price * currentValue.quantity), 0)).toFixed(2)
    
  const shippingCost = ActualPrice >= FREE_SHIPPING_UP ? 0 : SHIPPING_COST 
  const total = (ActualPrice + shippingCost).toFixed(2)

  return (
    <>
      <h2 className='text-3xl mb-5'>My Cart</h2>

      {cart.length === 0 
      ? 
        <div className='text-center'>
          <h3 className='text-[24px] text-center font-medium'>Your cart is empty 😔</h3> 
          <Link type="button" href='/store' className={"button rounded-md bg-violet-500 text-white text-lg hover:text-[#ececec] active:text-white focus:text-white mx-auto text-[16px] mt-4"}>Go some shopping to correct it!</Link>
        </div> 
      : 
      <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-3/4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {cart.map((item, index) => {
              return <ProductItem key={index} product={item} removeFromCart={removeFromCart} updateQuantityIncrement={updateQuantityIncrement} updateQuantityDecrement={updateQuantityDecrement}/>
            })}  
          </div>
          <div className='w-full p-4 md:ml-4 md:w-1/4 border-t-2 md:border-0 md:border-l-2'>
            <CheckoutForm total={total} shippingCost={shippingCost} productsData={cart} createCheckoutSession={createCheckoutSession}/>
          </div>
      </div>}
    </>
  )
} 
