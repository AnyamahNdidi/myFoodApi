const express = require("express")
const mongoose = require("mongoose")
const port = process.env.PORT || 6000;
const cors = require("cors");

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).send("api is readyconsumtions")
})

app.listen(port, () => {
  console.log("this is the port im using")
})