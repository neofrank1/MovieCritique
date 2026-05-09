import { Router } from 'express';
import { popularMovies, popularTV, trendingMovies, trendingTV, searchMoviesbyId, searchTVbyId, movieCredits, tvCredits, upcomingMovies, searchMovies, searchTVShows } from '../api/tmdb.api.js';

const router = Router();

// TMDB API routes
router.get('/popular-movies', popularMovies);
router.get('/trending-movies', trendingMovies);
router.get('/searchMoviebyId', searchMoviesbyId);
router.get('/movieCredits', movieCredits);
router.get('/upcoming-movies', upcomingMovies);
router.get('/searchMovies', searchMovies);

router.get('/popular-tv', popularTV);
router.get('/trending-tv', trendingTV);
router.get('/searchTVbyId', searchTVbyId);
router.get('/tvCredits', tvCredits);
router.get('/searchTV', searchTVShows);


export default router;