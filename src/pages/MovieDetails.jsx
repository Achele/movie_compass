import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Loader, StarIcon } from "../components/Icon";
// import { useState } from "react";
import MovieCredits from "../components/MovieCredits";
// import Sidebar from "../components/Sidebar";

const MovieDetails = () => {
  const API_KEY = "805ad364617cc903792ab354ed226736";
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const { loading, data, error } = useFetch(url);
  console.log("DATA: ", data);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="error">{`There is a problem fetching the movie data - ${error}`}</div>
    );
  }

  const genres = data.genres || [];
  return (
    <section className="ml-56 px-16 py-6">
      {/* < div className="flex flex-row text-gray-700 w-full">
        <div>
          <div></div>
        </div>

      </div> */}
      {/* {loading && <Loader />}
      {error && (
        <div className="error">{`There is a problem fetching the movie data - ${error}`}</div>
      )} */}
      <img
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        alt=""
      />

      <div className="flex items-center justify-between">
        <div className="flex justify-evenly p-4">
          <h2 data-testid="movie-title" className="mr-4 font-bold">
            {data.title}
          </h2>
          <ul className="flex  list-disc ">
            {/* <li data-testid="movie-title">{data.title}</li> */}
            <li data-testid="movie-release-date" className="ml-2">
              {data.release_date}
            </li>
            <li data-testid="movie-runtime" className="ml-6">
              {" "}
              {data.runtime} <span>minutes</span>
            </li>
          </ul>
          {genres.length > 0 && (
            <ul className="flex">
              {genres.map((genre) => (
                <li
                  className="py-1 px-2 mx-2 border border-red-600 text-red-600  rounded-full text-xs "
                  key={genre.id}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* <div className="other-details w-full flex-1.2 pt-40 pr-20">
          <div className="rating-button">
            <div className="votes flex items-center justify-end mb-34">
              <div className="star-rating flex items-center justify-center mr-10">
                {/* <img src={star} alt="rating" /> */}
        {/* </div> */}
        <span className="flex py-4">
          <p className="rating text-lg font-semibold flex flex-row mr-10 text-gray-300">
            <StarIcon /> {data.vote_average?.toFixed(1)}
          </p>
          <p className="voters text-lg font-semibold flex flex-row text-gray-600">
            |{" "}
            {data.vote_count >= 1000
              ? `${Math.round(data.vote_count / 1000)}K`
              : data.vote_count?.toString()}
          </p>
        </span>
      </div>

      <p
        data-testid="movie-overview"
        className="p-4 w-full text-base font-medium "
      >
        {data.overview}
      </p>
      <MovieCredits id={id} apiKey={API_KEY} />
    </section>
    // </section>
  );
};

export default MovieDetails;
