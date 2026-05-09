import AppPageLayout from "../components/layout/appLayout";
import Header from "../components/headers/header";
import Footer from "../components/footer/footer";
import { Card } from "../components/Card";
import type { TrendingData } from "../types/trendings.types";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";

export default function Trendings() {

  const [movies, setMovies] = useState<TrendingData>({
    results: []
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:3000/api/movies/trending-movies')
      .then(response => {
        setMovies(response.data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Header />
        <AppPageLayout>
          <h1 className="text-4xl font-bold text-center mt-10 mb-5">Trending Movies</h1>
          <p className="text-center text-lg mb-10">Discover what's hot right now in the world of entertainment. Explore the latest trending Movies, and find your next favorite watch!</p>
          {/* Add your trending movies and TV shows content here */}
          <div className="grid grid-rows md:grid-cols-3 lg:grid-cols-5 justify-center my-5 gap-5 mx-10">
            {isLoading || !movies ? (
              Array.from({ length: 20 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-base-100 max-w-full shadow-sm text-center p-6 animate-pulse"
                >
                  <div className="h-64 bg-gray-300 rounded mb-4" />
                  <div className="h-5 bg-gray-300 rounded mb-2" />
                  <div className="h-4 bg-gray-300 rounded mb-2" />
                  <div className="h-4 bg-gray-300 rounded" />
                </div>
              ))
            ) : (
              movies.results.map((movie) => (
                <Card
                  key={movie.id}
                  imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  altName={movie.title}
                  className="bg-base-100 max-w-full shadow-sm text-center"
                >
                  <Link to={`/movie_detail/${movie.id}/1`}>
                    <h2 className="card-title justify-center">
                      {movie.title}
                    </h2>
                  </Link>
                  <p className="text-center">{movie.overview}</p>
                  <div className="card-actions justify-center">
                    <div className="badge badge-outline">Rate: {movie.vote_average.toFixed(1)}</div>
                    <div className="badge badge-outline">Vote: {movie.vote_count}</div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </AppPageLayout>
      <Footer />
    </>
  );
}