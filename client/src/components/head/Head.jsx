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
              ¡Hazte una foto con Miguel Borja y gana premios increíbles de
              Binomo!
            </h1>
            <Link
              className={style.head__link__mobile}
              onClick={handleClick}
              to="/upload-image"
            >
              Únete
            </Link>
            <div>
              <p>
                Binomo ofrece una oportunidad única para todos los fanáticos del
                fútbol y el trading: ¡crea tu propia foto virtual con el famoso
                delantero colombiano de "River Plate," Miguel Ángel Borja, y
                participa en el sorteo de premios exclusivos!
              </p>
            </div>
            <Link
              className={style.head__link}
              onClick={handleClick}
              to="/upload-image"
            >
              Únete
            </Link>
          </aside>
          <aside className={style.head__right}>
            {/* <div className={style.head__sticker}>
              <p>+ 50% al depósito, código promocional BORJABINOMO</p>
            </div> */}
            <img src={headImg} alt="Miguel Ángel Borja" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Head;
