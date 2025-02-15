import express from 'express';
import { createArtist, getAllArtist, getArtistById, removeArtistById, updateArtistById } from '../Controllers/ArtistController.js';

const routeArtist = express.Router();

routeArtist.get('/', getAllArtist); //* Get all artists
routeArtist.get('/:id', getArtistById); //* Get artist by id
routeArtist.delete('/:id', removeArtistById); //* Delete track by id
routeArtist.post('/', createArtist); //* Create track
routeArtist.put('/:id', updateArtistById); //* Update track by id

export default routeArtist;