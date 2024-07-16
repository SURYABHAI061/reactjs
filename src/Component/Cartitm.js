import React, { useEffect, useState } from 'react';
import '../StyleMain/Cart.css';

function Cartitm({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const calculateTotalPrice = () => {
    return CART
      .map(item => parseFloat(item.price.replace('₹', '')) * item.amount)
      .reduce((total, value) => total + value, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      {CART?.map((cartItem, cartIndex) => (
        <div className="cart-item" key={cartIndex}>
          <img src={cartItem.img} alt={cartItem.title} />
          <span>{cartItem.title}</span>
          <button
            onClick={() => {
              const _CART = CART.map((item, index) => {
                return cartIndex === index
                  ? { ...item, amount: item.amount > 0 ? item.amount - 1 : 0 }
                  : item;
              });
              setCART(_CART);
            }}
          >
            -
          </button>
          <span>{cartItem.amount}</span>
          <button
            onClick={() => {
              const _CART = CART.map((item, index) => {
                return cartIndex === index
                  ? { ...item, amount: item.amount + 1 }
                  : item;
              });
              setCART(_CART);
            }}
          >
            +
          </button>
          <span className="price">₹{cartItem.price * cartItem.amount}</span>
        </div>
      ))}
      <p className="total-price">Total Price: ₹{calculateTotalPrice()}</p>
    </div>
  );
}

export default Cartitm;
