'use strict'

// Function to generate a unique ID of a given length
function generateUniqueId(length = 10) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let uniqueId = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    uniqueId += characters[randomIndex]
  }
  return uniqueId
}

// Function to check if the current device is a mobile device
function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent)
}

// Function to show a notification with a given message
function showNotification(message) {
  const elNotification = document.querySelector('.notification')
  elNotification.innerText = message
  elNotification.style.display = 'block'
  onInitPage() // Initialize page for language support

  setTimeout(() => {
    elNotification.style.display = 'none'
  }, 3000)
}
