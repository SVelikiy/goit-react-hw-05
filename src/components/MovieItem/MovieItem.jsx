import { Link, useLocation } from "react-router-dom";

export default function MovieItem({ movie }) {
  const location = useLocation()
  return (
    <div>
      <Link to={`/movies/${movie.id}`} state={location}>{movie.original_title}</Link>
    </div>
  );
}
