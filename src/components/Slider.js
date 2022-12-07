import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Men from '../Image/Men.jpg'
import Women from '../Image/Women.png'
import Shoes from '../Image/Shoes.png'
import Button from 'react-bootstrap/Button'; 
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <>
    <div>
         <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={Men}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 style={{fontFamily:'elephant',color:'blue'}}>MEN</h1>
        <Link to='/men'>  <Button  variant="outline-info">SHOP NOW</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={Women}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 style={{fontFamily:'elephant',color:'blue'}}>WOMEN</h1>
       <Link to='/women'><Button  variant="outline-info">SHOP NOW</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={Shoes}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 style={{fontFamily:'elephant',color:'blue'}}>SHOES</h1>
         <Link to='/shoes'><Button  variant="outline-info">SHOP NOW</Button></Link> 
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default Slider