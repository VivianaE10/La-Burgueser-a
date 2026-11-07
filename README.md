# La Burguería 🍔

Proyecto académico universitario

## Descripción del proyecto

La Burguería es una página web de un restaurante de hamburguesas, desarrollada como parte de la actividad académica AA2: Taller Grupal – Línea Base Software de Restaurante.

El proyecto presenta un catálogo de productos y una interfaz que permite al usuario explorar las opciones disponibles y agregar productos a un carrito de compras.

## Demo del proyecto

La aplicación web se encuentra desplegada en Vercel y puede visualizarse en el siguiente enlace:

**Ver página web:** [https://la-burgueser-a.vercel.app/]

**Repositorio:** https://github.com/VivianaE10/La-Burgueser-a

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- Tailwind CSS
- CSS
- Lucide React
- Git y GitHub

## Funcionalidades implementadas

- Visualización de un catálogo de seis productos.
- Navegación mediante menú lateral.
- Categorías de productos: Combos, Hamburguesas y Pollo.
- Barra de navegación con iconos.
- Botón de búsqueda.
- Botón de inicio de sesión con aviso informativo.
- Carrito de compras.
- Agregar productos al carrito.
- Modificar cantidades.
- Eliminar productos del carrito.
- Cálculo del total de la compra.
- Pie de página con información del restaurante y redes sociales.

## Estructura del proyecto

```text
hamburgueseria-restaurante/
│
├── public/
│   └── imagenes/
│
├── src/
│   ├── componentes/
│   │   ├── BarraNavegacion.jsx
│   │   ├── CarritoCompras.jsx
│   │   ├── ListaProductos.jsx
│   │   ├── PiePagina.jsx
│   │   └── TarjetaProducto.jsx
│   │
│   ├── datos/
│   │   └── productos.js
│   │
│   ├── estilos/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Instalación y ejecución

### Requisitos

- Node.js
- npm

### Pasos

1. Clonar el repositorio:

```bash
git clone https://github.com/VivianaE10/La-Burgueser-a.git
```

2. Ingresar a la carpeta:

```bash
cd hamburgueseria-restaurante
```

3. Instalar las dependencias:

```bash
npm install
```

4. Ejecutar el proyecto:

```bash
npm run dev
```

5. Abrir en el navegador la dirección local indicada por Vite.

## Control de versiones

El proyecto utiliza Git para el control de versiones y GitHub para alojar el repositorio y conservar el historial de cambios.

Repositorio:

https://github.com/VivianaE10/La-Burgueser-a

## Alcance de la versión actual

Esta versión corresponde a una interfaz web desarrollada con React y datos de productos definidos localmente en JavaScript.

El inicio de sesión es informativo y el botón de continuar compra no procesa pedidos ni pagos reales. El carrito funciona durante la sesión actual y no utiliza persistencia en una base de datos.

## Autoría

Proyecto académico desarrollado para la actividad AA2 – Línea Base Software de Restaurante.