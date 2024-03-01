import axios from "axios";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ArtistDetails = () => {
  const [artist, setArtist] = useState(null);
  const { artistName } = useParams();
  //   const location = useLocation();
  //   const backLinkHref = useRef(location.state?.from ?? "/movie");

  useEffect(() => {
    axios
      .get(`/search/person?query=${artistName}`)
      .then(({ data }) => setArtist(data.results[0]))
      .catch((error) => console.log(error));
  }, [artistName]);

  console.log(artist);

  return (
    <div>
      {artist && (
        <div>
          <h4>{artist.name}</h4>
          <img
            src={`https://image.tmdb.org/t/p/w300/${artist.profile_path}`}
            alt={artist.name}
          />
          <ul>{artist.known_for.map(item => <li>{item.title}</li>)}</ul>
        </div>
      )}
    </div>
  );
};

export default ArtistDetails;
