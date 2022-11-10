const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const md5 = require("md5");



const app = express();

const API_URL = "http://gateway.marvel.com/v1/public/";
const SERIES_ENDPOINT = "series";
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

router.get("/", (req, res, next) => {
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



module.exports = router;