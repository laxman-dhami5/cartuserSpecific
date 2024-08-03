// Header.js
import React, { useContext } from "react";
import { Col, Container, Navbar, Row, Button } from "react-bootstrap";

import AuthContext from "./Store/auth-context";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";

const Header = () => {
  const ctx = useContext(AuthContext);

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" style={{ height: "50px" }}>
        <Container style={{ position: "relative" }}>
          
          <Navbar.Brand style={{ position: "absolute", left: "30%" }}>
            <NavLink to="/home">Home</NavLink>
          </Navbar.Brand>
          <Navbar.Brand style={{ position: "absolute", left: "40%" }}>
            <NavLink to="/store">Store</NavLink>
          </Navbar.Brand>
          <Navbar.Brand style={{ position: "absolute", left: "50%" }}>
            <NavLink to="/about">About</NavLink>
          </Navbar.Brand>
          <Navbar.Brand style={{ position: "absolute", left: "60%" }}>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </Navbar.Brand>
          <Navbar.Brand style={{ position:"absolute",left:'80%' }}>
            <NavLink to="/login" >
              Login
            </NavLink>
          </Navbar.Brand>
        </Container>
        <Button
          onClick={ctx.showCartHandler}
          style={{ position: "absolute", right: "1%" }}
          variant="info"
          type="submit"
        >
          Cart ({ctx.cartItemCount})
        </Button>
      </Navbar>

      <Container fluid>
        <Row
          className="mt-1"
          style={{ height: "10rem", backgroundColor: "grey" }}
        >
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
      {ctx.showCart && <Cart onClose={ctx.hideCartHandler} />}
    </>
  );
};

export default Header;
