const offset = 0;
const limit = 20;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//função para replicar o LI e assim completarmos a nossa lista
function convertPokemonToHtml(pokemon) {
  return `
  <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
  
    <div class="detail">
      <ol class="types">
        <li class="type">grass</li>
        <li class="type">poison</li>

      </ol>

      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
      alt="${pokemon.name}">
    </div>
  </li>
  `
}

const pokemonList = document.getElementById('pokemonList')

//interação com uma promise
fetch(url) // usando eron function => 
//convertendo o body em json
  .then((response) => response.json()) 
//pegando o jsonBody.results para trabalharmos com ele 
  .then((jsonBody) => jsonBody.results) 
//printando lista de pokemons
  .then((pokemons) =>{ 
    //percorrendo a lista de pokemons
    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      pokemonList.innerHTML += convertPokemonToHtml(pokemon);
    }
    
  })
// se houver erro
  .catch((error) => console.log(error))
  
