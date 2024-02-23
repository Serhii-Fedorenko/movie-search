import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [collection, setCollection] = useState([]);
  const location = useLocation();
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
            <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
