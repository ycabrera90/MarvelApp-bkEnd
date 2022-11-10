const express = require("express");
const bodyParser = require("body-parser");

const rootPath = require("./routes/root-routes");
const seriesRoutes = require("./routes/series-routes");



const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/", rootPath);

app.use("/series", seriesRoutes);



app.listen(process.env.PORT || 5000);
