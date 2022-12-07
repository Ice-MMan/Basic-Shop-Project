import React from "react";
import BasketItem from "./BasketItem";

const Basket = ({ total, basket, products }) => {
  console.log(basket);
  console.log(products);
  return (
    <div className="basket-container container">
      <div>
        {basket.map((item) => (
          <BasketItem
            item={item}
            product={products.find((product) => product.id === item.id)}
          />
        ))}
      </div>
      <div className="total"> Harcana Para ${total}</div>
      <style jsx>
        {`
        .basket-container {
            padding:20px;
            background:#fff;
            border:1px solid #ddd;
        }
        .basket-container h3 {
            font-size;20px;
            margin-bottom:15px;

        }
        .basket-container .total {
            border-top:1px solid #ddd;
            padding-top:10px;
            margin-top:10px;
            font-size:18px;
            font-weight:bold;
            text-align:right;

        }
        `}
      </style>
    </div>
  );
};

export default Basket;
