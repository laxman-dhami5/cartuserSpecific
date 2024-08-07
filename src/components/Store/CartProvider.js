import React, { useState, useEffect } from 'react';
import AuthContext from './auth-context';

const CartProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [items, setItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const addItem = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (existingItemIndex === -1) {
        
        return [...prevItems, item];
      } else {
       
        return prevItems.map((i) => {
          if (i.id === item.id) {
            return { ...i, amount: i.amount + item.amount };
          }
          return i;
        });
      }
    });

    setTotalAmount((prevTotal) => prevTotal + item.price * item.amount);
  };

  const removeItems = (id) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === id);
      const existingItem = prevItems[existingItemIndex];
      if (!existingItem) return prevItems;

      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = prevItems.filter((i) => i.id !== id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      }

      return updatedItems;
    });

    // Update totalAmount after removing item
    setTotalAmount((prevTotal) => {
      const itemToRemove = items.find((i) => i.id === id);
      return itemToRemove ? prevTotal - itemToRemove.price : prevTotal;
    });
  };

  useEffect(() => {
    const totalCount = items.reduce((count, item) => count + item.amount, 0);
    setCartItemCount(totalCount);
  }, [items]);

  return (
    <AuthContext.Provider
      value={{
        showCart: showCart,
        showCartHandler: showCartHandler,
        hideCartHandler: hideCartHandler,
        addItem: addItem,
        removeItems: removeItems,
        items: items,
        totalAmount: totalAmount,
        cartItemCount: cartItemCount,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default CartProvider;
