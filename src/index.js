import express, { urlencoded } from "express";
import dotenv from "dotenv";
import route from "./routes/index.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 9001;

app.use(express.json());

app.use(
  urlencoded({
    extended: true,
  })
);

app.use(route);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
