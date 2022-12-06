import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    console.log(basket);
  }, [basket]);

  return (
    <>
      <Header money={money} />

      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          basket={basket}
          setBasket={setBasket}
        />
      ))}
    </>
  );
}

export default App;
