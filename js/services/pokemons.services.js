'use strict'

function onInit() {
  menuRender()
  fetchPokemons(renderPokemons)
}

function fetchPokemons(cb) {
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText)
      let pokemons = response.results
      cb(pokemons)
    }
  }

  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/', true)
  xhr.send()
}

function fetchPokemonForm(pokemonUrl, cb) {
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText)
      cb(response)
    }
  }

  xhr.open('GET', pokemonUrl, true)
  xhr.send()
}
