import React from "react";
import { useTranslation } from "react-i18next";

const Politika = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className="flex justify-around my-28">
      <div className="flex flex-col">
        <h1 className="text-white text-3xl font-bold my-2">{t("kto")}</h1>
        <h1 className="text-slate-500 ">{t("ruk")}</h1>
        <h1 className="text-slate-500 ">{t("seba")}</h1>
        <h1 className="text-slate-500 ">{t("raz")}</h1>
        <h1 className="text-slate-500 ">{t("rezu")}</h1>
        <h1 className="text-slate-500 ">{t("sot")} </h1>
        <h1 className="text-slate-500 ">{t("sred")}</h1>
        <h1 className="text-slate-500 ">{t("deya")}</h1>
      </div>
      <div className="flex flex-col ">
        <h1 className="text-white text-3xl font-bold my-2">{t("pol1")}</h1>
        <h1 className="text-slate-500 ">{t("organ")}</h1>
        <h1 className="text-slate-500 ">{t("pro")}</h1>
        <h1 className="text-slate-500 ">{t("sistt")} </h1>
        <h1 className="text-slate-500 ">{t("prom")}</h1>
      </div>
    </div>
  );
};

export default Politika;
