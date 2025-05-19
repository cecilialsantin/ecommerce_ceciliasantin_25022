import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

//Este login se usa por el momento de forma simulada 
// para capturar el mail que habilita el boton admin
export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setIsAuth, setUserEmail } = useContext(CartContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email.trim() === "" || form.password.trim() === "") {
      alert("Por favor, completá todos los campos.");
      return;
    }

    // Simula login
    setIsAuth(true);
    setUserEmail(form.email);

    alert(`Bienvenido ${form.email}`);
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success">Ingresar</button>
      </form>
    </div>
  );
}
