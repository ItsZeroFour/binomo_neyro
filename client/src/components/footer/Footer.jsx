import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/icons/logo_2.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";
import x from "../../assets/icons/x.svg";
import telegram from "../../assets/icons/telegram.svg";
import facebook from "../../assets/icons/facebook.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__wrapper}>
          <aside className={style.footer__left}>
            <p>
              Las operaciones financieras que se ofrecen en este sitio pueden
              involucrar riesgos. Al usar los servicios y herramientas
              financieras que se ofrecen aquí, usted puede sufrir pérdidas
              financieras, incluyendo la pérdida completa de los fondos en su
              cuenta de Binomo. Por favor, evalúe todos los riesgos financieros
              y consulte a un asesor financiero independiente antes de hacer
              cualquier negociación.
            </p>

            <p>
              Binomo no es responsable de ninguna pérdida directa, indirecta o
              consecuencial, o de cualquier otro daño que resulte de las
              acciones del usuario en la plataforma. Binomo es un miembro de
              categoría "A" de la Comisión Financiera Internacional, lo cual
              garantiza a nuestros clientes una alta calidad de servicio,
              transparencia, y la resolución de disputas por parte de un
              regulador independiente.
            </p>
          </aside>

          <aside className={style.footer__right}>
            <Link to="/" target="_blank">
              <img src={logo} alt="logo" />
            </Link>

            <ul>
              <li>
                <Link
                  to="https://www.youtube.com/channel/UCwkD9jHgRANkwNWMKfZQm0w "
                  target="_blank"
                >
                  <img src={youtube} alt="youtube" />
                </Link>
              </li>

              <li>
                <Link
                  to="https://www.instagram.com/binomo_america_latina/"
                  target="_blank"
                >
                  <img src={instagram} alt="instagram" />
                </Link>
              </li>

              <li>
                <Link to="https://x.com/page_binomo" target="_blank">
                  <img src={x} alt="x" />
                </Link>
              </li>

              <li>
                <Link to="https://t.me/binomo_america_latina" target="_blank">
                  <img src={telegram} alt="telegram" />
                </Link>
              </li>

              <li>
                <Link
                  to="https://www.facebook.com/binomo.america.latina"
                  target="_blank"
                >
                  <img src={facebook} alt="facebook" />
                </Link>
              </li>

              <li>
                <Link
                  to="https://www.tiktok.com/@binomo_america_latina"
                  target="_blank"
                >
                  <img src={tiktok} alt="tiktok" />
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
