// FormProduct.jsx
import { useState, useEffect } from "react";
import { FaPlus, FaSave, FaTimes } from "react-icons/fa";


export default function FormProduct({ onSubmit, initialData = {}, editingId, cancelEdit }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    quantity: 1,
    image: "",
    category: "",
    available: true,
    season: "todo el año",
  });

  useEffect(() => {
    if (editingId && initialData?.id) {
      setForm(initialData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);

    if (!editingId) {
      setForm({
        name: "",
        description: "",
        price: "",
        quantity: 1,
        image: "",
        category: "",
        available: true,
        season: "todo el año",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5 border p-4 rounded bg-light">
      <h5 className="mb-3">{editingId ? "Editar servicio" : "Agregar nuevo servicio"}</h5>
      <div className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            name="category"
            placeholder="Categoría"
            value={form.category}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            name="quantity"
            placeholder="Cantidad disponible"
            value={form.quantity}
            onChange={handleChange}
            className="form-control"
            min={1}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            name="price"
            placeholder="Precio"
            value={form.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6">
          <select
            name="season"
            value={form.season}
            onChange={handleChange}
            className="form-select"
          >
            <option value="verano">Verano</option>
            <option value="otoño">Otoño</option>
            <option value="invierno">Invierno</option>
            <option value="primavera">Primavera</option>
            <option value="todo el año">Todo el año</option>
          </select>
        </div>
        <div className="col-12">
          <textarea
            name="description"
            placeholder="Descripción"
            value={form.description}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            name="image"
            placeholder="URL de la imagen"
            value={form.image}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <label className="form-check-label me-2">Disponible:</label>
          <input
            type="checkbox"
            name="available"
            checked={form.available}
            onChange={handleChange}
            className="form-check-input"
          />
        </div>
        <div className="col-md-6 text-end">
          <button type="submit" className="btn btn-success me-2">
            {editingId ? (
              <>
                <FaSave className="me-1" /> Guardar
              </>
            ) : (
              <>
                <FaPlus className="me-1" /> Agregar
              </>
            )}
          </button>
          <button type="button" className="btn btn-secondary" onClick={cancelEdit}>
            <FaTimes className="me-1" /> Cancelar
          </button>
        </div>
      </div>
    </form>
  );
}
