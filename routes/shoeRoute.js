const express = require("express");
const router = express.Router();

//import controller
const {
  getShoes,
  addShoe,
  updateShoe,
} = require("../controllers/shoeController");

router.get("/", getShoes);
router.post("/", addShoe);
router.patch("/", updateShoe);

module.exports = router;
