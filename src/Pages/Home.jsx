import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    axios
      .get("/trending/movie/day?language=en-US")
      .then(({ data }) => setCollection(data.results))
  }, []);

  return (
    <div>
      <ul>
        {collection?.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
