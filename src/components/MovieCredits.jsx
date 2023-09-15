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
    <div className="p-4">
      {directors.length > 0 && (
        <div className="flex pb-3">
          <p>Director:</p>
          <ul className="flex pl-4 gap-10 list-none  text-red-600 font-medium">
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
          <ul className="lg:flex pl-4 gap-1 list-none text-red-600 font-medium">
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
        <div className="flex pt-3">
          <p>Stars:</p>
          <ul className="lg:flex pl-4 gap-3 list-none text-red-600 font-medium">
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
