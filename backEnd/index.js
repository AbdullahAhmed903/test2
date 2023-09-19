import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectionDB } from "./DB/connection.js";
import cors from "cors";
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "./config/.env") });
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const baseurl = process.env.BASE_URL;
connectionDB();

import fetch from "node-fetch";
import hodliModel from "./DB/models/hodlinfo.js";

app.post("/add", async (req, res, next) => {
  const response = await fetch("https://api.wazirx.com/api/v2/tickers");
  const data = await response.json();
  const re = Object.values(data);
  for (let i = 0; i <= 30; i++) {
    const post = await hodliModel.create({
      name: re[i].name,
      base_unit: re[i].base_unit,
      quote_unit: re[i].quote_unit,
      last: re[i].last,
      buy: re[i].buy,
      sell: re[i].sell,
      volume: re[i].volume,
    });
  }
  res.json({ message: "done" });
});

app.get("/data", async (req, res, next) => {
  const posts = await hodliModel.find({}, { __v: false });
  res.status(200).json({ message: "done", posts });
});

app.use("*", (req, res) =>
  res.send("In-valid Routing Plz check url  or  method")
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
