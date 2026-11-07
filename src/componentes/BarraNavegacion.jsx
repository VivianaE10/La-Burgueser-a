
import { useState } from 'react';
import {
  Menu,
  X,
  Search,
  UserRound,
  ShoppingBag,
  Beef,
  Drumstick,
  Coffee,
  IceCream,
  Utensils
} from 'lucide-react';

const categorias = [
  { nombre: 'Combos', icono: Beef },
  { nombre: 'Hamburguesas', icono: Beef },
  { nombre: 'Pollo', icono: Drumstick },
  { nombre: 'Acompañamientos', icono: Utensils },
  { nombre: 'Helados y malteadas', icono: IceCream },
  { nombre: 'Bebidas', icono: Coffee }
];

function BarraNavegacion({
  categoriaActiva,
  onCategoriaChange,
  carritoCantidad
}) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [busquedaAbierta, setBusquedaAbierta] = useState(false);
  const [avisoSesion, setAvisoSesion] = useState(false);

  const seleccionarCategoria = (nombre) => {
    onCategoriaChange(nombre);
    setMenuAbierto(false);
  };

  return (
    <>
      <header className="encabezado">

        <div className="barra-superior">

          <button
            className="boton-icono"
            onClick={() => setMenuAbierto(true)}
            aria-label="Abrir menú"
          >
            <Menu size={27} />
          </button>

          <div className="logo-restaurante">
            <span>LA BURGUERÍA</span>
            <small>EL SABOR DE UNA BUENA HAMBURGUESA</small>
          </div>

          <div className="acciones-usuario">

            <button
              className="boton-icono"
              onClick={() => setBusquedaAbierta(!busquedaAbierta)}
              aria-label="Buscar productos"
            >
              <Search />
            </button>

            <button
              className="boton-iniciar-sesion"
              onClick={() => setAvisoSesion(!avisoSesion)}
            >
              <UserRound size={18} />
              <span>Iniciar sesión</span>
            </button>

            <button className="boton-carrito" aria-label="Carrito de compras">
              <ShoppingBag size={19} />
              <span>{String(carritoCantidad).padStart(2, '0')}</span>
            </button>

          </div>
        </div>

        {busquedaAbierta && (
          <div className="busqueda">
            <input
              type="search"
              placeholder="¿Qué se te antoja hoy?"
            />
            <button onClick={() => setBusquedaAbierta(false)}>
              <X size={20} />
            </button>
          </div>
        )}

        {avisoSesion && (
          <div className="aviso-sesion">
            <span>Próximamente podrás iniciar sesión.</span>
            <button onClick={() => setAvisoSesion(false)}>
              <X size={18} />
            </button>
          </div>
        )}

        <nav className="navegacion-categorias">
          {categorias.map(({ nombre, icono: Icono }) => (
            <button
              key={nombre}
              className={`categoria ${
                categoriaActiva === nombre ? 'activa' : ''
              }`}
              onClick={() => seleccionarCategoria(nombre)}
            >
              <span className="icono-categoria">
                <Icono size={19} />
              </span>
              <span>{nombre}</span>
            </button>
          ))}
        </nav>

      </header>

      {menuAbierto && (
        <>
          <div
            className="fondo-menu"
            onClick={() => setMenuAbierto(false)}
          />

          <aside className="menu-lateral">

            <div className="encabezado-menu">
              <h2>LA BURGUERÍA</h2>
              <button
                className="boton-icono"
                onClick={() => setMenuAbierto(false)}
                aria-label="Cerrar menú"
              >
                <X />
              </button>
            </div>

            <p className="texto-menu">
              Descubre todo nuestro sabor
            </p>

            {categorias.map(({ nombre, icono: Icono }) => (
              <button
                key={nombre}
                className="opcion-menu"
                onClick={() => seleccionarCategoria(nombre)}
              >
                <Icono size={20} />
                <span>{nombre}</span>
              </button>
            ))}

          </aside>
        </>
      )}
    </>
  );
}

export default BarraNavegacion;
