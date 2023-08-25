import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import adidas1 from "../assets/adidas1.jpg"
import nike1 from "../assets/nike1.jpg"
import messi from "../assets/messi.jpg"
import cuadrado1 from '../assets/cuadrado1.jpg'
import cuadrado2 from '../assets/cuadrado2.jpg' 
import { signOut } from "firebase/auth";
import { auth } from "../main";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        //aca va un console.log
      });
  };
  
  return (
    <div className='home'>
      <div className='contenedor-cerrar' >
          <p className='cerrar-sesion'>Si desea cerrar sesion haga click aqui: <button className='btn-cerrar' onClick={handleLogout}>Cerrar sesion</button></p>
      </div>
      <Carousel>
        <Carousel.Item>
          <img className='imgCarru' src={nike1} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='imgCarru' src={messi} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='imgCarru' src={adidas1} alt="" />
        </Carousel.Item>
      </Carousel>
      <div className='nosotros'>
        <h1 className='titulo-nosotros'>Futbol22</h1>
        <p className='descripcion-nosotros'>Somos una tienda que vende indumentaria deportiva 100% original de las marcas Nike y Adidas, importada desde EEUU. Contamos con los mejores precios y con la mejor atencion.</p>
      </div>
      <div className='cuadrados'>
        <div className='cuadrado'>
          <img className='img-cuadrado' src={cuadrado1} />
          <p className='centrado'>El futbol es la cosa más importante</p>
        </div>
        <div className='cuadrado'>
          <img className='img-cuadrado' src={cuadrado2} />
          <p className='centrado'> de las cosas menos importantes</p>
        </div>
      </div>
      <div className="neon-container">
        <p className='text-neon'>No esperes mas, escribinos y te ayudamos con lo que necesites</p>
      </div>
    </div>
  )
}

export default Home