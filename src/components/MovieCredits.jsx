import useFetch from "../hooks/useFetch";

const MovieCredits = ({ id, apiKey }) => {
  const creditUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
  const { loading, data, error } = useFetch(creditUrl);
  const credits = data;
  console.log("MOVIE CREDITS: ", credits);

  if (loading) {
    return <div>Loading credits...</div>;
  }

  if (error) {
    return <div>Error fetching credits: {error}</div>;
  }

  // Render the credits data as needed
  // Check if data and data.cast exist before using them
  if (!data || !data.cast) {
    return <div>No cast data available for this movie.</div>;
  }
  const cast = credits.cast.slice(0, 3); // Get the first 3 cast members
  const directors = credits.crew.filter((member) => member.job === "Director");
  const writers = credits.crew.filter(
    (member) => member.department === "Writing"
  );
  console.log("CASR:", cast);
  return (
    <div>
      {directors.length > 0 && (
        <div className="flex">
          <p>Director:</p>
          <ul className="flex pl-4">
            {directors.map((member, index) => (
              <li key={member.id}>
                {member.name}
                {index !== directors.length - 1 ? "," : ""}
              </li>
            ))}
          </ul>
        </div>
      )}

      {writers.length > 0 && (
        <div className="flex">
          <p>Writers:</p>
          <ul className="flex pl-4">
            {writers.map((member, index) => (
              <li key={member.id}>
                {member.name}
                {index !== writers.length - 1 ? "," : ""}
              </li>
            ))}
          </ul>
        </div>
      )}

      {cast.length > 0 && (
        <div className="flex">
          <p>Stars:</p>
          <ul className="flex pl-4">
            {cast.map((member, index) => (
              <li key={member.id}>
                {member.name}
                {index !== cast.length - 1 ? "," : ""}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieCredits;
