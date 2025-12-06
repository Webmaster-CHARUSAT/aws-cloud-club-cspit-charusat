import mongoose from "mongoose";

const { MONGO_URI } = process.env;

export default async function connect() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose
        .connect(MONGO_URI as string)
        .catch((err) => console.log(err));
      console.log("Mongoose Connection Established");
    } else {
      console.log("already connected");
    }
  } catch (err) {
    console.log(err);
  }
}
