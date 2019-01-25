const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.language = !isEmpty(data.language) ? data.language : "";

  if (Validator.isLength(data.handle,  { min: 2, max: 40 })) {
    errors.email = "Handle needs to be between 2 and 40 charectors";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle field is required";
  }

  if (Validator.isEmpty(data.language)) {
    errors.password = "Language field is required";
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid Url';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid Url';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
