const viewQuizAttempt = async (req, res) => {
  const { Quiz_attempt } = req.db;
  const attempt = await Quiz_attempt.list();
  res.send(attempt);
};

module.exports = viewQuizAttempt;

const viewQuizAttemptByID = async (req, res) => {
  const { Quiz_attempt } = req.db;
  const { id } = req.params;

  const attempt = await Quiz_attempt.getById(id);
  if (!attempt) {
    return res.status(404).send({ error: "Quiz attempt not found" });
  }

  res.send(attempt);
};

module.exports = viewQuizAttemptByID;
