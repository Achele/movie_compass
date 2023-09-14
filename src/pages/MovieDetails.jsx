import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Loader } from "../components/Icon";
// import { useState } from "react";
import MovieCredits from "../components/MovieCredits";

const MovieDetails = () => {
  const API_KEY = "805ad364617cc903792ab354ed226736";
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const { loading, data, error } = useFetch(url);
  // const movie = data.movie;
  // console.log(data);

  // const [cast, setCast] = useState([]);
  // const creditResponse = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
  // const { loading, data, error } = useFetch(creditResponse);
  // console.log("credit: ", data);
  // setCast(creditResponse.data.cast.slice(0, 3));
  // if (loading) {
  //   return <Loader />;
  // }

  // if (error) {
  //   return (
  //     <div className="error">{`There is a problem fetching the movie data - ${error}`}</div>
  //   );
  // }

  // if (!data) {
  //   return null; // You can return some placeholder or loading indicator here
  // }

  return (
    <section className=" my-4">
      {loading && <Loader />}
      {error && (
        <div className="error">{`There is a problem fetching the movie data - ${error}`}</div>
      )}
      <img
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        alt=""
      />
      <p>{data.overview}</p>
      <div>
        <h2>{data.title}</h2>
        <p>{data.release_date}</p>
      </div>

      <MovieCredits id={id} apiKey={API_KEY} />
      <p>
        Director: <span>{}</span>
      </p>

      <p>{data.tagline}</p>
    </section>
  );
};

export default MovieDetails;
