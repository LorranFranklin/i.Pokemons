//objeto
const pokeApi = {}

// função usando eron function => 
pokeApi.getpokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  return fetch(url)
//convertendo o body em json
    .then((response) => response.json()) 
//pegando o jsonBody.results para trabalharmos com ele 
    .then((jsonBody) => jsonBody.results) 
//fazendo uma requisição na lista que temos ".results" para trabalharmos com os details
    .then((pokemons) => pokemons.map((pokemon) => fetch(pokemon.url).then((response) => response.json())))
//pegando os details para podermos trabalhar
    .then((detailRequest) => Promise.all(detailRequest))
//printando a lista de details
    .then((pokemonsDetails) => {
      debugger
      console.log(pokemonsDetails)
    })
    // se houver erro
    .catch((error) => console.error(error))
}