import { Routes, Route } from "react-router-dom";

import Navbars from "./components/Navbars";
// import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ArtikelPage from "./pages/ArtikelPage";
import PengaduanPage from "./pages/PengaduanPage";
import FaqPage from "./pages/FaqPage";
import AboutPage from "./pages/AboutPage";


function App() {
  return (
    <div>
      <Navbars />

      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/Artikel" Component={ArtikelPage}/>
        <Route path="/Pengaduan" Component={PengaduanPage}/>
        <Route path="/Faq" Component={FaqPage}/>
        <Route path="/About" Component={AboutPage}/>
      </Routes>

      {/* <Footer /> */}
      
    </div>
  );  
}

export default App;
