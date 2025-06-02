import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    errors
  } = useAuth();

  return (
    <div className="container mt-5">
      <div className="alert alert-light border rounded p-4 mb-4 shadow-sm">
        <p className="mb-2 text-center">
          <strong>¿Sos parte del staff de NativePlant?</strong> Ingresá tus credenciales para acceder al panel de administración.
        </p>
        <p className="mb-0 text-center">
          Si estás interesado en conocer nuestra propuesta de servicios, por favor{" "}
          <Link to="/" className="text-decoration-none fw-bold text-success">
            hacé click aquí
          </Link>
          .
          <Link to="/" className="ms-2">
            <img
              src="/images/logo.png"
              alt="NativePlant Logo"
              style={{ height: "25px", verticalAlign: "top" }}
            />
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto p-4 bg-light rounded shadow-sm" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-success w-20 d-block mx-auto">
          <FaPaperPlane /> {/* Ícono de enviar */}
        </button>
      </form>
    </div>
  );
}
