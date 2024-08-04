import React, { useContext } from "react";
import { Col, Container, Navbar, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import AuthContext from "./Store/auth-context";
import Cart from "./Cart";
import Auth2Context from "./Store/auth2-context";

const Header = () => {
  const cartCtx = useContext(AuthContext);
  const authCtx = useContext(Auth2Context);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler=()=>{
authCtx.logout()
  }

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" style={{ height: "50px" }}>
        <Container style={{ position: "relative" }}>
          {isLoggedIn && (
            <Navbar.Brand style={{ position: "absolute", left: "30%" }}>
              <NavLink to="/home">Home</NavLink>
            </Navbar.Brand>
          )}
          <Navbar.Brand style={{ position: "absolute", left: "40%" }}>
            <NavLink to="/store">Store</NavLink>
          </Navbar.Brand>
          <Navbar.Brand style={{ position: "absolute", left: "50%" }}>
            <NavLink to="/about">About</NavLink>
          </Navbar.Brand>
          <Navbar.Brand style={{ position: "absolute", left: "60%" }}>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </Navbar.Brand>
          {isLoggedIn && (<Navbar.Brand style={{position:'absolute', left:'70%'}}>
            <NavLink to="/profile">Profile</NavLink>
          </Navbar.Brand>)}
          
          {isLoggedIn ? (
            <Navbar.Brand style={{ position: "absolute", left: "80%" }}>
              <NavLink to="/logout" onClick={logoutHandler}>Logout</NavLink>
            </Navbar.Brand>
          ) : (
            <Navbar.Brand style={{ position: "absolute", left: "80%" }}>
              <NavLink to="/login">Login</NavLink>
            </Navbar.Brand>
          )}
        </Container>
        <Button
          onClick={cartCtx.showCartHandler}
          style={{ position: "absolute", right: "1%" }}
          variant="info"
          type="submit"
        >
          Cart ({cartCtx.cartItemCount})
        </Button>
      </Navbar>

      <Container fluid>
        <Row className="mt-1" style={{ height: "10rem", backgroundColor: "grey" }}>
          <Col>
            <h1
              style={{
                textAlign: "center",
                fontFamily: "Serif",
                color: "white",
                fontSize: "6rem",
              }}
            >
              The Generics
            </h1>
          </Col>
        </Row>
      </Container>
      {cartCtx.showCart && <Cart onClose={cartCtx.hideCartHandler} />}
    </>
  );
};

export default Header;
