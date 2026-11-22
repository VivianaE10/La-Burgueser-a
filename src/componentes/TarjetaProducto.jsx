
import { useState } from 'react';
import { ShoppingBag, Star } from 'lucide-react';

function TarjetaProducto({ producto, onAgregar }) {
  const [esFavorito, setEsFavorito] = useState(false);

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
          className={`boton-favorito ${esFavorito ? 'favorito-activo' : ''}`}
          aria-label={
            esFavorito
              ? `Quitar ${producto.nombre} de favoritos`
              : `Agregar ${producto.nombre} a favoritos`
          }
          aria-pressed={esFavorito}
          title={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          onClick={() => setEsFavorito((actual) => !actual)}
        >
          <Star
            size={19}
            fill={esFavorito ? 'currentColor' : 'none'}
          />
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
            aria-label={`Agregar ${producto.nombre} al carrito`}
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
