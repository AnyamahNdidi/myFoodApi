const express = require("express")
const mongoose = require("mongoose")

const cors = require("cors");
const { imageUpload } = require("./Controller/controller")
const myrouter = require("./router/router")
const port = process.env.PORT || 6000;
const app = express()

const DB_ONLINE =
  "mongodb+srv://foodauth:ilovemusic1234@cluster0.n9rqw.mongodb.net/foodDatabase?retryWrites=true&w=majority";

mongoose.connect(DB_ONLINE, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection
  .once("open", () => {
    console.log("connected successfully....");
  })
  .on("error", () => {
    console.log("there is a big fatal error here");
  });

app.use(express.json())
app.use(cors())

app.use("/api/food", imageUpload)
app.use("/api", myrouter)

app.get("/", (req, res) => {
  res.status(200).send("api is readyconsumtions")
})

app.listen(port, () => {
  console.log("this is the port im using")
})