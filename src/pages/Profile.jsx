import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { logout, token } = useUser();
  const [sessionStart, setSessionStart] = useState("");

  // Obtener marca de tiempo desde localStorage o establecerla
  useEffect(() => {
    const storedTime = localStorage.getItem("sessionStart");
    if (token) {
      if (!storedTime) {
        const now = new Date().toLocaleString();
        localStorage.setItem("sessionStart", now);
        setSessionStart(now);
      } else {
        setSessionStart(storedTime);
      }
    } else {
      setSessionStart("");
      localStorage.removeItem("sessionStart");
    }
  }, [token]);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("sessionStart");
  };

  return (
    <div className="container mt-5">
      <h2>Perfil de Usuario</h2>
      <p>
        Email: <strong>usuario@ejemplo.com</strong>
      </p>
      <p>Sesión activa: {token ? "✅ Sí" : "❌ No"}</p>
      {token && (
        <p>
          Inicio de sesión: <strong>{sessionStart}</strong>
        </p>
      )}
      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;
