
import { describe, it, expect } from 'vitest';
import {
  calcularCantidadTotal,
  calcularSubtotal,
  calcularTotal,
} from '../utils/carrito';

describe('Pruebas del carrito de La Burguesería', () => {
  const carritoEjemplo = [
    { id: 1, nombre: 'Combo BBQ', precio: 39900, cantidad: 2 },
    { id: 2, nombre: 'Combo pollo crispy', precio: 36900, cantidad: 1 },
  ];

  it('debe calcular la cantidad total de productos', () => {
    expect(calcularCantidadTotal(carritoEjemplo)).toBe(3);
  });

  it('debe calcular el subtotal de un producto', () => {
    expect(calcularSubtotal(carritoEjemplo[0])).toBe(79800);
  });

  it('debe calcular el total del carrito', () => {
    expect(calcularTotal(carritoEjemplo)).toBe(116700);
  });

  it('debe devolver cero cuando el carrito está vacío', () => {
    expect(calcularTotal([])).toBe(0);
    expect(calcularCantidadTotal([])).toBe(0);
  });
});
