export const getOnePokemonFormattedBasicData = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    img: pokemon.sprites.front_default,
    sound: pokemon.cries.legacy
  }
}

export const getOnePokemonFormattedDetailledData = (pokemon) => {
  const types = pokemon.types.map(({ type }) => type.name)
  const abilities = pokemon.abilities.map(({ ability }) => ability.name)
  const stats = pokemon.stats.map(({ base_stat, stat }) => ({ name_stat: stat.name, base_stat }))

  return { id: pokemon.id, types, abilities, stats }
}
