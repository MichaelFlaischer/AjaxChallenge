'use strict'

function renderPokemons(pokemons) {
  let htmlContent = ''

  pokemons.forEach((pokemon) => {
    fetchPokemonForm(pokemon.url, (formData) => {
      const pokemonName = formData.name
      const pokemonWeight = formData.weight
      const pokemonImageUrl = formData.sprites.front_default

      htmlContent += `
            <div class="image-container">
              <p>${pokemonName}</p>
              <p>Weight: ${pokemonWeight}</p>
              <img src="${pokemonImageUrl}" alt="${pokemonName}" />
            </div>
          `

      const elPokemons = document.querySelector('.pokemons')
      elPokemons.innerHTML = htmlContent
    })
  })
}
