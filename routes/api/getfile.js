const express = require("express");
const router = express.Router();
const download = require('../../src/download');
const torrentParser = require('../../src/torrent-parser');

// @route   GET api/movies
// desc     Get Populor Movies
// @acces   Public
router.get("/", (req, res) => {
  res.json({ msg: "Users works" });
});

module.exports = router;