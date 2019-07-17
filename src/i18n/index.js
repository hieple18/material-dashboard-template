import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from "i18next-xhr-backend";
import defaultEn from './locales/en/default.json';
import defaultVi from './locales/vi/default.json';
import defaultJa from './locales/ja/default.json';

const options = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  debug: true,

  lng: 'en',

  resources: {
    en: {
      default: defaultEn,
    },
    vi: {
      default: defaultVi,
    },
    ja: {
      default: defaultJa,
    },
  },

  fallbackLng: 'en',

  ns: ['default'],

  defaultNS: 'default',

  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  },
};

i18n  
  // .use(XHR)
  .use(LanguageDetector)
  .init(options)
  // .changeLanguage('en', (err, t) => {
  //   if (err) return console.log('something went wrong loading', err);
  // });

export default i18n;
