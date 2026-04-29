import axios from 'axios';
import Header from './components/headers/header';
import Footer from './components/footer/footer';
import LandingPageLayout from './components/layout/landingPageLayout';
import SignupCard from './components/landPageComponents/signupCard';
import Hero from './components/landPageComponents/hero';
import { Card } from './components/Card';
import DescriptionCard from './components/landPageComponents/description';
import { useEffect, useState } from 'react';

export default function App() {

  const [data, setData] = useState<any>(null);
  const [tvData, setTvData] = useState<any>(null);
  const [posterData, setPosterData] = useState<any>(null);

  useEffect(() => {
    // for Movies
    axios
      .get('http://localhost:3000/api/movies/trending-movies')
      .then(response => {
        setData(response.data);

        // Extract posters safely
        const posters = response.data.results
          .map((poster: any) =>
            `https://image.tmdb.org/t/p/w500${poster.poster_path}`
          );
        setPosterData(posters);
      })
      .catch(console.error);
      
    // for TV Shows
    axios
    .get('http://localhost:3000/api/movies/trending-tv')
    .then(response => setTvData(response.data))
    .catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <LandingPageLayout>
        <Hero />
        <div className='grid grid-row max-w-full min-h-[30vh] items-center m-10 text-center sm:justify-center'>
          <DescriptionCard posterData={posterData}/>
        </div>

        {/* MOVIES CARDS */}
        <div className="my-10 flex flex-row justify-center">
          <div className="divider divider-info min-w-[80vw]"><p className="text-2xl font-extrabold">Trending Movies</p></div>
        </div>
        <div className="grid grid-rows md:grid-cols-3 lg:grid-cols-5 justify-center my-5 gap-5 mx-10">
          {data && data.results.slice(0, 5).map((movie: any) => (
            <Card
              key={movie.id}
              imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              altName={movie.title}
              className="bg-base-100 max-w-full shadow-sm text-center"
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
        {/* END OF MOVIES CARDS */}

        {/* TV SHOWS CARDS */}
        <div className="my-10 flex flex-row justify-center">
          <div className="divider divider-info min-w-[80vw]"><p className="text-2xl font-extrabold">TV Shows</p></div>
        </div>
        <div className="grid grid-rows md:grid-cols-3 lg:grid-cols-5 justify-center my-5 gap-5 mx-10">
          {tvData && tvData.results.slice(0, 5).map((tv: any) => (
            <Card
              key={tv.id}
              imgSrc={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
              altName={tv.original_name}
              className="bg-base-100 max-w-full shadow-sm text-center"
            >
              <h2 className="card-title justify-center">
                {tv.name}
              </h2>
              <p className="text-center">{tv.overview}</p>
              <div className="card-actions justify-center">
                <div className="badge badge-outline">Rate: {tv.vote_average.toFixed(1)}</div>
                <div className="badge badge-outline">Vote: {tv.vote_count}</div>
              </div>
            </Card>
          ))}
        </div>
        {/* END OF TV SHOWS CARDS */}

        <SignupCard />
      </LandingPageLayout>
      <Footer />
    </>
  )
}
