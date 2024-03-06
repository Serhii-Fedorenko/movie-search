import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import HomePageContainer from "../Components/HomePageContainer";
import ButtonContainer from "../Components/ButtonContainer";

const Home = () => {
  const [collection, setCollection] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/trending/movie/day?page=${page}&language=en-US`)
      .then(({ data }) => setCollection(data.results))
      .catch((error) => console.log(error));
    navigate(`/?page=${page}`);
  }, [page, navigate]);

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const handlePrevButtonClick = (e) => {
    e.preventDefault();
    setPage(page - 1);
  };

  return (
    <>
      <HomePageContainer collection={collection} location={location} />
      <ButtonContainer
        handleNextButtonClick={handleNextButtonClick}
        handlePrevButtonClick={handlePrevButtonClick}
      />
    </>
  );
};

export default Home;
