import React, { useState } from "react";

// Create the context with default values
const Auth2Context = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
});

// Define the provider component
export const Auth2ContextProvider = (props) => {
 const initialToken=localStorage.getItem('token')
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logInHandler = (token) => {
    localStorage.setItem('token',token)
    setToken(token);
  };

  const logOutHandler = () => {
    localStorage.removeItem('token')
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logOutHandler
  };

  return (
    <Auth2Context.Provider value={contextValue}>
      {props.children}
    </Auth2Context.Provider>
  );
};


export default Auth2Context;
