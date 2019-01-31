const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const fs = require('fs');

// @route   GET api/movies
// desc     Get Populor Movies
// @acces   Public
router.get("/", (req, res) => {
  fs.readFile('../../movies/file.txt','utf8', (err, data) => {
    console.log(data);
  });
  res.json({ msg: "Users works" })
});

module.exports = router;
