import Genres from "../Genres/Genres";
import css from './Moviedetails.module.css'

export default function MovieDetails({ movie }) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className={css.container}>
      <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.original_title} />
      <div className={css.infoContainer}>
        <h1 className={css.title}>
          {movie.original_title} ({movie.release_date.slice(0, 4)})
        </h1>
        <p className={css.text}>
          User score : {Math.round(movie.vote_average * 10)}%
        </p>
        <h2 className={css.subTitle}>Overwiew</h2>
        <p className={css.text}>{movie.overview}</p>
        <h2 className={css.subTitle}>Genres</h2>
        <Genres genres={movie.genres} />
      </div>
    </div>
  );
}
