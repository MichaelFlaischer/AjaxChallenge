'use strict'

function handleQuestion(event) {
  const question = event.target.value
  if (question.length >= 3 && question.endsWith('?')) {
    showLoader()
    fetchYesNoAnswer(question, displayAnswer)
  }
}

function fetchYesNoAnswer(question, cb) {
  $.get('https://yesno.wtf/api', cb)
}
