import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { reactI18nextModule } from "react-i18next";

import translationEN from './locales/en/translations.json';
import translationDE from './locales/de/translations.json';
import translationBN from './locales/bn/translations.json';
import translationES from './locales/es/translations.json';
import translationBR from './locales/br/translations.json';
import translationCN from './locales/cn/translations.json';
import translationFR from './locales/fr/translations.json';
import translationJP from './locales/jp/translations.json';
import translationKR from './locales/kr/translations.json';
import translationNL from './locales/nl/translations.json';
// the translations
const resources = {
  en: {
    translation: translationEN
  },  
  de: {
    translation: translationDE
  },  
  bn: {
    translation: translationBN
  },  
  es: {
    translation: translationES
  },  
  br: {
    translation: translationBR
  },  
  cn: {
    translation: translationCN
  },  
  fr: {
    translation: translationFR
  },  
  jp: {
    translation: translationJP
  },  
  kr: {
    translation: translationKR
  },  
  nl: {
    translation: translationNL
  },  
};

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;