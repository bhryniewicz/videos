import Select from "react-select";
import { moviesTypes } from "../../api/movies";

export const MovieTypeSelect = ({ movieType, setMovieType }) => {
  const options = moviesTypes.map((type) => {
    return {
      value: type.toLowerCase(),
      label: type,
    };
  });

  return (
    <Select
      value={movieType}
      options={options}
      onChange={(choice) => setMovieType(choice)}
      classNames={{
        control: () => "rounded-md w-96 px-2",
      }}
    />
  );
};
