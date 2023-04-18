import React from 'react'
import vino1 from '../assets/img/vino1.png'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import logo from '../assets/img/lamacalogo.png'
import logonegro from '../assets/img/logonegro.png'
import Footer from './Footer';

const Tinkunacotorrontes = () => {
    return (
        <>
            <Navbar />
            <div className='vino-individuales'>
                <div className='header'>

                    <a href="/">
                        <img src={logo} className="logo" alt="logo" />
                    </a>

                    <nav className="menu">
                        <ul className="menu-list">
                            <Link to="/" className='item-nav'>Home</Link>
                            <Link to="/lamacarena" className='item-nav'>La Macarena</Link>
                            <Link to="/nuestros-productos" className='item-nav'>Nuestros Productos</Link>
                            <Link to="/prensa" className='item-nav'>Prensa</Link>
                            <Link to="/contacto" className='item-nav'>Contacto</Link>
                        </ul>
                    </nav>
                </div>
                <div className='productos-indivualess'>
                    <div className='productos-individuales'>
                        <div className='container-botella'>

                            <img src={vino1} className="botella-individual" alt="botella" />
                        </div>
                        <div className='descripcion-botella'>


                            <div className='container-caracteristicas'>
                                <a href="/">
                                    < img src={logonegro} className="logo-negro" alt="logo" />
                                </a>
                                <div className='container-descripcion'>
                                    <h1 className='title-raza'>Torrontes</h1>
                                    <p>Un malbec que expresa la tipicidad de nuestros valles bajo un concepto de sutilidad y tomabilidad</p>
                                </div>

                                <h1 className='container-caracteristicas-h1 '>VIÑEDO</h1>
                                <p className='container-caracteristicas-p'> Parral añoso del Valle de Famatina, plantado a 3500 plantas por hectárea, regado por goteo. Rendimiento 120 qq/ha</p>
                                <h1 className='container-caracteristicas-h1'>Momento de cosecha</h1>
                                <p className='container-caracteristicas-p'>Última semana de Febrero a primera semana de Marzo, cosecha manual en bines chicos. Selección meticulosa en cinta.</p>
                                <h1 className='container-caracteristicas-h1'>Varietal</h1>
                                <p className='container-caracteristicas-p'>100% Torrontés</p>
                                <h1 className='container-caracteristicas-h1'>ALCOHOL,pH,ACIDEZ TOTAL,Az RESIDUAL</h1>
                                <p className='container-caracteristicas-p'>  3.1 % V/V<br/> 3.4 pH <br/>  6.2 gr/l Ac. Tartárico <br/> 1.8 gr/l Azúcar</p>
                                <h1 className='container-caracteristicas-h1'>Elaboracion</h1>
                                <p className='container-caracteristicas-p'>Se despalilla cuidadosamente la uva, se enfría apenas ingresa a la pileta y se hace una maceración pelicular de 48 horas. Fermenta a 24° C durante 2 semanas y luego se deja en contacto con las lías durante 15 días.</p>
                                <h1 className='container-caracteristicas-h1'>Crianza</h1>
                                <p className='container-caracteristicas-p'>  6 meses en tanques de acero inoxidable</p>
                                <h1 className='container-caracteristicas-h1'>Guarda</h1>
                                <p className='container-caracteristicas-p'> 3 Años</p>
                                <h1 className='container-caracteristicas-h1'>Notas de cata</h1>
                                <p className='container-caracteristicas-p'>En nariz muestra aromas a jazmines, rosas, duraznos blancos y cítricos. En el paladar es complejo y refrescante. Persistente y equilibrado.</p>

                           
                           
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Tinkunacotorrontes

