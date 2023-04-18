import React from 'react'
import Home from './Home';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import logo from '../assets/img/lamacalogo.png'
import Navbar from './Navbar';

const Header = () => {
  return (
<>
<Navbar />
<div className='principal'>
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


<div className='container-text'>
  <h1 className='text-center title'>Honrando nuestro legado ancestral</h1>
  </div>
    </div>

    

  <Home />
  <Footer />
    </>
  
  
  )
}

export default Header