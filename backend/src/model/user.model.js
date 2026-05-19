import pool from '../config/database.js';

export const createUser = async (username, email, password) => {
    try {
        const result = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
            [username, email, password]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const getCars = async () => {
    try {
        const result = await pool.query('SELECT * FROM cars');
        return result.rows;
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
    }
};

