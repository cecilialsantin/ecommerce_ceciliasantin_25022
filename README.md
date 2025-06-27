# 🪴 NativePlant - Entrega Final - Curso React TT COMISIÓN 25022

**🌐 URL:**  
https://ecommercececiliasantin25022.vercel.app/

## 🧾 Descripción general

**NativePlant** es un e-commerce de servicios de restauración ecológica en entornos urbanos y periurbanos. Los usuarios pueden:

- Explorar servicios según categoría y temporada.
- Agregar servicios al carrito (con tope por unidad).
- Simular una compra y completar sus datos.
- Ingresar a una sección de administración protegida mediante login.

---

## ✅ Funcionalidades implementadas

### 🌱 Estructura del proyecto
- Proyecto creado con **Vite + React**
- Enrutamiento con **React Router DOM**
- Componentes organizados en: `pages`, `components`, `context`, `auth`, `data`
- Estilos con **Bootstrap 5** + CSS personalizado

### 🛒 E-commerce funcional
- Galería dinámica de servicios desde **MockAPI**
- Detalle individual de producto (`ProductDescription`)
- Agregado al carrito con control de cantidad (1 a 5)
- Simulación de compra (`Buy`) y confirmación de pago (`Pay`)
- El pago **actualiza el stock** en MockAPI y **vacía el carrito**

### 🔐 Login simulado y ruta protegida
- **Credenciales:**  
  - Usuario: `admin@nativeplantchain.com.ar`  
  - Contraseña: `123`
- Si se autentica correctamente, se accede al botón y ruta `/admin`
- Ruta protegida con `RutaProtegida.jsx`

### 🧠 Contextos globales
- `CartContext`: manejo de productos, carrito, login y estado global
- `AdminContext`: operaciones CRUD contra **MockAPI** (agregar, editar, eliminar productos)
- Manejo centralizado de estados (`isAuthenticated`, `products`, `cart`, `userRole`)

### 🛠️ Panel de administración
- CRUD completo desde `/admin`:
  - Agregar nuevo servicio
  - Editar campos de servicio (incluye imagen, cantidad, temporada, categoría, precio)
  - Eliminar servicio
- Tabla con servicios disponibles y stock
- Filtro por ID de producto (código)
- Al editar, la página se **scroll**ea automáticamente hacia el formulario

### 📦 Lógica de stock y disponibilidad
- Desde la galería:
  - Se muestra como **disponible** si tiene stock y está en temporada
  - Si está fuera de temporada, se ofrece una **pre-reserva simulada**
- Al confirmar el pago:
  - Se descuenta la cantidad seleccionada del servicio en MockAPI
  - Se vacía el carrito
- Si la cantidad es `0`, el producto aparece como no disponible

### 🔎 Funcionalidad adicional
- **Filtro por categoría** en la galería
- **Buscar por código (ID)** en el panel de administración
- Cards unificadas visualmente
- Uso de íconos (`FaEye`, `FaTrash`, `FaEdit`, `FaPlus`, `FaSearch`) y `React Toastify`

---

## 🧪 Consideraciones finales

1. ✅ El stock de cada servicio se **descuenta automáticamente al finalizar el proceso de pago** simulado (dentro del componente `Pay`). La cantidad disponible se gestiona desde el panel Admin.

2. ✅ El **tope máximo de compra por servicio** es de 5 unidades. Si se intenta agregar más, se muestra una advertencia.

3. ✅ En la vista de detalle (`ProductDescription`), si el servicio está fuera de temporada, se ofrece una **pre-reserva simulada mediante un modal** que solicita nombre y correo electrónico.

4. ✅ El **formulario de agregar/editar servicio** permite manejar la cantidad (`quantity`), disponibilidad (`available`) y temporada (`season`), reflejando los cambios en MockAPI y en tiempo real en la galería de productos.

---

## 💡 Próximas mejoras sugeridas

- Sistema automático para gestionar el stock dinámicamente según capacidad operativa.
- Validación real de usuarios mediante backend o Firebase Auth.
- Persistencia de sesión y administración de pedidos.

---

🚀 **Autor:** Cecilia Santín  
🛠️ **Tech stack:** React · Vite · React Router DOM · Bootstrap · Context API · MockAPI  
