import { useEffect, useState, Suspense, useRef } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import axios from "axios";
import { CardWrap, Button, LeftSide, RightSide } from "./MovieCard.styled";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

  useEffect(() => {
    axios.get(`/movie/${movieId}`).then(({ data }) => setMovie(data));
  }, [movieId]);
  console.log(location)

  return (
    <div>
      <Button to={backLinkHref.current}>Back to previous page</Button>
      {movie && (
        <CardWrap>
          <LeftSide>
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
              width="300"
            />
          </LeftSide>
          <RightSide>
            <h4>{movie.tagline}</h4>
            <p>{movie.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.original_title}
              width="500"
            />
            <p>Release Date: {movie.release_date}</p>
            <p>Genres</p>
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre.name}>{genre.name}</li>
              ))}
            </ul>
            <p>Budget: ${movie.budget}</p>
            <ul>
              {movie.production_countries.map((country) => (
                <li key={country.name}>{country.name}</li>
              ))}
            </ul>
            <p>{movie.runtime} min</p>
          </RightSide>
        </CardWrap>
      )}
      <nav>
        <Button to="cast">Cast</Button>
        <Button to="reviews">Reviews</Button>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
