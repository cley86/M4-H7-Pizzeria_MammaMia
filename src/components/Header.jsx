import React from "react";
import "../styles/Header.css";
import headerImage from "../assets/header-image.jpg";

const Header = () => {
  return (
    <header
      className="header-container"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="header-overlay">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
};

export default Header;
