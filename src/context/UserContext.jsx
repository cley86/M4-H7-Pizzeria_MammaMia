import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const UserContext = createContext();

// Hook personalizado para consumir el contexto
export const useUser = () => useContext(UserContext);

// Provider del contexto
export const UserProvider = ({ children }) => {
  // Recuperar el token almacenado (si existe)
  const [token, setTokenState] = useState(() => {
    const savedToken = localStorage.getItem("token");
    return savedToken === "true"; // convertimos string a booleano
  });

  // Función para iniciar sesión
  const login = () => {
    localStorage.setItem("token", "true");
    setTokenState(true);
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.setItem("token", "false");
    setTokenState(false);
  };

  return (
    <UserContext.Provider value={{ token, setToken: login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
