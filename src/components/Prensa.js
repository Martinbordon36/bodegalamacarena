import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import logo from '../assets/img/lamacalogo.png'
import Navbar from './Navbar';

const Prensa = () => {
  return (
    <>
    <Navbar />
    <div className='prensa'>
    <div className='header'>
    <a  href="/">
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
      <div className='container-text-prensa'>
      <h1 className='text-center title-prensa'>Prensa</h1>
         <p className='descripcion-prensa'>
            {/* <p className='text-center'>Cultivar lo excepcional</p> */}
        Es el cuidado de las relaciones lo que nos enriquece, realza nuestras vidas y nos permite mejorar y evolucionar. Las conexiones que sentimos nos alimentan e impulsan a cultivar algo excepcional. En Ysios, capturamos la expresión más singular del terroir de Rioja Alavesa, explorando los secretos que guardan las piedras calizas de cada uno de nuestros viñedos. Cuidamos cada detalle, desde la selección manual de los mejores granos de uva en suelos arcillo-calcáreos, con una visión vanguardista en la elaboración del vino. Es este vínculo personal con cada parcela y la singularidad del paisaje que nos rodea lo que revela lo excepcional de Ysios.
        Cultivar conexiones singulares.</p>
        </div>
      </div>

      {/* <div className='container-blog'>
        <div className='blog'>
          <img src={} alt="img-blog-1" />
        </div>
      </div> */}
 
      <Footer />
        </>
  )
}

export default Prensa