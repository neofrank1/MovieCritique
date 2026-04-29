import axios from 'axios';

export const popularMovies = async (req, res) => {
    try {
        const page = req.query.page;
        
        if (!page || page <= 0) {
            return res.status(400).json({ error: 'Invalid page number or No Page Number given' });
        }

        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page || 1}`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
            }
        };

        const response = await axios.request(options);

        if (response.status !== 200) {
            console.error('Error fetching popular movies:', response.statusText);
            return res.status(response.status).json({ error: 'Failed to fetch popular movies' });
        }

        return res.json(response.data);

    } catch (error) {
        console.error('Error fetching popular movies:', error.message);
        res.status(500).json({ error: 'Failed to fetch popular movies' });
    }
}

export const popularTV = async (req, res) => {
    try {
        const page = req.query.page;
        
        if (!page || page <= 0) {
            return res.status(400).json({ error: 'Invalid page number or No Page Number given' });
        }

        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page || 1}`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
            }
        };

        const response = await axios.request(options);

        if (response.status !== 200) {
            console.error('Error fetching popular TV:', response.statusText);
            return res.status(response.status).json({ error: 'Failed to fetch popular TV' });
        }

        return res.json(response.data);

    } catch (error) {
        console.error('Error fetching popular TV:', error.message);
        res.status(500).json({ error: 'Failed to fetch popular TV' });
    }
}


export const trendingTV = async (req, res) => {
    try {

    if (process.env.TMDB_ACCESS_TOKEN === undefined) {
        return res.status(500).json({ error: 'TMDB access token is not configured' });
    }
    
    const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
        }
    };

    const response = await axios.request(options);

    if (response.status !== 200) {
        console.error('Error fetching trending TV shows:', response.statusText);
        return res.status(response.status).json({ error: 'Failed to fetch trending TV shows' });
    }

    return res.json(response.data);

    } catch (error) {
        console.error('Error fetching trending TV shows:', error.message);
        res.status(500).json({ error: 'Failed to fetch trending TV shows' });
    }        
}

export const trendingMovies = async (req, res) => {
    try {

        if (process.env.TMDB_ACCESS_TOKEN === undefined) {
            return res.status(500).json({ error: 'TMDB access token is not configured' });
        }
        
        const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
                headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
            }
        };

        const response = await axios.request(options);

        if (response.status !== 200) {
            console.error('Error fetching trending TV shows:', response.statusText);
            return res.status(response.status).json({ error: 'Failed to fetch trending TV shows' });
        }

        return res.json(response.data);

    } catch (error) {
        console.error('Error fetching trending TV shows:', error.message);
        res.status(500).json({ error: 'Failed to fetch trending TV shows' });
    }      
}