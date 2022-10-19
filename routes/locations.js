import express from "express";
import fetch from "node-fetch";
import * as dotenv from "dotenv";
import md5 from "md5";

// ----------------------------------------------------------------
dotenv.config();
const app = express();

const API_URL = "http://gateway.marvel.com/v1/public/";
const SERIES_ENDPOINT = "series";
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// root api path
app.get("/", (req, res, next) => {
  res.json({ message: "welcome to my server" });
});

app.get("/series", (req, res, next) => {
  const timeStamp = new Date().getTime();
  const md5Hash = md5(timeStamp + PRIVATE_KEY + PUBLIC_KEY);

  fetch(
    `${API_URL}${SERIES_ENDPOINT}?apikey=${PUBLIC_KEY}&ts=${timeStamp}&hash=${md5Hash}`
  )
    .then((response) => response.json())
    .then((datas) => {
      res.json(datas);
    });
});

export default app;
