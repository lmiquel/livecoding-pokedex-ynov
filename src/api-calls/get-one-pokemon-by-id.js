export const getOnePokemonById = async (pokemonId) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  return res.json()
}
