const mongoose = require("mongoose")

const foodSchema = mongoose.Schema({
  foodtitle: {
    type: String
  },
  decs: {
    type: String
  },
  price: {
    type: Number
  },
  img: {
    type: String
  }
})

const foodModel = mongoose.model("food", foodSchema)

module.exports = foodModel