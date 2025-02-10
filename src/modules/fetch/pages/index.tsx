import { Suspense, useState } from "react";
import Button from "../../../common/components/Button";
import PokemonList from "../components/PokemonList";

export default () => {
  const [page, setPage] = useState(0);
  return (
    <div className="flex flex-col gap-2 items-center">
      <h1>Pokemon list</h1>
      <Suspense 
        fallback={<div>Loading...</div>}
      >
        <PokemonList page={page} />
      </Suspense>
      <div className="flex gap-2">
        <Button 
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >Previous</Button>
        <Button 
          onClick={() => setPage(page + 1)}
        >Next</Button>
      </div>
    </div>
  )
}
