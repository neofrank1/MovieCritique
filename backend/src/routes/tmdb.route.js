import {Router} from 'express';
import { popularMovies } from '../api/tmdb.api.js';

const router = Router();

router.get('/popular-movies', popularMovies);

export default router;