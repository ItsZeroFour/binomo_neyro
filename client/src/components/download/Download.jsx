import React from "react";
import style from "./style.module.scss";
import group from "../../assets/icons/group.svg";
import googlePlay from "../../assets/icons/googleplay.svg";
import apple from "../../assets/icons/apple.png";
import phone from "../../assets/images/phone.png";
import tab from "../../assets/images/tab.png";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <section className={style.download}>
      <div className="container">
        <div className={style.download__wrapper}>
          <aside className={style.download__left}>
            <h2>Puede operar en cualquier dispositivo</h2>
            {/* <p>Puede operar en cualquier dispositivo</p> */}

            <div className={style.download__users}>
              <div>
                <h3>10m+</h3>
                <p>Descargas</p>
              </div>

              <img src={group} alt="group" />
            </div>

            <ul>
              <li>
                <Link to="https://binomo.onelink.me/509527443/gsvumzpx ">
                  <img src={googlePlay} alt="google play binomo" />

                  <div>
                    <p>Descargas</p>
                    <h4>Google play</h4>
                  </div>
                </Link>
              </li>

              <li>
                <Link to="https://binomo.onelink.me/509527443/gsvumzpx ">
                  <img src={apple} alt="app store binomo" />

                  <div>
                    <p>Descargas</p>
                    <h4>App store</h4>
                  </div>
                </Link>
              </li>
            </ul>
          </aside>
          <aside className={style.download__right}>
            <img src={phone} alt="phone" />
            <img src={tab} alt="tab" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Download;
