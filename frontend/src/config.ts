import dotenv from "dotenv";
dotenv.config();
export const VITE_API_URL = process.env.VITE_API_URL as string;
