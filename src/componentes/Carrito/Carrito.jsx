import { Link } from 'react-router-dom'
import { useCart } from '../Context/CarritoContext'
// Ícono del carrito con la cantidad total de productos.
// Como lee totalItems del contexto, se actualiza solo cada vez que
// alguien agrega o quita algo, sin pasar props por el medio.
function CartWidget() {
  const { totalItems } = useCart()

  return (
    <Link to="/carrito" className="cart-widget" aria-label={`Carrito: ${totalItems} productos`}>
      🛒
      {/* El numerito solo aparece si hay algo en el carrito */}
      {totalItems > 0 && <span className="cart-widget-numero">{totalItems}</span>}
    </Link>
  )
}

export default CartWidget