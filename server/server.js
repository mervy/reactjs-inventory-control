import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnect } from './config/dbConnect.js';
import Categories from './models/Categories.js';
import Products from './models/Products.js';
import Users from './models/Users.js';

dotenv.config();
dbConnect();

const app = new express();
const port = process.env.PORT || 5000;

app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on port:  ${port}`);
});
