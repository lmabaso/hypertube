const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.surname = !isEmpty(data.surname) ? data.surname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = "Username must be between 2 and 30 charecters";
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 charecters";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if (!Validator.isLength(data.surname, { min: 2, max: 30 })) {
    errors.surname = "Surname must be between 2 and 30 charecters";
  }
  if (Validator.isEmpty(data.surname)) {
    errors.surname = "Surname is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid " + data.email;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required" + data.password;
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 charecters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Passwords must match";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password = "Passwords do not match";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};