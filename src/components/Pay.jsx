import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Pay() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cantidadServicios = cart.reduce((acc, item) => acc + item.quantity, 0);
  const plural = cantidadServicios === 1 ? "servicio" : "servicios";

 const handlePayment = () => {
  alert(`¡Pago exitoso! Has abonado un total de $${total} por ${cantidadServicios} ${plural}. Recibirás la confirmación de tu solicitud por correo electrónico.`);

  setCart([]);

  setTimeout(() => {
    navigate("/");
  }, 200); 
};

  return (
    <div className="container text-center my-5">
      <h2 className="text-success mb-4">Último paso: Pago</h2>
      <p className="lead">
        Completá el pago para confirmar tu solicitud de servicio.
      </p>
      <button className="btn btn-success mt-4" onClick={handlePayment}>
        Confirmar Pago
      </button>
    </div>
  );
}
