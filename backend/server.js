require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("node:path");
const adatok_brit = require("./public/js/adatok_brit");

const app = express();
const PORT = process.env.PORT || 3700;

app.use(cors());
app.use(express.static(path.resolve(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.get("/dogs/csivavas", (req, res) => {
  console.log(adatok_brit);
  try {
    res.statusCode = 200;
    return res.json({ msg: "Kutyák/csivavas" });
  } catch (error) {
    res.statusCode = 500;
    return res.json({ msg: "Valami hiba történt!" });
  }
});
