import React from "react";
import BasketItem from "./BasketItem";

const Basket = ({ total, basket, products }) => {
  console.log(basket);
  console.log(products);
  return (
    <div>
      <div>
        {basket.map((item) => (
          <BasketItem
            item={item}
            product={products.find((product) => product.id === item.id)}
          />
        ))}
      </div>
      <div> Harcana Para ${total}</div>
    </div>
  );
};

export default Basket;
