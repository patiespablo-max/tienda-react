import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (producto, cantidad) => {
    setCart((carritoActual) => {
      const existe = carritoActual.find((item) => item.id === producto.id)

      if (existe) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? // Nunca superamos el stock disponible
              { ...item, cantidad: Math.min(item.cantidad + cantidad, producto.stock) }
            : item
        )
      }

      return [...carritoActual, { ...producto, cantidad }]
    })
  }

  const removeFromCart = (id) => {
    setCart((carritoActual) => carritoActual.filter((item) => item.id !== id))
  }

  const clearCart = () => setCart([])

  // Valores calculados: no se guardan en el estado, se recalculan solos
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0)
  const totalPrecio = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrecio }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}