import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Circles } from "react-loader-spinner";
import Navigation from "../Navigation/Navigation";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

export default function () {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Circles />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={`/movies/:movieId`} element={<MovieDetailsPage />}>
            <Route path="casts" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
            <Route />
          </Route>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
