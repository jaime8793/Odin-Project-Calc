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

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const NickNameSchema = new Schema({
  author: ObjectId,
  nickName: String,
});

const NickName = mongoose.model("NickName", NickNameSchema);



app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.get("/nicknames", async (req, res) => {
  let allNickNames;
  try {
    const newNickName = new NickName({ nickName: "Ammo" });
    await newNickName.save()
    allNickNames = await NickName.find()
  } catch (error) {
    console.log(`Could not add new nickname ${error}}`)
  }
  res.send(allNickNames);
});

app.listen(port, () => {
  console.log(`Sever running on port ${port}`);
});
