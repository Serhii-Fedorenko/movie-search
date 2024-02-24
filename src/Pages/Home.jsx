import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { MovieBox, MovieCard, MovieTitle, Link } from "../Components/Movies.styled";

const Home = () => {
  const [collection, setCollection] = useState([]);
  const location = useLocation();
  useEffect(() => {
    axios
      .get("/trending/movie/day?language=en-US")
      .then(({ data }) => setCollection(data.results));
  }, []);

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
    </div>
  );
};

export default Home;
