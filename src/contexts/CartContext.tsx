import React, { createContext, useState } from 'react';
import { ProductType } from '../types';

type CartContextProps = {
  productsInCart: ProductType[];
  addToCart: (x: ProductType) => void;
  removeFromCart: (x: ProductType['id']) => void;
};

export const CartContext = createContext({} as CartContextProps);

const CartContextProvider: React.FC = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState<ProductType[]>([]);

  const addToCart = (clickedProduct: ProductType) => {
    setProductsInCart((prev) => {
      const isInCart = prev.find((product) => product.id === clickedProduct.id);
      if (isInCart) {
        return prev.map((product) =>
          product.id === clickedProduct.id
            ? { ...product, amount: product.amount + 1 }
            : product
        );
      }

      return [...prev, { ...clickedProduct, amount: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setProductsInCart((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;

          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as ProductType[])
    );
  };

  return (
    <CartContext.Provider value={{ productsInCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
