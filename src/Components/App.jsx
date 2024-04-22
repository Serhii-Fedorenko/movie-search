import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import axios from "axios";
import SharedLayout from "./SharedLayout";
const Home = lazy(() => import("../Pages/Home"))
const Movies = lazy(() => import("../Pages/Movies"))
const NotFound = lazy(() => import("../Pages/NotFound"))
const Cast = lazy(() => import("./Cast"))
const Reviews = lazy(() => import("./Reviews"))
const ArtistDetails = lazy(() => import("./ArtistDetails"))
const MovieDetails = lazy(() => import("./MovieDetails"))

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjU5Mjk2ODZlYTRmM2FkMGQyZjdhMzI0NGZiZTEyMiIsInN1YiI6IjY1M2NkZDc3NTE5YmJiMDBlMThjNDMyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XMEVEZj4LIB64XBgIkKb9CzaDHet9ZxU3is9P1Tg5Zc";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route
            path="movies/:movieId/cast/:artistName"
            element={<ArtistDetails />}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
