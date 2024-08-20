'use strict'

// Object containing translations for different languages
const translations = {}

// Function to initialize the page with the current language settings
function onInitPage() {
  const currentLanguage = getCurrentLanguage()
  translatePage(currentLanguage)
  document.documentElement.dir = currentLanguage === 'he' || currentLanguage === 'ar' ? 'rtl' : 'ltr'
  const languageToggle = document.querySelector('.language-toggle')
  if (languageToggle) {
    languageToggle.style.position = 'absolute'
    languageToggle.style.top = '10px'
    languageToggle.style.right = '10px'
    languageToggle.style.backgroundColor = '#fff'
    languageToggle.style.border = '1px solid #000'
    languageToggle.style.borderRadius = '5px'
    languageToggle.style.padding = '5px'
    languageToggle.style.cursor = 'pointer'
    languageToggle.style.zIndex = '1000'
    languageToggle.innerHTML = `
      <option value="en">English</option>
      <option value="he">עברית</option>
      <option value="ru">Русский</option>
      <option value="ar">العربية</option>
      <option value="de">Deutsch</option>
    `
    languageToggle.value = currentLanguage
  }
  addLanguageQueryParamToLinks()
}

// Function to translate the page based on the selected language
function translatePage(lang) {
  const elements = document.querySelectorAll('[data-i18n]')
  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n')
    const translation = translations[lang][key]
    if (translation) {
      element.textContent = translation
    } else {
      element.textContent = `Missing translation: ${key}`
    }
  })
  document.querySelector('.language-toggle').value = lang
  const url = new URL(window.location)
  url.searchParams.set('lang', lang)
  window.history.pushState({}, '', url)
}

// Function to change the language and update the URL with the selected language
function changeLanguage(lang) {
  const url = new URL(window.location.href)
  url.searchParams.set('lang', lang)
  window.location.href = url.toString()
}

// Function to add the current language query parameter to all links
function addLanguageQueryParamToLinks() {
  const links = document.querySelectorAll('a')
  const currentLanguage = getCurrentLanguage()
  links.forEach((link) => {
    const url = new URL(link.href)
    url.searchParams.set('lang', currentLanguage)
    link.href = url.toString()
  })
}

// Function to get the current language from the URL
function getCurrentLanguage() {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('lang') || 'en'
}
