import React, { useContext } from 'react';

import { Wrapper } from './ProductCard.styles';
import { ProductType } from '../../types';
import { CartContext } from '../../contexts/CartContext';

type Props = {
  item: ProductType;
};

const ProductCard: React.FC<Props> = ({ item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <Wrapper>
      <div className="card-image">
        <img src={item.image} alt="image" />
      </div>
      <div className="card-content">{item.description}</div>
      <div className="cart-buttons">
        <button
          className="button is-danger"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>

        <button className="button is-primary" onClick={() => addToCart(item)}>
          Add
        </button>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
