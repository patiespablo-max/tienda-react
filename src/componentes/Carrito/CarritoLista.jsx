import { Link } from 'react-router-dom'
import { useCart } from '../Context/CarritoContext'

// Página del carrito ( ruta "/carrito" )
// Toda la información sale directamente del CartContext.
function Carrito() {
  const { cart, removeFromCart, clearCart, totalItems, totalPrecio } = useCart()

  // Carrito vacío: mostramos un mensaje y un camino para seguir comprando
  if (cart.length === 0) {
    return (
      <section className="aviso">
        <h1>Tu carrito está vacío</h1>
        <Link to="/productos" className="boton">Ver productos</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>Carrito ({totalItems})</h1>
      <ul className="carrito-lista">
        {cart.map((item) => (
          <li key={item.id} className="carrito-item">
            <img src={item.imagen} alt={item.nombre} />
            <div className="carrito-item-info">
              <h3>{item.nombre}</h3>
              <p>{item.cantidad} x ${item.precio}</p>
            </div>
            {/* Subtotal = precio unitario por cantidad */}
            <strong>${item.precio * item.cantidad}</strong>
            <button onClick={() => removeFromCart(item.id)}>✕</button>
          </li>
        ))}
      </ul>
      <p>Total: <strong>${totalPrecio}</strong></p>
      <button className="boton" onClick={clearCart}>Vaciar carrito</button>
    </section>
  )
}
export default Carrito