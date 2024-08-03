import React, { useContext } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Modal from './Modal';
import AuthContext from './Store/auth-context';

const Cart = () => {
  const ctx = useContext(AuthContext);
  const cartItems = ctx.items || []; // Ensure cartItems is an array
  const removeItemHandler = (id) => {
    ctx.removeItems(id);
  }

  return (
    <Modal onClose={ctx.hideCartHandler}>
      <Container>
        <Button onClick={ctx.hideCartHandler} variant="danger" className="mb-4">
          X
        </Button>
        <Row>
          {cartItems.length === 0 ? (
            <Col>
              <p>Your cart is empty.</p>
            </Col>
          ) : (
            cartItems.map((product) => (
              <Col className="mb-4" md={6} key={product.id}>
                <div>
                  <img src={product.imageUrl} alt={product.title} style={{ width: '40%' }} />
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                  <p>Quantity: {product.amount}</p> 
                </div>
                <Button onClick={()=>removeItemHandler(product.id)} type='button' variant="danger">Remove</Button>
                
              </Col>
            ))
          )}
        </Row>
        <h2>Total Amount:${ctx.totalAmount.toFixed(2)} </h2>
        <Button variant="danger" type="button" onClick={ctx.hideCartHandler}>
          Close
        </Button>
      </Container>
    </Modal>
  );
};

export default Cart;
