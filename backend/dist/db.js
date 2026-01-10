import dotenv from "dotenv";
dotenv.config();
import mongoose, { Types } from "mongoose";
import { DB_URL } from "./config.js";
if (DB_URL) {
    mongoose
        .connect(DB_URL)
        .then(() => {
        console.log("DB is connected succsessfuly");
    })
        .catch((err) => {
        console.log("Mongo connection error ", err);
    });
}
else {
    console.error("DB_URL is not set; skipping Mongo connection");
}
//# sourceMappingURL=db.js.map