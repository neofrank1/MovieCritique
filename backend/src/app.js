import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());


import tmdbRoutes from './routes/tmdb.route.js';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

app.use('/api/users', userRoutes);
app.use('/api/movies', tmdbRoutes);
app.use('/auth', authRoutes);

// Checker
app.get('/api/test', (req, res) => {
    res.send('Test route is working!');
});

export default app;