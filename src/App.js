import './App.css';
import { lazy, Suspense } from 'react';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import SearchMoviesForm from './components/SearchMoviesForm/SearchMoviesForm';
import NotFoundView from './views/NotFoundView';
import Spinner from './components/Loader/Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomePage = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "HomeView"*/),
);
const FilmDetailsView = lazy(() =>
  import(
    './views/FilmDetailsView/FilmDetailsView' /* webpackChunkName: "FilmDetailsView"*/
  ),
);
const SearchMovies = lazy(() =>
  import(
    './components/SearchMovies/SearchMovies' /* webpackChunkName: "SearchMovies"*/
  ),
);

export default function App() {
  const [searchFilm, setSearchFilm] = useState('');

  return (
    <>
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <SearchMoviesForm onSubmit={setSearchFilm} />
            <SearchMovies searchMovies={searchFilm} />
          </Route>
          <Route path="/movies/:movieId">
            <FilmDetailsView />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
