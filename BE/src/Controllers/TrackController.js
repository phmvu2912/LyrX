import Track from "../Models/Track.js"

// Get all tracks
export const getAllTracks = async (req, res) => {
    try {

        const tracks = await Track.find().populate('artists');

        // console.log(tracks)

        if (tracks.length === 0) {
            return res.status(404).json({
                message: "No data available!"
            });
        }

        return res.status(200).json({
            status: 200,
            message: "Success!",
            data: tracks
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            status: 500,
            error: error.message
        });
    }
}

// Get track by id
export const getTrackById = async (req, res) => {
    try {

        const { id } = req.params;

        const track = await Track.findById(id).populate('artists');

        //* Check if track exists
        if (!track) {
            return res.status(404).json({
                status: 404,
                message: "Track not found!"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "Success!",
            data: track
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            status: 500,
            message: "Internal server error!"
        })
    }
}

// Delete track by id
export const removeTrackById = async (req, res) => {
    try {

        const { id } = req.params;

        const track = await Track.findByIdAndDelete(id).populate('artists');

        //* Check if track exists
        if (!track) {
            return res.status(404).json({
                status: 404,
                message: "Track not found!"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "Removed track successfully!",
            data: track
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            status: 500,
            message: "Internal server error!"
        })
    }
}

// Create track
export const createTrack = async (req, res) => {
    try {

        // const {
        //     title,
        //     artists,
        //     thumbnail,
        //     audio,
        //     listens,
        //     duration,
        //     released_at,
        //     body_lyrics,
        //     is_explicit
        // } = req.body;

        const track = await Track.create(req.body);

        return res.status(201).json({
            status: 201,
            message: "Created track successfully!",
            data: track
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            status: 500,
            message: "Internal server error!"
        })
    }
}

// Update track by id
export const updateTrackById = async (req, res) => {
    try {

        const { id } = req.params;

        if(!req.body) return res.status(400).json({
            status: 400,
            message: "Data cannot be empty!"
        });

        const trackExists = await Track.findById(id);

        //* Check if track exists
        if (!trackExists) {
            return res.status(404).json({
                status: 404,
                message: "Track not found!"
            })
        }

        const track = await Track.findByIdAndUpdate(id, req.body, { new: true }).populate('artists');

        console.log(id, req.body)

        return res.status(200).json({
            status: 200,
            message: "Updated track successfully!",
            data: track
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            status: 500,
            message: "Internal server error!"
        })
    }
}
