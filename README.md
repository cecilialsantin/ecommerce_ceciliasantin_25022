# 🪴 NativePlant - Entrega Final - Curso React TT COMISIÓN 25022

URL: https://ecommercececiliasantin25022.vercel.app/

**Descripción general:**

NativePlant es un e-commerce de servicios de restauración ecológica en entornos urbanos y periurbanos. Los usuarios pueden explorar una galería de servicios, agregarlos a un carrito, simular una compra, completar sus datos y acceder a una ruta protegida (admin) si ingresan como usuario administrador.


## ✅ Funcionalidades implementadas

### 🌱 Estructura del proyecto
- Proyecto creado con **Vite + React**
- Enrutamiento con **React Router DOM**
- Componentes divididos en: `pages`, `components`, `context`, `auth`, `data`
- Estilos aplicados con **Bootstrap** y CSS personalizados

### 🛒 E-commerce funcional
- Galería de servicios cargada desde `data.json` con `fetch`
- Visualización individual (`ProductDescription`)
- Componente `Cart` con botones para:
  - Aumentar y disminuir cantidad
  - Eliminar servicio (ícono de trash)
  - Ver total
- Simulación de compra (`Buy`) y pago (`Pay`)
- Carrito implementado con `Context API`

### 🔐 Login simulado
- Usuario: `admin@nativeplantchain.com.ar`
- Contraseña: `123`
- Si el login coincide, se muestra el botón **Admin**
- Ruta `/admin` protegida con componente `RutaProtegida`

### 🧠 Contexto global (`CartContext`)
- Manejo de productos, carrito, autenticación
- Las funciones de `addToCart`, `deleteFromCart`, `removeFromCart` funcionan correctamente
- Se preparó el estado `isAuthenticated` y `userEmail` para login

### 🎨 Interfaz
- Navbar con logo personalizado (símbolo coreano 숲)
- Footer con mensaje personalizado
- Diseño responsive y uso de íconos (React Icons)
- Cards uniformes con cantidad, botón de "ver más", y categoría

### 🧪 Funcionalidad adicional: Filtro por categoría
- Menú desplegable para filtrar servicios
- Si no hay coincidencias, muestra mensaje y botón "Ver todos"

---

## 🔧 Consideraciones finales


1 - La acción de pagar esta dentro del componente PAY. Una vez que la persona confirma el "pago" se reduce la cantidad (quantity) en mockapi para ese product. (o servicio). El pago simulado se implemento para poder vaciar alli el carrito
2 - La cantidad (quantity) se establece en el Admin, el tope para el agregado al carrito son 5 unidades y si la persona pide 6 lanza un alert. Esto se relaciona con que son servicios y su disponibilidad en cuanto a cantidad tiene que ver con multiples factores que por el momento queda en manos del administrador. Queda pendiente el establecimiento de un sistema automático para determinar la cantidad de disponible de un servicio.

