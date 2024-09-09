import { useEffect, useRef, useState } from "react";
import { getMovieDetails } from "../../movie-details-API";
import { Circles } from "react-loader-spinner";
import {
  Link,
  NavLink,
  useLocation,
  Outlet,
  useParams,
} from "react-router-dom";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const navLinkClass = (props) => {
  return clsx(css.link, props.isActive && css.activeLink);
};

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");
  const { movieId } = useParams();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getMovieInfo() {
      try {
        setLoader(true);
        const fetchedDetails = await getMovieDetails(movieId);
        setMovie(fetchedDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    getMovieInfo();
  }, [movieId]);

  return loader ? (
    <Circles />
  ) : (
    <div>
      <button type="button" className={css.button}>
        <Link to={backLinkRef.current}>Go back</Link>
      </button>
      {!movie ? <Circles /> : <MovieDetails movie={movie} />}
      <ul className={css.linkContainer}>
        <li>
          <NavLink to="casts" className={navLinkClass}>
            Casts
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={navLinkClass}>
            Review
          </NavLink>
        </li>
      </ul>
      <Outlet context={movieId} />
    </div>
  );
}
