import { Link } from "react-router-dom";
import { IMDb, Tomatoe } from "./Icon";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
// import styles from "../styles/Hero.module.css";

const MovieCard = (movies) => {
  console.log(`results: ============= ${movies}`);

  const convertToUTC = (dateString) => {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      data-testid="movie-card"
      className="relative transition-transform hover:scale-105"
    >
      <div className="border-2 rounded bg-black">
        <img
          data-testid="movie-poster"
          src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
          alt="backdrop images"
        />
        <span className="absolute top-0 right-0 mt-2 mr-2 bg-gray-400 rounded-full border p-1 ">
          <AiFillHeart
            className="text-gray-500  cursor-pointer text-2xl"
            style={{ color: isLiked ? "red" : "gray" }}
            onClick={handleLikeClick}
          />
        </span>
      </div>
      <Link to={`/movies/${movies.id}`}>
        <p data-testid="movie-release-date">
          {convertToUTC(movies.release_date)}
        </p>
        <h2 data-testid="movie-title" className="font-bold">
          {movies.title}
        </h2>
        <span className="flex justify-between">
          <span className="flex items-center gap-1 text-xs">
            <IMDb /> {movies.vote_average?.toFixed(1) * 10}.0 / 100
          </span>
          <span className="flex items-center gap-1 text-xs">
            <Tomatoe /> {movies.popularity?.toFixed(0)}%
          </span>
        </span>
      </Link>
    </div>
  );
};

export default MovieCard;
