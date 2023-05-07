const User = require("../db/models/user");
const Quiz_attempt = require("../db/models/quiz_attempt");
const Quiz = require("../db/models/quiz");
const Reaction = require("../db/models/reaction");

const addModels = (req, res, next) => {
  req.db = {
    User,
    Quiz_attempt,
    Quiz,
    Reaction
  };
  next();
};

module.exports = addModels;
