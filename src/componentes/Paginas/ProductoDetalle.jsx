import { useParams } from "react-router-dom";
import ItemDetailContainer from '../Productos/ItemDetailContainer.jsx'

function ProductoDetalle(){
    const { id } = useParams()
    return(
        <section>
            <h1>Detalle del Producto {id}</h1>
            <ItemDetailContainer />
        </section>
    )
}
export default ProductoDetalle