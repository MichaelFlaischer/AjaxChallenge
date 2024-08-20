'use strict'

function renderGallery() {
  const gallery = document.querySelector('.gallery')

  let aliens = getAliens()

  aliens.forEach((alien) => {
    gallery.innerHTML += `
      <div class="image-container">
        <p>${alien.fname + ' ' + alien.lname}</p>
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
      <span class="close" onclick="closeDialog()">&times;</span>
      <img class="dialog-img" src="${alien.image}" alt="${alien.fname + ' ' + alien.lname}" />
      <div class="dialog-info">
        <h2>${alien.fname + ' ' + alien.lname}</h2>
        <table>
          <tr>
            <td>Phone</td>
            <td>${alien.tel}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>${alien.address}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>${alien.city}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>${alien.state}</td>
          </tr>
          <tr>
            <td>ZIP</td>
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
