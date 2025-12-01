import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

let isConnected = false;

async function dbConnect() {

  if(isConnected){
    console.log("Mongodb is already connected")
    return
  }

  try {
    const db = await mongoose.connect("mongodb://localhost:27017/contact-form-demo")
    isConnected = db.connections[0].readyState === 1
    console.log("Connected to mongodb" , db)

  } catch (error) {
    console.error("Failed to connect to mongodb:" , error)
    throw error
  }
}

export default dbConnect;