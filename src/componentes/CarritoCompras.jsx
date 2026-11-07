import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';

function CarritoCompras({
  carrito,
  onCerrar,
  onQuitar,
  onCambiarCantidad,
}) {
  const total = carrito.reduce(
    (acumulado, producto) =>
      acumulado + producto.precio * producto.cantidad,
    0
  );

  const formatoPrecio = (valor) =>
    valor.toLocaleString('es-CO');

  return (
    <div className="fondo-carrito" onClick={onCerrar}>
      <aside
        className="panel-carrito"
        onClick={(evento) => evento.stopPropagation()}
      >
        <div className="encabezado-carrito">
          <div>
            <h2>Mi carrito</h2>
            <p>{carrito.length} productos diferentes</p>
          </div>

          <button onClick={onCerrar} aria-label="Cerrar carrito">
            <X />
          </button>
        </div>

        {carrito.length === 0 ? (
          <div className="carrito-vacio">
            <ShoppingBag size={45} />
            <h3>Tu carrito está vacío</h3>
            <p>Agrega tus hamburguesas favoritas.</p>
          </div>
        ) : (
          <>
            <div className="productos-carrito">
              {carrito.map((producto) => (
                <article className="producto-carrito" key={producto.id}>
                  <img src={producto.imagen} alt={producto.nombre} />

                  <div className="detalle-carrito">
                    <h3>{producto.nombre}</h3>
                    <strong>${formatoPrecio(producto.precio)}</strong>

                    <div className="controles-cantidad">
                      <button
                        onClick={() =>
                          onCambiarCantidad(producto.id, -1)
                        }
                        aria-label="Disminuir cantidad"
                      >
                        <Minus size={15} />
                      </button>

                      <span>{producto.cantidad}</span>

                      <button
                        onClick={() =>
                          onCambiarCantidad(producto.id, 1)
                        }
                        aria-label="Aumentar cantidad"
                      >
                        <Plus size={15} />
                      </button>

                      <button
                        className="boton-eliminar"
                        onClick={() => onQuitar(producto.id)}
                        aria-label="Eliminar producto"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="resumen-carrito">
              <div>
                <span>Total</span>
                <strong>${formatoPrecio(total)}</strong>
              </div>

              <button
                className="boton-finalizar-compra"
                onClick={() =>
                  alert('¡Gracias por elegir La Burguería!')
                }
              >
                Continuar compra
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default CarritoCompras;