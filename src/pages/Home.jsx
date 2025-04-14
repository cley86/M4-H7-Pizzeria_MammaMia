import React from "react";
import Header from "../components/Header";
import { usePizzas } from "../context/PizzaContext";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { pizzas, loading, error } = usePizzas();
  const { addToCart } = useCart();

  if (loading) return <p>Cargando pizzas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container-fluid text-center min-vh-100 d-flex flex-column px-0">
      <Header />
      <div className="row w-100 justify-content-center mt-5 mb-5">
        <div className="col-12 d-flex justify-content-center flex-wrap gap-3">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="card" style={{ width: "18rem" }}>
              <img src={pizza.img} className="card-img-top" alt={pizza.name} />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">Precio: ${pizza.price}</p>
                <p>
                  <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
                </p>
                <p>
                  <strong>Descripción:</strong> {pizza.desc}
                </p>
                <button
                  onClick={() => addToCart(pizza)}
                  className="btn btn-primary"
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
