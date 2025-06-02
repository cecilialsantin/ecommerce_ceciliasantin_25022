import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { FiLogOut } from "react-icons/fi";


export default function Header() {
  const { cart } = useContext(CartContext);
  const cantidadTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

  const { isAuth, role, logout } = useAuth();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand text-secondary d-flex align-items-center gap-2" to="/">
            <img
              src="/images/logo.png"
              alt="Logo bosque"
              style={{ height: "24px" }}
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

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-2">
                 {isAuth && role === "admin" && (
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin">Admin</Link>
                    </li>
                  )}
              <li className="nav-item">
                <Link className="nav-link" to="/productos">Servicios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactos">Contactos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nosotros">Nosotros</Link>
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

              {isAuth ? (
                <li className="nav-item">
                 <button className="nav-link" onClick={logout}>
                  <FiLogOut size={20} />
                </button>

                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <FaUser size={20} />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
