import React from 'react'
import { Link } from 'react-router-dom'
import Brand from '../assets/1.png'
const Footer = () => {

  return (
    <div className='contenedor-footer'>
            <div className="social-links">
		<div id="twitter" className="social-btn flex-center">
        <ion-icon name="logo-twitter"></ion-icon>
			<span>@bastianialessio</span>
		</div>
	
		<div id="linkedin" className="social-btn flex-center">
        <ion-icon name="logo-instagram"></ion-icon>
			<span>bastianialessio</span>
		</div>
    
		<div id="github" className="social-btn flex-center">
        <ion-icon name="logo-github"></ion-icon>
			<span>bastiani</span>
	</div>
    </div>
            <Link to={"/"}>
                <img className='brand-footer' src={Brand} alt="" />
            </Link>
            <div className='contactanos'>
              <p>Tel: +54 2804030980</p>
              <p>Email: ale-ssio@hotmail.es</p>
              <p></p>
            </div>
    </div>
  )
}

export default Footer