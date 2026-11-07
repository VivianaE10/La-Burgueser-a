import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';

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
          <p>
            <MapPin size={17} />
            Manizales, Colombia
          </p>
          <p>
            <Phone size={17} />
            Atención al cliente
          </p>
        </div>

        <div className="redes-pie">
          <h3>Síguenos</h3>
          <div>
            <a href="#" aria-label="Instagram">
              <Instagram size={21} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={21} />
            </a>
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