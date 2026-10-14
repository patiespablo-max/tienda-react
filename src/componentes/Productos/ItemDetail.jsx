import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/CarritoContext'
// Muestra toda la info de un producto y permite elegir la cantidad
function ItemDetail({ producto }) {
  const [cantidad, setCantidad] = useState(1)

  // No dejamos bajar de 1 ni pasar del stock disponible
  const restar = () => cantidad > 1 && setCantidad(cantidad - 1)
  const sumar = () => cantidad < producto.stock && setCantidad(cantidad + 1)

  // const handleAgregar = () => {
  //   // En el paso 6 esto va a llamar a addToCart del CartContext
  //   console.log('Agregar', cantidad, 'x', producto.nombre)
  // }
  const { addToCart } = useCart()
  const [agregado, setAgregado] = useState(false)
  const handleAgregar = () => {
    addToCart(producto, cantidad)
    setAgregado(true)
  }
  return (
    <article className="detalle">
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="detalle-info">
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <p className="item-precio">${producto.precio}</p>
        <div className="contador">
          <button onClick={restar}>−</button>
          <span>{cantidad}</span>
          <button onClick={sumar}>+</button>
        </div>
        <button className="boton" onClick={handleAgregar}>Agregar al carrito</button>
        {agregado && (
          <p className="confirmacion">
            ¡Agregado! <Link to="/carrito">Ir al carrito</Link>
          </p>
        )}
      </div>
    </article>
  )
}

export default ItemDetail