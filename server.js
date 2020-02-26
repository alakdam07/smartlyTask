const express = require("express");
const app = express();
const axios = require("axios");
const morgan = require("morgan");
const cors = require("cors");

app.use(morgan("common"));
app.use(cors());
app.get("/cat", async (req, res, next) => {
  axios
    .get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5")
    .then(response => res.send(response.data))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", index.html));
});
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
