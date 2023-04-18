import React from 'react'
import vino1 from '../assets/img/vino1.png'
import vino2 from '../assets/img/vino2.png'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import logo from '../assets/img/lamacalogo.png'
import Navbar from './Navbar';

const NuestrosProductos = () => {
  return (
<>
<Navbar />
    <div className='nuestros-productos'>
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
      <h1 className='text-center title-nuestrosvinos'>Nuestros vinos</h1>
      </div>
      
      <div className='productos'>
            <div className='d-flex'>
                <img src={vino2} className="botella" alt="botella" />
                <div className='descripcion-botella'>
                <h3>Tinkunako Malbec</h3>
                <p>Nuestra interpretación del varietal característico de Argentina, con la tipicidad única de los valles riojanos.</p>
                <Link to="/tinkunaco-malbec" className='boton-vermas'>Ver más</Link>
               </div>
            </div>
            <div className='d-flex'>
                <img src={vino1} className="botella" alt="botella"/>
            <div className='descripcion-botella'>
                <h3>Tinkunako Torrontes</h3>
                <p>El capaje que identifica a La Rioja elaborado buscando cuidar cada descriptor de esta uva única.</p>
                <Link to="/tinkunaco-torrontes" className='boton-vermas'>Ver más</Link>
            </div>
            </div>
            <div className='d-flex'>
                <img src={vino1} className="botella" alt="botella" />
            <div className='descripcion-botella'>
                <h3>Tinkunako Rose</h3>
                <p>Es un rosado delicado y balanceado que expresa la versatilidad de este varietal para lograr diversidad de perfiles organolépticos.</p>
                <p className='boton-vermas'>Ver más</p>
            </div>
            </div>

      </div>

      <Footer/>
    </>
  )
}

export default NuestrosProductos