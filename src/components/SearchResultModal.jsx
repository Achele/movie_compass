import MovieCard from "./MovieCard";

const SearchResultModal = ({ results, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Search Results</h2>
        <div className="grid grid-cols-4 gap-12">
          {results.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResultModal;
