function Xxx({ movie }) {
  return (
    <div
      style={{
        backgroundImage: `url(${movie.posterURL})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "2rem",
        borderRadius: "1rem",
        color: "#fff",
        height: "600px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          padding: "2rem",
          borderRadius: "1rem",
        }}
      >
        <h1>{movie.title}</h1>
        {/* <img src={movie.posterURL} alt={movie.title} /> */}
        <p>ID: {movie.id}</p>
      </div>
    </div>
  );
}
export default Xxx;
