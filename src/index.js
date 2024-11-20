import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("Funcionou!");
});

app.listen(process.env.PROJECT_PORT);
