import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import headImg from "../../assets/images/head_img.png";

const Head = () => {
  const handleClick = () => {
    if (window.fbq) {
      window.fbq("track", "Lead");
    } else {
      console.warn("Error!");
    }

    if (window.ym) {
      window.ym(98607950, "reachGoal", "mainpage_generate");
    } else {
      console.error("Яндекс.Метрика не загружена");
    }
  };

  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <aside className={style.head__left}>
            <h1>
              ¡Crea una foto con nuestro embajador Miguel Ángel Borja usando IA
              y gana premios increíbles!
            </h1>
            <Link
              className={style.head__link__mobile}
              onClick={handleClick}
              to="/upload-image"
            >
              Genere
            </Link>
            <p>
              Haz un depósito de $30 USD y participa por artículos autografiados
              por Borja, entradas para partidos de fútbol y bonos de depósito.
              Comparte tu foto en redes sociales y etiquétanos para aumentar tus
              oportunidades de ganar.
            </p>
            <Link
              className={style.head__link}
              onClick={handleClick}
              to="/upload-image"
            >
              Genere
            </Link>
          </aside>
          <aside className={style.head__right}>
            <img src={headImg} alt="Miguel Ángel Borja" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Head;
