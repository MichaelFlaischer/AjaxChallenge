'use strict'

function menuRender() {
  const elNnav = document.querySelector('nav')
  elNnav.innerHTML = `
        <input type="checkbox" id="active" />
        <label for="active" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <div class="nav-container">
          <ul>
            <li><a href="index.html" data-i18n="home">Home</a></li>
            <li><a href="address-book.html" data-i18n="address-book">Address book</a></li>
            <li><a href="yes-no.html" data-i18n="yesNoQuestions">Yes/No Questions</a></li>
            <li><a href="movies.html" data-i18n="moviesGenres">Movies Genres</a></li>
            <li><a href="pokemons.html" data-i18n="pokemonsList">Pokémons List</a></li>
          </ul>
        </div>
      `
  // onInitPage() // Initialize translations and styles
}
