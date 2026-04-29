import {Router} from 'express';
import { popularMovies, popularTV, trendingMovies, trendingTV } from '../api/tmdb.api.js';

const router = Router();

// TMDB API routes
router.get('/popular-movies', popularMovies);
router.get('/trending-movies', trendingMovies);

router.get('/popular-tv', popularTV);
router.get('/trending-tv', trendingTV);


export default router;