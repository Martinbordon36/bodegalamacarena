import React from 'react'
import img1 from '../assets/img/002.jpg'
import img2 from '../assets/img/003.jpg'
import img3 from '../assets/img/004.jpg'

const Home = () => {
    return (
        <>
            <div className='container-home'>
                <div className='text-home'>
                    <h1 className='title-home'>TRADICION Y NATURALEZA</h1>
                    <p className='title-home-p'>Nuestra filosofía es la valoración de la tradición familiar y la conexión con la naturaleza en la producción de vinos y bebidas espirituosas. Mantenemos vivos los valores y la historia que han pasado de generación en generación al tiempo que trabajamos en colaboración con la naturaleza, apreciando los elementos que la tierra nos brinda para lograr una experiencia profunda y trascendental.</p>
                    <br />
                    <br />
                </div>

                <div>
                    <img src={img1} className="img-home" alt="img-blog"/>
                </div>
            </div>

            <div className='container-home'>
                <div>
                    <img src={img2} className="img-home" alt="img-blog"/>
                </div>

                <div className='text-home'>
                    <h1 className='title-home'>La bodega</h1>
                    <p className='title-home-p'>Somos una bodega moderna, integrada al paisaje del lugar y altamente tecnificada. Está equipada con tanques de acero inoxidable, control de temperatura en todos los recipientes, equipamiento de última generación y un completo laboratorio para poder hacer el seguimiento adecuado del proceso productivo. Ubicados en el centro de Finca La Seis, el tiempo de traslado de la uva a la bodega es mínimo, asegurando una molienda de fruta fresca y el mejor estado sanitario. Creemos que la suma de pequeños detalles hacen la calidad final de nuestros vinos.
</p>
                </div>
            </div>

            <div className='container-home'>
                <div className='text-home'>
                    <h1 className='title-home'>Valle, sierras y suelo</h1>
                    <p className='title-home-p'>La vitivinicultura de La Rioja está concentrada en pequeños valles irrigados ubicados al oeste de la provincia, como el Valle de Anguinán,  entre las sierras de Velasco por el este y la sierra de Famatina por el oeste, donde las precipitaciones superan los 300 mm. A causa de la variada topografía, existen diferencias térmicas notables entre los valles del oeste y la planicie. Los suelos, de tipo aluvial, presentan textura más gruesa en la meseta y más fina en valles planicies. Son profundos, sueltos, bastante permeables, de buena fertilidad, franco a franco arenoso o franco limoso y raramente salitroso.
</p>
                </div>

                <div>
                    <img src={img3} className="img-home" alt="img-blog" />
                </div>
            </div>
        </>
    )
}

export default Home