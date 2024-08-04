import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CartProvider from "./components/Store/CartProvider"; // Ensure this path is correct
import { BrowserRouter } from "react-router-dom";
import { Auth2ContextProvider } from "./components/Store/auth2-context"; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Auth2ContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </Auth2ContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
