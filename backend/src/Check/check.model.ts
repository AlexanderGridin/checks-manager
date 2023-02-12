import mongoose from "mongoose";
import { checkShema } from "./check.schema";

export const Check = mongoose.model("Check", checkShema);
