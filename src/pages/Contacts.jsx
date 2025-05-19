import { useState } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de envío
    console.log("📩 Nuevo mensaje recibido:", formData);

    setFormData({ nombre: "", email: "", mensaje: "" }); 
    alert("Mensaje enviado (simulado). Revisá la consola.");
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">Contacto</h1>
      <p className="lead text-center mb-4">
        Podés comunicarte con nosotros a través del formulario o por nuestras redes sociales.
      </p>

      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-control"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            className="form-control"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">Enviar</button>
      </form>
    </div>
  );
}
