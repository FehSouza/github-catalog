import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { languages } from './languages'
import { languageDetector, options } from './lng-detector'

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources: languages,
    fallbackLng: ['pt-BR', 'en-US'],
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
