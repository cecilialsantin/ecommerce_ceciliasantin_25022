import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; // ajustá el path según tu estructura

export default function Header() {
  const { cart } = useContext(CartContext);
  const cantidadTotal = cart.reduce((acc, item) => acc + item.quantity, 0);
  const { isAuthenticated, userEmail } = useContext(CartContext);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand text-secondary d-flex align-items-center gap-2" to="/">
            <img
              src="/images/logo.png" // Asegurate de que el logo esté en la carpeta `public/images`
              alt="Logo bosque"
              style={{ height: "24px" }} // Tamaño chico
            />
            NativePlant
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>

        {/*esto hace que no se muestre el boton de Admin si el que hizo login no es el usuario admin, 
        es simulado y se vincula con la funcionalidad de rutas protegidas*/}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-2">
               {isAuthenticated && userEmail === "admin@nativeplantchain.com.ar" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">Admin</Link>
                </li>
                )}
              <li className="nav-item">
                <Link className="nav-link" to="/productos">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactos">
                  Contactos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nosotros">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item position-relative">
                <Link className="nav-link" to="/cart">
                <FaShoppingCart size={24} />
                  {cantidadTotal > 0 && (
                    <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger me-2">
                      {cantidadTotal}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
