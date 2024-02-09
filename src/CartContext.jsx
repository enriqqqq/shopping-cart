import { createContext, useState } from 'react';
import propTypes from 'prop-types';

export const CartContext = createContext({
    cart: [],
    addToCart: () => {},
    clearCart: () => {},
    showCart: false,
    setShowCart: () => {},
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  
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
  
  return (
    <CartContext.Provider value={{ cart, addToCart, showCart, setShowCart, clearCart }}>
        {children}
      </CartContext.Provider>
    );
}
  
CartProvider.propTypes = {
  children: propTypes.node.isRequired,
};
  
  