import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";

// 🔁 Función para obtener la estación actual
const getCurrentSeason = () => {
  const month = new Date().getMonth() + 1;
  if ([12, 1, 2].includes(month)) return "verano";
  if ([3, 4, 5].includes(month)) return "otoño";
  if ([6, 7, 8].includes(month)) return "invierno";
  if ([9, 10, 11].includes(month)) return "primavera";
  return "todo el año";
};

const Products = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const currentSeason = getCurrentSeason();

  const isInSeason =
    product.season === currentSeason || product.season === "todo el año";

  const isInStock = product.quantity > 0;

  const isCurrentlyAvailable = product.available && isInSeason && isInStock;

  const increase = () => {
    if (quantity >= 5) {
      toast.warning("El máximo permitido por servicio es 5 unidades.");
      return;
    }
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAdd = () => {
    if (!isCurrentlyAvailable) {
      toast.info("Este servicio no está disponible actualmente.");
      return;
    }

    const productWithQuantity = { ...product, quantity };
    addToCart(productWithQuantity);

    const total = product.price * quantity;
    const plural = quantity === 1 ? "servicio" : "servicios";

    toast.info(
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

        <span
          className={`badge ${isCurrentlyAvailable ? "bg-success" : "bg-danger"} mb-2`}
          style={{ width: "fit-content" }}
        >
          {!isInStock
            ? "Por el momento no disponemos de este servicio."
            : !isInSeason
            ? `Disponible en: ${product.season}`
            : "Disponible"}
        </span>

        {isCurrentlyAvailable && (
          <>
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

            <button className="btn btn-success mb-2" onClick={handleAdd}>
              Agregar al carrito
            </button>
          </>
        )}

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
