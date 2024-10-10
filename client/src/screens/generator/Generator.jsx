import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import axios from "axios";

const Generator = () => {
  const [image, setImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [aiImageGeneratedName, setAiImageGeneratedName] = useState("");
  const [isSaved, setIsSaved] = useState(false);

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
    try {
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

        setIsSaved(true);

        const neyroFormData = new FormData();

        neyroFormData.append("image", file);
        neyroFormData.append("overwrite", "false");
        neyroFormData.append("subfolder", "facesImages");
        neyroFormData.append("type", "input");

        const { data } = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/aiUpload`,
          neyroFormData
        );

        console.log(data);

        if (data.error) {
          return console.log(
            "Произошла ошибка загрузки изображения на удаленный сервер"
          );
        }

        if (res.data.url) {
          alert("Изображение успешно загружено!");

          const uploadImageRes = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/uploadImage`,
            { filename: res.data.url }
          );

          if (uploadImageRes.data.images) {
            setAiImageGeneratedName(
              uploadImageRes.data.images[153][0].image.filename
            );
          }
        } else {
          throw new Error("Ошибка при загрузке изображения");
        }
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 20,
        marginTop: 60,
      }}
    >
      <input
        id="create-post-img"
        type="file"
        hidden
        onChange={handleChangeFile}
        accept=".jpg, .png, .jpeg"
      />
      <label
        style={{
          padding: 10,
          background: "#FFDC3C",
          display: "block",
          textAlign: "center",
          width: 200,
        }}
        htmlFor="create-post-img"
      >
        Загрузить
      </label>

      {image && (
        <div>
          <img
            style={{ width: "200px", height: "200px", objectFit: "contain" }}
            src={image}
          />
          <button onClick={uploadImage} disabled={isSaved}>
            Норм, загрузить фотку
          </button>
        </div>
      )}

      {!imageLoading ? (
        aiImageGeneratedName && (
          <img
            style={{ width: 800, height: "auto" }}
            src={`${process.env.REACT_APP_SERVER_URL.replace(
              "/api",
              ""
            )}/savedAi/${aiImageGeneratedName}`}
            alt="ai image generated"
          />
        )
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default Generator;
