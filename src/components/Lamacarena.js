import React from 'react'
import img1 from '../assets/img/maca2.png'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import logo from '../assets/img/lamacalogo.png'

const Lamacarena = () => {
  return (
    <>
<div className='principal-lamacarena'>
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
  <div className='container-text-lamacarena'>
  <h1 className='text-center title-lamacarena'>La Macarena</h1>
     <p className='descripcion-lamacarena'>
     Bodega La Macarena, es la consecuencia de la evolución de una costumbre ancestral familiar. Isidoro, mi abuelo paterno, allá por los 70s se inició en el mundo del vino en Famatina, más precisamente en Campanas, su ciudad natal. En aquellos tiempos fundó Bodega “Don Antonio” en honor a su padre, mi bisabuelo. Quien procedente del Líbano y de paso por Campanas (La Rioja), sufrió la muerte de mi abuela y decidió echar raíces para estar cerca de sus restos.</p>

  </div>
  </div>
  <div className='container-home'>
                <div className='text-home'>
                    <h1 className='title-home'>Legado, Union, Naturaleza </h1>
                    <p>Mi abuela materna Nélida, nacida en la ciudad de Santa Fe como consecuencia de la inmigración italiana, amaba las bebidas espirituosas, anécdotas durante décadas entre amigos y la familia. Cosechas y momentos inolvidables que evocan siempre en mí, emociones que me llenan de felicidad.</p>
                    <p>Quiero compartir y honrar ese legado de unión y valores que forjaron, a través del tiempo y mucho movimiento, el trabajo de hombres y mujeres que hasta el día de hoy hacen posible poder contar esta historia.</p>
                    <p>Vivir el mundo del vino y las espirituosas, es armonizar, en colaboración con la naturaleza, una profunda y trascendente forma de experimentar los elementos que la madre tierra nos brinda en forma tan generosa.</p>
                    <br />
                    <br />
                </div>

                <div>
                    <img src={img1} className="img-home-maca" alt="img" />
                </div>
            </div>

            <Footer/>
  </>
  )
}

export default Lamacarena