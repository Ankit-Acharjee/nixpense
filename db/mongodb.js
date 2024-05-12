import mongoose from "mongoose";

const connectMongoDB = async () => {
    const connectionState = mongoose.connection.readyState;

    switch(connectionState){
        case 0:
            console.log('MongoDB is disconnected')
            break;
        case 1:
            console.log('MongoDB is connected')
            break;
        case 2: 
            console.log('MongoDB is connecting')
            break;
        default:
            console.log('MongoDB is disconnecting')
            break;
    }
}


try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB connected')
} catch (error) {
    console.error(error.message)
    throw new Error('MongoDB connection failed')
}

export default connectMongoDB;