'use strict'

function loadImagesAndRenderGallery(aliensList) {
  showLoader()

  const imagesToLoad = aliensList.length
  let imagesLoaded = 0

  aliensList.forEach((alien) => {
    const img = new Image()
    img.src = alien.image

    img.onload = () => {
      imagesLoaded++
      if (imagesLoaded === imagesToLoad) {
        hideLoader()
        renderGallery(aliensList)
      }
    }

    img.onerror = () => {
      console.error(`Failed to load image: ${alien.image}`)
      imagesLoaded++
      if (imagesLoaded === imagesToLoad) {
        hideLoader()
        renderGallery(aliensList)
      }
    }
  })
}

function renderGallery(aliensList) {
  const gallery = document.querySelector('.gallery')

  aliensList.forEach((alien) => {
    gallery.innerHTML += `
        <div class="image-container">
          <p data-i18n="alienName">${alien.fname + ' ' + alien.lname}</p>
          <img src="${alien.image}" alt="${alien.fname + ' ' + alien.lname}" onclick="openShowModal('${alien.id}')" />
        </div>`
  })
}

function openShowModal(id) {
  let aliens = getAliens()
  const alien = aliens.find((alien) => alien.id === id)
  if (!alien) return

  document.querySelector('.dialog').innerHTML = `
    <div class="dialog-content">
      <span class="close" onclick="closeDialog()" data-i18n="close">&times;</span>
      <img class="dialog-img" src="${alien.image}" alt="${alien.fname + ' ' + alien.lname}" />
      <div class="dialog-info">
        <h2 data-i18n="alienFullName">${alien.fname + ' ' + alien.lname}</h2>
        <table>
          <tr>
            <td data-i18n="phone">Phone</td>
            <td>${alien.tel}</td>
          </tr>
          <tr>
            <td data-i18n="address">Address</td>
            <td>${alien.address}</td>
          </tr>
          <tr>
            <td data-i18n="city">City</td>
            <td>${alien.city}</td>
          </tr>
          <tr>
            <td data-i18n="state">State</td>
            <td>${alien.state}</td>
          </tr>
          <tr>
            <td data-i18n="zip">ZIP</td>
            <td>${alien.zip}</td>
          </tr>
        </table>
      </div>
    </div>`

  document.querySelector('.dialog').style.display = 'flex'
}

function closeDialog(event = null) {
  if (event === null || event.key === 'Escape') {
    const elDialog = document.querySelector('.dialog')
    elDialog.style.display = 'none'
  }
}

function showLoader() {
  const gallery = document.querySelector('.gallery')
  gallery.innerHTML = `
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
