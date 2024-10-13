import React, { useCallback, useEffect, useState } from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";
import axios from "axios";
import Webcam from "react-webcam";

const Camera = () => {
  const [image, setImage] = useState("");
  const [completeImage, setCompleteImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const webcamRef = React.useRef(null);

  const navigate = useNavigate();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    if (imageSrc) {
      setImage(imageSrc);
    }
  }, [webcamRef]);

  // Функция для конвертации base64 в файл
  function base64ToFile(base64String, fileName) {
    const arr = base64String.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], fileName, { type: mime });
  }

  async function compressImage(imageFile, options) {
    const compressedFile = await imageCompression(imageFile, options);

    const reader = new FileReader();
    reader.readAsDataURL(compressedFile);
    reader.onloadend = function () {
      const base64data = reader.result;
      setCompleteImage(base64data);
    };
  }

  useEffect(() => {
    if (image) {
      const imageString = image;

      const options = {
        maxSizeMB: 1, // Максимальный размер изображения после сжатия в MB
        maxWidthOrHeight: 800, // Максимальная ширина или высота изображения
        useWebWorker: true, // Использовать Web Worker для улучшения производительности
      };

      const imageFile = base64ToFile(imageString, "screenshot.jpeg");

      console.log(imageFile);

      try {
        async function compress() {
          setImageLoading(true);
          await compressImage(imageFile, options);
          setImageLoading(false);
        }

        compress();
      } catch (error) {
        console.error(error);
      }

      setCompleteImage(image);
    }
  }, [image]);

  const uploadImage = async () => {
    if (!image) return;
    const response = await fetch(image);
    const blob = await response.blob();

    const imageName = Date.now();

    const file = new File([blob], `${imageName}.jpeg`, {
      type: "image/jpeg",
    });

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/upload`,
        formData
      );

      if (res.data.url) {
        return navigate("/neyro-image-generate", {
          state: { file: file },
        });
      } else {
        throw new Error("Ошибка при загрузке изображения");
      }
    } catch (err) {
      console.log(err);
      alert("Ошибка при загрузке файла");
    }
  };

  return (
    <section className={style.camera}>
      <div className="container">
        <div className={style.camera__wrapper}>
          {!image ? (
            <div className={style.camera__cam}>
              <Webcam
                audio={false}
                height={"100%"}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={440}
                style={{ objectFit: "cover" }}
              />

              <button onClick={capture}>Take a photo</button>
            </div>
          ) : (
            <div className={style.upload_image__image}>
              {imageLoading ? (
                <p>Esperando...</p>
              ) : (
                <>
                  <img src={image} alt="uploaded image" />

                  <div className={style.upload_image__buttons}>
                    <button onClick={() => setImage("")}>Cambiar imagen</button>
                    <button onClick={uploadImage}>Genere</button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Camera;
