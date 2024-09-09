import { useState, useEffect } from "react";
import { getMovieCasts } from "../../movie-casts-API";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import { Circles } from "react-loader-spinner";

export default function MovieCast() {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  const [loader, setLoader] = useState(false);

  const IMG_URL = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    async function Casts() {
      try {
        setLoader(true);
        const fetchedCasts = await getMovieCasts(movieId);
        setCasts(fetchedCasts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    Casts();
  }, []);

  return loader ? (
    <Circles />
  ) : casts.length > 0 ? (
    <ul className={css.castsContainer}>
      {casts.map((cast) => {
        return (
          <li key={cast.id} className={css.castsItem}>
            <img
              className={css.castsPhoto}
              src={`${IMG_URL}${cast.profile_path}`}
              alt={cast.name}
            />
            <h2>{cast.name}</h2>
          </li>
        );
      })}
    </ul>
  ) : (
    <h1>No casts!</h1>
  );
}
