
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  
  return (
    <>
      <Container fluid>
        <Row className='mt-4' style={{ height: '7rem', background: '#69ffda' }}>
          <Col>
            <h1 className='display-2' style={{ textAlign: 'center', fontFamily: 'serif' }}>The Generics</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
