import Head from "./components/head/Head";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Merch from "./components/merch/Merch";
import New from "./components/new/New";
import Advantages from "./components/advantages/Advantages";
import Download from "./components/download/Download";
import { Route, Routes } from "react-router-dom";
import Generator from "./screens/generator/Generator";

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

          <Route path="/upload" element={<Generator />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
