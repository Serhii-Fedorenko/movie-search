import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ArtistCard, CastList } from "./MovieCard.styled";

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
      <CastList>
        {castList &&
          castList.map((actor) => (
            <ArtistCard key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.character}</p>
              <p>{actor.name}</p>
            </ArtistCard>
          ))}
      </CastList>
    </div>
  );
};

export default Cast;
