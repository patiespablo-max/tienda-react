import  { Link} from 'react-router-dom'
import NavBar from './NavBar'
function Header() {
  return (
      <header className="header">
      <Link to="/" className="logo">⚡ PabloTecno</Link>
      <NavBar />
    </header>
  )
}

export default Header
