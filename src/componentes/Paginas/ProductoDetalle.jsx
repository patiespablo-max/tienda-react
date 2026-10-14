import { useParams } from "react-router-dom";
function ProductoDetalle(){
    const { id } = useParams()
    return(
        <section>
            <h1>Detalle del Producto {id}</h1>
        </section>
    )
}
export default ProductoDetalle