import React from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import logo from '../assets/img/lamacalogo.png'

const Contacto = () => {
  return (
    <>
      <div className='contacto'>
        <div className='header'>
        <a href="/">
  <img src={logo} className="logo" alt="logo"/>
  </a>
  
    <nav className="menu">
    <ul className="menu-list">
      <Link to="/" className='item-nav'>Home</Link>
      <Link to="/lamacarena"  className='item-nav'>La Macarena</Link>
      <Link to="/nuestros-productos"  className='item-nav'>Nuestros Productos</Link>
      <Link to="/prensa" className='item-nav'>Prensa</Link>
      <Link to="/contacto" className='item-nav'>Contacto</Link>
    </ul>
  </nav>
        </div>
        <h1 className='text-center title-contacto'>Contacto</h1>
        <p>Dejanos tus datos y nos ponemos en contacto con usted</p>

      </div>

      <form method="post">
        <input name="nombre" type="text" placeholder="Nombre *" maxlength="30" pattern="[a-zA-Z0-9]+" required autofocus />
        <input name="email" type="email" placeholder="Correo electrónico *" required />
        <textarea name="consulta" placeholder="¿Cuál es el motivo de tu consulta? *" rows="6" required></textarea>
        {/* 
        <div className='check'>
          <input type={'checkbox'} />
          <label for="">Acepto la politica de Privacidad y los terminos y condiciones</label>
        </div>

        <div className='check'>
          <input type={'checkbox'} />
          <label for="">Quiero recibir noticias, avisos de nuevos productos </label>
        </div> */}



        <button id="enviar" name="enviar" type="submit" class="btn">ENVIAR</button>


      </form>
      {/* <div className='container-form'>    
      <form className='formulario'>
        <label> Nombre: *</label>
        <input placeholder='Introduce tu nombre'/>
        <label> Email: *</label>
        <input placeholder='Introduce tu email'/>
        <label> Asunto: *</label>
        <input placeholder='Introduce tu Asunto'/>
        <label id="mensaje"> Mensaje: *</label>
        <input placeholder='Introduce tu Mensaje'/>
    
  
      </form>
      </div> */}

      <Footer />
    </>
  )
}

export default Contacto