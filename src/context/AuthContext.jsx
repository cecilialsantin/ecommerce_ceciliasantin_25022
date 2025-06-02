import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


 useEffect(() => {
  const isAuthenticated = localStorage.getItem('isAuth') === 'true';
  if (isAuthenticated) {
    setIsAuth(true);
  }
}, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!email) validationErrors.email = 'El email es obligatorio';
    if (!password) validationErrors.password = 'La contraseña es obligatoria';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch('/data/users.json');
      const users = await res.json();

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!foundUser) {
        setErrors({ email: 'Credenciales inválidas' });
      } else {
        if (foundUser.role === 'admin') {
          setIsAuth(true);
          setRole(foundUser.role);
          localStorage.setItem('isAuth', true);
          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      console.error('Error al obtener los usuarios:', err);
      setErrors({ email: 'Error inesperado. Intente más tarde.' });
    }
  };

  const logout = () => {
    setIsAuth(false);
    setEmail('');
    setPassword('');
    setErrors({});
    localStorage.removeItem('isAuth');
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        role,
        setRole,
        handleSubmit,
        isAuth,
        logout,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

