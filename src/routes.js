const express = require("express");
const userController = require("./controllers/user");
const quizAttemptController = require("./controllers/quiz_attempt");
const quizController =  require("./controllers/quiz");
const reactionController =  require("./controllers/reaction");
const addModels = require("./middleware/add-models");
const checkAuthentication = require("./middleware/check-authentication");

const Router = express.Router();
Router.use(addModels);

Router.get("/cookieCounter", (req, res) => {
  const { session } = req;
  console.log(session);
  session.viewCount = (session.viewCount || 0) + 1;
  console.log(session.viewCount);
  res.status(200).send({ count: session.viewCount });
});

// Create
Router.post("/users", userController.create);
Router.post("/users/login", userController.login);
Router.post("/quiz_attempt/:id/submit", quizAttemptController.create);
Router.post("/quiz/:quiz_id/reaction")
router.post('/submit-results', quizController.submitQuizResults);

// Read
Router.get("/users", userController.list);
Router.get("/users/:id", userController.show);
Router.get("/me", userController.showMe);
Router.get("/quiz_attempt", quizAttemptController.list)
Router.get("/quiz_attempt/:id",quizAttemptController.list)
Router.get("/quiz",quizController.list)

// checkAuthentication middleware is applied to only to this route (and /logged-in-secret)
Router.get("/logged-in-secret", checkAuthentication, (req, res) => {
  res.send({ msg: "The secret is: there is no secret." });
});

// Update
Router.patch("/users/:id", checkAuthentication, userController.update);
Router.patch("/quiz_attempt/:id",quizAttemptController.update)

// Delete
Router.delete("/users/logout", userController.logout);
Router.delete("/quiz_attempt/:id", quizAttemptController.delete)

module.exports = Router;
