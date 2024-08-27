'use strict'

function onInit() {
  menuRender()
  loadGenres()
}

function loadGenres() {
  const savedGenres = localStorage.getItem('genres')

  if (savedGenres) {
    renderGenres(JSON.parse(savedGenres))
  } else {
    getGenres(renderGenres)
  }
}

function getGenres(cb) {
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const ans = JSON.parse(xhr.responseText)
      cb(ans.genres)
      localStorage.setItem('genres', JSON.stringify(ans.genres))
    }
  }

  xhr.open('GET', 'https://api.themoviedb.org/3/genre/movie/list?api_key=319588e2f2ef903e8a2de1ccc03456ef', true)
  xhr.send()
}

function getGenreMovies(genreId, cb) {
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const ans = JSON.parse(xhr.responseText)
      if (ans.results && ans.results.length > 0) {
        const genreData = {
          imageUrl: `https://image.tmdb.org/t/p/w500${ans.results[0].poster_path}`,
          movies: ans.results,
        }

        localStorage.setItem(`genre_${genreId}`, JSON.stringify(genreData))
        cb(genreData)
      }
    }
  }

  xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=319588e2f2ef903e8a2de1ccc03456ef&with_genres=${genreId}`, true)
  xhr.send()
}

function getGenreImage(genreId, cb) {
  const savedGenreData = localStorage.getItem(`genre_${genreId}`)

  if (savedGenreData) {
    const genreData = JSON.parse(savedGenreData)

    const randomIndex = Math.floor(Math.random() * genreData.movies.length)
    const randomImageUrl = `https://image.tmdb.org/t/p/w500${genreData.movies[randomIndex].poster_path}`

    cb(randomImageUrl)
  } else {
    getGenreMovies(genreId, (genreData) => {
      const randomIndex = Math.floor(Math.random() * genreData.movies.length)
      const randomImageUrl = `https://image.tmdb.org/t/p/w500${genreData.movies[randomIndex].poster_path}`

      cb(randomImageUrl)
    })
  }
}
