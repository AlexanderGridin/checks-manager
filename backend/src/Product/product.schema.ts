import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Product name is required",
  },
  price: {
    type: Number,
    required: "Product price is required",
  },
});
