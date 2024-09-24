import { useState, useEffect } from "react";
import { fetchMovies } from "../api/movies";

export const useFetchMovies = (title, type) => {
  const [movies, setMovies] = useState([]);

  const dataFetch = async () => {
    const resp = await fetchMovies(title, type.value);
    setMovies(resp);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dataFetch();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [title]);

  useEffect(() => {
    dataFetch();
  }, [type]);

  return { movies };
};
