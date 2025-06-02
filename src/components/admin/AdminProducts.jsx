// AdminProducts.jsx
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import FormProduct from "../FormProduct";

export default function AdminProducts() {
  const { setIsAuth, products, refreshProducts, loading, error } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const apiUrl = "https://683c47e728a0b0f2fdc6ac4c.mockapi.io/services";
  const navigate = useNavigate();


  const addProduct = async (product) => {
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!res.ok) throw new Error("Error al agregar servicio");
      await refreshProducts();
      setOpen(false);
    } catch (err) {
      alert("Error al agregar producto:", err);
    }
  };

  const updateProduct = async (product) => {
    try {
      const res = await fetch(`${apiUrl}/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!res.ok) throw new Error("Error al actualizar servicio");
      await refreshProducts();
      setEditingId(null);
      setSelectedProduct(null);
    } catch (err) {
      alert("Error al actualizar producto:", err);
    }
  };

  const deleteProduct = async (id) => {
    const confirm = window.confirm("¿Seguro que querés eliminar este servicio?");
    if (!confirm) return;
    try {
      const res = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error al eliminar producto");
      await refreshProducts();
    } catch (err) {
      alert("Error al eliminar producto:", err);
    }
  };

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-success">Panel de Administración</h2>
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            setIsAuth(false);
            localStorage.removeItem("isAuth");
            navigate("/");
          }}
        >
          <i className="fa-solid fa-right-from-bracket me-2"></i>Salir
        </button>
      </div>

      {loading ? (
        <p>Cargando servicios...</p>
      ) : error ? (
        <p className="text-danger">Error al cargar los servicios.</p>
      ) : (
        <>
          <button className="btn btn-primary mb-4" onClick={() => setOpen(true)}>
            <i className="fa-solid fa-plus me-2"></i>Agregar servicio
          </button>

          {open && <FormProduct onSubmit={addProduct} />}

          {editingId && (
            <FormProduct
              onSubmit={updateProduct}
              initialData={selectedProduct}
              editingId={editingId}
              cancelEdit={() => {
                setEditingId(null);
                setSelectedProduct(null);
              }}
            />
          )}

          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Imagen</th>
                  <th>Servicio</th>
                  <th>Descripción</th>
                  <th>Categoría</th>
                  <th>Temporada</th>
                  <th>Precio</th>
                  <th>Disponibilidad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "80px", borderRadius: "8px" }}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>{product.season}</td>
                    <td>${product.price}</td>
                    <td>
                      <span className={`badge ${product.available ? "bg-success" : "bg-secondary"}`}>
                        {product.available ? "Disponible" : "No disponible"}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-warning me-2"
                        onClick={() => {
                          setEditingId(product.id);
                          setSelectedProduct(product);
                        }}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

