
import { ShoppingBag, Star } from 'lucide-react';

function TarjetaProducto({ producto, onAgregar }) {
  const precioFormateado = producto.precio.toLocaleString('es-CO');

  return (
    <article className="tarjeta-producto">

      <div className="imagen-producto">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          loading="lazy"
        />

        <button
          className="boton-favorito"
          aria-label={`Agregar ${producto.nombre} a favoritos`}
          title="Agregar a favoritos"
        >
          <Star size={19} />
        </button>
      </div>

      <div className="informacion-producto">
        <h3>{producto.nombre}</h3>

        <p>{producto.descripcion}</p>

        <div className="pie-tarjeta">
          <strong>${precioFormateado}</strong>

          <button
            className="boton-agregar"
            onClick={() => onAgregar(producto)}
          >
            <ShoppingBag size={15} />
            Agregar
          </button>
        </div>
      </div>

    </article>
  );
}

export default TarjetaProducto;
