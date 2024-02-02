import { Router } from "express";
import users from "../../db/queries/users";
import { compareHash } from "../../utls/passwords";
import * as jwt from 'jsonwebtoken';
import { UsersTable } from "../../db/models"; 

const router = Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const usersFound = await users.find('email', email) as UsersTable[];
        const user = usersFound[0];

        if (user && compareHash(password, user.password)) {
            const token = jwt.sign({ userid: user.id, email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'An error occurred during the login process.' });
    }
});

export default router;