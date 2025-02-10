import { useState, useEffect } from "react";
import axios from "axios";
import { Pokemon } from "../types/pokemon";

//Workaround to use Suspense with react18
const promiseWrapper = <T extends object>(promise: Promise<T>) => {
  let status = "pending";
  let result: T;

  const resolving = promise.then(
    (value) => {
      status = "success";
      result = value;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return () => {
    switch (status) {
      case "pending":
        throw resolving;
      case "success":
        return result;
      case "error":
        throw result;
      default:
        throw new Error("Unknown status");
    }
  };
};

function useGetData(page: number) {
  const [resource, setResource] = useState<{results: Pokemon[]} | null>(null);
  const perPage = 20;

  useEffect(() => {
    const getData = async () => {
      const promise = axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${page * perPage}`)
      .then((response) => {
        if (response.status !== 200) {
          return Promise.reject(response.statusText);
        }
        return response.data
      });
      setResource(promiseWrapper(promise));
    };
    getData();
  }, [page]);

  return resource;
}

export default useGetData;