const updateQuizAttempt = async (req, res) => {
  const { Quiz_attempt } = req.db;
  const { id } = req.params;
  const { ben_score, carmen_score, motun_score, outcome, user_id, quiz_id } = req.body;
  const attempt = await Quiz_attempt.find(id);

  if (!attempt) return res.sendStatus(404);

  const updatedAttempt = await attempt.update({ ben_score, carmen_score, motun_score, outcome, user_id, quiz_id });

  res.send(updatedAttempt);
};

module.exports = updateQuizAttempt;
