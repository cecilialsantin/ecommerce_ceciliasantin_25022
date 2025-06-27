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
      <h1 className="display-4 fw-bold text-success mb-5">Bienvenidos a NativePlant</h1>

      <Link to="/productos" className="btn btn-outline-success mt-2 mb-5 explore-btn">
        🌿 Explorá nuestros servicios
      </Link>

      <div className="mb-5">
        <video
          src="/videos/native-intro.mp4"
          className="w-100 rounded-4 shadow"
          style={{ maxHeight: "500px", objectFit: "cover" }}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <p className="native-intro-paragraph">
        En <strong>NativePlant</strong> promovemos el rol de los <strong>bosquicultores urbanos</strong>,
        personas comprometidas con la restauración ecológica y la recuperación de la biodiversidad en entornos intervenidos. Diseñamos paisajes que no solo embellecen, sino que también regeneran: microbosques, jardines nativos, bordes de lagunas, piscinas y corredores biológicos que conectan vida, en entornos urbanos y periurbanos.
        <em>"Cada espacio es una oportunidad para restaurar el equilibrio con la naturaleza"</em>
      </p>

    </div>
  );
}
