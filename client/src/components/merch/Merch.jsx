import React from "react";
import style from "./style.module.scss";
import tshirtImg from "../../assets/images/tshirt.png";
import ticketsImg from "../../assets/images/tickets.png";
import saleImg from "../../assets/images/sale.png";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

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
                <p>Сamisetas y balones con su autógrafo</p>
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
                <p>Entradas de fútbol</p>
              </div>
            </li>

            <li>
              <div className={style.merch__count}>
                <p>3x</p>
              </div>

              <div>
                <img src={saleImg} alt="tickets" />
              </div>

              <div>
                <p>Bonos de depósito</p>
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
              1800: {
                slidesPerView: 0.8,
              },

              680: {
                slidesPerView: 1.2,
              },

              520: {
                slidesPerView: 1.1,
              },

              425: {
                slidesPerView: 1.08,
              },

              320: {
                slidesPerView: 1.2,
              },
            }}
          >
            <SwiperSlide className={style.merch__item}>
              <div className={style.merch__count}>
                <p>3х</p>
              </div>

              <div>
                <img src={tshirtImg} alt="tshirt" />
              </div>

              <div>
                <p>Сamisetas y balones con su autógrafo</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.merch__item}>
              <div className={style.merch__count}>
                <p>3х</p>
              </div>

              <div>
                <img src={ticketsImg} alt="tickets" />
              </div>

              <div>
                <p>Entradas de fútbol</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.merch__item}>
              <div className={style.merch__count}>
                <p>3x</p>
              </div>

              <div>
                <img src={saleImg} alt="tickets" />
              </div>

              <div>
                <p>Bonos de depósito</p>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="custom-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Merch;
