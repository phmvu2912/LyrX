import Track from "../Models/Track.js"

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
        console.error("Error in getAllTracks:", error);
        return res.status(500).json({ error: error.message });
    }
}