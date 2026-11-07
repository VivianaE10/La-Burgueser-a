

import { useState } from 'react';

import BarraNavegacion from './componentes/BarraNavegacion';
import ListaProductos from './componentes/ListaProductos';
import { productos } from './datos/productos';

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState('Combos');
  const [carritoCantidad, setCarritoCantidad] = useState(0);

  const productosFiltrados = productos.filter((producto) => {
    if (categoriaActiva === 'Combos') {
      return true;
    }

    return producto.categoria === categoriaActiva;
  });

  const agregarAlCarrito = (producto) => {
    setCarritoCantidad((cantidadActual) => cantidadActual + 1);

    console.log('Producto agregado:', producto.nombre);
  };

  return (
    <>
      <BarraNavegacion
        categoriaActiva={categoriaActiva}
        onCategoriaChange={setCategoriaActiva}
        carritoCantidad={carritoCantidad}
      />

      <main className="contenedor">
        <ListaProductos
          productos={productosFiltrados}
          onAgregar={agregarAlCarrito}
        />
      </main>
    </>
  );
}

export default App;
