import React, { useRef, useState } from 'react';
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setIsLoading]=useState(false)
  const emailInputRef=useRef()
  const passwordInputRef=useRef()
  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };
  const submitHandler=async(event)=>{
    event.preventDefault()
    setIsLoading(true)
   const enteredEmail=emailInputRef.current.value;
   const enteredPassword=passwordInputRef.current.value;

   if(isLogin){

   }else{
   const response= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOaGZ8RtZ-DpwnDfDxK9287ChrpR8B5FM',{
      method:'POST',
      body:JSON.stringify({
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken:true
      }),
      header:{
        'Content-type':'applicayion/json'
      }
     })
      if(response.ok){

      }else{
        const data=await response.json()
        console.log(data)
      }
      
     
   }
   setIsLoading(false)
  }

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6} lg={4}>
          <Card className="p-4 shadow" style={{backgroundColor:'GrayText'}}>
            <Card.Body>
              <h1 className="text-center mb-4">{isLogin ? 'Login' : 'Signup'}</h1>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required ref={emailInputRef} />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" required ref={passwordInputRef} />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                  {isLoading ? 'Sending request' : (isLogin ? 'Login' : 'Signup')}
                  </Button>
                </div>
              </Form>
              <div className="text-center mt-3">
                <Button variant='info' onClick={switchAuthModeHandler}>
                  Switch to {isLogin ? 'Signup' : 'Login'}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
