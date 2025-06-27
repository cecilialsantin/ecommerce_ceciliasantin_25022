import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Pay() {
  const { cart, setCart, refreshProducts } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cantidadServicios = cart.reduce((acc, item) => acc + item.quantity, 0);
  const plural = cantidadServicios === 1 ? "servicio" : "servicios";

  const handlePayment = async () => {
    try {
      await Promise.all(
        cart.map(async (item) => {
          const responseGet = await fetch(`https://683c47e728a0b0f2fdc6ac4c.mockapi.io/services/${item.id}`);
          const data = await responseGet.json();
          const stockActual = data.quantity;

          const nuevoStock = stockActual - item.quantity;

          if (nuevoStock < 0) {
            toast.error(`Stock insuficiente para el servicio "${item.name}"`);
            throw new Error(`Stock insuficiente para ${item.name}`);
          }

          const responsePut = await fetch(`https://683c47e728a0b0f2fdc6ac4c.mockapi.io/services/${item.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              quantity: nuevoStock,
            }),
          });

          if (!responsePut.ok) {
            throw new Error(`Error al actualizar el stock de ${item.name}`);
          }
        })
      );

      toast.success(`¡Pago exitoso! Abonaste $${total} por ${cantidadServicios} ${plural}.`);
      setCart([]);
      refreshProducts(); // 🟢 Opcional: actualizás productos visibles si usás eso en la app

      setTimeout(() => {
        navigate("/");
      }, 300);

    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al procesar el pago.");
    }
  };

  return (
    <div className="container text-center my-5">
      <h2 className="text-success mb-4">Último paso: Pago</h2>
      <p className="lead">Completá el pago para confirmar tu solicitud de servicio.</p>
      <button className="btn btn-success mt-4" onClick={handlePayment}>
        Confirmar Pago
      </button>
    </div>
  );
}
