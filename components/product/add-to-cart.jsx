"use client"

// Cart Context
import useCart from '@/context/cartContext'; 

export default function AddToCart({productData, classNames, setAlertOpen}) {
  const { addToCart } = useCart();
  const { description, rating, ...rest } = productData; 

  const handleSubmit = () => {
    setAlertOpen(true)
    addToCart(rest)
  }

  return (
    <>
      <button
        onClick={() => handleSubmit()}
        className={classNames || 'button w-full rounded-full bg-violet-500 text-white text-lg hover:text-[#ececec] active:text-white focus:text-white'}>
          <div className='absolute left-0 ml-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
          </div> 
          Add to Cart
      </button>
    </>
  )
}