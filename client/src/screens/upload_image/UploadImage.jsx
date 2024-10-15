import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import uploadIcon from "../../assets/icons/upload.png";
import cameraIcon from "../../assets/icons/camera.png";
import { Link, useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";
import axios from "axios";

const UploadImage = ({ utmSource, utmMedium, utmCampaign, a, ac }) => {
  const [isCamera, setIsCamera] = useState(false);
  const [image, setImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const navigate = useNavigate();

  async function checkCamera() {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        console.error("API not supported.");
        setIsCamera(false);
      }

      const devices = await navigator.mediaDevices.enumerateDevices();

      const videoInputDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );

      if (videoInputDevices.length > 0) {
        setIsCamera(true);
      } else {
        setIsCamera(false);
      }
    } catch (error) {
      console.error(error);
      setIsCamera(false);
    }
  }

  useEffect(() => {
    checkCamera();
  }, []);

  const handleChangeFile = async (event) => {
    try {
      const file = event.target.files[0];

      const options = {
        maxSizeMB: 1, // Максимальный размер изображения после сжатия в MB
        maxWidthOrHeight: 800, // Максимальная ширина или высота изображения
        useWebWorker: true, // Использовать Web Worker для улучшения производительности
      };

      const maxSizeInBytes = 5 * 1024 * 1024;

      if (file.size > maxSizeInBytes) {
        return alert("You have reached the image size limit. Maximum: 5MB");
      }

      setImageLoading(true);

      const compressedFile = await imageCompression(file, options);

      setImageLoading(false);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(compressedFile);
    } catch (err) {
      console.log(err);
    }
  };

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
    <section className={style.upload_image}>
      <div className="container">
        <div className={style.upload_image__wrapper}>
          <Link
            to="https://binomo.com/es-es?utm_source=borja_ai_landing&utm_medium=SP2&utm_campaign=camp2"
          >
            <svg
              width="176"
              height="34"
              viewBox="0 0 176 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M105.232 9.99953C99.5723 9.99953 94.3371 14.1164 94.3371 20.3811C94.3371 26.6458 99.5723 30.7626 105.232 30.7626C110.892 30.7626 116.127 26.6458 116.127 20.3811C116.127 14.1164 110.892 9.99953 105.232 9.99953ZM105.232 25.4644C102.438 25.4644 100.174 23.1733 100.174 20.3453C100.174 17.5172 102.438 15.2261 105.232 15.2261C108.027 15.2261 110.29 17.5172 110.29 20.3453C110.29 23.1733 108.027 25.4644 105.232 25.4644ZM61.2985 10.4649H67.4534V30.2614H61.2985V10.4649ZM68.0194 4.34338C68.0194 6.2765 66.3568 7.78003 64.3759 7.78003C62.395 7.78003 60.7325 6.2765 60.7325 4.34338C60.7325 2.41027 62.395 0.906738 64.3759 0.906738C66.3568 0.942537 68.0194 2.41027 68.0194 4.34338ZM91.8256 20.3811V30.2614H85.6706V20.8465C85.6706 17.5172 84.3972 15.5841 81.6381 15.5841C78.879 15.5841 77.6055 17.5172 77.6055 20.8465V30.2614H71.4506V20.3811C71.4506 14.1164 75.4124 9.99953 81.6381 9.99953C87.8638 9.99953 91.8256 14.1164 91.8256 20.3811ZM151.642 20.2021V30.2614H145.487V20.2021C145.487 17.195 144.249 15.5841 141.843 15.5841C139.438 15.5841 138.2 17.195 138.2 20.2021V30.2614H132.045V20.2021C132.045 17.195 130.807 15.5841 128.402 15.5841C125.996 15.5841 124.758 17.195 124.758 20.2021V30.2614H118.674V20.2021C118.674 13.9374 122.883 9.99953 128.472 9.99953C131.338 9.99953 133.637 11.0377 135.193 12.8992C136.75 11.0377 139.049 9.99953 141.914 9.99953C147.432 9.99953 151.642 13.9374 151.642 20.2021ZM165.084 9.99953C159.424 9.99953 154.189 14.1164 154.189 20.3811C154.189 26.6458 159.424 30.7626 165.084 30.7626C170.743 30.7626 175.979 26.6458 175.979 20.3811C175.979 14.1164 170.743 9.99953 165.084 9.99953ZM165.084 25.4644C162.289 25.4644 160.025 23.1733 160.025 20.3453C160.025 17.5172 162.289 15.2261 165.084 15.2261C167.878 15.2261 170.142 17.5172 170.142 20.3453C170.142 23.1733 167.878 25.4644 165.084 25.4644ZM47.5383 9.99953C45.4159 9.99953 43.6472 10.5365 42.2677 11.5747V1.19313H36.2542V19.2713C36.2542 26.5384 41.1711 30.7626 47.0431 30.7626C52.915 30.7626 58.0795 26.6458 58.0795 20.3811C58.1149 14.1164 53.198 9.99953 47.5383 9.99953ZM47.2553 25.4644C44.4608 25.4644 42.1969 23.1733 42.1969 20.3453C42.1969 17.5172 44.4608 15.2261 47.2553 15.2261C50.0498 15.2261 52.3137 17.5172 52.3137 20.3453C52.3137 23.1733 50.0498 25.4644 47.2553 25.4644Z"
                fill="#FFDC3C"
              />
              <path
                d="M13.5954 1.52148C11.4278 0.254976 8.65606 1.00657 7.40459 3.20022L0.607931 15.113C-0.643545 17.3067 0.09913 20.1117 2.26674 21.3782C4.43434 22.6447 7.20605 21.8931 8.45751 19.6995L15.2542 7.78667C16.5056 5.59301 15.763 2.78799 13.5954 1.52148Z"
                fill="#FFDC3C"
              />
              <path
                d="M20.4011 13.4343C18.2335 12.1678 15.4618 12.9194 14.2103 15.113L7.41366 27.0258C6.16219 29.2195 6.90486 32.0245 9.07247 33.291C11.2401 34.5575 14.0118 33.8059 15.2632 31.6123L22.0599 19.6995C23.3114 17.5058 22.5687 14.7008 20.4011 13.4343Z"
                fill="#FFDC3C"
              />
            </svg>
          </Link>

          {!image ? (
            <div className={style.upload_image__upload}>
              <ul>
                <input
                  id="create-post-img"
                  type="file"
                  hidden
                  onChange={handleChangeFile}
                  accept=".jpg, .png, .jpeg"
                />

                <li>
                  <label htmlFor="create-post-img">
                    <div className={style.upload_image__content}>
                      <img src={uploadIcon} alt="upload image" />
                      <h3>Cargar una imagen</h3>
                      <p>
                        En la imagen sólo debe aparecer tu cara. La imagen no
                        debe superar los 5 megabytes
                      </p>
                    </div>
                  </label>
                </li>

                <li
                  onClick={() =>
                    isCamera
                      ? navigate("/upload-image/camera")
                      : navigate("/upload-image")
                  }
                >
                  <div className={style.upload_image__content}>
                    <img src={cameraIcon} alt="camera" />
                    <h3>Haz una foto</h3>
                    <p>
                      En la imagen sólo debe aparecer tu cara. La imagen no debe
                      superar los 5 megabytes
                    </p>
                  </div>
                </li>
              </ul>

              <p>
                Al cargar una imagen acepta las normas de transferencia{" "}
                <Link to="https://blog.binomo.com/https-blog-binomo-com-borja-foto-es/">
                  de datos personales
                </Link>
              </p>
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

export default UploadImage;
