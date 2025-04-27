import React from "react";
import Header from "../components/Header";
import { usePizzas } from "../context/PizzaContext";
import { useCart } from "../context/CartContext";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const { pizzas, loading, error } = usePizzas();
  const { addToCart } = useCart();

  if (loading)
    return <div className="text-center mt-5">Cargando pizzas...</div>;
  if (error)
    return (
      <div className="text-center mt-5 text-danger">
        Error al cargar pizzas.
      </div>
    );

  return (
    <>
      <Header /> {/* Agregamos el Header aquí */}
      <div className="container mt-4">
        <h1 className="text-center mb-4">¡Bienvenido a Pizzería Mamma Mía!</h1>

        <div className="row justify-content-center g-4">
          {pizzas.map((pizza) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
              key={pizza.id}
            >
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                onAddToCart={addToCart}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
