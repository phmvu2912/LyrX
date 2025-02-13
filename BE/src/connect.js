import mongoose from 'mongoose'

const connectMongoDB = async (uri) => {
    try {
        
        await mongoose.connect(uri);

        console.log('Connected to MongoDB!')

    } catch (error) {
        console.log(error)

        console.log('Failed to connect to MongoDB!')
    }
}

export default connectMongoDB