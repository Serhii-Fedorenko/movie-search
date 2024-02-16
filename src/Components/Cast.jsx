import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(`/movie/${movieId}/credits`)
      .then(({ data }) => setCastList(data.cast));
  }, [movieId]);

  return (
    <div>
      <ul>
        {castList &&
          castList.map((actor) => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.character}</p>
              <p>{actor.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
