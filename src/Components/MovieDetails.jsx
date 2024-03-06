import { useEffect, useState, Suspense, useRef } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import axios from "axios";
import MovieCardContainer from "./MovieCardContainer";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

  useEffect(() => {
    axios.get(`/movie/${movieId}`).then(({ data }) => setMovie(data));
  }, [movieId]);

  return (
    <div>
      {movie && (
        <MovieCardContainer movie={movie} backLinkHref={backLinkHref} />
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
