const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateSignupInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.buckle_type = !isEmpty(data.buckle_type) ? data.buckle_type : "";
  data.color = !isEmpty(data.color) ? data.color : "";
  data.size = !isEmpty(data.size) ? data.size : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.stock = !isEmpty(data.stock) ? data.stock : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (Validator.isEmpty(data.buckle_type)) {
    errors.buckle_type = "Buckle Type is Required";
  }
  if (Validator.isEmpty(data.color)) {
    errors.color = "Color field is required";
  }
  if (Validator.isEmpty(data.size)) {
    errors.size = "Size field is required";
  }
  if (Validator.isEmpty(data.price)) {
    errors.price = "Price field is required";
  }
  if (Validator.isEmpty(data.stock)) {
    errors.stock = "Stock field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
