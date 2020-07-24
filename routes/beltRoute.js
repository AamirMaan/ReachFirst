const express = require("express");
const router = express.Router();

//import controller
const {
  getBelts,
  addBelt,
  updateBelt,
} = require("../controllers/beltController");

router.get("/", getBelts);
router.post("/", addBelt);
router.patch("/", updateBelt);

module.exports = router;
