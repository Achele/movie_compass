import useFetch from "../hooks/useFetch";
import { Loader } from "./Icon";
import MovieCard from "./MovieCard";

const TopRated = () => {
  const API_KEY = "805ad364617cc903792ab354ed226736";
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  const { loading, data, error } = useFetch(url);
  const results = data?.results?.slice(0, 10);

  return (
    <section className="py-4 px-8">
      <h1 className="py-4 text-xl font-bold">Featured Movie</h1>
      {loading && <Loader />}
      {error && (
        <div className="error">{`There is a problem fetching the movie data - ${error}`}</div>
      )}
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-12">
        {results &&
          results.map((movies) => {
            return <MovieCard key={movies.id} {...movies} />;
          })}
      </section>
    </section>
  );
};

export default TopRated;
