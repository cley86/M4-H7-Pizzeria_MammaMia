import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { cart, total } = useCart();
  const { token, logout } = useUser();

  const [message, setMessage] = useState("");

  // Mostrar mensaje de sesión iniciada o cerrada
  useEffect(() => {
    if (token === true) {
      setMessage("✅ Sesión iniciada");
    } else {
      setMessage("🔒 Sesión cerrada");
    }

    const timeout = setTimeout(() => setMessage(""), 3000); // Ocultar después de 3 segundos
    return () => clearTimeout(timeout);
  }, [token]);

  return (
    <>
      {message && (
        <div className="alert alert-info text-center mb-0 py-2">
          {message}
        </div>
      )}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            🍕 Pizzería Mamma Mía
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {token ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      🔓 Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn btn-link text-white"
                      onClick={logout}
                    >
                      🔒 Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      🔐 Registrarse
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      🔐 Iniciar Sesión
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  🛒 Carrito ({cart.reduce((acc, item) => acc + item.quantity, 0)}) - ${" "}
                  {total.toLocaleString()}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
