import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Movies from "../Pages/Movies";
import NotFound from "../Pages/NotFound";
import MovieDetails from "./MovieDetails";
import SharedLayout from "./SharedLayout";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </>;
}

export default App;
