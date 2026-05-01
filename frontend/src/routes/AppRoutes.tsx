import { Routes, Route } from 'react-router'
import App from '../App.tsx'
import Trendings from '../page/Trendings.tsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/trendings" element={<Trendings />} />
    </Routes>
  );
}