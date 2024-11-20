import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("Deu certo!");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
