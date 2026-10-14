import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <ul className="navbar-lista">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar