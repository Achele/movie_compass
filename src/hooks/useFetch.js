import { useEffect, useState } from "react";

export default function useFetch(url) {
  //   const handleError = useErrorBoundary;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const movie = await res.json();
        setLoading(false);
        setData(movie);
      } catch (error) {
        setLoading(false);
        setError(error.message);
        console.log(error.message);
      }
    };
    fetchData();
  }, [setError, url]);
  return { loading, data, error };
}
