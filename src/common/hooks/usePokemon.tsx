import { useQuery, useQueryClient } from "@tanstack/react-query"
import usePage from "./usePage";
import axios from "axios";
import { Pokemon } from "../types/pokemon";
import { useEffect } from "react";

const usePokemon = () => {
  const { page, setFinalPage } = usePage();
  const perPage = 20;
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ['pokemon', page + 1],
      queryFn: async () => {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${(page + 1) * 20}`)
        return data.data.results
      }
    })
  }, [page])

  return useQuery<Pokemon[]>({
    queryKey: ['pokemon', page],
    queryFn: async () => {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${page * 20}`)
      setFinalPage(data.data.next === null);
      return data.data.results
    }
  })
}

export default usePokemon;