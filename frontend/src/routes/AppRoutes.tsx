import { Routes, Route } from 'react-router'
import App from '../App.tsx'
import Trendings from '../pages/Trendings.tsx'
import Detail from '../pages/movies/Detail.tsx'
import Upcoming from '../pages/Upcoming.tsx'
import Error404 from '../pages/error/error_404.tsx'
import Login from '../pages/auth/Login.tsx'
import Signup from '../pages/auth/Signup.tsx'
import MovieShows from '../pages/shows/MovieShows.tsx'
import TVShows from '../pages/shows/TvShows.tsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/trendings" element={<Trendings />} />
      <Route path="/movie_detail/:id/:type" element={<Detail />} />
      <Route path="/tv_detail/:id/:type" element={<Detail />} />
      <Route path="*" element={<Error404/>} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign_up/:email?" element={<Signup />} />
      <Route path="/movie_shows" element={<MovieShows />} />
      <Route path="/tv_shows" element={<TVShows />} />
    </Routes>
  );
}