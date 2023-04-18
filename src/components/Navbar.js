import React, { useState } from 'react'
import logo from '../assets/img/lamacalogo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false);

  return (
    <div className='navbar'>
        <div className='nav_logo'>
        <img src={logo} className="logo-mobile" alt="logo"/>
        </div>
        <div className={`nav_items ${isOpen && "open"}`}>
        <Link to="/" className='item-nav-mobile'>Home</Link>
      <Link to="/lamacarena"  className='item-nav-mobile'>La Macarena</Link>
      <Link to="/nuestros-productos"  className='item-nav-mobile'>Nuestros Productos</Link>
      <Link to="/prensa" className='item-nav-mobile'>Prensa</Link>
      <Link to="/contacto" className='item-nav-mobile'>Contacto</Link>
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default Navbar