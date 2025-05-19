import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center text-danger my-5">
      <h1 className="display-4">404</h1>
      <p className="lead">Página no encontrada</p>
      
      <Link to="/" className="btn btn-outline-success mt-4">
        Volver al inicio
      </Link>
    </div>
  );
}
