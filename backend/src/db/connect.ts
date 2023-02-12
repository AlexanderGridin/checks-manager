import mongoose from "mongoose";

const DB_URL = "mongodb://localhost/ChecksDB";

export const connect = async () => {
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(DB_URL);
    console.log("Successfuly connected to db!");
  } catch (e) {
    console.log(`Connection to db failed. Error: ${e}`);
    process.exit(1);
  }
};
