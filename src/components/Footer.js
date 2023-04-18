import React from 'react'
import logo from '../assets/img/lamacalogo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-p'> 
        <img src={logo} className="logo-footer" alt="logo"/>
        <p>Alberdi 541 5D</p>
        <p>+54 11 2697-2018</p>
        <p>La Rioja, Argentina</p>
      </div>
      <div className='footer-p'>
        <p>Bodega La Macarena</p>
        <p>Visite la bodega</p>
        <p>Nuestros vinos</p>
        <p>Contacto</p>
      </div>
      <div className='footer-p'>
        <p>NUESTRAS REDES</p>
        <a href="https://www.facebook.com/bodegalamacarena"><p>Facebook</p></a>
        <a href="https://www.instagram.com/bodegalamacarena/"><p>Instagram</p></a>
        <a href="https://www.youtube.com/channel/UCG4VdEqwOyHsEqZNr8wyQwQ"><p>Youtube</p></a>
      </div>
      <div className='footer-p'>
        <p>Comparta el contenido de la página de la plataforma de la marca únicamente con personas mayores de 18 años</p>
        <p>Todos los derechos reservados</p>
        <p>© 2023 Desarrollado por Grupo Mildonio ©.</p>
      </div>

    </div>
  )
}

export default Footer
