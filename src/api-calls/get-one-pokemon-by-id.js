import { getOnePokemonFormattedBasicData } from './helpers/format-pokemon-data-for-display'

export const getOnePokemonById = async (pokemonId) => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  return await pokemon.json()
}

export const getBasicDataPokemon = async (pokemonId) => {
  const pokemon = await getOnePokemonById(pokemonId)
  return getOnePokemonFormattedBasicData(pokemon)
}
