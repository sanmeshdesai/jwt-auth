import mongoose from 'mongoose'
import env from './env.js'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(env.mongo_uri)
        console.log(conn.connection.host);
    } catch(error) {
        console.error(`MongoDB connection failed `, error.message);
        process.exit(1);
        
    }
    
} 


export default connectDB;