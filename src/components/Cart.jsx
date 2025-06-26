import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash, FaArrowLeft } from "react-icons/fa";



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
        <h2 className="text-muted mb-4">Tu carrito está vacío</h2>
        <Link to="/productos" className="btn btn-outline-success">
          <FaArrowLeft className="me-2" />
          Volver
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="mx-auto mt-5" style={{ maxWidth: "600px" }}>
        <h2 className="text-success text-center mb-4">🛒 Tu Carrito</h2>

        {cart.map((item) => (
          <div key={item.id} className="card mb-3 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title">{item.name}</h5>
                <p className="mb-1 text-muted">
                  ${item.price} x {item.quantity} = <strong>${item.price * item.quantity}</strong>
                </p>
                <p className="text-muted mb-0">Categoría: {item.category}</p>
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
                  onClick={() => handleAddToCart(item, 1)}
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

        <div className="text-end mt-4">
          <h5>
            Total: <span className="text-success fw-bold">${total}</span>
          </h5>
        </div>

        <div className="text-center mt-4 d-flex justify-content-between">
          <Link to="/productos" className="btn btn-outline-success">
            <FaArrowLeft className="me-2" />
            Seguir explorando
          </Link>
          <Link to="/buy" className="btn btn-success px-4">
            Solicitar Servicio
          </Link>
        </div>
      </div>
    </div>
  );
}
