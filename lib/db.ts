import mongoose from "mongoose";

const { MONGO_URI } = process.env;

export default async function connect() {
  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not configured");
  }

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log("Mongoose Connection Established");
  } else {
    console.log("already connected");
  }
}
