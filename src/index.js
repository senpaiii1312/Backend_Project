import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

console.log("Database Name:", DB_NAME);
import connectDB from "./db/index.js";
import "./db/index.js";

dotenv.config({ path: "./.env" });

connectDB();