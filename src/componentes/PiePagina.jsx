function PiePagina() {
    return (
      <footer className="pie-pagina">
        <div className="contenido-pie">
          <div className="marca-pie">
            <h2>LA BURGUERÍA</h2>
            <p>EL SABOR DE UNA BUENA HAMBURGUESA</p>
          </div>
  
          <div className="informacion-pie">
            <h3>Contáctanos</h3>
            <p>📍 Manizales, Colombia</p>
            <p>☎ Atención al cliente</p>
          </div>
  
          <div className="redes-pie">
            <h3>Síguenos</h3>
            <div>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="Facebook">f</a>
            </div>
          </div>
        </div>
  
        <div className="derechos-pie">
          © {new Date().getFullYear()} La Burguería. Todos los derechos reservados.
        </div>
      </footer>
    );
  }
  
  export default PiePagina;
