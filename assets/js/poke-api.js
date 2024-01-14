//objeto
const pokeApi = {}

// função usando eron function => 
pokeApi.getpokemons = (offset = 0, limit = 20) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  return fetch(url)
    //convertendo o body em json
    .then((response) => response.json()) 
    //pegando o jsonBody.results para trabalharmos com ele 
    .then((jsonBody) => jsonBody.results) 
    // se houver erro
    .catch((error) => console.error(error))
}