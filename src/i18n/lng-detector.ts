import LanguageDetector from 'i18next-browser-languagedetector'

export const options = {
  // order and from where user language should be detected
  order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'path', 'subdomain', 'navigator', 'htmlTag'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],

  // languages to not persist (cookie, localStorage)
  excludeCacheFor: ['cimode'],
}

export const languageDetector = new LanguageDetector()

languageDetector.addDetector({
  name: 'languageDetector',

  lookup() {
    return 'pt-BR'
  },
})
