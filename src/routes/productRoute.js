import { Router } from "express";

const productRoute = Router();

productRoute.delete("/:id", (req, res) => {
  res.send("Delete product");
});

productRoute.put("/:id", (req, res) => {
  res.send("Update Product");
});

productRoute.post("/create", (req, res) => {
  res.send("Create Product");
});

productRoute.get("/:id", (req, res) => {
  const id = req.params.id;

  res.send(`Mostrando o produto ${id}`);
});

productRoute.get("/", (req, res) => {
  res.send("Show all products");
});

export default productRoute;
