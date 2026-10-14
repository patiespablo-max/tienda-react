import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './componentes/Layout/Layout.jsx'
import Home from './componentes/Paginas/Home.jsx'
import Productos from './componentes/Paginas/Productos.jsx'
import ProductoDetalle from './componentes/Paginas/ProductoDetalle.jsx'
import CarritoLista from './componentes/Carrito/CarritoLista.jsx'
import NotFound from './componentes/Paginas/NotFound.jsx'
import ItemDetailContainer from './componentes/Productos/ItemDetailContainer.jsx'
import { CartProvider } from './componentes/Context/CarritoContext.jsx'
function App() {
  return (
        <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/productos"
            element={<Productos mensaje="Productos Destacados" />}
          />
          <Route
            path="/destacados"
            element={<Productos mensaje="Todos los Productos" />}
          />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CarritoLista />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
        </CartProvider>

  )
}

export default App