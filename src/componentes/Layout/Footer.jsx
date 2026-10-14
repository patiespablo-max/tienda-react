const equipo  = [
    {id: 1 , nombre : 'Ana Lopez' , rol : 'Fundadora'},
    {id: 2 , nombre : 'Pedro Sanches' , rol : 'Vendedor'},
    {id: 3 , nombre : 'Joaquin Perez' , rol : 'Encargaro'}

]
function Footer() {
  return (
    <footer className = "footer">
        <div className="fotter-empresa">
            <h3>PabloTech</h3>
            <p>Tienda de Electronica Online desde 2020 </p>
            <p>Santiago Del Estero 217 , capital Federal</p>
            <p>contacto@pablotech.com - (011)5555-4514 </p>

        </div>
        <div className="footer-equipo">
            <h3>Nuestro Equipo</h3>
            <div className="equipo-tarjetas">
                     {equipo.map((persona) => (
                    <article key={persona.id} className="tarjeta-persona">
                        <h4>{persona.nombre}</h4>
                        <p>{persona.rol}</p>
                    </article>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer
