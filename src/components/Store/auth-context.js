import React from 'react';

const AuthContext = React.createContext({
  showCart: false,
  showCartHandler: () => {},
  hideCartHandler: () => {},
  addItem: () => {},
  items: [], 
  totalAmount: 0,
  cartItemCount: 0,
  removeItems:()=>{}
});

export default AuthContext;
