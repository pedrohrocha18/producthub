import { Router } from "express";
import userRoute from "./userRoute.js";
import productRoute from "./productRoute.js";

const route = Router();

route.get("/", (req, res) => {
  res.send("Seja bem-vindo!");
});

route.use("/user", userRoute);
route.use("/product", productRoute);

export default route;
