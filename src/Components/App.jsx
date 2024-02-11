import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Movies from "../Pages/Movies";
import NotFound from "../Pages/NotFound";
import MovieDetails from "./MovieDetails";
import SharedLayout from "./SharedLayout";
import axios from "axios";

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
          <Route path="movies/:movieId" element={<MovieDetails />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
