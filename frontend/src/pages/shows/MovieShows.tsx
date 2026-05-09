import AppPageLayout from "../../components/layout/appLayout";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import { Card } from "../../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";

export default function MovieShows() {

    const [movies, setMovies] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [pageDisabled, setPageDisabled] = useState(false);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        let endpoint = `http://localhost:3000/api/movies/upcoming-movies?page=${page}`;
        
        if (isSearching && searchQuery.trim() !== "") {
            endpoint = `http://localhost:3000/api/movies/searchMovies?query=${searchQuery}&page=${page}`;
        }
        
        axios.get(endpoint)
            .then(response => {
                setMovies(response.data);
                setIsLoading(false);
                const totalPages = response.data?.total_pages ?? 0;
                setPageDisabled(totalPages <= 1);
            })
            .catch(console.error);
    }, [page, isSearching, searchQuery]);

    const dateFormatter = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleLoadMore = () => {
        setPage((prev) => prev + 1);
    }

    const handleLoadPrevious = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
        }
    }

    const overviewTruncate = (overview: string, maxLength: number) => {
        if (overview.length <= maxLength) return overview;
        return overview.slice(0, maxLength) + '...';
    };

    const submitSearch = () => {
        if (searchQuery.trim() === "") {
            setIsSearching(false);
            setPage(1);
            return;
        }
        setIsSearching(true);
        setPage(1);
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            submitSearch();
        }, 500); // Adjust the debounce delay as needed
        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery]);

    console.log(movies);

    return (
        <>
            <Header />
            <AppPageLayout>
                <h1 className="text-4xl font-bold text-center mt-10 mb-5">Movies</h1>
                <p className="text-center text-lg mb-10">Get a sneak peek at the most anticipated movies on the horizon. Explore the upcoming releases, and mark your calendar for the next big hits in cinema!</p>
                {/* Add your upcoming movies content here */}
                <div className="mx-auto flex justify-center mb-10 w-full max-w-3xl">
                    <input className="w-full input" type="text" placeholder="Search Movie" onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <div className="grid grid-rows md:grid-cols-3 lg:grid-cols-5 justify-center my-5 gap-5 mx-10">
                    {isLoading || !movies.results ? (
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
                        movies.results.map((movie: any) => (
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
                                <p className="text-center">
                                    {overviewTruncate(movie.overview, 200) ? overviewTruncate(movie.overview, 200) : "No overview available."}
                                </p>
                                <p className="font-extrabold text-md justify-center ">
                                    {dateFormatter(movie.release_date)}
                                </p>
                            </Card>
                        ))
                    )}
                </div>
                <div className="flex flex-nowrap justify-center my-5">
                    <div className="join">
                        <button className="join-item btn" onClick={handleLoadPrevious} disabled={isLoading || pageDisabled}>«</button>
                        <button className="join-item btn">Page {page}</button>
                        <button className="join-item btn" onClick={handleLoadMore} disabled={isLoading || pageDisabled}>»</button>
                    </div>
                </div>
            </AppPageLayout>
            <Footer />
        </>
    );
}