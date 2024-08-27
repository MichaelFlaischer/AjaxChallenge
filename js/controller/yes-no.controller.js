'use strict'

let answersToLoad = 2
let count = 0
let currentAnswer = null
let currentExtraInfo = null

function onInit() {
  const elInputField = document.querySelector('.user-question')
  elInputField.addEventListener('input', debounce(handleQuestion, 300))

  menuRender()
}

function displayAnswer(answer) {
  currentAnswer = answer
  const elResponseSection = document.querySelector('.response')
  const img = new Image()

  img.src = answer.image
  img.onload = () => {
    count++
    checkIfReadyToDisplay()
  }

  fetchExtraInfo(answer.answer, handleExtraInfoLoad)
}

function handleExtraInfoLoad(extraInfo) {
  currentExtraInfo = extraInfo
  if (extraInfo.setup && extraInfo.punchline) {
    count++
    checkIfReadyToDisplay()
  } else if (extraInfo.message) {
    const extraImg = new Image()
    extraImg.src = extraInfo.message
    extraImg.onload = () => {
      count++
      checkIfReadyToDisplay()
    }
  }
}

function displayAnswerContent() {
  const elResponseSection = document.querySelector('.response')
  const extraInfoElement = document.querySelector('.extra-info')

  elResponseSection.innerHTML = `
    <p class="answer" data-i18n="answerText">${currentAnswer.answer}</p>
    <img class="response-image" src="${currentAnswer.image}" alt="Response Image" data-i18n="responseImageAlt" />
  `

  if (currentExtraInfo.setup && currentExtraInfo.punchline) {
    extraInfoElement.innerText = `${currentExtraInfo.setup} - ${currentExtraInfo.punchline}`
  } else if (currentExtraInfo.message) {
    extraInfoElement.innerHTML = `<img src="${currentExtraInfo.message}" alt="Random Dog" />`
  }
}

function showLoader() {
  const elResponseSection = document.querySelector('.response')
  elResponseSection.innerHTML = `
        <div class="loader-container">
          <img src="img/loader.svg" alt="Loading..." class="loader-img" data-i18n="loading" />
        </div>`
}

function clearPreviousResponse() {
  answersToLoad = 2
  count = 0
  const elResponseSection = document.querySelector('.response')
  const extraInfoElement = document.querySelector('.extra-info')
  elResponseSection.innerHTML = ''
  extraInfoElement.innerHTML = ''
}
