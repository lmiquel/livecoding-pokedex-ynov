export const getPokemonListFromApi = async (offset = 0) => {
  const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`)
  const formattedPokemons = await pokemons.json()

  const pokemonList = []
  for await (const pokemon of formattedPokemons.results) {
    const singlePokemonRes = await fetch(pokemon.url)
    const formattedSinglePokemon = await singlePokemonRes.json()

    pokemonList.push({
      name: formattedSinglePokemon.name,
      img: formattedSinglePokemon.sprites.front_default,
      sound: formattedSinglePokemon.cries.legacy
    })
  }

  return pokemonList
}
