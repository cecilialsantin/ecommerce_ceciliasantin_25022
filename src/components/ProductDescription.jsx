import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductDescription() {
  const { id } = useParams();
  const { products, handleAddToCart, loading } = useContext(CartContext);

  const product = products.find((p) => p.id === id);

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando servicio...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container text-center text-danger my-5">
        <h1 className="display-6">Servicio no encontrado</h1>
        <p className="lead">El servicio que estás buscando no existe o fue removido.</p>
        <Link to="/productos" className="btn btn-outline-success mt-3">
          Volver a la Galería de Servicios
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    handleAddToCart({ ...product, quantity: 1 });
    alert(`"${product.name}" fue agregado al carrito.`);
  };

  return (
    <div className="container">
      <h1 className="display-5 mb-4">{product.name}</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <p className="lead">{product.description}</p>
          <p className="fw-bold text-success">Precio: ${product.price}</p>
          <p className="text-muted">Categoría: {product.category}</p>

          <button className="btn btn-success mt-3" onClick={handleAdd}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
