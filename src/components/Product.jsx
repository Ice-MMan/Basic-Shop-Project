import React from "react";

const Product = ({ product, basket, setBasket, money, total }) => {
  const { id, title, price, image } = product;

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
      <img src={image} alt="" />
      <h6>{title}</h6>
      <div className="price">$ {price}</div>
      <div className="action">
        <button disabled={!basketItem} onClick={removeBasket}>
          Çıkart
        </button>
        <span className="amount">{(basketItem && basketItem.amount) || 0}</span>
        <button disabled={total + product.price > money} onClick={addBasket}>
          Satın al
        </button>
      </div>
      <style isx>
        {`
        .product{
          
            padding:15px;
            background:#cac2c29f;
          
            margin-bottom:20px;
            font-size:15px;
            width:250px
           
            
          
        }

        .product img{
          width:100%;
          height:60%;
       
        }

        .product h6 {
          font-size:20px;
          margin-bottom:10px;
        }

        .action {

          display: flex;
          align-items:center
        }

        .action button {

          height:30px;
          padding: 0 15px;
          flex:1;
          cursor:pointer;
        }
        .amount{
          width:50px;
          text-align:center;
        
          
        }
        
        
        
        `}
      </style>
    </div>
  );
};

export default Product;
