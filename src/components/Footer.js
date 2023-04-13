import React from 'react'
import logo from '../assets/img/lamacalogo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-p'> 
        <img src={logo} className="logo-footer" alt="logo"/>
        <p>Camino de la hoya</p>
        <p>01300 Laguardia</p>
        <p>Chilecito, La Rioja</p>
      </div>
      <div className='footer-p'>
        <p>Bodega La Macarena</p>
        <p>Visite la bodega</p>
        <p>Nuestros vinos</p>
        <p>Contacto</p>
      </div>
      <div className='footer-p'>
        <p>Politica de privacidad</p>
        <p>Termino y condiciones</p>
        <p>Politica de Cookies</p>

      </div>
      <div className='footer-p'>
        <p>Pernod Ricard Winemakers Spain S.A.U ©️ Copyright 2022 Ysios.</p>
        <p>Todos los derechos reservados</p>
        <p>Comparta el contenido de la página de la plataforma de la marca únicamente con personas mayores de 18 años</p>
      </div>

    </div>
  )
}

export default Footer
