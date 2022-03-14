const express = require("express");
const axios = require("axios");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const redis = require("redis");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
let client = redis.createClient();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
client.on("error", (err) => {
  console.log("Error " + err);
});
const list = "list";
client.connect();
app.post("/books", function (req, res, next) {
  const data = req.body;
  res.status(200).json({ data, message: "success" });
  const newdata = {
    ...data,
    date: new Date(),
  };
  console.log(newdata);
  client.lPush(list, JSON.stringify(newdata));
});
app.get("/books", (req, res, next) => {
  (async function getBook() {
    const books = await client.lRange(list, 0, -1);
    res.status(200).json({ data: books, message: "success" });
  })();
});
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
