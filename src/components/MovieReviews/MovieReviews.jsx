import { useState, useEffect } from "react";
import { getMovieReviews } from "../../movie-reviews-API";
import { useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getReviews() {
      try {
        setLoader(true);
        const fetchedReviews = await getMovieReviews(movieId);
        setReviews(fetchedReviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    getReviews();
  }, []);

  return loader ? (
    <Circles />
  ) : reviews.length > 0 ? (
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <h1>No reviews yet!</h1>
  );
}
