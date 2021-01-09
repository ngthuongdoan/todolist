module.exports = (app) => {
  const todo = require("../controllers/todo.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", todo.create);

  // Retrieve all todo
  router.get("/", todo.findAll);

  // Retrieve a single Tutorial with id
  router.get("/uid/:uid", todo.findOneWithUid);

  router.put("/:id", todo.update);

  router.put("/complete/:id", todo.updateComplete);
  // Delete a Tutorial with id
  router.delete("/:id", todo.delete);

  app.use("/todo", router);
};
