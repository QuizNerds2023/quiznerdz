const deleteQuizAttempt = async (req, res) => {
  const { id } = req.params;
  const { Quiz_attempt } = req.db;

  const attempt = await Quiz_attempt.getById(id);

  if (!attempt) {
    res.status(404).send({ error: 'Quiz attempt not found' });
    return;
  }

  await attempt.delete();

  res.send({ message: 'Quiz attempt deleted successfully' });
};

module.exports = deleteQuizAttempt;
