import React from "react";
import { useTranslation } from "react-i18next";

const Box = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div>
      <div className="flex flex-col items-center my-24">
        <h1 className="text-white text-5xl font-bold m-2">{t("univ")}</h1>
        <h1 className="text-white text-5xl font-bold m-2 ">{t("sistem")}</h1>

        <h3 className="text-slate-500 my-2 text-xl font-bold">{t("vid")}</h3>
        <h3 className="text-slate-500  text-xl font-bold">{t("rek")}</h3>
        <div className="w-44 h-14 bg-blue-700 rounded-sm flex justify-center items-center my-10">
          <h1 className="text-white font-bold">{t("online")}</h1>
        </div>
      </div>
    </div>
  );
};

export default Box;
