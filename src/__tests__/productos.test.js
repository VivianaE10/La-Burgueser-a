
import { describe, it, expect } from 'vitest';
import { productos } from '../datos/productos';

describe('Pruebas del catálogo de La Burguesería', () => {
  it('debe mostrar los seis productos registrados', () => {
    expect(productos).toHaveLength(6);
  });

  it('debe encontrar el producto de pollo', () => {
    const resultado = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes('pollo')
    );

    expect(resultado).toHaveLength(1);
    expect(resultado[0].nombre).toBe('Combo pollo crispy');
  });

  it('debe encontrar el producto BBQ', () => {
    const resultado = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes('bbq')
    );

    expect(resultado).toHaveLength(1);
    expect(resultado[0].nombre).toBe('Combo BBQ');
  });

  it('debe devolver una lista vacía si no encuentra coincidencias', () => {
    const resultado = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes('pizza')
    );

    expect(resultado).toHaveLength(0);
  });
});
