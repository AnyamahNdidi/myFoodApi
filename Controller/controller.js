const mongoose = require("mongoose")
const multer = require("multer")
const food = require("../Model/model")


const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./uploads");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const imageUpload = multer({ storage: storage }).single("image");


const postFood = async (req, res) => {
  try {
    const apifood = await food.create({
      foodtitle: req.body.foodtitle,
      decs: req.body.decs,
      price: req.body.price,
      img: req.body.img,
    });
    res.json({ apifood });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

}

const getAllFood = async (req, res, next) => {

  try {
    const foodaData = await food.find()
    res.status(200).json({ foodaData })
    next()


  } catch (err) {
    res.status(400).json({ message: err.message });
  }

}


const getFoodbyId = async (req, res) => {

  const getFoodId = await food.findById(req.params.id)
  res.json({ getFoodId })

}

const deleteFoodId = async (req, res) => {

  const foodDeleteId = await food.findByIdAndDelete(req.body.id)
  res.json({ foodDeleteId })

}


const getallFood = (req, res) => {

}

module.exports = {
  postFood,
  imageUpload,
  getAllFood,
  getFoodbyId,
  deleteFoodId
}

