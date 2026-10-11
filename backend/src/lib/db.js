import mongoose from "mongoose";

async function connectDB(params) {
  try {
    const mongoUri = process.env.MONGO_URI
    
    if(!mongoUri){
      throw new Error("MONGO_URI is required")
    }
    const conn = await mongoose.connect(mongoUri)
    console.log('DB connected', conn.connection.host)
  } catch (error) {
    console.error('DB connection error', error.message);
    process.exit(1)
  }
}

export default connectDB;