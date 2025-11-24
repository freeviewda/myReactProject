function Movie({ movie }) {
  return (
    <div key={movie.id}>
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} />
    </div>
  );
}

export default Movie;
