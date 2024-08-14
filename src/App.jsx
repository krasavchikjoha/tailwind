import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Box from "./Box/Box";
import { Route, Routes } from "react-router-dom";
import Politika from "./Politika/Politika";
import Onas from "./Onas/Onas";
import Uslugi from "./Uslugi/Uslugi";
import Kontakt from "./Kontakt/Kontakt";
import Info from "./Info/Info";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Box />} />
        <Route path="/politika" element={<Politika />} />
        <Route path="/onas" element={<Onas />}></Route>
        <Route path="/uslugi" element={<Uslugi />}></Route>
        <Route path="/kontakt" element={<Kontakt />}></Route>
        <Route path="/info" element={<Info />}></Route>
      </Routes>
    </div>
  );
};

export default App;
