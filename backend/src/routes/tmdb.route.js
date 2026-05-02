import { Router } from 'express';
import { popularMovies, popularTV, trendingMovies, trendingTV, searchMoviesbyId } from '../api/tmdb.api.js';

const router = Router();

// TMDB API routes
router.get('/popular-movies', popularMovies);
router.get('/trending-movies', trendingMovies);
router.get('/searchMoviebyId', searchMoviesbyId);

router.get('/popular-tv', popularTV);
router.get('/trending-tv', trendingTV);


export default router;