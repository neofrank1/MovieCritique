import axios from 'axios';
import Header from './components/headers/header';
import Footer from './components/footer/footer';
import LandingPageLayout from './components/layout/landingPageLayout';
import Hero from './components/landPageComponents/hero';
import { Card } from './components/Card';
import { useEffect, useState } from 'react';

export default function App() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/movies/popular-movies?page=1')
      .then(response => setData(response.data))
      .catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <LandingPageLayout>
        <Hero />
        <div className="mt-5 flex flex-row justify-center">
          <div className="divider divider-info min-w-[80vw]"><p className="text-2xl font-extrabold">Trending Movies</p></div>
        </div>
        <div className="grid grid-rows md:grid-cols-3 lg:grid-cols-5 justify-center my-5 gap-5 mx-10">
          {data && data.results.slice(0, 5).map((movie: any) => (
            <Card
              key={movie.id}
              imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              altName={movie.title}
              className="bg-base-100 max-w-57 shadow-sm text-center"
            >
              <h2 className="card-title justify-center">
                {movie.title}
              </h2>
              <p className="text-center">{movie.overview}</p>
              <div className="card-actions justify-center">
                <div className="badge badge-outline">Rate: {movie.vote_average.toFixed(1)}</div>
                <div className="badge badge-outline">Vote: {movie.vote_count}</div>
              </div>
            </Card>
          ))}
        </div>
      </LandingPageLayout>
      <Footer />
    </>
  )
}
