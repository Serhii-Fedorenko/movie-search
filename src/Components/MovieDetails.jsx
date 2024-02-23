import { useEffect, useState, Suspense, useRef } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/movies");
  console.log(location.state)

  useEffect(() => {
    axios.get(`/movie/${movieId}`).then(({ data }) => setMovie(data));
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHref.current}>Back to previous page</Link>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
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
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
