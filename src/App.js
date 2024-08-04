import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import AuthContext from "./components/Store/auth-context";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./components/Products";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./pages/ProductDetails";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Auth2Context from "./components/Store/auth2-context";

const App = () => {
  const ctx = useContext(AuthContext);
  const authCtx = useContext(Auth2Context);

  const formDataHandler = async (newData) => {
    const response = await fetch(
      "https://postdata-cc993-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <Header />
      {ctx.showCart && <Cart onClose={ctx.hideCartHandler} />}
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/store">
            <Products />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/contact-us">
            <ContactUs receiveData={formDataHandler} />
          </Route>
          <Route path="/product-detail/:productId">
            <ProductDetails />
          </Route>
          <Route path="/login">
            <Auth />
          </Route>
          {authCtx.isLoggedIn && (
            <Route path="/profile">
              <Profile />
            </Route>
          )}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
