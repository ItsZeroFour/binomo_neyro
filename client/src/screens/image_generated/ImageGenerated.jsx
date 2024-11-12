import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import downloadIcon from "../../assets/icons/download.png";
import copyIcon from "../../assets/icons/copy.png";
import ShareButtons from "../../container/share_buttons/ShareButtons";
// import Modal from "../../container/modal/Modal";
import reshareIcon from "../../assets/icons/reshare.svg";
import logo from "../../assets/logo_v2.svg";
import tshirtImg from "../../assets/images/tshirt.png";
import ticketsImg from "../../assets/images/tickets.png";
import saleImg from "../../assets/images/sale.png";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const ImageGenerated = ({ utmSource, utmMedium, utmCampaign, a, ac }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [neyroImageName, setNeyroImageName] = useState("");
  const [modal, setModal] = useState(false);
  const [openShareMenu, setOpenShareMenu] = useState(false);

  const { aiImageName } = location.state || {};

  useEffect(() => {
    if (window.ym) {
      if (!aiImageName) {
        console.error("Error");
      } else {
        console.log("Success goal!");

        window.ym(98607950, "reachGoal", "generated");
      }
    }
  }, [aiImageName]);

  useEffect(() => {
    if (!aiImageName && !searchParams.get("neyroImageName")) {
      return navigate("/upload-image");
    } else if (searchParams.get("neyroImageName")) {
      setNeyroImageName(searchParams.get("neyroImageName"));
    } else {
      setNeyroImageName(aiImageName);
    }
  }, [aiImageName, searchParams]);

  const downloadImage = async () => {
    try {
      const imageUrl = `${process.env.REACT_APP_SERVER_URL.replace(
        "/api",
        ""
      )}/aiGet/${neyroImageName}`;

      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const downloadLink = document.createElement("a");

      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = neyroImageName;
      document.body.appendChild(downloadLink);
      downloadLink.click();

      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(downloadLink.href);

      if (window.ym) {
        window.ym(98607950, "reachGoal", "save");
      }
    } catch (error) {
      console.error("Ошибка при скачивании изображения:", error);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `${process.env.REACT_APP_WEBSITE_DOMAIN}/image-generated?neyroImageName=${neyroImageName}`
      );

      if (window.ym) {
        window.ym(98607950, "reachGoal", "copy");
      }

      alert("El enlace se ha copiado correctamente");
    } catch (error) {
      console.error("Error al copiar un enlace");
    }
  };

  return (
    <section className={style.image_generated}>
      <div className="container">
        <div className={style.image_generated__full}>
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
            style={{ marginTop: 20 }}
          >
            <img src={logo} alt="logo" />
          </Link>
          <div className={style.image_generated__wrapper}>
            <div className={style.image_generated__container}>
              <aside className={style.image_generated__image}>
                <div className={style.image_generated__title}>
                  <h1>tu foto está lista!</h1>
                </div>
                <img
                  src={`${process.env.REACT_APP_SERVER_URL.replace(
                    "/api",
                    ""
                  )}/aiGet/${neyroImageName}`}
                  alt="ai image"
                />

                <div className={style.image_generated__share}>
                  <div className={style.image_generated__share__buttons}>
                    <button onClick={downloadImage}>
                      <div>
                        <img src={downloadIcon} alt="download" />
                      </div>
                      <p>Descargar</p>
                    </button>

                    <button onClick={copyToClipboard}>
                      <div>
                        <img src={copyIcon} alt="copy" />
                      </div>
                      <p>Сopiar</p>
                    </button>

                    <button onClick={() => setOpenShareMenu(true)}>
                      <div>
                        <img src={reshareIcon} alt="reshare" />
                      </div>
                      <p>Redes sociales</p>
                    </button>
                  </div>

                  <div className={style.image_generated__share__list}>
                    <ShareButtons
                      imageUrl={`${process.env.REACT_APP_SERVER_URL.replace(
                        "/api",
                        ""
                      )}/aiGet/${neyroImageName}`}
                      text={""}
                      setOpenShareMenu={setOpenShareMenu}
                    />
                  </div>

                  {openShareMenu && (
                    <div className={style.image_generated__share__menu}>
                      <h2>compartir en redes sociales</h2>
                      <div
                        className={style.image_generated__share__close}
                        onClick={() => setOpenShareMenu(false)}
                      />
                      <ShareButtons
                        imageUrl={`${process.env.REACT_APP_SERVER_URL.replace(
                          "/api",
                          ""
                        )}/aiGet/${neyroImageName}`}
                        text={""}
                        setOpenShareMenu={setOpenShareMenu}
                      />
                    </div>
                  )}
                </div>
              </aside>

              <aside className={style.image_generated__content}>
                <h1>tu foto está lista!</h1>
                <p>
                  No te olvides the compartir la foto en Instagram, Facebook o
                  TikTok con la etiqueta de cuenta @binomo_america_latina y
                  luego visite el sitio web de Binomo para hacer un depósito de
                  $30 o más. Utilice el código de promoción BORJABINOMO para
                  obtener un bono de depósito del 50%
                </p>
                <Link
                  to="https://blog.binomo.com/https-blog-binomo-com-borja-reglas-es"
                  target="_blank"
                >
                  Reglas de uso.
                </Link>

                <div className={style.image_generated__buttons}>
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
                    Cambiar a Binomo
                  </Link>
                  <Link
                    to="/upload-image"
                    onClick={() => {
                      if (window.ym) {
                        window.ym(98607950, "reachGoal", "one more");
                      }
                    }}
                  >
                    Hacer una imagen diferente
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>

        <div className={style.merch__wrapper}>
          <h2>Premios para los ganadores</h2>
          <p>
            El 29 de noviembre, Binomo seleccionará al azar a 50 ganadores que
            recibirán los siguientes premios. Atención: los premios se asignarán
            aleatoriamente entre los ganadores.
          </p>

          <ul>
            <li>
              <div className={style.merch__items_sec}>
                <p>15 camisetas</p>
                <p>1 bola</p>
              </div>
              <div>
                <img src={tshirtImg} alt="tshirt" />
              </div>

              <div>
                <p>Сamisetas y balones con su autógrafo</p>
              </div>
            </li>

            <li>
              <div className={style.merch__items_sec}>
                <p>5 entradas para el fútbol</p>
              </div>

              <div>
                <img src={ticketsImg} alt="tickets" />
              </div>

              <div>
                <p>Entradas de fútbol</p>
              </div>
            </li>

            <li>
              <div className={style.merch__items_sec}>
                <p>32 duplicar el depósito</p>
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
                slidesPerView: 1.08,
              },

              320: {
                slidesPerView: 1.2,
              },
            }}
          >
            <SwiperSlide className={style.merch__item}>
              <div className={style.merch__items_sec}>
                <p>15 camisetas</p>
                <p>1 bola</p>
              </div>

              <div>
                <img src={tshirtImg} alt="tshirt" />
              </div>

              <div>
                <p>Сamisetas y balones con su autógrafo</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.merch__item}>
              <div className={style.merch__items_sec}>
                <p>5 entradas para el fútbol</p>
              </div>

              <div>
                <img src={ticketsImg} alt="tickets" />
              </div>

              <div>
                <p>Entradas de fútbol</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.merch__item}>
              <div className={style.merch__items_sec}>
                <p>32 duplicar el depósito</p>
              </div>

              <div>
                <img src={saleImg} alt="tickets" />
              </div>

              <div>
                <p>Código de promoción</p>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="custom-pagination"></div>
        </div>
      </div>

      {/* {modal && <Modal setModal={setModal} />} */}
    </section>
  );
};

export default ImageGenerated;
