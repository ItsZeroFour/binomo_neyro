import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = ({ utmSource, utmMedium, utmCampaign, a, ac }) => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__wrapper}>
          <Link
            to="https://binomo.com/es-es?utm_source=borja_ai_landing&utm_medium=SP2&utm_campaign=camp2"
          >
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
