"use client"

import { CartIcon } from '@/components/symbols/svg'

export default function CheckoutForm({total, shippingCost, productsData, createCheckoutSession}) {

  const submitHandler = () => createCheckoutSession(productsData)

  return (
    <form action={submitHandler}>
      <h3 className='text-2xl mb-2 pb-1 border-b-2'>
        Your total: <span className='text-violet-500'>${total}</span>
      </h3>
      <div className='text-xl mb-4'>
        shipping cost: <span className='text-violet-500'>${shippingCost}</span>
      </div>
      <button
        type="submit"
        className={'button w-full rounded-md bg-violet-500 text-white text-lg hover:text-[#ececec] active:text-white focus:text-white'}>
          <div className='absolute left-0 ml-4'>
            <CartIcon/>
          </div> 
          Go to checkout
      </button>
  </form>
  )
} 