import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "../config/.env") });
export const connectionDB = async () => {
  return await mongoose
    .connect(process.env.DBURI)
    .then((result) => {
      console.log("successful to connection to DB");
    })
    .catch((error) => {
      console.log("fail to connection to DB");
    });
};
