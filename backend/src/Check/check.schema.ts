import mongoose from "mongoose";
import { productSchema } from "../Product/product.schema";

export const checkShema = new mongoose.Schema({
  checkDate: {
    type: String,
    required: "Check date is required",
  },
  store: {
    type: String,
    required: "Store is required",
  },
  products: {
    type: [productSchema],
    defaultValue: [],
  },
});
