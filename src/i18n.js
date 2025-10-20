import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationSL from './locales/sl/translation.json';

const resources = {
  en: { translation: translationEN },
  sl: { translation: translationSL },
};

i18n
  .use(LanguageDetector) // detects browser language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }, // React already escapes
  });

export default i18n;
