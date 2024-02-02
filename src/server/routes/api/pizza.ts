import { Router } from "express";
import { authenticateToken } from "../../utls/authenticateToken"; 

const router = Router();

router.get('/', authenticateToken, (req, res) => { 
    res.json({ message: 'Pizza Time!' });
});

export default router;
