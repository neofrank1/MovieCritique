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
        return res.json(response.data);

    } catch (error) {
        console.error('Error fetching popular movies:', error.message);
        res.status(500).json({ error: 'Failed to fetch popular movies' });
    }
}
