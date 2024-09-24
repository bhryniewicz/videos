export const Search = ({ searchPhrase, setSearchPhrase }) => {
  const handleChangeInput = (e) => {
    const searchPhrase = e.target.value;
    setSearchPhrase(searchPhrase);
  };

  return (
    <input
      type="text"
      value={searchPhrase}
      onChange={handleChangeInput}
      placeholder="Write something to search by title"
      className="w-96 px-4 rounded focus:outline-none"
    />
  );
};
