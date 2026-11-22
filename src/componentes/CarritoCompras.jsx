
import { useState } from 'react';
import {
  X,
  Trash2,
  ShoppingBag,
  Plus,
  Minus,
  CheckCircle,
} from 'lucide-react';
import {
  calcularCantidadTotal,
  calcularSubtotal,
  calcularTotal,
} from '../utils/carrito';

function CarritoCompras({
  carrito,
  onCerrar,
  onQuitar,
  onCambiarCantidad,
}) {
  const [compraConfirmada, setCompraConfirmada] = useState(false);

  // Calcular el total de unidades
  const cantidadTotal = calcularCantidadTotal(carrito);

  // Calcular el valor total del carrito
  const total = calcularTotal(carrito);

  // Formatear precios en pesos colombianos
  const formatoPrecio = (valor) =>
    valor.toLocaleString('es-CO');

  return (
    <div className="fondo-carrito" onClick={onCerrar}>
      <aside
        className="panel-carrito"
        onClick={(evento) => evento.stopPropagation()}
      >
        {/* Encabezado */}
        <div className="encabezado-carrito">
          <div>
            <h2>Mi carrito</h2>
            <p>
              {cantidadTotal} productos en tu carrito
            </p>
          </div>

          <button
            onClick={onCerrar}
            aria-label="Cerrar carrito"
          >
            <X />
          </button>
        </div>

        {/* Carrito vacío */}
        {carrito.length === 0 ? (
          <div className="carrito-vacio">
            <ShoppingBag size={45} />
            <h3>Tu carrito está vacío</h3>
            <p>Agrega tus hamburguesas favoritas.</p>
          </div>
        ) : (
          <>
            {/* Lista de productos */}
            <div className="productos-carrito">
              {carrito.map((producto) => (
                <article
                  className="producto-carrito"
                  key={producto.id}
                >
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                  />

                  <div className="detalle-carrito">
                    <h3>{producto.nombre}</h3>

                    <strong>
                      ${formatoPrecio(producto.precio)} unidad
                    </strong>

                    <span className="subtotal-producto">
                      Subtotal: $
                      {formatoPrecio(
                        calcularSubtotal(producto)
                      )}
                    </span>

                    {/* Controles de cantidad */}
                    <div className="controles-cantidad">
                      <button
                        onClick={() =>
                          onCambiarCantidad(producto.id, -1)
                        }
                        aria-label="Disminuir cantidad"
                        disabled={producto.cantidad <= 1}
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

            {/* Resumen de compra */}
            <div className="resumen-carrito">
              <div>
                <span>Total de la compra</span>
                <strong>${formatoPrecio(total)}</strong>
              </div>

              <button
                className="boton-finalizar-compra"
                onClick={() => setCompraConfirmada(true)}
              >
                Continuar compra
              </button>

              {/* Confirmación visual */}
              {compraConfirmada && (
                <div
                  className="mensaje-confirmacion"
                  role="status"
                >
                  <CheckCircle size={24} />

                  <h3>
                    ¡Gracias por elegir La Burguería!
                  </h3>

                  <p>
                    Tu pedido está listo para continuar.
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default CarritoCompras;
