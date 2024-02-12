import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    axios.get(`/movie/${movieId}`).then(({ data }) => setMovie(data));
  }, [movieId]);

  console.log(movie)

  return (
    <div>
      {movie && (
        <div>
          <h2>{movie.original_title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
            width="300"
          />
          <div>
            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>

            <ul>
              {movie.genres.map((genre) => (
                <li key={genre.name}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
