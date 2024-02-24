//objeto
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon()
  pokemon.number = pokeDetail.id
  pokemon.name = pokeDetail.name

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const[type] = types

  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
}

// função usando eron function "=>"
pokeApi.getpokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  
  return fetch(url)
//convertendo o body em json
    .then((response) => response.json()) 
//pegando o jsonBody.results para trabalharmos com ele 
    .then((jsonBody) => jsonBody.results) 
//entrando na lista "pokemons", fazendo um map = uma nova lista. 
//fetch = fazendo uma busca em response.json para trabalharmos com os details
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
//pegando os details para podermos trabalhar
    .then((detailRequests) => Promise.all(detailRequests))
//printando a lista de details
    .then((pokemonsDetails) => pokemonsDetails)
    // se houver erro
    .catch((error) => console.error(error))
}