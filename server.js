const express = require("express");
const talentRoutes = require("./src/talents/routes");
const cors = require("cors");

require("dotenv").config();


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/talents", talentRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
