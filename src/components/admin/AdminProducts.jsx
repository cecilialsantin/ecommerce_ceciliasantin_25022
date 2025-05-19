import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function AdminProducts() {
  const { products, setProducts } = useContext(CartContext);

  //esto permitirá pasar a no disponible un servicio en base a criterios 
  // vinculados con la disponibiilidad de los equipos técnicos. 
  // Se inhabilitará el boton agregar al carrito para 
  // que el usuario no pueda solicitar ese servicio
  const toggleAvailability = (id) => {
    const updated = products.map((prod) =>
      prod.id === id ? { ...prod, available: !prod.available } : prod
    );
    setProducts(updated);
  };

  return (
    <div className="mt-4">
      <h3 className="mb-3 text-primary">Gestión de disponibilidad de servicios</h3>
      <p className="text-muted mb-4">
        Esta funcionalidad actualiza el estado global de disponibilidad.
      </p>

      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Servicio</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Disponibilidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>
                  <span
                    className={`badge ${
                      product.available ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {product.available ? "Disponible" : "No disponible"}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => toggleAvailability(product.id)}
                    title="Cambia el estado en el contexto global"
                  >
                    Cambiar disponibilidad
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
