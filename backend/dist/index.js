import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import { DB_URL } from "./config.js";
const app = express();
async function startThedatabaseIfOnlyWhenItComes() {
    await mongoose.connect(DB_URL);
    console.log("Database is started");
    app.listen(3000);
}
startThedatabaseIfOnlyWhenItComes();
//# sourceMappingURL=index.js.map