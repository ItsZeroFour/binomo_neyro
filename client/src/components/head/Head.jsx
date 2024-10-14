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
  };

  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <aside className={style.head__left}>
            <h1>Crea un retrato AI con Miguel Ángel Borja y gana premios</h1>
            <p>
              Сamisetas y balones con su autógrafo, entradas de fútbol y bonos
              de depósito en Binomo. ¡Sueña a lo grande con Binomo!
            </p>
            <Link to="/upload-image" onClick={handleClick}>
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
