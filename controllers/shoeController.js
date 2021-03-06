//Load Input Validation
const validateShoeInput = require("../validation/shoeValidator");
//DB connection
const conn = require("../config/mysql");

const tableName = "shoes";

//Add shoe controller
exports.addShoe = (req, res) => {
  const { errors, isValid } = validateShoeInput(req.body);
  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const shoeFields = {
    name: req.body.name,
    shoe_type: req.body.shoe_type,
    size: req.body.size,
    color: req.body.color,
    price: req.body.price,
    stock: req.body.stock,
  };
  conn.query(`INSERT INTO ${tableName} SET?`, [shoeFields], (err, shoe) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: "Error in saving shoe to database, try again.",
      });
    }
    res.json({
      message: "Shoe Added Successfully",
    });
  });
};
//get shoes controller
exports.getShoes = (req, res) => {
  conn.query(
    `SELECT * FROM ${tableName} ORDER BY created_at DESC`,
    (err, shoes) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: "Something went wrong, try again!",
        });
      }
      if (shoes.length < 1) {
        return res.status(404).json({
          error: "Shoes not found!",
        });
      }

      return res.json(shoes);
    }
  );
};
//update shoes controller

exports.updateShoe = (req, res) => {
  const { errors, isValid } = validateShoeInput(req.body);

  //Check Validation
  if (isValid.includes(false)) {
    return res.status(400).json(errors);
  }

  const shoeFields = {
    name: req.body.name,
    shoe_type: req.body.shoe_type,
    size: req.body.size,
    color: req.body.color,
    price: req.body.price,
    stock: req.body.stock,
  };
  conn.query(
    `UPDATE ${tableName} set ? WHERE id = ?`,
    [shoeFields, req.query.id],
    (err, section) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: "Something went wrong, try again!",
        });
      }
      if (section.affectedRows < 1) {
        return res.status(404).json({
          error: "Shoe not found!",
        });
      }
      res.json({
        message: "Shoe Info Updated Successfully",
      });
    }
  );
};
//Delete Shoe Controller
exports.deleteShoe = (req, res) => {
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
          error: "Shoe not found!",
        });
      }
      res.json({
        message: "Shoe deleted Successfully",
      });
    }
  );
};
