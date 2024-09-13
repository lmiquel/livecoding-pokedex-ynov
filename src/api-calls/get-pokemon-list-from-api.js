import { getOnePokemonFormattedBasicData } from './helpers/format-pokemon-data-for-display'

export const getPokemonListFromApi = async (offset = 0) => {
  const pokemonsRaw = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`)
  const pokemons = await pokemonsRaw.json()

  const pokemonList = []
  for await (const pokemon of pokemons.results) {
    const singlePokemonRaw = await fetch(pokemon.url)
    const singlePokemon = await singlePokemonRaw.json()

    const formattedPokemon = getOnePokemonFormattedBasicData(singlePokemon)
    pokemonList.push(formattedPokemon)
  }

  return pokemonList
}
