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
        <h2>{movies.title}</h2>
        <span>
          <span>
            <IMDb /> {movies.vote_average}
          </span>
          <span>
            <Tomatoe /> {movies.popularity}
          </span>
        </span>
      </Link>
    </div>
  );
};

export default MovieCard;
