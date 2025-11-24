import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <div key={movie.id}>
      <h2>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h2>
      <img src={movie.posterURL} alt={movie.title} />
    </div>
  );
}

export default Movie;
