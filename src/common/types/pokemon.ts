export type Pokemon = {
  name: string
}

export type PokemonResponse = {
  count: number
  next: string
  previous: string
  results: Pokemon[]
}