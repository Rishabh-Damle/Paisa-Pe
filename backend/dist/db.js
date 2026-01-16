import dotenv from "dotenv";
dotenv.config();
import mongoose, { Types } from "mongoose";
import { DB_URL } from "./config.js";
console.log(DB_URL);
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
import { model, Schema } from "mongoose";
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    },
});
export const UserModel = model("User", userSchema);
const AccountsSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    balance: Number,
});
export const AccountsModel = model("Account", AccountsSchema);
//# sourceMappingURL=db.js.map