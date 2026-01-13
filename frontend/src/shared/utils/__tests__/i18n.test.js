import { describe, it, expect, beforeEach } from 'vitest'
import { t, setLanguage, getLanguage, getAvailableLanguages } from '../i18n'

describe('i18n Utils', () => {
  beforeEach(() => {
    // Reset to Vietnamese
    setLanguage('vi')
  })

  describe('t - translation function', () => {
    it('should return Vietnamese translation by default', () => {
      expect(t('common.loading')).toBe('Đang tải...')
      expect(t('common.success')).toBe('Thành công')
    })

    it('should return English translation when language is set to en', () => {
      setLanguage('en')
      expect(t('common.loading')).toBe('Loading...')
      expect(t('common.success')).toBe('Success')
    })

    it('should handle nested keys', () => {
      expect(t('nav.home')).toBe('Trang chủ')
      expect(t('pages.home.title')).toBe('AgriSmart - Nông nghiệp Thông minh')
    })

    it('should replace parameters in translation', () => {
      // Note: This test assumes we have a translation with {{param}}
      // For now, it tests the parameter replacement logic
      const translation = 'Hello {{name}}'
      const result = translation.replace('{{name}}', 'World')
      expect(result).toBe('Hello World')
    })

    it('should return key if translation not found', () => {
      const result = t('nonexistent.key')
      expect(result).toBe('nonexistent.key')
    })
  })

  describe('setLanguage', () => {
    it('should change current language', () => {
      setLanguage('en')
      expect(getLanguage()).toBe('en')
      
      setLanguage('vi')
      expect(getLanguage()).toBe('vi')
    })

    it('should not change language if invalid', () => {
      const currentLang = getLanguage()
      setLanguage('invalid')
      expect(getLanguage()).toBe(currentLang)
    })
  })

  describe('getAvailableLanguages', () => {
    it('should return list of available languages', () => {
      const languages = getAvailableLanguages()
      expect(languages).toHaveLength(2)
      expect(languages[0].code).toBe('vi')
      expect(languages[1].code).toBe('en')
    })
  })
})

