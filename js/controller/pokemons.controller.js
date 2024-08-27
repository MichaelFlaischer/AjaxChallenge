'use strict'

function renderPokemons(pokemons) {
  let htmlContent = ''
  const elPokemons = document.querySelector('.pokemons')

  pokemons.forEach((pokemon) => {
    fetchPokemonForm(pokemon.url, (formData) => {
      const pokemonName = formData.name
      const pokemonWeight = formData.weight
      const pokemonId = formData.id
      const sprites = formData.sprites

      const spriteImages = [sprites.front_default, sprites.back_default, sprites.front_shiny, sprites.back_shiny].filter(Boolean) // מסנן תמונות ריקות

      const elPokemonContainer = document.createElement('div')
      elPokemonContainer.className = 'image-container'
      elPokemonContainer.innerHTML = `
              <div class = "image-container">${pokemonName}
        <p>${pokemonName}</p>
        <p>Weight: ${pokemonWeight}</p>
        <img id="sprite-${pokemonName}" src="${spriteImages[0]}" alt="${pokemonName}" onclick="downloadPokemonCSV(${pokemonId}, '${pokemonName}')" />
      </div>
        `
      elPokemons.appendChild(elPokemonContainer)

      let currentIndex = 0
      const elImage = elPokemonContainer.querySelector(`#sprite-${pokemonName}`)

      setInterval(() => {
        currentIndex = (currentIndex + 1) % spriteImages.length
        elImage.src = spriteImages[currentIndex]
      }, 500)
    })
  })
}
