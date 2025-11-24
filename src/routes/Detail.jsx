// id값을 이용해 영화를 구분하는 상세 페이지
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovie = async () => {
    const res = await fetch("https://api.sampleapis.com/movies/animation");
    const data = await res.json();

    const foundMovie = data.find((item) => item.id === Number(id));

    setMovie(foundMovie);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;
  if (!movie) return <h1>Movie not found</h1>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.posterURL} alt={movie.title} />
      <p>ID: {movie.id}</p>
    </div>
  );
}

export default Detail;
