import { useState } from "react";
import { MoviesList } from "./components/MoviesList/MoviesList";
import { Search } from "./components/Search/Search";
import { MovieTypeSelect } from "./components/Select/Select";
import { useFetchMovies } from "./hooks/useFetchMovies";

export const App = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [movieType, setMovieType] = useState({
    value: "",
    label: "Select type",
  });

  const { movies } = useFetchMovies(searchPhrase, movieType);

  return (
    <div className="bg-slate-800 h-screen px-24 pt-12">
      <div className="flex gap-x-12">
        <Search searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} />
        <MovieTypeSelect movieType={movieType} setMovieType={setMovieType} />
      </div>
      <div className="flex h-full flex-col pt-20">
        <MoviesList movies={movies} />
      </div>
    </div>
  );
};
