import { Routes, Route } from 'react-router'
import App from '../App.tsx'
import Trendings from '../pages/Trendings.tsx'
import Detail from '../pages/movies/Detail.tsx'
import Upcoming from '../pages/Upcoming.tsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/trendings" element={<Trendings />} />
      <Route path="/movie_detail/:id/:type" element={<Detail />} />
      <Route path="/tv_detail/:id/:type" element={<Detail />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="/upcoming" element={<Upcoming />} />
    </Routes>
  );
}