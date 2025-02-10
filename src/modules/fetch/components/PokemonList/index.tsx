import PokemonCard from "../../../../common/components/PokemonCard"
import useGetData from "../../../../common/hooks/useGetData"

export type PokemonListProps = {
  page: number
}

export default ({
  page
}: PokemonListProps) => {
  const pokemons = useGetData(page);
  return (
    <div className="flex flex-wrap gap-2 max-w-2xl">
      {pokemons?.results?.map((pokemon) => <PokemonCard key={pokemon.name} name={pokemon.name} />)}
    </div>
  )
}
