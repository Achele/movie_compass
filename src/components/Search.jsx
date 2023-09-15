import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "./Icon";

const SearchBar = () => {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleIconClick = () => {
    handleSearch();
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/search/${query}`);
    }
  };

  const handleFocus = () => {
    setQuery("");
  };

  const handleBlur = () => {
    if (query.trim() === "") {
      setQuery("");
    }
  };
  return (
    <>
      <input
        type="search"
        value={query}
        onChange={handleSearchInput}
        onKeyUp={handleKeyUp}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="border-2 border-white rounded-lg p-2 text-lg outline-none w-96 bg-transparent text-white"
        placeholder="What do you want to watch?"
      />
      <SearchIcon
        className="absolute right-10 text-gray-300 cursor-pointer "
        onClick={handleIconClick}
      />
    </>
  );
};

export default SearchBar;
