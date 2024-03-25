import express from 'express';
import AuthService from '../services/AuthService.js';
import UserService from '../services/UserService.js'
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const user = await UserService.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
});

export default router;
