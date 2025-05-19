import { useState } from "react";
import ProductList from "../components/ProductList";

export default function ProductsGallery() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  const handleFiltro = (e) => {
    setCategoriaSeleccionada(e.target.value);
  };

  return (
    <div className="container text-center">
      <h1 className="display-4 mb-4 text-success">Galería de Servicios</h1>
      <p className="lead mb-4">
        Explorá nuestros servicios diseñados para restaurar y enriquecer la biodiversidad en entornos urbanos y periurbanos.
      </p>

      <div className="mb-4">
        <select
          className="form-select w-auto mx-auto"
          value={categoriaSeleccionada}
          onChange={handleFiltro}
        >
          <option value="Todas">Todas las categorías</option>
          <option value="Diseño">Diseño</option>
          <option value="Asesoramiento">Asesoramiento</option>
          <option value="Diagnóstico">Diagnóstico</option>
        </select>
      </div>

      <ProductList
        categoria={categoriaSeleccionada}
        setCategoria={setCategoriaSeleccionada}
      />
    </div>
  );
}
