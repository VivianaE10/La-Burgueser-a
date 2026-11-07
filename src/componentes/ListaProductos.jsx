

import TarjetaProducto from './TarjetaProducto';

function ListaProductos({ productos, onAgregar }) {
  return (
    <section className="seccion-productos">
      <div className="encabezado-productos">
        <div>
          <span className="etiqueta-seccion">NUESTRO MENÚ</span>
          <h2>Elige tu favorito</h2>
          <p>Preparados para disfrutar cada momento.</p>
        </div>

        <span className="cantidad-productos">
          {productos.length} productos
        </span>
      </div>

      {productos.length > 0 ? (
        <div className="rejilla-productos">
          {productos.map((producto) => (
            <TarjetaProducto
              key={producto.id}
              producto={producto}
              onAgregar={onAgregar}
            />
          ))}
        </div>
      ) : (
        <div className="sin-productos">
          <h3>No encontramos productos</h3>
          <p>Pronto tendremos más opciones para ti.</p>
        </div>
      )}
    </section>
  );
}

export default ListaProductos;
