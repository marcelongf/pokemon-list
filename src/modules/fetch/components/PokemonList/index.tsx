import PokemonCard from "../../../../common/components/PokemonCard"
import usePokemon from "../../../../common/hooks/usePokemon";

export default () => {
  const { data: pokemons, isFetching, isError } = usePokemon();

  if (isFetching) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Something occured while fetching the data, try again later</div>
  }

  return (
    <div className="flex flex-wrap gap-2 max-w-2xl">
      {pokemons?.map((pokemon) => <PokemonCard key={pokemon.name} name={pokemon.name} />)}
    </div>
  )
}
