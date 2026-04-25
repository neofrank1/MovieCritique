import connectDB from "./config/database.js";
import app from "./app.js";
import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
        app.on("error", (error) => {
            console.error('Server error:', error.message);
            throw error;
        });

        app.listen(process.env.PORT || process.env.ALT_PORT_NUMBER, () => {
            console.log(`Server is running on port ${process.env.PORT_NUMBER || process.env.ALT_PORT_NUMBER}`);
        });
        await connectDB();
    } catch (error) {
        console.error('Error starting the server:', error.message);
        console.error('Error connecting to DB:', error.message);
        process.exit(1);
    }
}

startServer();