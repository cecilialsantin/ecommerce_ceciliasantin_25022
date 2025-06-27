// AdminProducts.jsx
import { useState, useContext, useRef } from "react";
import { CartContext } from "../../context/CartContext";
import { AdminContext } from "../../context/AdminContext";
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";
import FormProduct from "../FormProduct";
import { toast } from 'react-toastify';

export default function AdminProducts() {
  const { products, loading, error, refreshProducts } = useContext(CartContext);

  const { addProduct, updateProduct, deleteProduct } = useContext(AdminContext);

  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const formRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAdd = async (product) => {
    try {
      await addProduct(product);
      await refreshProducts();
      setOpen(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleUpdate = async (product) => {
    try {
      await updateProduct(product);
      await refreshProducts();
      setEditingId(null);
      setSelectedProduct(null);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      await refreshProducts();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="display-4 fw-bold text-success">Administración de Servicios</h2>
      </div>

      {loading ? (
        <p>Cargando servicios...</p>
      ) : error ? (
        <p className="text-danger">Error al cargar los servicios.</p>
      ) : (
        <>

          <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-3">
            <div className="col-md-3">
              <div className="input-group shadow-sm">
                <span
                  className="input-group-text"
                  style={{ backgroundColor: "#f9fdf9", borderColor: "#95cea5" }}
                >
                  <FaSearch className="text-success" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar por código del servicio"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    borderColor: "#95cea5",
                    backgroundColor: "#f9fdf9",
                  }}
                />
              </div>
            </div>

            <button
              className="btn btn-warning shadow-sm"
              onClick={() => setOpen(true)}
              title="Agregar servicio"
            >
              <FaPlus size={20} /> Agregar Servicio
            </button>
          </div>



          {open && !editingId && (
            <div ref={formRef}>
              <FormProduct
                onSubmit={handleAdd}
                cancelEdit={() => setOpen(false)}
              />
            </div>
          )}

          {editingId && (
            <div ref={formRef}>
              <FormProduct
                onSubmit={handleUpdate}
                initialData={selectedProduct}
                editingId={editingId}
                cancelEdit={() => {
                  setEditingId(null);
                  setSelectedProduct(null);
                }}
              />
            </div>
          )}

          <div className="table-responsive">
            <table className="table table-hover table-striped table-bordered align-middle shadow-sm rounded">
              <thead className="table-light text-center">
                <tr>
                  <th>Código</th>
                  <th>Imagen</th>
                  <th>Servicio</th>
                  <th>Descripción</th>
                  <th>Categoría</th>
                  <th>Temporada</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Disponibilidad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {products
                  .filter((product) =>
                    product.id.toString().toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
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
                      <td>{product.quantity}</td>
                      <td>
                        <span className={`badge ${product.available ? "bg-success" : "bg-secondary"}`}>
                          {product.available ? "Disponible" : "No disponible"}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-0">
                          <button
                            className="btn text-primary rounded-circle"
                            onClick={() => {
                              setEditingId(product.id);
                              setSelectedProduct(product);
                              setTimeout(() => {
                                formRef.current?.scrollIntoView({ behavior: "smooth" });
                              }, 100); // pequeño delay para asegurar que el form esté renderizado
                            }}
                            title="Editar"
                          >
                            <FaEdit size={22} />
                          </button>
                          <button
                            className="btn text-danger rounded-circle"
                            onClick={() => handleDelete(product.id)}
                            title="Eliminar"
                          >
                            <FaTrash size={20} />
                          </button>
                        </div>
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
