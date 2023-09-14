import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Loader } from "../components/Icon";
// import { useState } from "react";
import MovieCredits from "../components/MovieCredits";
import Sidebar from "../components/Sidebar";

const MovieDetails = () => {
  const API_KEY = "805ad364617cc903792ab354ed226736";
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const { loading, data, error } = useFetch(url);
  console.log("DATA: ", data);

  const genres = data.genres || [];
  return (
    <section className="flex">
      <Sidebar />
      <section className=" my-4 ">
        {loading && <Loader />}
        {error && (
          <div className="error">{`There is a problem fetching the movie data - ${error}`}</div>
        )}
        <img
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt=""
        />

        <div className="flex">
          <ul className="flex">
            <li data-testid="movie-title">{data.title}</li>
            <li data-testid="movie-release-date">{data.release_date}</li>
            <li data-testid="movie-runtime">
              {" "}
              {data.runtime} <span>minutes</span>
            </li>
          </ul>
          {genres.length > 0 && (
            <ul className="flex">
              {genres.map((genre) => (
                <li className="px-3" key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <p data-testid="movie-overview">{data.overview}</p>
        <MovieCredits id={id} apiKey={API_KEY} />
      </section>
    </section>
  );
};

export default MovieDetails;
