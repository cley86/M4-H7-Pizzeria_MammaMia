import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("No se encontró la pizza");
        return response.json();
      })
      .then((data) => setPizza(data))
      .catch((error) => {
        console.error("Error fetching pizza:", error);
        setPizza(null);
      });
  }, [id]);

  if (!pizza) {
    return <div className="text-center mt-5">Cargando pizza...</div>;
  }

  return (
    <div className="container text-center mt-4">
      <h1>{pizza.name}</h1>
      <img
        src={pizza.img}
        alt={pizza.name}
        className="img-fluid"
        style={{ maxHeight: "300px" }}
      />
      <h3 className="mt-3">Precio: ${pizza.price.toLocaleString()}</h3>
      <h4 className="mt-4">Ingredientes:</h4>
      <ul className="list-unstyled">
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>🍕 {ing}</li>
        ))}
      </ul>
      <p className="mt-3">{pizza.desc}</p>
      <button className="btn btn-success" onClick={() => addToCart(pizza)}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default Pizza;
