import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Header from '../../components/headers/header';
import Footer from '../../components/footer/footer';
import AppPageLayout from '../../components/layout/appLayout';
import { Card } from '../../components/Card';

export default function Detail() {

    let { id, type } = useParams();
    const [dataDetail, setDataDetail] = useState<any>(null);
    const [cast, setCast] = useState<any[]>([]);
    const [director, setDirector] = useState<string>('');
    const [writer, setWriter] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{

        if (type === '1') { // Movie
            axios.get(`http://localhost:3000/api/movies/searchMoviebyId?id=${id}`)
            .then(response => {
                setDataDetail(response.data);
                setIsLoading(false);
            })
            .catch(console.error);

            axios.get(`http://localhost:3000/api/movies/movieCredits?id=${id}`)
            .then(response => {
                setCast(response.data.cast);
                setDirector(response.data.crew.find((person: any) => person.job === 'Director')?.name || "N/A");
                setWriter(response.data.crew.find((person: any) => person.job === 'Writer')?.name || "N/A");
                setIsLoading(false);
            })
            .catch(console.error);

        } else { // TV Show
            axios.get(`http://localhost:3000/api/movies/searchTVbyId?id=${id}`)
            .then(response => {
                setDataDetail(response.data);
                setIsLoading(false);
            })
            .catch(console.error);

            axios.get(`http://localhost:3000/api/movies/tvCredits?id=${id}`)
            .then(response => {
                setCast(response.data.cast);
                setDirector(response.data.crew.find((person: any) => person.job === 'Director')?.name || "N/A");
                setWriter(response.data.crew.find((person: any) => person.job === 'Writer')?.name || "N/A");
                setIsLoading(false);
            })
            .catch(console.error);

        }
    }, []);

    return (
        <>
            <Header />
                <AppPageLayout>
                    {isLoading || !dataDetail ? (
                        <div className="text-center mt-10">
                            <p>Loading...</p>
                        </div>
                    ) : (
                        <div className='flex flex-col gap-4 p-10 sm:flex-row'>
                            <div className='flex-1'>
                                <figure className='rounded-xl shadow-xl p-2 border'>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${dataDetail.poster_path}`}
                                    className='rounded-xl'
                                />
                                </figure>
                            </div>

                            <div className='flex-[3] p-2 min-w-0'>
                                <div className='flex flex-col gap-4'>
                                <h1 className='text-3xl font-extrabold'>
                                    {dataDetail.title ?? dataDetail.name}
                                </h1>
                                    <p className='text-lg'>{dataDetail.overview}</p>
                                    <p className='text-sm'>Director: {director}</p>
                                    <p className='text-sm'>Written: {writer}</p>
                                    <p className='text-sm'>Release Date: {dataDetail.release_date ?? dataDetail.first_air_date}</p>
                                    <p className='text-sm'>Rating: {dataDetail.vote_average} / 10</p>
                                </div>
                                <h1 className='text-3xl font-extrabold mt-5'>
                                    Cast
                                </h1>
                                {/* ✅ Horizontal scroll works here */}
                                <div className="flex gap-4 mt-5 overflow-x-auto pb-2">
                                {cast.map((casts) => (
                                    <Card
                                    key={casts.id}
                                    imgSrc={casts.profile_path ? `https://image.tmdb.org/t/p/w500${casts.profile_path}` : `https://i.pinimg.com/736x/3c/67/75/3c67757cef723535a7484a6c7bfbfc43.jpg`}
                                    altName="Actor Name"
                                    className="min-w-[140px] max-w-[140px] bg-base-100 shadow-sm text-center"
                                    >
                                    <p className="font-bold text-center">
                                        {casts.name}
                                    </p>
                                    <p className="text-center">{casts.character}</p>
                                    </Card>
                                ))}
                                </div>
                            </div>
                        </div>
                    )}
                </AppPageLayout>
            <Footer />
        </>
    );
}