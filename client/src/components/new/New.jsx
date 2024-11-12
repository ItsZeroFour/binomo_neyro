import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const New = () => {
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
    <section className={style.new}>
      <div className="container">
        <div className={style.new__wrapper}>
          <ul>
            <li>
              <h2>QUÉ ES BINOMO?</h2>

              <p>
                Binomo es una plataforma en línea que permite tanto a los
                operadores inexpertos como a los expertos ganar fondos extra
                incluso sobre la marcha. 
              </p>

              <p>
                Binomo opera en más de 130 países. Llevamos prestando servicios
                desde 2014 y nos hemos consolidado como una plataforma de
                primera clase con una amplia gama de activos. 
              </p>

              <Link to="/upload-image">¡Participe en el concurso!</Link>
            </li>

            <li>
              <img src={logo} alt="logo" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default New;
