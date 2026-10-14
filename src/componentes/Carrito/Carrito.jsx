import { Link } from 'react-router-dom'
import { useCart } from '../Context/CarritoContext'
function CartWidget() {
  const { totalItems } = useCart()

  return (
    <Link to="/carrito" className="cart-widget" aria-label={`Carrito: ${totalItems} productos`}>
      🛒
      {}
      {totalItems > 0 && <span className="cart-widget-numero">{totalItems}</span>}
    </Link>
  )
}

export default CartWidget