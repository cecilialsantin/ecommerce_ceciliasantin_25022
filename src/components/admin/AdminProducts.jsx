// AdminProducts.jsx
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AdminContext } from "../../context/AdminContext";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import FormProduct from "../FormProduct";
import { toast } from 'react-toastify';



export default function AdminProducts() {
  const { products, loading, error, refreshProducts } = useContext(CartContext);

  const { addProduct, updateProduct, deleteProduct } = useContext(AdminContext);

  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
        
        <button
          className="btn btn-warning shadow-sm mb-4"
          onClick={() => setOpen(true)}
          title="Agregar servicio"
        >
          <FaPlus size={20}/> Agregar Servicio
        </button>

          {open && !editingId && (

           <FormProduct onSubmit={handleAdd} 
           cancelEdit={() => setOpen(false)}
          />
          )}

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
          <table className="table table-hover table-striped table-bordered align-middle shadow-sm rounded">
              <thead className="table-light text-center">
                <tr>
                  <th>Imagen</th>
                  <th>Servicio</th>
                  <th>Descripción</th>
                  <th>Categoría</th>
                  <th>Temporada</th>
                  <th>Precio</th>
                  <th>Cantidad disponible</th>
                  <th>Disponibilidad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody className="text-center">
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
                        <FaTrash size={20}/>
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
