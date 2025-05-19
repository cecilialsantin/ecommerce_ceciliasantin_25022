import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="container text-center">
       <img
          src="/images/logo.png"
          alt="Logo de NativePlant"
          className="rounded-circle me-3"
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
        />
      <h1 className="display-4 fw-bold text-success">NativePlant</h1>
        <p className="mt-4 fs-5 text-muted">
          En NativePlant promovemos el rol de los <strong>bosquicultores urbanos</strong>, personas comprometidas con la restauración ecológica y la recuperación de la biodiversidad en entornos intervenidos. Diseñamos paisajes que no solo embellecen, sino que también regeneran: microbosques, jardines nativos, bordes de lagunas, piscinas y corredores biológicos que conectan vida, en entornos urbanos y periurbanos. Cada espacio es una oportunidad para restaurar el equilibrio con la naturaleza.
        </p>
        <div className="row mt-4">
        <div className="col-6 col-md-3 mb-3">
          <img src="/images/nativa1.png" alt="Planta nativa" className="img-fluid rounded shadow-sm"
           style={{ width: "150px", height: "150px", objectFit: "cover", border: "3px solid #c8e6c9" }}/>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <img src="/images/nativa2.png" alt="Bosque urbano" className="img-fluid rounded shadow-sm" 
           style={{ width: "150px", height: "150px", objectFit: "cover", border: "3px solid #c8e6c9" }}/>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <img src="/images/nativa3.png" alt="Polinizador" className="img-fluid rounded shadow-sm" 
           style={{ width: "150px", height: "150px", objectFit: "cover", border: "3px solid #c8e6c9" }}/>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <img src="/images/nativa4.png" alt="Raíces regenerativas" className="img-fluid rounded shadow-sm" 
           style={{ width: "150px", height: "150px", objectFit: "cover", border: "3px solid #c8e6c9" }}/>
        </div>
      </div>

      <Link to="/productos" className="btn btn-success mt-3 btn-sm">
        Explorar servicios
      </Link>

    </div>
  );
}
