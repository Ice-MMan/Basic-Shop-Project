import { useEffect, useState } from "react";
import "./App.css";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const toplam = basket.reduce((acc, item) => {
      return (
        acc +
        item.amount * products.find((product) => product.id === item.id).price
      );
    }, 0);

    setTotal(toplam);

    console.log(total);
  }, [basket]);

  const resetButon = () => {
    setBasket([]);
  };

  return (
    <>
      <Header total={total} money={money} />

      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          basket={basket}
          setBasket={setBasket}
          total={total}
          money={money}
        />
      ))}
      <div>
        <Basket total={total} basket={basket} products={products} />
      </div>

      <button onClick={resetButon}>Sıfırla </button>
    </>
  );
}

export default App;
