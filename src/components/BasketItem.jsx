import React from "react";

const BasketItem = ({ item, product }) => {
  console.log(item);
  return (
    <div>
      <ol>
        {product.title} x {item.amount}
      </ol>
    </div>
  );
};

export default BasketItem;
