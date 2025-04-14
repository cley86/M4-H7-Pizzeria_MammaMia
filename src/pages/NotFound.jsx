import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1>404 - Página no encontrada</h1>
      <p>¡Uy! Parece que esta pizza no está en el menú 🍕</p>
      <Link className="btn btn-primary mt-3" to="/">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
