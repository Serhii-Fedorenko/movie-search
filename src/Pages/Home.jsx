import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  MovieBox,
  MovieCard,
  MovieTitle,
  Link,
} from "../Components/Movies.styled";

const Home = () => {
  const [collection, setCollection] = useState([]);
  const [page, setPage] = useState(1)
  const location = useLocation();
  const pageRef = useRef(page)

  useEffect(() => {
    axios
      .get(`/trending/movie/day?page=${page}&language=en-US`)
      .then(({ data }) => setCollection(data.results));
      pageRef.current = page
  }, [page]);

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    setPage(page+1)
  }

  const handlePrevButtonClick = (e) => {
    e.preventDefault();
    setPage(page-1)
  }

  return (
    <div>
      <MovieBox>
        {collection?.map((movie) => (
          <MovieCard key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovieTitle>{movie.title}</MovieTitle>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width="300"
              />
            </Link>
          </MovieCard>
        ))}
      </MovieBox>
        <div>
          <button type="button" onClick={handlePrevButtonClick}>prev</button>
          <button type="button" onClick={handleNextButtonClick}>next</button>
        </div>
    </div>
  );
};

export default Home;
