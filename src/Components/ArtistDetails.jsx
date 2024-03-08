import axios from "axios";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Button, CardWrap, LeftSide, RightSide } from "./MovieCard.styled";
import { CustomLink, MovieBox, MovieCard } from "./Movies.styled";

const ArtistDetails = () => {
  const [artist, setArtist] = useState(null);
  const { artistName } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

  useEffect(() => {
    axios
      .get(`/search/person?query=${artistName}`)
      .then(({ data }) => setArtist(data.results[0]))
      .catch((error) => console.log(error));
  }, [artistName]);

  return (
    <>
      <Button to={backLinkHref.current}>Back to previous page</Button>
      {artist && (
        <CardWrap>
          <LeftSide>
            <h4>{artist.name}</h4>
            <img
              src={`https://image.tmdb.org/t/p/w300/${artist.profile_path}`}
              alt={artist.name}
            />
          </LeftSide>
          <RightSide>
            <MovieBox>
              {artist.known_for.map((item) => (
                <CustomLink
                  to={`/movies/${item.id}`}
                  state={{ from: location }}
                >
                  <MovieCard>
                    <h4>{item.title}</h4>
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                      alt={item.title}
                      width="200"
                    />
                  </MovieCard>
                </CustomLink>
              ))}
            </MovieBox>
          </RightSide>
        </CardWrap>
      )}
    </>
  );
};

export default ArtistDetails;
