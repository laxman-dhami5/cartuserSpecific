import React, { useState, useEffect } from "react";

const Auth2Context = React.createContext({
  token: '',
  isLoggedIn: false,
  email: '',
  login: (token) => {},
  logout: () => {}
});

export const Auth2ContextProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setEmail(decodedToken.email);
    } else {
      setEmail('');
    }
  }, [token]);

  const userIsLoggedIn = !!token;

  const logInHandler = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const logOutHandler = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    email: email,
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
