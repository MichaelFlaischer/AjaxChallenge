;`use strict`

function renderGenres(genres) {
  const elGenres = document.querySelector('.genres')
  elGenres.innerHTML = ''

  genres.forEach((genre) => {
    getGenreImage(genre.id, (imageUrl) => {
      displayGenre(genre, imageUrl)
    })
  })
}

function displayGenre(genre, imageUrl) {
  const elGenres = document.querySelector('.genres')

  elGenres.innerHTML += `
    <div class="image-container">
      <p data-i18n="genreName">${genre.name}</p>
      <img src="${imageUrl}" alt="${genre.name}" onclick="openShowModal('${genre.id}')" />
    </div>`
}
