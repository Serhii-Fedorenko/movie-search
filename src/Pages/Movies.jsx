import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import {
  MovieBox,
  MovieCard,
  MovieTitle,
  CustomLink,
  CustomForm,
} from "../Components/Movies.styled";
import { Button } from "../Components/MovieCard.styled";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [collection, setCollection] = useState([]);
  const query = searchParams.get("query") ?? "";
  const location = useLocation();

  const updateQueryString = (e) => {
    setSearchParams(e.target.value !== "" ? { query: e.target.value } : {});
  };

  const fetchMovies = (query) => {
    axios
      .get(
        `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
      )
      .then(({ data }) => setCollection(data.results))
      .catch((error) => console.log(error));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query });
    fetchMovies(query);
  };

  useEffect(() => {
    if (query) {
      fetchMovies(query);
    }
    // eslint-disable-next-line
  }, []);

  const sortedMovies = (collection) => {
    return collection.sort((a, b) => b.popularity - a.popularity);
  };

  return (
    <div>
      <CustomForm onSubmit={handleFormSubmit}>
        <input type="text" value={query} onChange={updateQueryString} />
        <Button type="submit">
          <BsSearch />
        </Button>
      </CustomForm>
      <MovieBox>
        {sortedMovies(collection)?.map((movie) => (
          <MovieCard key={movie.id}>
            <CustomLink to={`${movie.id}`} state={{ from: location }}>
              <MovieTitle>{movie.title}</MovieTitle>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width="300"
              />
            </CustomLink>
          </MovieCard>
        ))}
      </MovieBox>
    </div>
  );
};

export default Movies;
