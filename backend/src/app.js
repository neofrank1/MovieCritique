import express from 'express';
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));


import tmdbRoutes from './routes/tmdb.route.js';

app.use('/api/movies', tmdbRoutes);

// Checker
app.get('/api/test', (req, res) => {
    res.send('Test route is working!');
});

export default app;