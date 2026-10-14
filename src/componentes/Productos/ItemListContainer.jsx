import { useEffect, useState } from 'react'
import Item from './Item.jsx'

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  // useEffect con [] se ejecuta UNA sola vez, cuando el componente aparece.
  // Es el lugar indicado para pedir datos.
  useEffect(() => {
    fetch('data/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error('No se pudieron cargar los productos')
        return respuesta.json()
      })
      .then((datos) => setProductos(datos))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [])

  // Mientras llegan los datos mostramos un aviso en vez de una página vacía
  if (cargando) return <p className="aviso">Cargando productos...</p>
  if (error) return <p className="aviso aviso-error">{error}</p>

  return (
    <div className="item-lista">
      {productos.map((producto) => (
        // {...producto} pasa todas las propiedades del objeto como props
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  )
}
export default ItemListContainer