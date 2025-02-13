import mongoose, { Schema } from "mongoose";

const Album = new Schema({
    title: {
        type: String,
        required: true
    },
    tracks: [{
        type: Schema.Types.ObjectId,
        ref: 'Track'
    }],
    artist: [{
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    }],
    thumbnail: {
        type: String,
        required: true
    },
    released_at: {
        type: Date,
        required: true
    },
    listens: {
        type: Number,
        default: 0
    },
    duration: {
        type: Number,
        required: true
    },
    is_explicit: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('Album', Album);
