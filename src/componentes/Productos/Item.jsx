import { Link } from 'react-router-dom'


export function Item({ id, nombre, precio, imagen, categoria }) {
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
export default Item