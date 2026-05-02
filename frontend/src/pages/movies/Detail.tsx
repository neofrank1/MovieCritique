import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Header from '../../components/headers/header';
import Footer from '../../components/footer/footer';
import AppPageLayout from '../../components/layout/appLayout';

export default function Detail() {

    let { id } = useParams();
    console.log("Movie ID:", id);

    const [movieDetail, setMovieDetail] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        axios.get(`http://localhost:3000/api/movies/searchMoviebyId?id=${id}`)
        .then(response => {
            setMovieDetail(response.data);
            setIsLoading(false);
        })
        .catch(console.error);
    }, []);

    console.log("Movie Detail:", movieDetail);

    return (
        <>
            <Header />
                <AppPageLayout>
                    {isLoading ? (
                        <div className="text-center mt-10">
                            <p>Loading...</p>
                        </div>
                    ) : (
                        <p>Hello</p>
                    )};
                </AppPageLayout>
            <Footer />
        </>
    );
}