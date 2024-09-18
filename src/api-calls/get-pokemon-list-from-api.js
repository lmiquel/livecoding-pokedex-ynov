import axios from 'axios'
import { getOnePokemonFormattedBasicData } from './helpers/format-pokemon-data-for-display'

export const getPokemonListFromApi = async (offset = 0) => {
  const pokemonsRaw = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`)
  const pokemons = pokemonsRaw.data

  const pokemonList = []
  for await (const pokemon of pokemons.results) {
    const singlePokemonRaw = await axios.get(pokemon.url)
    const singlePokemon = singlePokemonRaw.data

    const formattedPokemon = getOnePokemonFormattedBasicData(singlePokemon)
    pokemonList.push(formattedPokemon)
  }

  return pokemonList
}
