import { SearchIcon } from "./Icon";

const SearchBar = () => {
  return (
    <>
      <input
        type="search"
        // value={query}
        // onChange={handleInputChange}
        // onKeyUp={handleKeyUp}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
        className="border-2 border-white rounded-lg p-2 text-lg outline-none w-96 bg-transparent text-white"
        placeholder="What do you want to watch?"
      />
      <SearchIcon className="absolute right-10 text-gray-300 cursor-pointer" />
    </>
  );
};

export default SearchBar;
