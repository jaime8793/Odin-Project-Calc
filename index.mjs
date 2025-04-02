import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";



const app = express();
const port = process.env.port;
const mongoDBURI = process.env.mongoDBURI;

// middleware
app.use(cors());
app.use(bodyParser.json());
// connect to mongo db
try {
  await mongoose.connect(mongoDBURI);
  console.log(`connected to the DB`);
} catch (error) {
  console.log(`MongoDB refused to connect ${error}`);
}

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
// create schema
const NickNameSchema = new Schema({
  author: ObjectId,
  nickName: String,
});
// create model
const NickName = mongoose.model("NickName", NickNameSchema);


//test endpoint
app.get("/", (req, res) => {
  res.sendStatus(200);
});

//end point nicknames
app.get("/nicknames", async (req, res) => {
  let allNickNames;
  try {
    const newNickName = new NickName({ nickName: "Ammo" });
    allNickNames = await NickName.find()
  } catch (error) {
    console.log(`Could get nickname ${error}}`)
  }
  res.send(allNickNames);
});
// added new route
app.post("/nicknames", async (req, res) => {
  let allNickNames;
  try {
    console.log(req.body)
    const newNickName = new NickName({ nickName: req.body.NickName });
    await newNickName.save()
    
  } catch (error) {
    console.log(`Could not add new nickname ${error}}`)
    
  }
  res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`Sever running on port ${port}`);
});
