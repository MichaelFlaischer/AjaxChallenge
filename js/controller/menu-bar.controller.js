'use strict'

// Function to render the menu and apply necessary styles and translations
// function menuRender() {
//   const elNnav = document.querySelector('nav')
//   elNnav.innerHTML = `
//         <input type="checkbox" id="active" />
//         <label for="active" class="menu-btn">
//           <i class="fas fa-bars"></i>
//         </label>
//         <div class="nav-container">
//           <ul>
//             <li><a href="index.html" data-i18n="home">Home</a></li>
//             <li><a href="contacts.html" data-i18n="contacts">Contacts</a></li>
//             <li><a href="yes-no-questions.html" data-i18n="yesNoQuestions">Yes/No Questions</a></li>
//             <li><a href="movies-genres.html" data-i18n="moviesGenres">Movies Genres</a></li>
//             <li><a href="pokemons-list.html" data-i18n="pokemonsList">Pokémons List</a></li>
//           </ul>
//         </div>
//       `
//   // onInitPage() // Initialize translations and styles
// }

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
            <li><a href="#" data-i18n="contacts">Contacts</a></li>
            <li><a href="#" data-i18n="yesNoQuestions">Yes/No Questions</a></li>
            <li><a href="#" data-i18n="moviesGenres">Movies Genres</a></li>
            <li><a href="#" data-i18n="pokemonsList">Pokémons List</a></li>
          </ul>
        </div>
      `
  // onInitPage() // Initialize translations and styles
}
