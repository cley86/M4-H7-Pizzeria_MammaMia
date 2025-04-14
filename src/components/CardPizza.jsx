import React from "react";
import { Link } from "react-router-dom";

const CardPizza = ({ id, name, price, ingredients, img, onAddToCart }) => {
  return (
    <div className="card shadow" style={{ width: "20rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <div className="card-text">
          <p>Ingredientes:</p>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <p
            className="card-text"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            Precio: ${price.toLocaleString()}
          </p>
          <div className="d-flex justify-content-between">
            <Link to={`/pizza/${id}`} className="btn btn-primary">
              Ver más
            </Link>
            <button
              className="btn btn-success"
              onClick={() => onAddToCart({ id, name, price, img })}
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
