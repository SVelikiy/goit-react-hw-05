import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { getMovieSearch } from "../../movie-search-API";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  const [params] = useSearchParams();
  const searchMovie = params.get("query");


  useEffect(() => {
    if (!searchMovie) {
      return;
    }
    async function MovieSearch() {
      try {
        setLoader(true);
        const fetchedMovies = await getMovieSearch(searchMovie);
        setMovies(fetchedMovies);
      } catch (error) {
        console.log(error);
      }
      finally { setLoader(false) };
    }
    MovieSearch();
  }, [searchMovie]);

  return loader ? (<Circles />) :
    (<div>
      <SearchForm />
      <MovieList movies={movies} />
    </div>);
};
