import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Products from "./Products";

export default function ProductList({ categoria, setCategoria }) {
  const {
    products,
    loading,
    error,
    handleAddToCart
  } = useContext(CartContext);

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando servicios...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-danger text-center">Ocurrió un error al cargar los servicios.</p>;
  }

  const productosFiltrados =
    categoria === "Todas"
      ? products
      : products.filter((p) => p.category === categoria);

  if (productosFiltrados.length === 0) {
    return (
      <div className="text-center mt-5">
        <p className="text-muted mb-3">No hay servicios disponibles en la categoría seleccionada.</p>
        <button
          className="btn btn-outline-success"
          onClick={() => setCategoria("Todas")}
        >
          Ver todos los servicios
        </button>
      </div>
    );
  }

  return (
    <div className="row">
      {productosFiltrados.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <Products product={product} addToCart={handleAddToCart} />
        </div>
      ))}
    </div>
  );
}
