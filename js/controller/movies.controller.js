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
      <img src="${imageUrl}" alt="${genre.name}" onclick="showMoviesGallery('${genre.id}')" />
    </div>`
}

function showMoviesGallery(genreId) {
  const savedGenreData = localStorage.getItem(`genre_${genreId}`)
  const elMovies = document.querySelector('.movies')
  elMovies.innerHTML = ''

  if (savedGenreData) {
    document.querySelector('#movie-header').textContent = 'movies list'

    const genreData = JSON.parse(savedGenreData)
    genreData.movies.forEach((movie) => {
      const movieElement = `
        <div class="image-container">
          <p>${movie.title}</p>
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" onclick="openShowModal('${genreId}', '${movie.id}')"/>
        </div>`
      elMovies.innerHTML += movieElement
    })
  } else {
    elMovies.innerHTML = `<p>No movies found for this genre.</p>`
  }
  document.querySelector('#movie-header').scrollIntoView({ behavior: 'smooth' })
}

function openShowModal(genreId, movieId) {
  const savedGenreData = localStorage.getItem(`genre_${genreId}`)

  if (!savedGenreData) return

  const genreData = JSON.parse(savedGenreData)
  const movie = genreData.movies.find((movie) => movie.id === parseInt(movieId))

  if (!movie) return

  document.querySelector('.dialog').innerHTML = `
    <div class="dialog-content">
      <span class="close" onclick="closeDialog()" data-i18n="close">&times;</span>
      <img class="dialog-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
      <div class="dialog-info">
        <h2>${movie.title}</h2>
        <p><strong>Release Date:</strong> ${movie.release_date}</p>
        <p><strong>Overview:</strong> ${movie.overview}</p>
        <p><strong>Rating:</strong> ${movie.vote_average}</p>
        <p><strong>Language:</strong> ${movie.original_language}</p>
      </div>
    </div>`

  document.querySelector('.dialog').style.display = 'flex'
}
