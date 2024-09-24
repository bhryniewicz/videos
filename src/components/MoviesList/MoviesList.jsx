export const MoviesList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <h1 className="text-white text-xl text-center">
        Currently you didn't search for any movies, write a phrase and
        eventually select type to find your movie
      </h1>
    );
  }

  if (movies.error)
    return <h1 className="text-white text-xl text-center">{movies.error}</h1>;

  return (
    <table className="table-auto text-white">
      <thead>
        <tr className="text-left h-16">
          <th>Title</th>
          <th>Year</th>
          <th>Country</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody className="text-gray-400">
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.country}</td>
            <td>{movie.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
