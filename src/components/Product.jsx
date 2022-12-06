import React from "react";

const Product = ({ product, basket, setBasket }) => {
  const { id, title, price } = product;

  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    checkBasket.amount -= 1;
    if (checkBasket.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    }
  };

  return (
    <div className="product">
      <h6>{title}</h6>
      <div className="price">$ {price}</div>
      <div className="action">
        <button onClick={removeBasket}>Çıkart</button>
        <span className="amount">{(basketItem && basketItem.amount) || 0}</span>
        <button onClick={addBasket}>Satın al</button>
      </div>
      <style isx>
        {`
        .product{
            padding:10px;
            background:#8f88889f;
            border:2px solid #f01010;
            margin-bottom:20px;
            font-size:15px;
        }`}
      </style>
    </div>
  );
};

export default Product;
