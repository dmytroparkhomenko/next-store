// TS Interface
import Product from '@/interfaces/Product'

// Next.js
import Link from "next/link"

// UI 
import { Cross, Increment, Decrement} from '@/components/symbols/svg'

export default function ProductItem({product, removeFromCart, updateQuantityIncrement, updateQuantityDecrement}) {

  const {id, title, price, image, category, quantity}:Product = product;

  return (
    <div className="flex flex-row justify-between group relative card">
      <button 
        onClick={() => removeFromCart(id)}
        className="absolute -right-2 -top-2 -ml-2 h-6 w-6 rounded-full bg-gray-600 text-[11px] font-medium text-white text-center">
        <Cross />
      </button>
      <div className="flex flex-col justify-between p-4">

        <div>
          <Link href={`/store/${category}/${id}`}>
            <img 
                src={image} 
                alt={title}
                className="image w-20 h-20 mx-auto mb-4"
            />
          </Link>

          <Link href={`/store/${category}/${id}`} className="text-base font-semibold mt-2">
            {title.length > 25
              ? `${title.slice(0, 25)}...` 
              : title}
          </Link>

          <div className="text-gray-500 mt-1">#{category}</div>
        </div>

        <div>
          <div>
            <div className="text-lg text-violet-500 mt-2">
              ${+(price * quantity).toFixed(2)}
              {quantity > 1 ? <span className="ml-2 text-xs text-gray-500">(*${price} each)</span> : null}
            </div>
          </div>

          <div className="mt-3 w-full flex h-9 items-center justify-evenly rounded-full border border-neutral-200">
            {quantity > 1 ? 
            <button 
              className="p-1"
              onClick={() => updateQuantityDecrement(id)}>
              <Decrement />
            </button> : <Decrement />}

            <p>{quantity}</p>

            {quantity < 50 ? 
            <button
              className="p-1"
              onClick={() => updateQuantityIncrement(id)}>
              <Increment />
            </button> : <p className="text-xs">max quantity</p>}
          </div>
        </div>

      </div>
    </div>
  )
}