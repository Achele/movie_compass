import useFetch from "../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../components/Icon";
import MovieCard from "../components/MovieCard";

const MovieSearchResult = () => {
  const API_KEY = "805ad364617cc903792ab354ed226736";
  const { query } = useParams();
  // const [searchResults, setSearchResults] = useState([])
  const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;
  const { loading, data, error } = useFetch(searchUrl);
  const searchResults = data.results || [];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  console.log("SEARCH MOVIES: ", searchResults);
  return (
    <section className="flex flex-col   p-8 mx-10 rounded-lg">
      {loading && <Loader />}
      <div className="pb-4 text-red-600">
        <button onClick={handleClick}>&larr; Back home</button>
      </div>
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-12">
        {searchResults.map((movies) => (
          <MovieCard key={movies.id} {...movies} />
        ))}
      </section>
    </section>
  );
};
// <section>
//      { loading? (<Loader />) : searchResults.length > 0 ? (
//        <section>
//         <nav></nav>
//         <section className="grid">
//             {movies.map((movie) => (
//                 <div key ={movie.id} className="" data-testid="movie-card">
//                     <div>
//         <svg
//           width="45"
//           height="45"
//           viewBox="0 0 30 30"
//           fill="none"
//           onClick={() => handleClick(movie.id)}
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g filter="url(#filter0_b_4379_78)">
//             <ellipse
//               cx="15"
//               cy="15.1842"
//               rx="15"
//               ry="14.6053"
//               fill="#F3F4F6"
//               fill-opacity="0.5"
//             />
//           </g>
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M8.17157 10.4828C9.73367 8.96185 12.2663 8.96185 13.8284 10.4828L15 11.6236L16.1716 10.4828C17.7337 8.96185 20.2663 8.96185 21.8284 10.4828C23.3905 12.0038 23.3905 14.4698 21.8284 15.9908L15 22.6396L8.17157 15.9908C6.60948 14.4698 6.60948 12.0038 8.17157 10.4828Z"
//             // fill="#D1D5DB"
//             fill={clickedStates[movie.id] ? "#ff0000" : "#D1D5DB"}
//           />
//           <defs>
//             <filter
//               id="filter0_b_4379_78"
//               x="-2"
//               y="-1.42105"
//               width="34"
//               height="33.2105"
//               filterUnits="userSpaceOnUse"
//               color-interpolation-filters="sRGB"
//             >
//               <feFlood flood-opacity="0" result="BackgroundImageFix" />
//               <feGaussianBlur
//                 in="BackgroundImageFix"
//                 stdDeviation="1"
//               />
//               <feComposite
//                 in2="SourceAlpha"
//                 operator="in"
//                 result="effect1_backgroundBlur_4379_78"
//               />
//               <feBlend
//                 mode="normal"
//                 in="SourceGraphic"
//                 in2="effect1_backgroundBlur_4379_78"
//                 result="shape"
//               />
//             </filter>
//           </defs>
//         </svg>
//       </div>
//       <div className="poster" data-testid="movie-poster">
//       <Link to={`/movies/${movie.id}`} target="_blank">
//           {movie.poster_path ? (
//             <img
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               alt={movie.title}
//             />
//           ) : (
//             <img
//               src={placeholder}
//               alt="no image available"
//               className="no-image"
//             />
//           )}
//         </Link>
//       </div>
//       <span data-testid="movie-release-date">
//                 {movie.release_date}
//               </span>
//               <h2 data-testid="movie-title">{movie.title}</h2>
//               <p> {movie.vote_average.toFixed(1)*10}.0 / 100</p>

//               <div className="genres">
//           {movie.genre_ids.map((genreId, index) => {
//             const genre = genres.find((genre) => genre.id === genreId);
//             return genre ? (
//               <span key={genre.id}>
//                 {genre.name}
//                 {index !== movie.genre_ids.length - 1 ? "," : ""}
//               </span>
//             ) : null;
//           })}
//         </div>
//                 </div>
//             ))}
//         </section>
//        </section>
//      ) }
// </section>

export default MovieSearchResult;
