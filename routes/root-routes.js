const express = require("express");
const router = express.Router();



const welcomeUrl = "https://eip-my-summary.herokuapp.com/";

router.get("/", (req, res, next) => {
  fetch(welcomeUrl)
    .then((response) => response.json())
    .then((datas) => {
      res.json(datas);
    });
});



module.exports = router;
