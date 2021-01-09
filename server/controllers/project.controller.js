const db = require("../models");
const Project = db.project;
const Todo = db.todo;

// Create and Save a new Project
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.name) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }

  // Create a Project
  const project = new Project({
    name: req.body.name,
    color: req.body.color,
    uid: req.body.uid,
  });

  // Save project in the database
  project
    .save(project)
    .then((data) => {
      res.status(200).send({ message: "Success" });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Project.",
      });
    });
};

// Retrieve all Projects from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Project.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Projects.",
      });
    });
};

// Find a single Project with an id
exports.findOneWithUid = (req, res) => {
  const uid = req.params.uid;

  Project.find({ uid })
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Project with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Project with id=" + id });
    });
};

// Update a Project by the id in the request
exports.update = (req, res) => {};

// Delete a Project with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Project.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send();
      } else {
        Todo.deleteMany({ project: id }).then((data) => {
          if (!data) {
            res.status(404).send();
          } else {
            res.status(200).send();
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
};

// Delete all Projects from the database.
exports.deleteAll = (req, res) => {};

// Find all published Projects
exports.findAllPublished = (req, res) => {};
