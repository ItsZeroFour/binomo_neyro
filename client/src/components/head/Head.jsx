import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import headImg from "../../assets/images/head_img.png";

const Head = () => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <aside className={style.head__left}>
            <h1>Crea un retrato robot con Miguel Ángel Borja y gana premios</h1>
            <p>
              Сamisetas y balones con su autógrafo, entradas de fútbol y bonos
              de depósito en Binomo. Dream big with Binomo!
            </p>
            <Link to="/upload">Genere</Link>
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
