'use strict'

let answersToLoad = 2
let count = 0

function handleQuestion(event) {
  const question = event.target.value
  if (question.length >= 3 && question.endsWith('?')) {
    clearPreviousResponse()
    showLoader()
    fetchYesNoAnswer(question, displayAnswer)
  }
}

function fetchYesNoAnswer(question, cb) {
  $.get('https://yesno.wtf/api', cb)
}

function fetchExtraInfo(answer, cb) {
  let apiUrl = ''

  if (answer === 'yes') {
    apiUrl = 'https://official-joke-api.appspot.com/random_joke'
  } else if (answer === 'no') {
    apiUrl = 'https://dog.ceo/api/breeds/image/random'
  }

  $.get(apiUrl, cb)
}

function checkIfReadyToDisplay() {
  if (count === answersToLoad) {
    displayAnswerContent()
  }
}
