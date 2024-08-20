'use strict'

let aliens = []

function onInit() {
  menuRender()

  getAns(getAliensList)
  addEscapeListener()
}

function getAns(cb) {
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const ans = JSON.parse(xhr.responseText)
      cb(ans)
    }
  }
  xhr.open(
    'GET',
    'http://www.filltext.com/?rows=30&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone%7Cformat%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState%7Cabbr%7d&zip=%7bzip%7d&pretty=true',
    true
  )
  xhr.send()
}

function getAliens() {
  return aliens
}

function setAliens(aliensList) {
  aliens = aliensList
}

function getAliensList(aliensList) {
  setAliens(initAliensIds(aliensList))
  loadImagesAndRenderGallery(getAliens())
}

function initAliensIds(aliensList) {
  aliensList.map((alien) => {
    alien['id'] = generateUniqueId()
    alien['image'] = `https://robohash.org/${alien['id']}?set=set1`
  })

  return aliensList
}

function addEscapeListener() {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeDialog()
    }
  })
}
