require("dotenv").config();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.CONNECTION_STRING;
db.user = require("./user.model.js")(mongoose);
db.todo = require("./todo.model.js")(mongoose);
db.project = require("./project.model.js")(mongoose);

module.exports = db;
