import { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { productsInCart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-items">
      {productsInCart.length > 0 &&
        productsInCart.map((product) => (
          <div className="cart-item">
            <img src={product.image} alt="image" />
            <div className="buttons">
              <button onClick={() => removeFromCart(product.id)}>-</button>
              <p>{product.amount}</p>
              <button onClick={() => addToCart(product)}>+</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
