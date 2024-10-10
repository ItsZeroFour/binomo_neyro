import React from "react";
import style from "./style.module.scss";
import newImg from "../../assets/images/new_man.png";
import { Link } from "react-router-dom";

const New = () => {
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
                    2. Hazte un retrato AI con Borja, compártelo en Instagram,
                    Telegram o TikTok etiquetando a la cuenta
                    @binomo_america_latina.
                  </p>
                </li>

                <li>
                  <p>
                    3. Gana uno de los premios: bono de depósito +50% (30
                    participaciones), camisetas y balones autografiados (15
                    participaciones) o una entrada para el partido Colombia vs
                    Ecuador (5 participaciones).
                  </p>
                </li>
              </ol>

              <Link className={style.new__link__first} to="/">
                Bases detalladas aquí.
              </Link>

              <Link className={style.new__link__second} to="/">
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
