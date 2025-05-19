import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";


export default function Cart() {
  const {
    cart,
    handleAddToCart,
    handleDeleteFromCart,
    handleRemoveFromCart
  } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2 className="text-muted">Tu carrito está vacío</h2>
        <Link to="/productos" className="btn btn-outline-success mt-3">
          Volver a la galería de servicios
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="mb-4 text-success">Tu carrito</h2>

      {cart.map((item) => (
        <div key={item.id} className="card mb-3 shadow-sm">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text mb-1 text-muted">
                ${item.price} x {item.quantity} = ${item.price * item.quantity}
              </p>
              <p className="card-text text-muted mb-0">Categoría: {item.category}</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => handleDeleteFromCart(item)}
              >
                -
              </button>
              <span className="fw-bold">{item.quantity}</span>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => handleAddToCart(item)}
              >
                +
              </button>
               <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => handleRemoveFromCart(item.id)}
                title="Eliminar del carrito"
                >
                <FaTrash />
            </button>
            </div>
          </div>
        </div>
      ))}

      <h4 className="mt-4 text-end">
        Total: <span className="text-success">${total}</span>
      </h4>

      <div className="text-end mt-3">
        <Link to="/buy" className="btn btn-success">
          Solicitar Servicio
        </Link>
      </div>
    </div>
  );
}
