import Head from "./components/head/Head";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Merch from "./components/merch/Merch";
import New from "./components/new/New";
import Advantages from "./components/advantages/Advantages";
import Download from "./components/download/Download";
import { Route, Routes, useSearchParams } from "react-router-dom";
import UploadImage from "./screens/upload_image/UploadImage";
import Camera from "./screens/camera/Camera";
import NeyroImageGenerate from "./screens/neyro_image_generate/NeyroImageGenerate";
import ImageGenerated from "./screens/image_generated/ImageGenerated";
import { useEffect, useState } from "react";

function App() {
  const [searchParams] = useSearchParams();

  const [utmSource, setUtmSource] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [a, setA] = useState("");
  const [ac, setAc] = useState("");

  useEffect(() => {
    function setUtmToLocalstorage() {
      localStorage.setItem("utm_source", searchParams.get("utm_source"));
      localStorage.setItem("utm_medium", searchParams.get("utm_medium"));
      localStorage.setItem("utm_campaign", searchParams.get("utm_campaign"));
      localStorage.setItem("a", searchParams.get("a"));
      localStorage.setItem("ac", searchParams.get("ac"));
    }

    if (
      searchParams.get("utm_source") &&
      searchParams.get("utm_medium") &&
      searchParams.get("utm_campaign") &&
      searchParams.get("a") &&
      searchParams.get("ac")
    ) {
      setUtmToLocalstorage();
    }

    setUtmSource(
      searchParams.get("utm_source") !== null
        ? searchParams.get("utm_source")
        : localStorage.getItem("utm_source")
    );
    setUtmMedium(
      searchParams.get("utm_medium") !== null
        ? searchParams.get("utm_medium")
        : localStorage.getItem("utm_medium")
    );
    setUtmCampaign(
      searchParams.get("utm_campaign") !== null
        ? searchParams.get("utm_campaign")
        : localStorage.getItem("utm_campaign")
    );
    setA(
      searchParams.get("a") !== null
        ? searchParams.get("a")
        : localStorage.getItem("a")
    );
    setAc(
      searchParams.get("ac") !== null
        ? searchParams.get("ac")
        : localStorage.getItem("ac")
    );
  }, [searchParams]);

  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  utmSource={utmSource}
                  utmMedium={utmMedium}
                  utmCampaign={utmCampaign}
                  a={a}
                  ac={ac}
                />

                <main>
                  <Head />
                  <Merch />
                  <New />
                  <Advantages />
                  <Download />
                </main>

                <Footer
                  utmSource={utmSource}
                  utmMedium={utmMedium}
                  utmCampaign={utmCampaign}
                  a={a}
                  ac={ac}
                />
              </>
            }
          />

          <Route
            path="/upload-image"
            element={
              <UploadImage
                utmSource={utmSource}
                utmMedium={utmMedium}
                utmCampaign={utmCampaign}
                a={a}
                ac={ac}
              />
            }
          />
          <Route path="/upload-image/camera" element={<Camera />} />
          <Route
            path="/neyro-image-generate"
            element={
              <NeyroImageGenerate
                utmSource={utmSource}
                utmMedium={utmMedium}
                utmCampaign={utmCampaign}
                a={a}
                ac={ac}
              />
            }
          />
          <Route
            path="/image-generated"
            element={
              <ImageGenerated
                utmSource={utmSource}
                utmMedium={utmMedium}
                utmCampaign={utmCampaign}
                a={a}
                ac={ac}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
