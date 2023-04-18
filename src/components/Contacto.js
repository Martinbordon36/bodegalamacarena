import React from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import logo from '../assets/img/lamacalogo.png'
import Navbar from './Navbar';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacto = () => {
  
  function enviarEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_2uysve8','template_43le3wm',e.target,'2hlKsRgIOIdqWFzz8').then(res=>{
      toast.success('Consulta enviada correctamente', { autoClose: 3000 });

        console.log(res);
        setTimeout(() => {
          window.location.reload(); // Recarga la página después de 10 segundos
        }, 3000);
    })
    
}

  return (
    <>
    <Navbar />
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
        <p className='p-contacto'>Dejanos tus datos y nos ponemos en contacto con usted</p>

      </div>

      <form onSubmit={enviarEmail} className='form'>
        <input name="nombre" id="nombre" type="text" placeholder="Nombre *" maxlength="30" pattern="[a-zA-Z0-9]+" required autofocus />
        <input name="email" id="email" type="email" placeholder="Correo electrónico *" required />
        <textarea name="mensaje" class="mensaje" placeholder="¿Cuál es el motivo de tu consulta? *" rows="6" required></textarea>
        {/* 
        <div className='check'>
          <input type={'checkbox'} />
          <label for="">Acepto la politica de Privacidad y los terminos y condiciones</label>
        </div>

        <div className='check'>
          <input type={'checkbox'} />
          <label for="">Quiero recibir noticias, avisos de nuevos productos </label>
        </div> */}



        <button id="enviar" name="enviar" type="submit" className="btn">ENVIAR</button>


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
<ToastContainer/>
      <Footer />
    </>
  )
}

export default Contacto