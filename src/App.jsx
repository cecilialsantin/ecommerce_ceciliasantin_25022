import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Header from './components/estaticos/Header';
import Footer from './components/estaticos/Footer';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contacts from './pages/Contacts';
import ProductsGallery from './pages/ProductsGallery';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import Login from './pages/Login';
import RutasProtegidas from './auth/RutasProtegidas';
import ProductDescription from './components/ProductDescription';
import Cart from './components/Cart';
import Buy from './components/Buy';
import Pay from './components/Pay';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { isAuth } = useAuth(); //

  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Aboutus />} />
          <Route path="/contactos" element={<Contacts />} />
          <Route path="/productos" element={<ProductsGallery />} />

          {/* Ruta dinámica */}
          <Route path="/products/:id" element={<ProductDescription />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/login" element={<Login />} />

          {/* Ruta protegida */}
          <Route
            path="/admin"
            element={
              <RutasProtegidas isAuthenticated={isAuth}>
                <Admin />
              </RutasProtegidas>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />


    </>
  );
}

export default App;
