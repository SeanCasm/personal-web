import React from "react";
import PhotoCard from "./PhotoCard";
import prog from "../img/programming.png";
import beach from "../img/beach.png";
import games from "../img/videogames.png";
const AboutMePanel = () => {
  const age = process.env.REACT_APP_AGE;
  const location = process.env.REACT_APP_LOCATION;
  const gender = process.env.REACT_APP_GENDER;
  return (
    <div>
      <div>
        <h1> Sobre mí </h1>
      </div>
      <div>
        <div className="row">
          <div className="col-md">
            <PhotoCard />
          </div>
          <div className="col-md">
            <p>
              Ingeniero Civil Informático de la Pontificia Universidad Católica
              de Valparaíso
              <br />
              <br />
              Durante mis estudios logré adquirir diversos conocimientos en
              áreas como desarrollo web, POO, bases de datos y formulación de
              proyectos informáticos. Todo en conjunto me ha ayudado a
              comprender metodologías de trabajo y las distintas situaciones
              presentes en un proyecto de software.
            </p>
          </div>
          <div className="col-md">
            <ul className="d-flex flex-column side-info m-auto w-50 mt-3 mb-3">
              <li>
                <p>Edad</p>
                <p>{age}</p>
              </li>
              <li>
                <p>Género</p>
                <p>{gender}</p>
              </li>
              <li>
                <p>Ubicación</p>
                <p>{location}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section>
        <div>
          <h3>Lo que me gusta</h3>
        </div>
        <section className="container-sm mt-3">
          <ul className="row align-center mt-3 justify-content-center">
            <li className="col-md card-web text-center bg-c">
              <img src={prog} alt="" width={64}></img>
              <p>Programación</p>
            </li>
            <li className="col-md card-web text-center bg-c ">
              <img src={beach} alt="" width={64}></img>
              <p>La playa</p>
            </li>
            <li className="col-md card-web text-center bg-c">
              <img src={games} alt="" width={64}></img>
              <p>Videojuegos</p>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default AboutMePanel;
