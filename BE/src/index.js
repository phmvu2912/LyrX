import express from 'express';
import dotenv from 'dotenv';
import connectMongoDB from './connect.js';
import routes from './Routes/index.js';

const app = express();

//* MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* CONFIG DOTENV
dotenv.config();

//* PORT
const PORT = process.env.PORT || 3000;

//* URI
const uri = process.env.MONGODB_URI || null;

//* CONNECT TO MONGODB
connectMongoDB(uri);

//* ROUTES
routes(app);

//* LISTEN PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})