const db = require("../models");
const Todo = db.todo;

// Create and Save a new Todo
exports.create = (req, res) => {
  // Validate request
  // Create a Todo
  const todo = new Todo({
    content: req.body.content,
    project: req.body.project,
    expectedDay: req.body.expectedDay,
    isComplete: req.body.isComplete,
    isOverdue: req.body.isOverdue,
    uid: req.body.uid,
  });

  // Save todo in the database
  todo
    .save(todo)
    .then((data) => {
      res.status(200).send({ message: "Success" });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Todo.",
      });
    });
};

// Retrieve all Projects from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Todo.find(condition)
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

// Find a single Todo with an id
exports.findOneWithUid = (req, res) => {
  const uid = req.params.uid;

  Todo.find({ uid })
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Todo with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Todo with id=" + id });
    });
};

// Update a Todo by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  const todo = req.body;
  console.log(todo);
  Todo.updateOne({ _id: id }, { $set: todo })
    .then((data) => {
      if (!data) {
        res.status(404).send();
      } else {
        res.send({
          message: "Todo was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
};

// Update a Todo by the id in the request
exports.updateComplete = (req, res) => {
  const id = req.params.id;

  Todo.updateOne({ _id: id }, { $set: { isComplete: true } })
    .then((data) => {
      if (!data) {
        res.status(404).send();
      } else {
        res.send({
          message: "Todo was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
};

// Delete a Todo with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Todo.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send();
      } else {
        res.send({
          message: "Todo was deleted successfully!",
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
