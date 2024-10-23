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
import Modal from "../../container/modal/Modal";
import reshareIcon from "../../assets/icons/reshare.svg";
import logo from "../../assets/logo_v2.svg";

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

        window.ym(98607950,'reachGoal','generated')
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
                  Su código promocional especial: BORJABINOMO. El código
                  promocional da +50% al depósito.
                </p>
                <p>
                  Comparte esta imagen en Instagram, TikTok o Telegram para
                  tener la oportunidad de ganar premios.
                </p>

                <button onClick={() => setModal(true)}>Reglas de uso.</button>

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
      </div>

      {modal && <Modal setModal={setModal} />}
    </section>
  );
};

export default ImageGenerated;
