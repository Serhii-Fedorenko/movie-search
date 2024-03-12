import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Reviews = () => {
  const [reviewList, setReviewList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(`/movie/${movieId}/reviews`)
      .then(({ data }) => setReviewList(data.results));
  }, [movieId]);
  return (
    <>
      <ul>
        {reviewList?.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
