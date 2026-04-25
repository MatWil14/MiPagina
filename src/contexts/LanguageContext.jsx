import { createContext, useContext, useState } from 'react'
import { translations } from '../i18n/translations'

const SUPPORTED = ['es', 'en', 'pt']

function detectLang() {
  const langs = navigator.languages ?? [navigator.language]
  for (const l of langs) {
    const code = l.slice(0, 2).toLowerCase()
    if (SUPPORTED.includes(code)) return code
  }
  return 'es'
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLang)
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
