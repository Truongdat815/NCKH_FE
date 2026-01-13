import { useState, useEffect } from 'react'
import { t, setLanguage, getLanguage, getAvailableLanguages } from '../utils/i18n'

/**
 * Hook for i18n translations
 */
export const useI18n = () => {
  const [currentLang, setCurrentLang] = useState(getLanguage())
  
  useEffect(() => {
    const handleLanguageChange = (e) => {
      setCurrentLang(e.detail.language)
    }
    
    window.addEventListener('languagechange', handleLanguageChange)
    
    return () => {
      window.removeEventListener('languagechange', handleLanguageChange)
    }
  }, [])
  
  const changeLanguage = (lang) => {
    setLanguage(lang)
    setCurrentLang(lang)
  }
  
  return {
    t,
    currentLanguage: currentLang,
    changeLanguage,
    availableLanguages: getAvailableLanguages(),
  }
}

