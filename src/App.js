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
      <div className="container products">
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
      </div>

      <div>
        <Basket total={total} basket={basket} products={products} />
      </div>
      <button class="cta container" onClick={resetButon}>
        <span class="hover-underline-animation"> Shop Reset </span>
        <svg
          viewBox="0 0 46 16"
          height="10"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
          id="arrow-horizontal"
        >
          <path
            transform="translate(30)"
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            data-name="Path 10"
            id="Path_10"
          ></path>
        </svg>
      </button>
    </>
  );
}

export default App;
