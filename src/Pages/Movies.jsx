import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import axios from "axios";
import SearchForm from "../Components/SearchForm";
import MovieContainer from "../Components/MovieContainer";

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
        `/search/movie?query=${query}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc`
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
    <>
      <SearchForm
        query={query}
        updateQueryString={updateQueryString}
        handleFormSubmit={handleFormSubmit}
      />
      <MovieContainer
        sortedMovies={sortedMovies}
        location={location}
        collection={collection}
      />
    </>
  );
};

export default Movies;
