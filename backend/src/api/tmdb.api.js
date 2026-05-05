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

export const searchMoviesbyId = async (req, res) => {
    try {
        const id = req.query.id;

        if (!id) {
            return res.status(400).json({ error: 'Movie ID is required' });
        }

        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
            }
        };

        const response = await axios.request(options);

        if (response.status !== 200) {
            console.error('Error fetching movie by ID:', response.statusText);
            return res.status(response.status).json({ error: 'Failed to fetch movie by ID' });
        }

        return res.json(response.data);
    } catch (error) {
        console.error('Error fetching movie by ID:', error.message);
        res.status(500).json({ error: 'Failed to fetch movie by ID' });
    }
}

export const searchTVbyId = async (req, res) => {
    try {
        const id = req.query.id;
        
        if (!id) {
            return res.status(400).json({ error: 'TV Show ID is required' });
        }

         const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
            }
        };

        const response = await axios.request(options);

        if (response.status !== 200) {
            console.error('Error fetching TV show by ID:', response.statusText);
            return res.status(response.status).json({ error: 'Failed to fetch TV show by ID' });
        }

        return res.json(response.data);

    } catch (error) {
        console.error('Error fetching TV show by ID:', error.message);
        res.status(500).json({ error: 'Failed to fetch TV show by ID' });
    }
}

export const movieCredits = async (req, res) => {
    try {
        const id = req.query.id;

        if (!id) {
            return res.status(400).json({ error: 'Movie ID is required' });
        }

        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
            }
        };

        const response = await axios.request(options);

        if (response.status !== 200) {
            console.error('Error fetching movie credits:', response.statusText);
            return res.status(response.status).json({ error: 'Failed to fetch movie credits' });
        }

        return res.json(response.data);

    }  catch(error) {
        console.error('Error fetching movie credits:', error.message);
        res.status(500).json({ error: 'Failed to fetch movie credits' });
    }
}

export const tvCredits = async (req, res) => {
    try {
        const id = req.query.id;

        if (!id) {
            return res.status(400).json({ error: 'TV Series ID is required' });
        }

        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
            }
        };

        const response = await axios.request(options);

        if (response.status !== 200) {
            console.error('Error fetching TV Series credits:', response.statusText);
            return res.status(response.status).json({ error: 'Failed to fetch TV Series credits' });
        }

        return res.json(response.data);

    }  catch(error) {
        console.error('Error fetching TV Series credits:', error.message);
        res.status(500).json({ error: 'Failed to fetch TV Series credits' });
    }
}

export const upcomingMovies = async (req, res) => {
    try {
        const page = req.query.page;
        
        if (!page || page <= 0) {
            return res.status(400).json({ error: 'Invalid page number or No Page Number given' });
        }

        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page || 1}`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
            }
        };

        const response = await axios.request(options);

        if (response.status !== 200) {
            console.error('Error fetching upcoming movies:', response.statusText);
            return res.status(response.status).json({ error: 'Failed to fetch upcoming movies' });
        }

        return res.json(response.data);

    } catch (error) {
        console.error('Error fetching upcoming movies:', error.message);
        res.status(500).json({ error: 'Failed to fetch upcoming movies' });
    }
}