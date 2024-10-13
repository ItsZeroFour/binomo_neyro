import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./style.module.scss";

const NeyroImageGenerate = () => {
  const [aiImageGeneratedName, setAiImageGeneratedName] = useState("");
  const location = useLocation();

  const { file } = location.state || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!file) {
      return navigate("/upload-image");
    }
  }, [file]);

  async function uploadImage() {
    try {
      if (file && file.name) {
        const neyroFormData = new FormData();

        neyroFormData.append("image", file);
        neyroFormData.append("overwrite", "false");
        neyroFormData.append("subfolder", "facesImages");
        neyroFormData.append("type", "input");

        const data = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/aiUpload`,
          neyroFormData
        );

        if (data.error) {
          return console.log("Smething went wrong");
        }

        return data.data;
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  }

  async function generateImage(filename) {
    try {
      const uploadImageRes = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/uploadImage`,
        { filename: `${filename}` }
      );

      if (uploadImageRes.data.images) {
        setAiImageGeneratedName(
          uploadImageRes.data.images[153][0].image.filename
        );
      }
    } catch (err) {}
  }

  async function completeGenerateFunctions() {
    const imageData = await uploadImage();
    await generateImage(imageData.name);
  }

  useEffect(() => {
    if (file && file.name) {
      completeGenerateFunctions();
    }
  }, [file]);

  useEffect(() => {
    if (aiImageGeneratedName) {
      return navigate("/image-generated", {
        state: { aiImageName: aiImageGeneratedName },
      });
    }
  }, [aiImageGeneratedName]);

  return (
    <section className={style.neyro_image_generated}>
      <div className="container">
        <Link to="/" style={{ marginTop: 20 }}>
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

        <div className={style.neyro_image_generated__wrapper}>
          <p>Esperando...</p>
        </div>
      </div>
    </section>
  );
};

export default NeyroImageGenerate;
