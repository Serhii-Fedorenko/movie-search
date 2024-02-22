import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [collection, setCollection] = useState([]);
  const query = searchParams.get("query") ?? "";

  const updateQueryString = (e) => {
    setSearchParams({ query: e.target.value });
  };

  const fetchMovies = (query) => {
    axios
      .get(
        `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
      )
      .then(({ data }) => setCollection(data.results));
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

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={query} onChange={updateQueryString} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {collection?.map((movie) => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>
              <h3>{movie.title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width="300"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;