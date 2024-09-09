import { useSearchParams } from "react-router-dom";
import css from './SearchForm.module.css'

export default function SearchForm() {
  const [searchMovies, setSearchMovies] = useSearchParams();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchValue = form.elements.searchMovie.value;
      searchMovies.set('query', searchValue);
      setSearchMovies(searchMovies);
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.container}>
        <input type="text" name="searchMovie" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}