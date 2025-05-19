import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const Products = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  // Esto se manejará desde el AdminProducts por medio de la 
  // Page Admin cuando se finalice su implementación para la entrega Final 
  // por ahora queda solo cartelito y siempre disponible para poder probar 
  // la funcionalidad de agregar al carrito
  const available = product.available ?? true; 
 

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAdd = () => {
    if (!available) {
      alert("Este servicio no está disponible actualmente.");
      return;
    }

    const productWithQuantity = { ...product, quantity };
    addToCart(productWithQuantity);

    const total = product.price * quantity;
    const plural = quantity === 1 ? "servicio" : "servicios";

    alert(
      `Estás agregando ${quantity} ${plural} por un total de $${total} al carrito.`
    );

    setQuantity(1);
  };

  return (
    <div className="card h-100 shadow-sm d-flex flex-column">
      <div className="ratio ratio-4x3">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top object-fit-cover"
        />
      </div>

      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text fw-bold text-success">${product.price}</p>

        {/* Indicador de disponibilidad (no interactivo) */}
        <span
          className={`badge ${available ? "bg-success" : "bg-danger"} mb-2`}
          style={{ width: "fit-content" }}
          title="Funcionalidad no implementada"
        >
          {available ? "Disponible" : "No disponible"}
        </span>

        <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={decrease}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={increase}
          >
            +
          </button>
        </div>

        <button
          className="btn btn-success mb-2"
          onClick={handleAdd}
          disabled={!available}
        >
          Agregar al carrito
        </button>

        <Link
          to={`/products/${product.id}`}
          className="btn btn-outline-success d-flex align-items-center justify-content-center gap-2"
        >
          <FaEye />
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Products;
