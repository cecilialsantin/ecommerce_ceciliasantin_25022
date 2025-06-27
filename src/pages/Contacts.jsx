import { useState } from "react";
import { FaInstagram, FaFacebookF, FaPaperPlane, FaTwitter, FaLeaf } from "react-icons/fa";
import { toast } from 'react-toastify';

export default function Contacts() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📩 Nuevo mensaje recibido:", formData);
    setFormData({ nombre: "", email: "", mensaje: "" });
    toast.info("Mensaje enviado, muchas gracias por tu contacto.");
  };

  return (
    <div className="container my-5">
      <h1 className="display-5 fw-bold text-success text-center mb-3">Contactos</h1>
      <p className="text-muted text-center mb-4 fs-5">
        Podés comunicarte con nosotros a través del formulario o seguirnos en nuestras redes 🌿
      </p>

      <div className="d-flex justify-content-center gap-3 mb-5">
        <FaInstagram size={28} className="text-success" />
        <FaFacebookF size={28} className="text-success" />
        <FaTwitter size={28} className="text-success" />
        <FaLeaf size={28} className="text-success" />
      </div>

      <form onSubmit={handleSubmit} className="contact-form mx-auto">
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

        <button type="submit" className="btn btn-success w-20 d-block mx-auto">
          <FaPaperPlane /> 
        </button>
      </form>
    </div>
  );
}
