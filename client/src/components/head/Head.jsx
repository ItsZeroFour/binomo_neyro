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
              ¡Tómate una foto con Miguel Borja, haz un deposito y gana
              mercancía exclusiva!
            </h1>
            <Link
              className={style.head__link__mobile}
              onClick={handleClick}
              to="/upload-image"
            >
              Genere
            </Link>
            <div>
              <p>
                Crea una foto IA con Miguel Ángel Borja, haz un deposito de $30
                o más en Binomo usando el código de promoción BORJABINOMO y gana
                mercancía exclusiva firmada y tiquetes de fútbol.
              </p>
              <p style={{ marginTop: 10 }}>
                Hazte un retrato AI con Borja, compártelo en las redes sociales
                etiquetando a la cuenta @binomo_america_latina para aumentar tus
                oportunidades de ganar!
              </p>
            </div>
            <Link
              className={style.head__link}
              onClick={handleClick}
              to="/upload-image"
            >
              Genere
            </Link>
          </aside>
          <aside className={style.head__right}>
            <div className={style.head__sticker}>
              <p>+ 50% al depósito, código promocional BORJABINOMO</p>
            </div>
            <img src={headImg} alt="Miguel Ángel Borja" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Head;
