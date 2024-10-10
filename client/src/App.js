import Head from "./components/head/Head";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Merch from "./components/merch/Merch";
import New from "./components/new/New";
import Advantages from "./components/advantages/Advantages";
import Download from "./components/download/Download";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />

        <main>
          <Head />
          <Merch />
          <New />
          <Advantages />
          <Download />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
