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

function downloadPokemonCSV(pokemonId, pokemonName) {
  fetchPokemonForm(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`, (formData) => {
    const csvContent = [
      ['Name', 'Weight', 'Front Image', 'Back Image', 'Front Shiny', 'Back Shiny'],
      [
        formData.name,
        formData.weight,
        formData.sprites.front_default,
        formData.sprites.back_default,
        formData.sprites.front_shiny,
        formData.sprites.back_shiny,
      ],
    ]
      .map((e) => e.join(','))
      .join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', `${pokemonName}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })
}
