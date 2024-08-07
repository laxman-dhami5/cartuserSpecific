import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Modal from './Modal';
import AuthContext from './Store/auth-context';
import axios from 'axios';

const Cart = () => {
  const ctx = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://crudcrud.com/api/4df2e6b90e1c4fe79329c9cb264a30ea/cart${ctx.email}`);
        setCartItems(response.data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchCartItems();
  }, [ctx.email]);

  const removeItemHandler = async (id) => {
    try {
      await axios.delete(`https://crudcrud.com/api/4df2e6b90e1c4fe79329c9cb264a30ea/cart${ctx.email}/${id}`);
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Modal onClose={ctx.hideCartHandler}>
      <Container>
        <Button onClick={ctx.hideCartHandler} variant="danger" className="mb-4">
          X
        </Button>
        <Row>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {cartItems.length === 0 && !loading ? (
            <Col>
              <p>Your cart is empty.</p>
            </Col>
          ) : (
            cartItems.map((product) => (
              <Col className="mb-4" md={6} key={product._id}>
                <div>
                  <img src={product.imageUrl} alt={product.title} style={{ width: '40%' }} />
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                  <p>Quantity: {product.amount}</p> 
                </div>
                <Button onClick={() => removeItemHandler(product._id)} type='button' variant="danger">Remove</Button>
              </Col>
            ))
          )}
        </Row>
        <h2>Total Amount: ${ctx.totalAmount.toFixed(2)}</h2>
        <Button variant="danger" type="button" onClick={ctx.hideCartHandler}>
          Close
        </Button>
      </Container>
    </Modal>
  );
};

export default Cart;
