import { useState, useEffect } from "react";
import { getMovies } from "../../movies-API";
import { useLocation } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  const location = useLocation();

  useEffect(() => {
    async function getDayMovies() {
      if (movies.length !== 0) {
        return;
      }
      try {
        setLoader(true);
        const fetchedMovies = await getMovies();
        setMovies(fetchedMovies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    getDayMovies();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending today</h1>
      {loader ? <Circles /> : <MovieList movies={movies} state={location} />}
    </div>
  );
}
