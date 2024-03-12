import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { ArtistCard, CastList } from "./MovieCard.styled";
import { CustomLink } from "../Components/Movies.styled";

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`/movie/${movieId}/credits`)
      .then(({ data }) => setCastList(data.cast));
  }, [movieId]);

  return (
    <>
      <CastList>
        {castList &&
          castList.map((actor) => (
            <CustomLink
              to={`${actor.name}`}
              key={actor.id}
              state={{ from: location }}
            >
              <ArtistCard>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                  alt={actor.name}
                />
                <p>{actor.character}</p>
                <p>{actor.name}</p>
              </ArtistCard>
            </CustomLink>
          ))}
      </CastList>
    </>
  );
};

export default Cast;
