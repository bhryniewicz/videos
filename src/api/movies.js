import { apiClient } from "./apiClient";

export const moviesTypes = ["Movie", "Series", "Episode"];

export const fetchMovies = async (title, type) => {
  if (title == "") return [];

  const response = await apiClient.get("", {
    params: { s: `${title}`, type: type },
  });

  if (response.data.Response == "True") {
    const movies = Promise.all(
      response.data.Search.map(async (movie) => {
        const country = await apiClient
          .get("", {
            params: { t: `${movie.title}` },
          })
          .then((data) => data.data.Country);

        const movieWithCountry = {
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          type: movie.Type,
          country,
        };

        return movieWithCountry;
      })
    );

    return movies ?? [];
  } else {
    return { error: "Woops Something went wrong!" };
  }
};
