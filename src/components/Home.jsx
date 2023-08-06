import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import adidas from "../assets/adidas.jpg"
import bocha from "../assets/bocha.jpg"
import nike from "../assets/nike.jpg"
const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='imgCarru' src={adidas} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img className='imgCarru' src={bocha} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img className='imgCarru' src={nike} alt="" />
      </Carousel.Item>
    </Carousel>
  )
}

export default Home