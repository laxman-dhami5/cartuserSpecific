import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
const ContactUs = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');


  const formSubmitHandler=(e)=>{
    e.preventDefault()
    const formData={
        name:name,
        email:email,
        number:number
    }
    props.receiveData(formData)
    console.log(formData)
    setName('')
    setEmail('')
    setNumber('')
   
  }

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const numberChangeHAndler = (e) => {
    setNumber(e.target.value);
  };
  return (
    <>
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <h3>Contact Us</h3>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              
                <form onSubmit={formSubmitHandler}>
                  <label>Name</label>
                  <br />
                  <input type="text" onChange={nameChangeHandler} value={name} required />
                  <br />
                  <label>Email</label>
                  <br />
                  <input type="email" onChange={emailChangeHandler} value={email} required />
                  <br />
                  <label>Phone Number</label>
                  <br />
                  <input
                    type="number"
                    onChange={numberChangeHAndler}
                    value={number}
                    required
                  />
                  <Button type="submit" variant="primary">Submit</Button>
                </form>
              
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
    <Footer/>
    </>
  );
};

export default ContactUs;
