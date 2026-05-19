import { createUser, getCars } from '../model/user.model.js';

export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newUser = await createUser(username, email, password);
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getCarsTest = async (req, res) => {
    try {
        const cars = await getCars();
        res.status(200).json(cars);
    } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
