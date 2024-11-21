import { Router } from "express";

const userRoute = Router();

userRoute.get("/login", (req, res) => {
  res.send("Login");
});

userRoute.post("/create", (req, res) => {
  res.send("Create Account");
});

export default userRoute;
