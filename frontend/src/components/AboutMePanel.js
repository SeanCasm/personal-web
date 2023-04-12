import React from 'react';
import PhotoCard from './PhotoCard';
import prog from '../img/programming.png';
import beach from '../img/beach.png';
import games from '../img/videogames.png';
const AboutMePanel = () => {
  return (
    <div>
      <div>
        <h1> Sobre mí </h1>
      </div>
      <div>
        <div className='row'>
          <div className='col-md'>
            <PhotoCard />
          </div>
          <div className='col-md'>
            <p>
              Actualmente soy estudiante de sexto año de la carrera de Ingeniería Civil Informática
              en la Pontificia Universidad Católica de Valparaíso
              <br /><br />
              Durante este período académico he logrado adquirir diversos conocimientos en distintas áreas como: 
              programación orientada a objetos, desarrollo web, bases de datos y formulación de proyectos informáticos. 
              Este último me ha ayudado a comprender los procesos, arquitecturas y roles involucrados en un proyecto de software, 
              siendo una de las áreas que más ha aportado para mi desarrollo profesional.
            </p>
          </div>
          <div className='col-md'>
            <ul className='d-flex flex-column side-info m-auto w-50 mt-3 mb-3'>
              <li>
                <p>Edad</p>
                <p>23</p>
              </li>
              <li>
                <p>Género</p>
                <p>Masculino</p>
              </li>
              <li>
                <p>Ubicación</p>
                <p>Chile</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <section>
        <div>
          <h3>Lo que me gusta</h3>
        </div>
        <section className='container-sm mt-3'>
          <ul className='row align-center mt-3 justify-content-center'>
            <li className='col-md card-web text-center bg-c'>
              <img src={prog} alt='' width={64}></img>
              <p>Programación</p>
            </li>
            <li className='col-md card-web text-center bg-c '>
              <img src={beach} alt='' width={64}></img>
              <p>La playa</p>
            </li>
            <li className='col-md card-web text-center bg-c'>
              <img src={games} alt='' width={64}></img>
              <p>Videojuegos</p>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default AboutMePanel;