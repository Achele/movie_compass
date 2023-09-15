import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Loader, StarIcon } from "../components/Icon";
import MovieCredits from "../components/MovieCredits";

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

  const convertToUTC = (dateString) => {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="sm:ml-20 sm:px-3 md:ml-36 md:px-16 lg:ml-56 lg:px-16 py-6">
      <img
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        alt=""
      />

      <div className=" lg:flex items-center justify-between">
        <div className="lg:flex justify-evenly p-4">
          <h2 data-testid="movie-title" className="mr-4 font-bold">
            {data.title}
          </h2>
          <ul className="flex  list-disc ">
            <li data-testid="movie-release-date" className="ml-2">
              {convertToUTC(data.release_date)}
            </li>
            <li className="ml-6">
              {" "}
              <span data-testid="movie-runtime">{data.runtime}</span> minutes
            </li>
          </ul>
          {genres.length > 0 && (
            <ul className="flex sm:pt-4 lg:pt-0">
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

        <span className="flex lg:py-4">
          <p className="rating text-lg font-semibold flex flex-row mr-2 text-gray-300">
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
  );
};

export default MovieDetails;
