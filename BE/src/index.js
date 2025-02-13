import express from 'express';
import dotenv from 'dotenv';
import connectMongoDB from './connect.js';

const app = express();

//* CONFIG DOTENV
dotenv.config();

//* PORT
const PORT = process.env.PORT || 3000;

//* URI
const uri = process.env.MONGODB_URI || null;

//* CONNECT TO MONGODB
connectMongoDB(uri);

//* TEST REQUEST
app.get('/', (req, res) => {
    res.send('Hello World');
})

//* LISTEN PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})