// Importing required modules
require("dotenv").config();

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

// parse env variables

// Configuring port
const port = process.env.PORT || 9000;

const app = express();

// Configure middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.set("view engine", "html");

// Static folder
app.use(express.static(__dirname + "/views/"));

// Defining route middleware
require("./routes/project")(app);
require("./routes/user")(app);
require("./routes/todo")(app);

// Listening to port
app.listen(port, async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database!");
    console.log(`Listening On http://localhost:${port}/`);
  } catch (err) {
    console.log("Cannot connect to the database!", err);
    process.exit();
  }
});

module.exports = app;
