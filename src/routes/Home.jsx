import { useState } from "react";
import Movie from "../Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch("https://api.sampleapis.com/movies/animation");
    const json = await response.json();
    console.log(json);
    setMovies(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => <Movie movie={movie} />)
      )}
    </div>
  );
}

export default Home;
