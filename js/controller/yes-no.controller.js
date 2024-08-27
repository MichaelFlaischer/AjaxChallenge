'use strict'

function onInit() {
  const elInputField = document.querySelector('.user-question')
  elInputField.addEventListener('input', debounce(handleQuestion, 300))

  menuRender()
}

function displayAnswer(answer) {
  const elResponseSection = document.querySelector('.response-section')

  elResponseSection.innerHTML = `
          <p class="answer" data-i18n="answerText">${answer.answer}</p>
          <img class="response-image" src="${answer.image}" alt="Response Image" data-i18n="responseImageAlt" />

          <p class="extra-info" data-i18n="extraInfoText"></p>
        `
}

function showLoader() {
  const elResponseSection = document.querySelector('.response-section')
  elResponseSection.innerHTML = `
        <div class="loader-container">
          <img src="img/loader.svg" alt="Loading..." class="loader-img" data-i18n="loading" />
        </div>`
}

function hideLoader() {
  const loaderContainer = document.querySelector('.loader-container')
  if (loaderContainer) {
    loaderContainer.remove()
  }
}
