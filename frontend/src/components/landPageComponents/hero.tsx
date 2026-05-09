'use client'
import {Link} from "react-router";

export default function Hero() {
  return (
    <div className="hero bg-base-100 min-h-[60vh] bg-[url('./assets/watcher.webp')]">
      <div className="hero-content text-center">
          <div className="max-w-md">
          <h1 className="text-5xl font-bold text-secondary">MovieCritique</h1>
          <p className="py-6 text-base-300">
            is a platform for discovering movies and TV shows, featuring reviews, search tools, 
            trending titles, and upcoming releases—all in one place.
          </p>
          <Link to="/login" className="btn btn-accent">Get Started</Link>
          </div>
      </div>
    </div>
  );
}