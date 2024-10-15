import React from "react";
import style from "./style.module.scss";
import facebook from "../../assets/icons/socials/facebook.png";
import x from "../../assets/icons/socials/x.png";
import whatsapp from "../../assets/icons/socials/whatsapp.png";
import reddit from "../../assets/icons/socials/reddit.png";
import linkedin from "../../assets/icons/socials/linkedin.png";

function ShareButtons({ imageUrl, text, setOpenShareMenu }) {
  const openShareWindow = (url) => {
    window.open(url, "_blank", "noopener,noreferrer,width=600,height=400");
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      imageUrl
    )}&quote=${encodeURIComponent(text)}`;
    openShareWindow(url);
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      imageUrl
    )}&text=${encodeURIComponent(text)}`;
    openShareWindow(url);
  };

  const shareOnWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(
      text
    )}%20${encodeURIComponent(imageUrl)}`;
    openShareWindow(url);
  };

  const shareOnReddit = () => {
    const url = `https://www.reddit.com/submit?url=${encodeURIComponent(
      imageUrl
    )}&title=${encodeURIComponent(text)}`;
    openShareWindow(url);
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      imageUrl
    )}`;
    openShareWindow(url);
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
      <button
        onClick={() => {
          shareOnTwitter();
          setOpenShareMenu && setOpenShareMenu(false);
        }}
      >
        <img src={x} alt="x" />
        <p>X(Twitter)</p>
      </button>
      <button
        onClick={() => {
          shareOnWhatsApp();
          setOpenShareMenu && setOpenShareMenu(false);
        }}
      >
        <img src={whatsapp} alt="facebook" />
        <p>Whatsapp</p>
      </button>
      <button
        onClick={() => {
          shareOnReddit();
          setOpenShareMenu && setOpenShareMenu(false);
        }}
      >
        <img src={reddit} alt="reddit" />
        <p>Reddit</p>
      </button>
      <button
        onClick={() => {
          shareOnLinkedIn();
          setOpenShareMenu(false);
        }}
      >
        <img src={linkedin} alt="linkedin" />
        <p>LinkedIn</p>
      </button>
    </div>
  );
}

export default ShareButtons;
