import { Link } from 'react-router-dom'

function Home() {
  return (

  <section className="hero">
      <h1>El mismo nivel de las gafas de $200.000 Sin Pagar de mas </h1>
      <p>Diseño Premium.</p>
      <Link to="/productos" className="boton">Ver productos</Link>
    </section>
  )
}

export default Home
