import Album from "../Models/Album.js";

// Get all albums
export const getAllAlbums = async (req, res) => {
    try {

        const albums = await Album.find()
            .populate('artists')
            .populate('tracks');

        // console.log(tracks)

        if (albums.length === 0) {
            return res.status(404).json({
                message: "Data not found!"
            });
        }

        return res.status(200).json({
            status: 200,
            message: "Success!",
            data: albums
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
export const getAlbumById = async (req, res) => {
    try {

        const { id } = req.params;

        if (!id) return res.status(400).json({
            status: 400,
            message: "Id cannot be empty!"
        });

        const album = await Album.findById(id)
            .populate('artists')
            .populate('tracks');

        //* Check if track exists
        if (!album) {
            return res.status(404).json({
                status: 404,
                message: "Track not found!"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "Success!",
            data: album
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
export const removeAlbumById = async (req, res) => {
    try {

        const { id } = req.params;

        if (!id) return res.status(400).json({
            status: 400,
            message: "Id cannot be empty!"
        });

        const album = await Album.findByIdAndDelete(id);

        //* Check if track exists
        if (!album) {
            return res.status(404).json({
                status: 404,
                message: "Track not found!"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "Removed track successfully!",
            data: album
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            status: 500,
            message: "Internal server error!"
        })
    }
}

// Create album
export const createAlbum = async (req, res) => {
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

        const album = await Album.create(req.body);

        return res.status(201).json({
            status: 201,
            message: "Created track successfully!",
            data: album
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            status: 500,
            message: "Internal server error!"
        })
    }
}

// Update album by id
export const updateAlbumById = async (req, res) => {
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

        const albumExists = await Album.findById(id);

        //* Check if track exists
        if (!albumExists) {
            return res.status(404).json({
                status: 404,
                message: "Track not found!"
            })
        }

        const album = await Album.findByIdAndUpdate(id, req.body, { new: true })
            .populate('artists')
            .populate('tracks');

        // console.log(id, req.body)

        return res.status(200).json({
            status: 200,
            message: "Updated track successfully!",
            data: album
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            status: 500,
            message: "Internal server error!"
        })
    }
}
