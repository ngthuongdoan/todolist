module.exports = (app) => {
  const project = require("../controllers/project.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", project.create);

  // Retrieve all project
  router.get("/", project.findAll);

  // Retrieve a single Tutorial with id
  router.get("/uid/:uid", project.findOneWithUid);

  // Delete a Tutorial with id
  router.delete("/:id", project.delete);

  app.use("/project", router);
};
