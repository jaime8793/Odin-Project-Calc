import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.get("/nicknames", (req, res) => {
  res.send(["Ammo", "Dibo", "Fujo"]);
});

app.listen(process.env.port, () => {
  console.log(`Sever running on port ${process.env.port}`);
});
