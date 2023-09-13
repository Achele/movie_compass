// import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { IMDb, Loader, Tomatoe } from "./Icon";
import styles from "../styles/Hero.module.css";

const TopRated = () => {
  // const [toprated, setTopRated] = useState(null)
  const API_KEY = "805ad364617cc903792ab354ed226736";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1`;
  const { loading, data, error } = useFetch(url);
  const results = data?.results?.slice(0, 10);
  console.log(results);

  return (
    <section className="py-4 px-8">
      <h1>Featured Movie</h1>
      {loading && <Loader />}
      {error && (
        <div className="error">{`There is a problem fetching the movie data - ${error}`}</div>
      )}
      <section className="grid grid-cols-4 gap-4">
        {results &&
          results.map((movies) => {
            return <MovieCard key={movies.id} {...movies} />;
          })}
        {/* {results &&
          results.map((movies) => (
            // console.log("movies:", movies)
            <div key={movies.id}>
              <div className="border-2 rounded bg-black">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
                  alt="backdrop images"
                />
              </div>
              <p>{movies.release_date}</p>
              <h2>{movies.title}</h2>
              <span>
                <span>
                  <IMDb /> {movies.vote_average}
                </span>
                <span>
                  <Tomatoe /> {movies.popularity}
                </span>
              </span>
            </div>
          ))} */}
      </section>
    </section>
  );
};

export default TopRated;
