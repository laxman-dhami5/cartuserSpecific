import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Footer from '../components/Footer';

const concertsInIndia = [
  { date: '2024-07-15', place: 'Mumbai Stadium', time: '7:00 PM' },
  { date: '2024-08-02', place: 'Bangalore Arena', time: '6:30 PM' },
  { date: '2024-09-10', place: 'Delhi Amphitheater', time: '8:00 PM' },
  { date: '2024-11-05', place: 'Kolkata Stadium', time: '6:00 PM' },
  { date: '2024-12-12', place: 'Hyderabad Arena', time: '8:30 PM' }
];

const Home = () => {
  return (
    <div>
      <Row >
        <Col className='mt-4' style={{textAlign:'center'}}>
          {concertsInIndia.map((ele, i) => (
            <div key={i}>
              <p><span style={{fontWeight:'bold'}}>{ele.date}</span> {ele.place} {ele.time} <Button>Buy Tickets</Button> <hr /></p>
              
            </div>
            
          ))}
        </Col>
      </Row>
      <Footer/>
    </div>
  );
}

export default Home;
