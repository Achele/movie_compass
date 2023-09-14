import { Link } from "react-router-dom";
import { IMDb, Tomatoe } from "./Icon";
// import styles from "../styles/Hero.module.css";

const MovieCard = (movies) => {
  console.log(`results: ============= ${movies}`);

  return (
    <div>
      <Link to={`/movies/${movies.id}`}>
        <div className="border-2 rounded bg-black">
          <img
            src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
            alt="backdrop images"
          />
        </div>
        <p>{movies.release_date}</p>
        <h2 className="font-bold">{movies.title}</h2>
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
