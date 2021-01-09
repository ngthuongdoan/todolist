module.exports = (app) => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  router.post("/", user.create);
  router.post("/login", user.findOne);

  app.use("/user", router);
};
