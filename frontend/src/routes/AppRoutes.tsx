import { Routes, Route } from 'react-router'
import App from '../App.tsx'
import Trendings from '../pages/Trendings.tsx'
import Detail from '../pages/movies/Detail.tsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/trendings" element={<Trendings />} />
      <Route path="/movie_detail/:id/:type" element={<Detail />} />
      <Route path="/tv_detail/:id/:type" element={<Detail />} />
    </Routes>
  );
}