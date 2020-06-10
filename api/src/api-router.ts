import express from "express";

export const router = express.Router();

router.get("/hi", (req, res) => {
  res.send("hi");
});
