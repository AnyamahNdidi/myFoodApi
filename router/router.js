const express = require("express")

const { postFood, getAllFood, getFoodbyId } = require("../Controller/controller")

const router = express.Router()

router.post("/foodpost", postFood)
router.get("/all", getAllFood)
router.get("/myfood/:id", getFoodbyId)

module.exports = router

