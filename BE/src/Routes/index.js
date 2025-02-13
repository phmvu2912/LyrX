import routeTrack from "./track.js"

const routes = (app) => {
    app.use('/api/v1/tracks', routeTrack) // For Endpoint Tracks
}

export default routes