import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/icons/logo_2.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";
import x from "../../assets/icons/x.svg";
import telegram from "../../assets/icons/telegram.svg";
import facebook from "../../assets/icons/facebook.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__wrapper}>
          <aside className={style.footer__left}>
            <p>
              The financial operations on this site may involve risks. By using
              the tools and services provided here, you may incur financial
              losses up to a complete loss of the funds on your Binomo account.
              Please evaluate the risks and consult with an independent
              financial advisor before making any trades. Binomo is not
              responsible for any direct, indirect, consequential losses, or any
              other damages resulting from the user's actions on the platform.
            </p>

            <p>
              Binomo is a category "A" member of the International Financial
              Commission, which guarantees our customers high-quality service,
              transparency, and dispute resolution by an independent regulator.
            </p>
          </aside>

          <aside className={style.footer__right}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>

            <ul>
              <li>
                <Link to="/">
                  <img src={youtube} alt="youtube" />
                </Link>
              </li>

              <li>
                <Link to="/">
                  <img src={instagram} alt="instagram" />
                </Link>
              </li>

              <li>
                <Link to="/">
                  <img src={x} alt="x" />
                </Link>
              </li>

              <li>
                <Link to="/">
                  <img src={telegram} alt="telegram" />
                </Link>
              </li>

              <li>
                <Link to="/">
                  <img src={facebook} alt="facebook" />
                </Link>
              </li>
            </ul>

            <p>© 2014 - {currentYear} All rights reserved</p>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
