import Head from "./components/head/Head";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Merch from "./components/merch/Merch";
import New from "./components/new/New";
import Advantages from "./components/advantages/Advantages";
import Download from "./components/download/Download";
import { Route, Routes } from "react-router-dom";
import Generator from "./screens/generator/Generator";
import UploadImage from "./screens/upload_image/UploadImage";
import Camera from "./screens/camera/Camera";
import NeyroImageGenerate from "./screens/neyro_image_generate/NeyroImageGenerate";
import ImageGenerated from "./screens/image_generated/ImageGenerated";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />

                <main>
                  <Head />
                  <Merch />
                  <New />
                  <Advantages />
                  <Download />
                </main>

                <Footer />
              </>
            }
          />

          <Route path="/upload-image" element={<UploadImage />} />
          <Route path="/upload-image/camera" element={<Camera />} />
          <Route
            path="/neyro-image-generate"
            element={<NeyroImageGenerate />}
          />
          <Route path="/image-generated" element={<ImageGenerated />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
