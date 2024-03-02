import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MovieBox,
  MovieCard,
  MovieTitle,
  CustomLink,
  ButtonBox,
} from "../Components/Movies.styled";
import { Button } from "../Components/MovieCard.styled";

const Home = () => {
  const [collection, setCollection] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/trending/movie/day?page=${page}&language=en-US`)
      .then(({ data }) => setCollection(data.results))
      .catch((error) => console.log(error));
    navigate(`/?page=${page}`);
  }, [page, navigate]);

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const handlePrevButtonClick = (e) => {
    e.preventDefault();
    setPage(page - 1);
  };

  return (
    <div>
      <MovieBox>
        {collection?.map((movie) => (
          <MovieCard key={movie.id}>
            <CustomLink to={`/movies/${movie.id}`} state={{ from: location }}>
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
      <ButtonBox>
        <Button type="button" onClick={handlePrevButtonClick}>
          prev
        </Button>
        <Button type="button" onClick={handleNextButtonClick}>
          next
        </Button>
      </ButtonBox>
    </div>
  );
};

export default Home;
