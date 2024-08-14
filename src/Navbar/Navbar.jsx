import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center ">
        <NavLink alt="" to={"/"}>
          <img
            className="w-28 h-28 ml-9"
            src="https://ues-sert.uz/images/logo/logo2.svg"
            alt=""
          />
        </NavLink>
        <div className="flex justify-center items-center ">
          <NavLink className="text-slate-500 font-bold m-4" to={"/politika"}>
            {t("politika")}
          </NavLink>
          <NavLink className="text-slate-500 font-bold m-4" to={"/onas"}>
            {t("onas")}
          </NavLink>
          <NavLink className="text-slate-500 font-bold m-4" to={"/uslugi"}>
            {t("uslug")}
          </NavLink>
          <NavLink className="text-slate-500 font-bold m-4" to={"/info"}>
            {t("info")}
          </NavLink>
          <NavLink className="text-slate-500 font-bold m-4" to={"/kontakt"}>
            {t("kontact")}
          </NavLink>
        </div>
        <div className="flex justify-center items-center">
          <select
            className="w-28 h-12 bg-slate-950 m-4  rounded-lg flex justify-center items-center border-2 text-white"
            name=""
            id=""
            onChange={(e) => changeLanguage(e)}
          >
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
