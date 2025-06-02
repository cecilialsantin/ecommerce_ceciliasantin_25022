import { createContext, useState, useEffect } from "react";

// se desabilita para no tener que separar el context en otro archivo
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  //El carrito se borra al recargar la pagina hasta 
  // que implementemos localStorage cuando lo veamos en el curso
useEffect(() => {
  fetch("https://683c47e728a0b0f2fdc6ac4c.mockapi.io/services")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error al obtener datos");
      }
      return res.json();
    })
    .then((datos) => {
      setTimeout(() => {
        setProducts(datos);
        setLoading(false);
      }, 2000);
    })
    .catch((err) => {
      console.error("Error al cargar productos:", err);
      setError(true);
      setLoading(false);
    });
}, []);

const refreshProducts = () => {
  setLoading(true);
  fetch("https://683c47e728a0b0f2fdc6ac4c.mockapi.io/services")
    .then((res) => {
      if (!res.ok) throw new Error("Error al obtener datos");
      return res.json();
    })
    .then((datos) => {
      setProducts(datos);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error al recargar productos:", err);
      setError(true);
      setLoading(false);
    });
};



  const handleAddToCart = (product) => {
  const quantityToAdd = product.quantity || 1; // cantidad mínima = 1
  const productInCart = cart.find((item) => item.id === product.id);

  if (productInCart) {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantityToAdd }
          : item
      )
    );
  } else {
    setCart([...cart, { ...product, quantity: quantityToAdd }]);
  }
};

  const handleDeleteFromCart = (product) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === product.id) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null;
            }
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };

  const handleRemoveFromCart = (productId) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
};


  return (
    <CartContext.Provider
      value={{
        cart,
        refreshProducts,
        setCart,
        products,
        setProducts,
        loading,
        error,
        handleAddToCart,
        handleDeleteFromCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
