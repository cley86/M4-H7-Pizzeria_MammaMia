# 🍕 Pizzería Mamma Mía

Una aplicación web desarrollada con **React**, simulando un sistema de pedidos de pizza. Los usuarios pueden explorar productos, gestionarlos en un carrito, iniciar sesión, registrarse y realizar pagos simulados.

---

## 🚀 Tecnologías Usadas

- ⚛️ React + Vite
- 🧠 React Context API
- 🔁 React Router DOM
- 🎨 Bootstrap 5
- 🗂️ CSS personalizado
- 💾 localStorage para persistencia

---

## 📦 Funcionalidades Clave

- Ver listado de pizzas (API simulada)
- Ver detalle individual (`/pizza/:id`)
- Añadir productos al carrito
- Aumentar, disminuir y eliminar ítems del carrito
- Mostrar total en Navbar y Cart
- Botón “Pagar” habilitado solo si el usuario está autenticado
- Inicio y cierre de sesión simulados
- Registro de nuevos usuarios (simulado)
- Estado persistente de sesión con `localStorage`
- Rutas protegidas (`/profile`, `/login`, `/register`)
- Redirección automática después de login/registro
- Mensaje visual al iniciar o cerrar sesión
- Visualización de fecha y hora del inicio de sesión en el perfil

---

## 🗂️ Estructura del Proyecto

```bash
pizzeria-mamma-mia/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Header.jsx
│   ├── context/
│   │   ├── CartContext.jsx
│   │   ├── PizzaContext.jsx
│   │   └── UserContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Cart.jsx
│   │   ├── Pizza.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── Profile.jsx
│   │   └── NotFound.jsx
│   ├── styles/
│   │   └── Cart.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── db.json
├── package.json
├── vite.config.js
├── README.md
└── .gitignore

```

---

## 🧠 Estado Global con Context

### `CartContext`

- Maneja los productos del carrito
- Suma total y cantidad total de unidades

### `PizzaContext`

- Centraliza el `fetch` de pizzas
- Permite compartir los datos en toda la app

### `UserContext`

- Maneja el estado de autenticación
- Guarda el token en `localStorage`
- Métodos: `setToken` (login), `logout`
- Guarda fecha/hora de inicio de sesión

---

## 🔐 Rutas Protegidas

- Solo puedes acceder a `/profile` si has iniciado sesión
- Si ya estás autenticado, no puedes acceder a `/login` o `/register`
- Redirección automática luego de iniciar sesión

---

## 🧪 Pruebas Manuales

1. 🔓 Ir a `/profile` sin iniciar sesión → redirige a `/login`
2. 🔐 Iniciar sesión con:
   - `Email: test@pizzeria.com`
   - `Contraseña: 123456`
3. ✅ Se actualiza Navbar, habilita “Pagar”, y redirige a `/profile`
4. 🔁 Refrescar la página → la sesión permanece activa
5. 🔒 Logout → se ocultan botones, se desactiva pago
