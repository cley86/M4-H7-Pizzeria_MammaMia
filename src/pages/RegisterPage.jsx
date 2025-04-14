import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const { setToken } = useUser();
  const navigate = useNavigate(); // ✅ navegación tras registro

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirm) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }
    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (password !== confirm) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    // Simula registro exitoso
    setMessage("Registro exitoso.");
    setToken(true); // ✅ activa sesión
    navigate("/profile"); // ✅ redirige al perfil
  };

  return (
    <div className="container mt-5">
      <h2>Registrarse</h2>
      {message && <p className="alert alert-info">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          className="form-control mb-3"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
