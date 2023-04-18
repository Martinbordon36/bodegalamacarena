import React from 'react'
import vino2 from '../assets/img/vino2.png'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import logo from '../assets/img/lamacalogo.png'
import logonegro from '../assets/img/logonegro.png'
import Footer from './Footer';

const Vino = () => {
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

                            <img src={vino2} className="botella-individual" alt="botella" />
                        </div>
                        <div className='descripcion-botella'>


                            <div className='container-caracteristicas'>
                                <a href="/">
                                    < img src={logonegro} className="logo-negro" alt="logo" />
                                </a>
                                <div className='container-descripcion'>
                                    <h1 className='title-raza'>Malbec</h1>
                                    <p>Un malbec que expresa la tipicidad de nuestros valles bajo un concepto de sutilidad y tomabilidad</p>
                                </div>

                                <h1 className='container-caracteristicas-h1'>VIÑEDO</h1>
                                <p className='container-caracteristicas-p'>Espaldero Alto del Valle de Famatina, plantado a 4500 plantas por hectarea, regado por goteo. Rendimiento 100 qq/ha.</p>
                                <h1 className='container-caracteristicas-h1'>Momento de cosecha</h1>
                                <p className='container-caracteristicas-p'>Primera semana de marzo, cosecha manual en bines chicos. Selección meticulosa en cinta.</p>
                                <h1 className='container-caracteristicas-h1'>Varietal</h1>
                                <p className='container-caracteristicas-p'>100% Malbec</p>
                                <h1 className='container-caracteristicas-h1'>ALCOHOL,pH,ACIDEZ TOTAL,Az RESIDUAL</h1>
                                <p className='container-caracteristicas-p'> 13.6 % V/V <br/> 3.6 pH <br/>  5.6 gr/l Ac. Tartárico <br/> 1.8 gr/l Azúcar</p>
                                <h1 className='container-caracteristicas-h1'>Elaboracion</h1>
                                <p className='container-caracteristicas-p'>Se despalilla cuidadosamente la uva, se enfría, apenas ingresa a la pileta y se hace maceración pre fermentativa durante 24 horas. Luego se siembra la levadura seleccionada y se realiza una fermentación tradicional a temperatura controlada entre 26° y 28ºC, con tres remontajes diarios durante un período de maceración de 25 días.</p>
                                <h1 className='container-caracteristicas-h1'>Crianza</h1>
                                <p className='container-caracteristicas-p'>  El 80% del vino madura en pequeñas piletas de acero inoxidable y el 20% restante en barricas de roble francés.</p>
                                <h1 className='container-caracteristicas-h1'>Guarda</h1>
                                <p className='container-caracteristicas-p'> 4 Años</p>
                                <h1 className='container-caracteristicas-h1'>Notas de cata</h1>
                                <p className='container-caracteristicas-p'>Presenta color rubí profundo, en nariz aromas a frutas rojas se combinan con aromas ﬂorales y pimienta negra, presentando taninos suaves y maduros que construyen un ﬁnal dulce y amable.</p>

                           
                           
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Vino
