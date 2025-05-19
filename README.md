# 🪴 NativePlant - Preentrega React TT (hasta Clase 7) COMISIÓN 25022

**Descripción general:**

NativePlant es un e-commerce de servicios de restauración ecológica en entornos urbanos y periurbanos. Los usuarios pueden explorar una galería de servicios, agregarlos a un carrito, simular una compra, completar sus datos y acceder a una ruta protegida (admin) si ingresan como usuario administrador.


## ✅ Funcionalidades implementadas hasta Clase 7

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

## 🔧 Consideraciones y cosas pendientes para la entrega final

- ❌ Se usan Alerts que luego para el proyecto final se reemplazaran por mensajes más agradables para el usuario.
- ❌ El **carrito no persiste** al recargar porque aún **no se implementó localStorage** (tema no visto aún en clase)
- 🛑 La ruta `/admin` está protegida pero **no implementa lógica real** para modificar productos (solo simulado)
- ✏️ La funcionalidad de “disponibilidad del servicio” está preparada visualmente pero **no se conecta a estado global**
- 🔒 El login es solo visual y sin almacenamiento persistente
- 🧾 Validaciones simples en el formulario (`Buy`) con alertas, sin back-end