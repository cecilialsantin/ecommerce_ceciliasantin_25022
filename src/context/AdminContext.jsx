// context/AdminContext.jsx
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const apiUrl = "https://683c47e728a0b0f2fdc6ac4c.mockapi.io/services";

  const addProduct = async (product) => {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!res.ok) throw new Error("Error al agregar servicio");
  };

  const updateProduct = async (product) => {
    const res = await fetch(`${apiUrl}/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!res.ok) throw new Error("Error al actualizar servicio");
  };

  const deleteProduct = async (id) => {
    const confirm = window.confirm("¿Seguro que querés eliminar este servicio?");
    if (!confirm) return;

    const res = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Error al eliminar producto");
  };

  return (
    <AdminContext.Provider
      value={{ addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </AdminContext.Provider>
  );
};
