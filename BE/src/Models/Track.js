import mongoose, { Schema } from "mongoose";

const Track = new Schema({
    title: {
        type: String,
        required: true
    },
    artists: [{
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    }],
    thumbnail: {
        type: String,
        required: true
    },
    audio: {
        type: String,
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
    released_at: {
        type: Date,
        required: true
    },
    body_lyrics: {
        type: String,    
    },
    is_explicit: {
        type: Boolean,
        default: false
    }
});


export default mongoose.model('Track', Track);