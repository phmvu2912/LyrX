import express from 'express';
import { createAlbum, getAlbumById, getAllAlbums, removeAlbumById, updateAlbumById } from '../Controllers/AlbumController.js';

const routeAlbum = express.Router();

routeAlbum.get('/', getAllAlbums); //* Get all albums
routeAlbum.get('/:id', getAlbumById); //* Get album by id
routeAlbum.delete('/:id', removeAlbumById); //* Delete album by id
routeAlbum.post('/', createAlbum); //* Create album
routeAlbum.put('/:id', updateAlbumById); //* Update album by id

export default routeAlbum;