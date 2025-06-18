// AdminProducts.jsx
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AdminContext } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";
import FormProduct from "../FormProduct";

export default function AdminProducts() {
  const { setIsAuth, products, loading, error, refreshProducts } = useContext(CartContext);

  const { addProduct, updateProduct, deleteProduct } = useContext(AdminContext);

  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate();

  const handleAdd = async (product) => {
  try {
    await addProduct(product);
    await refreshProducts(); 
    setOpen(false);
  } catch (err) {
    alert(err.message);
  }
};

const handleUpdate = async (product) => {
  try {
    await updateProduct(product);
    await refreshProducts(); 
    setEditingId(null);
    setSelectedProduct(null);
  } catch (err) {
    alert(err.message);
  }
};

const handleDelete = async (id) => {
  try {
    await deleteProduct(id);
    await refreshProducts(); 
  } catch (err) {
    alert(err.message);
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

          {open && <FormProduct onSubmit={handleAdd} />}

          {editingId && (
            <FormProduct
              onSubmit={handleUpdate}
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
                        onClick={() => handleDelete(product.id)}
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
