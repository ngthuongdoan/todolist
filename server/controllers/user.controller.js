const { user } = require("../models");
const db = require("../models");
const User = db.user;

// Create and Save a new user
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a user
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    name: req.body.name,
    password: req.body.password,
  });
  console.log(user);
  // Save user in the database
  user
    .save(user)
    .then((data) => {
      res.status(200).send({ message: "Success" });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};

// Find a single user with an id
exports.findOne = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  user
    .find({ username, password })
    .then((data) => {
      if (!data | (data.length === 0)) {
        res.status(404).send({ message: "Not found user with id" });
      } else {
        res.status(200).send(data[0]);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Error retrieving user" });
    });
};

// Update a user by the id in the request
exports.update = (req, res) => {};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  user
    .findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete user with id=${id}. Maybe user was not found!`,
        });
      } else {
        res.send({
          message: "user was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete user with id=" + id,
      });
    });
};

// Delete all users from the database.
exports.deleteAll = (req, res) => {};

// Find all published users
exports.findAllPublished = (req, res) => {};
