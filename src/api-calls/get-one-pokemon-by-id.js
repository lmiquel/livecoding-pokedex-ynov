import axios from 'axios'
import {
  getOnePokemonFormattedBasicData,
  getOnePokemonFormattedDetailledData
} from './helpers/format-pokemon-data-for-display'

export const getOnePokemonById = async (pokemonId) => {
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  return pokemon.data
}

export const getBasicDataPokemon = async (pokemonId) => {
  const pokemon = await getOnePokemonById(pokemonId)
  return getOnePokemonFormattedBasicData(pokemon)
}

export const getDetailledDataPokemon = async (pokemonId) => {
  const pokemon = await getOnePokemonById(pokemonId)
  return getOnePokemonFormattedDetailledData(pokemon)
}
