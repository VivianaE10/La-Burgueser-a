
export const calcularCantidadTotal = (carrito) =>
  carrito.reduce((total, producto) => total + producto.cantidad, 0);

export const calcularSubtotal = (producto) =>
  producto.precio * producto.cantidad;

export const calcularTotal = (carrito) =>
  carrito.reduce(
    (total, producto) => total + calcularSubtotal(producto),
    0
  );
