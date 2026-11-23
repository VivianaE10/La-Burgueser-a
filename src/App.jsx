
import { useState } from 'react';
import BarraNavegacion from './componentes/BarraNavegacion';
import ListaProductos from './componentes/ListaProductos';
import CarritoCompras from './componentes/CarritoCompras';
import { productos } from './datos/productos';
import PiePagina from './componentes/PiePagina';
import {
  calcularCantidadTotal,
} from './utils/carrito';

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria =
      categoriaActiva === 'Todos' ||
      producto.categoria === categoriaActiva;

    const textoBusqueda = busqueda.trim().toLowerCase();

    const coincideBusqueda =
      producto.nombre.toLowerCase().includes(textoBusqueda) ||
      producto.descripcion.toLowerCase().includes(textoBusqueda);

    return coincideCategoria && coincideBusqueda;
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

  const carritoCantidad = calcularCantidadTotal(carrito);

  return (
    <>
      <BarraNavegacion
        categoriaActiva={categoriaActiva}
        onCategoriaChange={setCategoriaActiva}
        carritoCantidad={carritoCantidad}
        onAbrirCarrito={() => setCarritoAbierto(true)}
        onBuscar={setBusqueda}
      />

      <main className="contenedor">
        <ListaProductos
          productos={productosFiltrados}
          onAgregar={agregarAlCarrito}
        />
      </main>

      <PiePagina />

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
