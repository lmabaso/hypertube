const express = require('express');
const mongoos = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require("./routes/api/profile");
const movies = require("./routes/api/movies");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;


// Connect to MongoDB
mongoos
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use("/api/movies", movies);
// app.use("/api/download", download);

const port = process.env.PORT || 5000;

app.listen(port, () =>console.log(`Server running on port ${port}`));

// torrent stuff

const torrentStream = require('torrent-stream');
const fs = require("fs");
const bencode = require("bencode");

const torrent = bencode.decode(fs.readFileSync("torrents/Beyond.torrent"));

var engine = torrentStream("magnet:?xt=urn:btih:84DC54D20406D0ED8E9339B9FD615D819D7039C0");

engine.on('download', function() {
  engine.files.forEach(function(file) {
    console.log("filename:", file.name);
    var stream = file.createReadStream({ start: 10, end: 100 });

    // stream is readable stream to containing the file content
  });
});
