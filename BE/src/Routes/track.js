import express from 'express';
import { getAllTracks } from '../Controllers/TrackController.js';

const routeTrack = express.Router();

routeTrack.get('/', getAllTracks); //* Get all tracks

export default routeTrack

