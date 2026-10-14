import { Link } from 'react-router-dom'

// Tarjeta de UN producto. Es reutilizable: no sabe de dónde salen los datos,
// solo recibe lo que necesita por props y lo muestra.
function Item({ id, nombre, precio, imagen, categoria }) {
  return (
    <article className="item">
      <img src={imagen} alt={nombre} loading="lazy" />
      <div className="item-cuerpo">
        <span className="item-categoria">{categoria}</span>
        <h3>{nombre}</h3>
        <p className="item-precio">${precio}</p>
        {/* Link arma la URL del detalle con el id de este producto */}
        <Link to={`/producto/${id}`} className="boton">Ver detalle</Link>
      </div>
    </article>
  )
}
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'

// Busca UN producto según el id de la URL y se lo pasa a <ItemDetail />
function ItemDetailContainer() {
    const { id } = useParams()
    const [producto, setProducto] = useState(null)
    const [cargando, setCargando] = useState(true)

    // Ponemos [id] como dependencia: si cambia el id en la URL,
    // el efecto se vuelve a ejecutar y busca el producto nuevo.
    useEffect(() => {
        setCargando(true)
        fetch('/data/productos.json').then((respuesta) => respuesta.json())
            .then((datos) => {
                // El id de la URL es texto ("3"), el del JSON es número (3):
                // por eso lo convertimos con Number() antes de comparar.
                const encontrado = datos.find((p) => p.id === Number(id))
                setProducto(encontrado ?? null)
            })
            .finally(() => setCargando(false))
    }, [id])

    if (cargando) return <p className="aviso">Cargando producto...</p>
    if (!producto) return <p className="aviso">No encontramos ese producto.</p>

    return <ItemDetail producto={producto} />
}
export default ItemDetailContainer