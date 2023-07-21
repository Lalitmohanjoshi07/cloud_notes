const connectToDb = require("./db");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello Dosto");
});

app.listen(port, () => {
  console.log(`CLOUDnotes backend listening on port ${port}`);
});
connectToDb();
