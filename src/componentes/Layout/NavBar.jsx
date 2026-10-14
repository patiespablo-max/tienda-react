import { Link } from 'react-router-dom'
import Carrito from '../Carrito/Carrito'
function NavBar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <ul className="navbar-lista">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Carrito /></li>      </ul>
    </nav>
  )
}

export default NavBar