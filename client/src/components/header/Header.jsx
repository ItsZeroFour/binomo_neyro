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
            to={
              utmSource !== null &&
              utmMedium !== null &&
              utmCampaign !== null &&
              a !== null &&
              ac !== null
                ? `https://binomo.com/es-es?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&a=${a}&ac=${ac}`
                : "https://binomo.com/es-es"
            }
          >
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
