const express = require("express");
const router = express.Router();

//import controller
const {
  getShoes,
  addShoe,
  updateShoe,
  deleteShoe,
} = require("../controllers/shoeController");

router.get("/", getShoes);
router.post("/", addShoe);
router.patch("/", updateShoe);
router.delete("/", deleteShoe);

module.exports = router;
