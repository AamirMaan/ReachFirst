//Load Input Validation
const validateBeltInput = require("../validation/beltValidator");
//DB connection
const conn = require("../config/mysql");
const tableName = "belts";

//Add Belt controller
exports.addBelt = (req, res) => {
  const { errors, isValid } = validateBeltInput(req.body);
  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const beltFields = {
    name: req.body.name,
    buckle_type: req.body.buckle_type,
    size: req.body.size,
    color: req.body.color,
    price: req.body.price,
    stock: req.body.stock,
  };
  conn.query(`INSERT INTO ${tableName} SET?`, [beltFields], (err, belt) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: "Error in saving belt to database, try again.",
      });
    }
    res.json({
      message: "Belt Added Successfully",
    });
  });
};
//get Belts controller
exports.getBelts = (req, res) => {
  conn.query(
    `SELECT * FROM ${tableName} ORDER BY created_at DESC`,
    (err, belts) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: "Something went wrong, try again!",
        });
      }
      if (belts.length < 1) {
        return res.status(404).json({
          error: "Belts not found!",
        });
      }

      res.json(belts);
    }
  );
};

//update belt controller

exports.updateBelt = (req, res) => {
  const { errors, isValid } = validateBeltInput(req.body);

  //Check Validation
  if (isValid.includes(false)) {
    return res.status(400).json(errors);
  }

  const beltFields = {
    name: req.body.name,
    buckle_type: req.body.buckle_type,
    size: req.body.size,
    color: req.body.color,
    price: req.body.price,
    stock: req.body.stock,
  };
  conn.query(
    `UPDATE ${tableName} set ? WHERE id = ?`,
    [beltFields, req.query.id],
    (err, section) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: "Something went wrong, try again!",
        });
      }
      if (section.affectedRows < 1) {
        return res.status(404).json({
          error: "Belt not found!",
        });
      }
      res.json({
        message: "Belt Info Updated Successfully",
      });
    }
  );
};
//Delete Belt Controller
exports.deleteBelt = (req, res) => {
  conn.query(
    `DELETE FROM ${tableName} WHERE id = ?`,
    req.query.id,
    (err, result) => {
      if (err) {
        return res.status(500).json({
          error: "Something went wrong, try again!",
        });
      }
      if (result.affectedRows < 1) {
        return res.status(404).json({
          error: "Belt not found!",
        });
      }
      res.json({
        message: "Belt deleted Successfully",
      });
    }
  );
};
