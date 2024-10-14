import React from "react";
import style from "./style.module.scss";
import newImg from "../../assets/images/new_man.png";
import { Link } from "react-router-dom";

const New = () => {
  const handleClick = () => {
    if (window.fbq) {
      window.fbq("track", "Lead");
    } else {
      console.warn("Error!");
    }
  };

  return (
    <section className={style.new}>
      <div className="container">
        <div className={style.new__wrapper}>
          <h2>nuevo embajador de Binomo, Miguel Ángel Borja</h2>

          <ul>
            <li>
              <img src={newImg} alt="Miguel Ángel Borja" />
            </li>

            <li>
              <h3>Participa en el concurso de Binomo:</h3>

              <ol>
                <li>
                  <p>
                    1. Haz un FTD de 30 $ o más durante el periodo de promoción
                    del 14/10 al 15/11 y ¡gana premios!
                  </p>
                </li>

                <li>
                  <p>
                    2. Hazte un retrato AI con Borja, compártelo en las redes
                    sociales etiquetando a la cuenta @binomo_america_latina
                  </p>
                </li>

                <li>
                  <p>
                    3. Gana uno de los premios: bono de depósito +100%,
                    camisetas y balones autografiados o una entrada para el
                    partido Colombia vs Ecuador.
                  </p>
                </li>
              </ol>

              <Link
                className={style.new__link__first}
                to="https://blog.binomo.com/https-blog-binomo-com-borja-reglas-es"
              >
                Bases detalladas aquí.
              </Link>

              <Link
                className={style.new__link__second}
                to="/upload-image"
                onClick={handleClick}
              >
                Generar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default New;
