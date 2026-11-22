
export const calcularCantidadTotal = (carrito) => {
    return carrito.reduce(
      (total, producto) => total + producto.cantidad,
      0
    );
  };
  
  export const calcularSubtotal = (producto) => {
    return producto.precio * producto.cantidad;
  };
  
  export const calcularTotal = (carrito) => {
    return carrito.reduce(
      (total, producto) => total + calcularSubtotal(producto),
      0
    );
  };
  