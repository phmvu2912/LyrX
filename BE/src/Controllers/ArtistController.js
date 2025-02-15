import Artist from "../Models/Artist.js";


// Get all artist
export const getAllArtist = async (req, res) => {
    try {

        const artists = await Artist.find()
            .populate('tracks')
            .populate('albums');

        // console.log(tracks)

        if (artists.length === 0) {
            return res.status(404).json({
                message: "Data not found!"
            });
        }

        return res.status(200).json({
            status: 200,
            message: "Success!",
            data: artists
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            status: 500,
            error: error.message
        });
    }
}

// Get album by id
export const getArtistById = async (req, res) => {
    try {

        const { id } = req.params;

        if (!id) return res.status(400).json({
            status: 400,
            message: "Id cannot be empty!"
        });

        const artist = await Artist.findById(id)
            .populate('tracks')
            .populate('albums');

        //* Check if track exists
        if (!artist) {
            return res.status(404).json({
                status: 404,
                message: "Track not found!"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "Success!",
            data: artist
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            status: 500,
            message: "Internal server error!"
        })
    }
}

// Delete album by id
export const removeArtistById = async (req, res) => {
    try {

        const { id } = req.params;

        if (!id) return res.status(400).json({
            status: 400,
            message: "Id cannot be empty!"
        });

        const artist = await Artist.findByIdAndDelete(id);

        //* Check if track exists
        if (!artist) {
            return res.status(404).json({
                status: 404,
                message: "Track not found!"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "Removed track successfully!",
            data: artist
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            status: 500,
            message: "Internal server error!"
        })
    }
}

// Create artist
export const createArtist = async (req, res) => {
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

        const artist = await Artist.create(req.body);

        return res.status(201).json({
            status: 201,
            message: "Created artist successfully!",
            data: artist
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            status: 500,
            message: "Internal server error!"
        })
    }
}

// Update artist by id
export const updateArtistById = async (req, res) => {
    try {

        const { id } = req.params;

        if (!id) return res.status(400).json({
            status: 400,
            message: "Id cannot be empty!"
        });

        if (!req.body) return res.status(400).json({
            status: 400,
            message: "Data cannot be empty!"
        });

        const artistExists = await Artist.findById(id);

        //* Check if track exists
        if (!artistExists) {
            return res.status(404).json({
                status: 404,
                message: "Track not found!"
            })
        }

        const artist = await Artist.findByIdAndUpdate(id, req.body, { new: true })
            .populate('tracks')
            .populate('albums');

        // console.log(id, req.body)

        return res.status(200).json({
            status: 200,
            message: "Updated track successfully!",
            data: artist
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            status: 500,
            message: "Internal server error!"
        })
    }
}
