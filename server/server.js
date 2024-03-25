import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/dbConnect.js';
import Users from './models/Users.js';
import UserController from './routes/routes.js';

dotenv.config();
dbConnect();

const app = new express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', UserController);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
