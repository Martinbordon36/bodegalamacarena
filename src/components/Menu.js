import React from 'react'
import logo from '../assets/img/lamacalogo.png'
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
<>
<div className='principal'>
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
  </div>
  </>
  )
}

export default Menu