import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { ArtistCard, CastList } from "./MovieCard.styled";
import {Link} from "../Components/Movies.styled"

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();
  const location = useLocation()

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
            <Link to={`${actor.name}`} state={{ from: location }}>
              {/* {console.log(actor.name)} */}
              <ArtistCard key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                  alt={actor.name}
                />
                <p>{actor.character}</p>
                <p>{actor.name}</p>
              </ArtistCard>
            </Link>
          ))}
      </CastList>
    </div>
  );
};

export default Cast;
