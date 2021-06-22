const express = require("express")

const { postFood, getAllFood, getFoodbyId, deleteFoodId } = require("../Controller/controller")

const router = express.Router()

router.post("/foodpost", postFood)
router.get("/all", getAllFood)
router.get("/myfood/:id", getFoodbyId)
router.delete("/mydel/:id", deleteFoodId)

module.exports = router

