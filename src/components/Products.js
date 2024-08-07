import React, { useContext } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Footer from "./Footer";
import AuthContext from "./Store/auth-context";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Auth2Context from "./Store/auth2-context";

const productsArr = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "p2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "p4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = (props) => {
  const ctx = useContext(AuthContext);
  const authCtx=useContext(Auth2Context)
  const addToCartHandler = (product) => {
    ctx.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      amount: 1,
    });
  };
  if(!authCtx.isLoggedIn){
    return <Redirect to="/login"/>
  }
  return (
    <>
      <Container>
        <Row>
          <h3 style={{ textAlign: "center" }}>Music</h3>
          {productsArr.map((product) => (
            <Col className="mb-4" md={6} key={product.id}>
              <div>
              <Link to={`/product-detail/${product.id}`}>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    style={{ width: "40%" }}
                  />
                </Link>
                <Link to={`/product-detail/${product.id}`}>
                  
                  <h3>{product.title}</h3>
                </Link>
                <p>${product.price}</p>
                <Button
                  type="button"
                  variant="primary"
                  onClick={() => addToCartHandler(product)}
                >
                  Add To Cart
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="info" onClick={ctx.showCartHandler}>
          See Cart
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default Products;
