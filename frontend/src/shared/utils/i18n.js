/**
 * Simple i18n implementation for multi-language support
 */

const translations = {
  vi: {
    // Common
    common: {
      loading: 'Đang tải...',
      error: 'Đã xảy ra lỗi',
      success: 'Thành công',
      cancel: 'Hủy',
      confirm: 'Xác nhận',
      save: 'Lưu',
      delete: 'Xóa',
      edit: 'Sửa',
      close: 'Đóng',
      search: 'Tìm kiếm',
      filter: 'Lọc',
      sort: 'Sắp xếp',
      viewMore: 'Xem thêm',
      viewLess: 'Thu gọn',
    },
    
    // Navigation
    nav: {
      home: 'Trang chủ',
      marketplace: 'Sàn Vật Tư',
      community: 'Cộng Đồng',
      farmingLog: 'Nhật Ký Số',
      aiChat: 'AI Chẩn Đoán',
      profile: 'Hồ Sơ',
      login: 'Đăng nhập',
      logout: 'Đăng xuất',
    },
    
    // Pages
    pages: {
      home: {
        title: 'AgriSmart - Nông nghiệp Thông minh',
        subtitle: 'Hệ sinh thái số cho Nông nghiệp Việt Nam hiện đại',
      },
      marketplace: {
        title: 'Sàn Vật Tư Nông Nghiệp',
        description: 'Mua sắm vật tư nông nghiệp chất lượng cao',
      },
      community: {
        title: 'Cộng Đồng Nông Dân',
        description: 'Chia sẻ kinh nghiệm và hỏi đáp',
      },
    },
    
    // Errors
    errors: {
      networkError: 'Lỗi kết nối mạng. Vui lòng thử lại.',
      notFound: 'Không tìm thấy trang',
      unauthorized: 'Bạn cần đăng nhập để truy cập',
      serverError: 'Lỗi máy chủ. Vui lòng thử lại sau.',
    },
  },
  
  en: {
    // Common
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Success',
      cancel: 'Cancel',
      confirm: 'Confirm',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      viewMore: 'View More',
      viewLess: 'View Less',
    },
    
    // Navigation
    nav: {
      home: 'Home',
      marketplace: 'Marketplace',
      community: 'Community',
      farmingLog: 'Farming Log',
      aiChat: 'AI Diagnosis',
      profile: 'Profile',
      login: 'Login',
      logout: 'Logout',
    },
    
    // Pages
    pages: {
      home: {
        title: 'AgriSmart - Smart Agriculture',
        subtitle: 'Digital ecosystem for modern Vietnamese agriculture',
      },
      marketplace: {
        title: 'Agricultural Marketplace',
        description: 'Shop for high-quality agricultural supplies',
      },
      community: {
        title: 'Farmer Community',
        description: 'Share experiences and Q&A',
      },
    },
    
    // Errors
    errors: {
      networkError: 'Network error. Please try again.',
      notFound: 'Page not found',
      unauthorized: 'You need to login to access',
      serverError: 'Server error. Please try again later.',
    },
  },
}

let currentLanguage = 'vi'

/**
 * Get translation for a key
 * @param {string} key - Translation key (e.g., 'common.loading')
 * @param {object} params - Parameters to replace in translation
 * @returns {string} Translated text
 */
export const t = (key, params = {}) => {
  const keys = key.split('.')
  let translation = translations[currentLanguage]
  
  for (const k of keys) {
    if (translation && translation[k]) {
      translation = translation[k]
    } else {
      // Fallback to Vietnamese if translation not found
      translation = translations.vi
      for (const k2 of keys) {
        translation = translation?.[k2]
      }
      break
    }
  }
  
  if (typeof translation !== 'string') {
    console.warn(`Translation not found for key: ${key}`)
    return key
  }
  
  // Replace parameters in translation
  let result = translation
  Object.keys(params).forEach((param) => {
    result = result.replace(`{{${param}}}`, params[param])
  })
  
  return result
}

/**
 * Set current language
 */
export const setLanguage = (lang) => {
  if (translations[lang]) {
    currentLanguage = lang
    localStorage.setItem('agrismart_language', lang)
    
    // Update HTML lang attribute
    document.documentElement.lang = lang
    
    // Dispatch language change event
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: lang } }))
  }
}

/**
 * Get current language
 */
export const getLanguage = () => {
  return currentLanguage
}

/**
 * Get available languages
 */
export const getAvailableLanguages = () => {
  return Object.keys(translations).map((code) => ({
    code,
    name: code === 'vi' ? 'Tiếng Việt' : 'English',
  }))
}

/**
 * Initialize i18n (load from localStorage)
 */
export const initI18n = () => {
  const savedLang = localStorage.getItem('agrismart_language')
  if (savedLang && translations[savedLang]) {
    setLanguage(savedLang)
  } else {
    // Detect browser language
    const browserLang = navigator.language.split('-')[0]
    if (translations[browserLang]) {
      setLanguage(browserLang)
    }
  }
}

// Initialize on load
if (typeof window !== 'undefined') {
  initI18n()
}

