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
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const logInHandler = (token) => {
    setToken(token);
  };

  const logOutHandler = () => {
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

// Export context for use in components
export default Auth2Context;
