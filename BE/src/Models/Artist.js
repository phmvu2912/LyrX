import mongoose, { Schema } from "mongoose";

const Artist = new Schema({
    fullname: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    },
    bio: {
        type: String,
    },
    listens_per_month: {
        type: Number,
        default: 0
    },
    is_verified: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('Artist', Artist);