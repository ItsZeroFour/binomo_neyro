import React from "react";
import style from "./style.module.scss";
import group from "../../assets/icons/group.svg";
import world from "../../assets/icons/world.svg";
import money from "../../assets/icons/money.svg";

const Advantages = () => {
  return (
    <section className={style.advantages}>
      <div className="container">
        <div className={style.advantages__wrapper}>
          <h2>por qué la gente elige Binomo?</h2>

          <div className={style.advantages__container}>
            <aside className={style.advantages__left}>
              <div className={style.advantages__item__main}>
                <div className={style.advantages__item__main__text}>
                  <h3>3,000,000+</h3>
                  <p>Usuarios activos</p>
                </div>

                <img src={group} alt="group" />
              </div>

              <ul>
                <li>
                  <h3>24/7</h3>
                  <p>Soporte</p>
                </li>

                <li>
                  <h3>70+</h3>
                  <p>Activos comerciales</p>
                </li>
              </ul>
            </aside>
            <aside className={style.advantages__right}>
              <div className={style.advantages__item__main__sec}>
                <div className={style.advantages__item__main__text}>
                  <h3>130+</h3>
                  <p>Países de todo el mundo</p>
                </div>

                <img src={world} alt="world" />
              </div>

              <ul>
                <li>
                  <h3>$1</h3>
                  <p>Comercio mínimo</p>
                </li>

                <li>
                  <div>
                    <h3>$10</h3>
                    <p>Depósito mínimo</p>
                  </div>

                  <img src={money} alt="money" />
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
