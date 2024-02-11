import { createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';

export const CartContext = createContext({
    cart: [],
    addToCart: () => {},
    clearCart: () => {},
    showCart: false,
    setShowCart: () => {},
    removeItem: () => {},
    incrementAmount: () => {},
    decrementAmount: () => {},
});

export function CartProvider({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    const initialCart = JSON.parse(savedCart);
    return initialCart || [];
  });
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const idExists = cart.some((cartItem) => cartItem.id === item.id);

    // If the item is not in the cart, add it
    if(!idExists) {
      setCart([...cart, item]);
      return;
    }

    // If the item is in the cart, update the amount
    const newCart = cart.map((cartItem) => {
      if(cartItem.id === item.id) {
        return {
          ...cartItem,
          amount: cartItem.amount + item.amount,
        };
      }
      return cartItem;
    });

    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const incrementAmount = (id) => {
    const newCart = cart.map((item) => {
      if(item.id === id) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      }
      return item;
    });

    setCart(newCart);
  }

  const decrementAmount = (id) => {
    const newCart = cart.reduce((acc, item) => {
      if(item.id === id) {
        if(item.amount > 1) {
          acc.push({
            ...item,
            amount: item.amount - 1,
          });
        }
        return acc;
      }
      acc.push(item);
      return acc;
    }, []);

    setCart(newCart);
  }
  
  return (
    <CartContext.Provider value={{ cart, addToCart, showCart, setShowCart, clearCart, removeItem, incrementAmount, decrementAmount }}>
        {children}
      </CartContext.Provider>
    );
}
  
CartProvider.propTypes = {
  children: propTypes.node.isRequired,
};
  
  