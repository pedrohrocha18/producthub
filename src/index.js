import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/index.js";

const app = express();

dotenv.config();

app.use(cors({ origin: `http://localhost:${PORT}` }));

const PORT = process.env.PORT || 9001;

app.use(express.json());

app.use(
  urlencoded({
    extended: true,
  })
);

app.use(route);

app.listen(PORT);
