const express = require("express");
const router = express.Router();

//import controller
const {
  getBelts,
  addBelt,
  updateBelt,
  deleteBelt,
} = require("../controllers/beltController");

router.get("/", getBelts);
router.post("/", addBelt);
router.patch("/", updateBelt);
router.delete("/", deleteBelt);

module.exports = router;
