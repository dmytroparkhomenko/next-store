"use client"

import { createContext, useContext, useState} from "react"

const cartContext = createContext()

export default function useCart() {
  return useContext(cartContext)
}

export function CartProvider({children}) {
  const [cart, setCart] = useState([])

  const getFullCartQuantity = () => {
    return cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity
    }, 0) 
  }

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const updateQuantityIncrement = (id) => {
    setCart(
      cart.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }  

  const updateQuantityDecrement = (id) => {
    setCart( 
      cart.map(item => 
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }  

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id)); 
  }

  return (
    <cartContext.Provider value={{cart, addToCart, removeFromCart, updateQuantityIncrement, updateQuantityDecrement, getFullCartQuantity}}>
      {children}
    </cartContext.Provider>
  )
} 