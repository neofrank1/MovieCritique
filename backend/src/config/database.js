import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
});

const { Pool } = pg;

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

pool.connect()
    .then(client => {
        console.log('Connected to PostgreSQL database');

        return client
            .query('SELECT NOW()')
            .then(res => {
                console.log('Database connection verified:', res.rows[0]);
                client.release();
            });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

export default pool;