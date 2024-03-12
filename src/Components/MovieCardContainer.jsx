import { CardWrap, LeftSide, RightSide } from "./MovieCard.styled";
import { Button } from "./Movies.styled";

const MovieCardContainer = ({ movie, backLinkHref }) => {
  let timerId = null;
  const scrollDown = () => {
    timerId = setTimeout(() => {
      window.scrollTo({ top: 600, behavior: "smooth" });
    }, 100);
  };
  const stopScrollDown = () => {
    clearTimeout(timerId)
  }
  return (
    <>
      <Button to={backLinkHref.current}>Back to previous page</Button>
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
          <p>Rating: {movie.vote_average.toFixed(1)}</p>
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
      <nav>
        <Button to="cast" onClick={scrollDown} onMouseUp={stopScrollDown}>Cast</Button>
        <Button to="reviews" onClick={scrollDown} onMouseUp={stopScrollDown}>Reviews</Button>
      </nav>
    </>
  );
};

export default MovieCardContainer;
