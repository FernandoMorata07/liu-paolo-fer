import "../css/aboutUs.css";
import iconLinkedIn from "../images/iconLinkedIn.png";
// import desarrolladores from "../images/desarroladores.png";
import aboutUsLiu from "../images/aboutUsLiu.png";
import aboutUsPaolo from "../images/aboutUsPaolo.png";
import aboutUsFernando from "../images/aboutUsFernando.png";
import React from "react";

export function AboutUs() {
  return (
    <section className="aboutUsGlobal">
      <ul className="estructuraUl">
        <li className="estructuraLi">
          <a
            className="enlaceLinkedin"
            href="https:\\www.linkedin.com/in/fernando-morata-sanchez"
            target="_blank"
            rel="noreferrer"
          >
            <img src={aboutUsFernando} alt="Fernando" />
            <p className="estructuraP">Fernando Morata</p>
          </a>
        </li>

        <li className="estructuraLi">
          <a
            className="enlaceLinkedin"
            href="https://www.linkedin.com/in/liuemith-sánchez"
            target="_blank"
            rel="noreferrer"
          >
            <img src={aboutUsLiu} alt="Liuemith" />
            <p className="estructuraP">Liuemith Sanchez</p>
          </a>
        </li>

        <li className="estructuraLi">
          <a
            className="enlaceLinkedin"
            href="https://www.linkedin.com/in/paolo-troni-developer/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={aboutUsPaolo} alt="Paolo" />
            <p className="estructuraP">Paolo Troni</p>
          </a>
        </li>
        {/* <li className="estructuraLi">
          <article className="enlaceLinkedin">
            <a
              href="https://www.linkedin.com/in/paolo-troni-developer/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="imagen1" src={aboutUsPaolo} alt="Paolo" />
              <img className="imagen2" src={iconLinkedIn} />
            </a>
          </article>
          <p className="estructuraP">Paolo Troni</p>
        </li> */}
      </ul>
      {/* <img className="desarrolladores" src={desarrolladores}></img> */}
    </section>
  );
}
