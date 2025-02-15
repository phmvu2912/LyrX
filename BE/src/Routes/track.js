import express from 'express';
import { createTrack, getAllTracks, getTrackById, removeTrackById, updateTrackById } from '../Controllers/TrackController.js';

const routeTrack = express.Router();

routeTrack.get('/', getAllTracks); //* Get all tracks
routeTrack.get('/:id', getTrackById); //* Get track by id
routeTrack.delete('/:id', removeTrackById); //* Delete track by id
routeTrack.post('/', createTrack); //* Create track
routeTrack.put('/:id', updateTrackById); //* Update track by id

export default routeTrack

