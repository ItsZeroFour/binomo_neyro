import React from "react";
import style from "./style.module.scss";
import facebook from "../../assets/icons/socials/facebook.png";
import instagram from "../../assets/icons/socials/instagram.svg";
import { Link } from "react-router-dom";

function ShareButtons({ imageUrl, text, setOpenShareMenu }) {
  const openShareWindow = (url) => {
    window.open(url, "_blank", "noopener,noreferrer,width=600,height=400");
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      imageUrl
    )}&quote=${encodeURIComponent(text)}`;
    openShareWindow(url);

    if (window.ym) {
      window.ym(98607950, "reachGoal", "ShareFB");
    }
  };

  return (
    <div className={style.share_buttons__wrapper}>
      <button
        onClick={() => {
          shareOnFacebook();
          setOpenShareMenu && setOpenShareMenu(false);
        }}
      >
        <img src={facebook} alt="facebook" />
        <p>FaceBook</p>
      </button>
      
      <Link to="https://www.instagram.com/">
        <img src={instagram} alt="inst" />
        <p>Instagram</p>
      </Link>
    </div>
  );
}

export default ShareButtons;
