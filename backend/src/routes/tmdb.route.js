import { Router } from 'express';
import { popularMovies, popularTV, trendingMovies, trendingTV, searchMoviesbyId, searchTVbyId } from '../api/tmdb.api.js';

const router = Router();

// TMDB API routes
router.get('/popular-movies', popularMovies);
router.get('/trending-movies', trendingMovies);
router.get('/searchMoviebyId', searchMoviesbyId);

router.get('/popular-tv', popularTV);
router.get('/trending-tv', trendingTV);
router.get('/searchTVbyId', searchTVbyId);


export default router;