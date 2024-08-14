import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  en: {
    translation: {
      politika: "POLICY",
      onas: "ABOUT US",
      uslug: "OUR SERVICES",
      info: "USEFUL INFORMATION",
      kontact: "CONTACTS",
      univ: "Universal expert",
      sistem: "UES system",
      vid: "Issuance of certificates of origin for goods exported and",
      rek: "re-exported from the Republic of Uzbekistan",
      online: "Online application",
      kto: "Who are we?",
      ruk: "The management of OOO UNIVERSAL EXPERT SYSTEM LLC accepts",
      seba: "obligation to allocate the resources necessary for",
      raz: "development, implementation, operation and improvement",
      rezu: "effectiveness of the quality management system in",
      sot: "in accordance with the requirements of the ISO 9001 standard, as",
      sred: "a means of guiding an organization towards improvement",
      deya: "activities.",
      pol1: "Policy",
      organ: "Certification body for mechanical engineering and industrial",
      pro: "products TECHMASH-SERT at LLC UNIVERSAL EXPERT",
      sistt: "SYSTEM» Certification and testing of mechanical engineering and",
      prom: "industrial products",
    },
  },
  ru: {
    translation: {
      politika: "ПОЛИТИКА",
      onas: "О НАС",
      uslug: "НАШИ УСЛУГИ",
      info: "ПОЛЕЗНАЯ ИНФОРМАЦИЯ",
      kontact: "КОНТАКТЫ",
      univ: "Универсальная экспертная",
      sistem: "истема ЕЭС",
      vid: "Выдача сертификатов происхождения на товары, экспортируемые и",
      rek: "реэкспортируемые из Республики Узбекистан",
      online: "Онлайн заявка",
      kto: "Кто мы?",
      ruk: "Руководство ООО “UNIVERSAL EXPERT SYSTEM’’ принимает на",
      seba: "себя обязательство по выделению ресурсов, необходимых для",
      raz: "разработки, внедрению, функционированию и повышению",
      rezu: "результативности системы менеджмента качества в",
      sot: "соответствии с требованиями стандарта ISO 9001, как",
      sred: "средство руководства организацией в направлении улучшения",
      deya: "деятельности.",
      pol1: "Политика",
      organ: "Орган по сертификации машиностроительной и промышленной",
      pro: "продукции «TECHMASH-SERT» при ООО «UNIVERSAL EXPERT",
      sistt: "SYSTEM» Сертификация и испытания машиностроительной и",
      prom: "промышленной продукции",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    fallbackLng: "sp",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
