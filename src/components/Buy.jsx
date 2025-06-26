import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


export default function Buy() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    direccion: "",
    telefono: ""
  });

  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cantidadProductos = cart.reduce((acc, item) => acc + item.quantity, 0);
  const plural = cantidadProductos === 1 ? "producto" : "productos";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const camposIncompletos = Object.values(form).some((valor) => valor.trim() === "");
    if (camposIncompletos) {
      toast.info("Por favor, completá todos los campos antes de finalizar la solicitud.");
      return;
    }

   toast.info(`Estás solicitando ${cantidadProductos} ${plural} por un total de $${total}. 
¡Gracias por tu solicitud! Una vez que completes el pago, contactaremos a ${form.nombre} al número ${form.telefono}.`);


    navigate("/pay");
  };

  return (
    <div className="container">
      <h2 className="mb-4">Completar datos para la solicitud</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>

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
          <label className="form-label">Dirección</label>
          <input
            type="text"
            name="direccion"
            className="form-control"
            value={form.direccion}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            className="form-control"
            value={form.telefono}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success">Finalizar solicitud</button>
      </form>
    </div>
  );
}