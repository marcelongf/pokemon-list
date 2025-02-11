import PokemonList from "../components/PokemonList";
import Pagination from "../components/Pagination";

export default () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h1>Pokemon list</h1>
      <PokemonList />
      <Pagination />
    </div>
  )
}
