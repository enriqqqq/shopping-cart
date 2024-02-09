import { createContext, useContext, useState } from 'react';
import propTypes from 'prop-types';

const CartContext = createContext({
    cart: [],
    addToCart: () => {},
    showCart: false,
    setShowCart: () => {},
});

export const useCart = () => {
  return useContext(CartContext);
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  
  return (
    <CartContext.Provider value={{ cart, addToCart, showCart, setShowCart }}>
        {children}
      </CartContext.Provider>
    );
  }
  
  CartProvider.propTypes = {
    children: propTypes.node.isRequired,
  };
  
  