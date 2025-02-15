import routeAlbum from "./album.js"
import routeArtist from "./artist.js"
import routeTrack from "./track.js"

const routes = (app) => {
    app.use('/api/v1/tracks', routeTrack) // For Endpoint Tracks
    app.use('/api/v1/albums', routeAlbum) // For Endpoint Albums
    app.use('/api/v1/artists', routeArtist) // For Endpoint Artists
}

export default routes