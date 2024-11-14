import React from "react";
import style from "./style.module.scss";
import phone from "../../assets/images/how_to_use_phone.png";
import socials from "../../assets/images/socials.png";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const HowUse = () => {
  const handleClick = () => {
    if (window.fbq) {
      window.fbq("track", "Lead");
    } else {
      console.warn("Error!");
    }

    if (window.ym) {
      window.ym(98607950, "reachGoal", "mainpage_generate");
    } else {
      console.error("Яндекс.Метрика не загружена");
    }
  };

  return (
    <section className={style.how_use}>
      <div className="container">
        <div className={style.how_use__wrapper}>
          <h2>Cómo participar?</h2>

          <ul>
            <li className={style.how_use_item}>
              <h3>1. Crea tu foto</h3>
              <p>
                Haz clic en "Generar Foto" y crea tu foto con Miguel Ángel Borja
                usando inteligencia artificial (IA) directamente en nuestro
                sitio web.
              </p>
              <div className={style.how_use__image}>
                <img src={phone} alt="phone" />
              </div>
            </li>

            <li className={style.how_use_item}>
              <h3>2. Comparte en tus redes sociales</h3>
              <p>
                Publica la foto en tus redes sociales (Facebook o Instagram) y
                etiqueta a @binomo_america_latino.
              </p>
              <div className={style.how_use__image}>
                <img src={socials} alt="phone" />
              </div>
            </li>

            <li
              className={`${style.how_use_item} ${style.how_use_item__special}`}
            >
              <h3>3. Sorteo del 29 de noviembre</h3>
              <p>
                El 29 de noviembre anunciaremos a 50 ganadores seleccionados al
                azar.
              </p>
              <div>
                <Link onClick={handleClick} to="/upload-image">
                  Generar Foto
                </Link>
                <Link
                  to="https://blog.binomo.com/https-blog-binomo-com-borja-reglas-es/"
                  target="_blank"
                >
                  Más detalles sobre las reglas del concurso
                </Link>
              </div>
            </li>
          </ul>

          <Swiper
            className={style.merch__container}
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={0.8}
            navigation
            pagination={{ clickable: true, el: ".custom-pagination" }}
            scrollbar={{ draggable: true }}
            loop={true}
            breakpoints={{
              1295: {
                slidesPerView: 1.1,
              },

              680: {
                slidesPerView: 1.2,
              },

              520: {
                slidesPerView: 1.1,
              },

              425: {
                slidesPerView: 1.2,
              },

              320: {
                slidesPerView: 1.3,
              },
            }}
          >
            <SwiperSlide className={style.how_use_item}>
              <h3>1. Crea tu foto</h3>
              <p>
                Haz clic en "Generar Foto" y crea tu foto con Miguel Ángel Borja
                usando inteligencia artificial (IA) directamente en nuestro
                sitio web.
              </p>
              <div className={style.how_use__image}>
                <img src={phone} alt="phone" />
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.how_use_item}>
              <h3>2. Comparte en tus redes sociales</h3>
              <p>
                Publica la foto en tus redes sociales (Facebook o Instagram) y
                etiqueta a @binomo_america_latino.
              </p>
              <div className={style.how_use__image}>
                <img src={socials} alt="phone" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              className={`${style.how_use_item} ${style.how_use_item__special} ${style.how_use_item__special_2}`}
            >
              <h3>3. Sorteo del 29 de noviembre</h3>
              <p>
                El 29 de noviembre anunciaremos a 50 ganadores seleccionados al
                azar.
              </p>
              <div style={{ zIndex: 100 }}>
                <Link to="/upload-image">Generar Foto</Link>
                <Link
                  to="https://blog.binomo.com/https-blog-binomo-com-borja-reglas-es/"
                  target="_blank"
                >
                  Más detalles sobre las reglas del concurso
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="custom-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default HowUse;
