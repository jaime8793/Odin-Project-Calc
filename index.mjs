import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
const port = process.env.port;
const mongoDBURI = process.env.mongoDBURI;

try {
  await mongoose.connect(mongoDBURI);
  console.log(`connected to the DB`);
} catch (error) {
  console.log(`MongoDB refused to connect ${error}`);
}




app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.get("/nicknames", (req, res) => {
  res.send(["Ammo", "Dibo", "Fujo"]);
});

app.listen(port, () => {
  console.log(`Sever running on port ${port}`);
});
