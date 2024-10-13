import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Modal = ({ setModal }) => {
  return (
    <div className={style.modal}>
      <div className="container">
        <div className={style.modal__wrapper}>
          <div className={style.modal__close} onClick={() => setModal(false)} />
          <h2>Participa en el concurso de Binomo:</h2>

          <ol>
            <li>
              <p>
                1. Haz un FTD de 30 $ o más durante el periodo de promoción del
                14/10 al 15/11 y ¡gana premios!
              </p>
            </li>

            <li>
              <p>
                2. Hazte un retrato AI con Borja, compártelo en etiquetando a la
                cuenta @binomo_america_latina.
              </p>
            </li>

            <li>
              <p>
                3. Gana uno de los premios: bono de depósito +50%, camisetas y
                balones autografiados o una entrada para el partido Colombia vs
                Ecuador.
              </p>
            </li>
          </ol>

          <Link to="https://blog.binomo.com/https-blog-binomo-com-borja-reglas-es">
            Bases detalladas aquí.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
