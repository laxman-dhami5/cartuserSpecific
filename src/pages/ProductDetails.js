import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Products from '../components/Products';

const images = [
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



const ProductDetails = () => {
    const params = useParams();
  const pic=images.find((pic)=>pic.id===params.productId)
  if(!pic){
    return <p>No image found</p>
  }
    return (
        <>
        <Row className="justify-content-md-center mt-4">
            <Col >
                <Route path={`/quotes/${params.productId}`}>
             <Products/>
                </Route>
                <h1 >Reviews</h1>
            </Col>
        </Row>
        <Footer/>
        </>

    );
}

export default ProductDetails;


