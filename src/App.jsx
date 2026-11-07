import { useState } from 'react';
import BarraNavegacion from './componentes/BarraNavegacion';
import ListaProductos from './componentes/ListaProductos';
import CarritoCompras from './componentes/CarritoCompras';
import { productos } from './datos/productos';

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState('Combos');
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  const productosFiltrados = productos.filter((producto) => {
    if (categoriaActiva === 'Combos') return true;
    return producto.categoria === categoriaActiva;
  });

  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const existe = carritoActual.find(
        (item) => item.id === producto.id
      );

      if (existe) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...carritoActual, { ...producto, cantidad: 1 }];
    });
  };

  const quitarDelCarrito = (id) => {
    setCarrito((carritoActual) =>
      carritoActual.filter((producto) => producto.id !== id)
    );
  };

  const cambiarCantidad = (id, cambio) => {
    setCarrito((carritoActual) =>
      carritoActual
        .map((producto) =>
          producto.id === id
            ? { ...producto, cantidad: producto.cantidad + cambio }
            : producto
        )
        .filter((producto) => producto.cantidad > 0)
    );
  };

  const carritoCantidad = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  return (
    <>
      <BarraNavegacion
        categoriaActiva={categoriaActiva}
        onCategoriaChange={setCategoriaActiva}
        carritoCantidad={carritoCantidad}
        onAbrirCarrito={() => setCarritoAbierto(true)}
      />

      <main className="contenedor">
        <ListaProductos
          productos={productosFiltrados}
          onAgregar={agregarAlCarrito}
        />
      </main>

      {carritoAbierto && (
        <CarritoCompras
          carrito={carrito}
          onCerrar={() => setCarritoAbierto(false)}
          onQuitar={quitarDelCarrito}
          onCambiarCantidad={cambiarCantidad}
        />
      )}
    </>
  );
}

export default App;
