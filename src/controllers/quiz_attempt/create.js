
const createAttempt = async (req, res) => {
  const {
    session,
    db: { Quiz_attempt },
    body: { id, ben_score,carmen_score, motun_score,outcome,quiz_id },
  } = req;

  const user_id = session.userId;
  const attempt = await Quiz_attempt.create({ id, ben_score,carmen_score, motun_score,outcome,user_id, quiz_id });

  res.send(attempt);
};

module.exports = createAttempt;

