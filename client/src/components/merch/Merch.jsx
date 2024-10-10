import React from "react";
import style from "./style.module.scss";
import tshirtImg from "../../assets/images/tshirt.png";
import ticketsImg from "../../assets/images/tickets.png";

const Merch = () => {
  return (
    <section className={style.merch}>
      <div className="container">
        <div className={style.merch__wrapper}>
          <ul>
            <li>
              <div className={style.merch__count}>
                <p>3х</p>
              </div>

              <div>
                <img src={tshirtImg} alt="tshirt" />
              </div>

              <div>
                <p>Camiseta Binomo</p>
              </div>
            </li>

            <li>
              <div className={style.merch__count}>
                <p>3х</p>
              </div>

              <div>
                <img src={ticketsImg} alt="tickets" />
              </div>

              <div>
                <p>Camiseta Binomo</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Merch;
